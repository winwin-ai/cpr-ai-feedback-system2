
import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Loader2, Video, Wand2, AlertCircle, RefreshCw, Save, Download } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { getVideoFromDB, saveVideoToDB } from '../utils/videoStorage';

interface MediaDisplayProps {
  type: 'video' | 'image';
  prompt: string;
  isCorrectAction?: boolean;
  localVideoFilename?: string;
  cacheKey?: string; // Unique key for storage (e.g., "s1_q1_scn")
}

export const MediaDisplay: React.FC<MediaDisplayProps> = ({ type, prompt, isCorrectAction, cacheKey, localVideoFilename }) => {
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isCheckingDB, setIsCheckingDB] = useState(true);
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null);

  // Check for local video file
  useEffect(() => {
    const checkLocalVideo = async () => {
      if (!localVideoFilename) {
        setLocalVideoUrl(null);
        return;
      }

      try {
        const videoPath = `/videos/${localVideoFilename}`;
        const response = await fetch(videoPath, { method: 'HEAD' });
        if (response.ok) {
          setLocalVideoUrl(videoPath);
        } else {
          setLocalVideoUrl(null);
        }
      } catch (err) {
        console.error("Error checking local video:", err);
        setLocalVideoUrl(null);
      }
    };

    checkLocalVideo();
  }, [localVideoFilename]);

  // Use cacheKey if provided, otherwise fallback to prompt
  const storageKey = cacheKey || prompt;

  // Restore video from DB on prompt/key change
  useEffect(() => {
    // If we have a local video, we don't need to check DB
    if (localVideoUrl) {
      setIsCheckingDB(false);
      return;
    }

    let isActive = true;
    let objectUrl: string | null = null;

    const loadFromCache = async () => {
      setIsCheckingDB(true);
      setGeneratedVideoUrl(null);
      setVideoBlob(null);
      setError(null);

      try {
        const cachedBlob = await getVideoFromDB(storageKey);
        if (isActive && cachedBlob) {
          objectUrl = URL.createObjectURL(cachedBlob);
          setGeneratedVideoUrl(objectUrl);
          setVideoBlob(cachedBlob);
        }
      } catch (err) {
        console.error("Cache restoration failed:", err);
      } finally {
        if (isActive) setIsCheckingDB(false);
      }
    };

    loadFromCache();

    return () => {
      isActive = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [storageKey, localVideoUrl]);

  const handleGenerateVideo = async () => {
    setError(null);

    try {
      // Check for API Key in environment variables
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

      if (!apiKey) {
         // Fallback to window.aistudio if available (for backward compatibility or specific envs)
         if (window.aistudio) {
            const hasKey = await window.aistudio.hasSelectedApiKey();
            if (!hasKey) {
              await window.aistudio.openSelectKey();
            }
         } else {
            throw new Error("API Key not found. Please set NEXT_PUBLIC_GEMINI_API_KEY in .env.local");
         }
      }

      setIsGenerating(true);
      setGenerationProgress('Initializing Veo model...');

      // 2. Initialize Client
      // Use the found apiKey or let the SDK handle it if it was set via other means (though SDK usually needs it passed)
      // If we are here, we either have apiKey or window.aistudio handled it (but standard SDK needs key)

      const effectiveKey = apiKey || process.env.API_KEY; // Fallback

      if (!effectiveKey && !window.aistudio) {
         throw new Error("No API Key available");
      }

      const ai = new GoogleGenAI({ apiKey: effectiveKey });

      setGenerationProgress('Requesting video generation (Veo 3.1)...');

      // 3. Call Generate Videos
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt + " The actors are Korean.",
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      // 4. Polling Loop
      setGenerationProgress('Generating... (this may take a minute)');
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
        setGenerationProgress('Rendering frames...');
      }

      if (operation.response?.generatedVideos?.[0]?.video?.uri) {
        const downloadLink = operation.response.generatedVideos[0].video.uri;
        setGenerationProgress('Downloading and saving...');

        // 5. Fetch content
        // Note: The download link might require the API key appended if it's not a public URL
        const fetchUrl = effectiveKey ? `${downloadLink}&key=${effectiveKey}` : downloadLink;

        const response = await fetch(fetchUrl);
        if (!response.ok) {
           throw new Error(`Download failed: ${response.statusText}`);
        }

        const blob = await response.blob();

        // 6. Save to DB for persistence
        await saveVideoToDB(storageKey, blob);

        // 7. Display
        const videoUrl = URL.createObjectURL(blob);
        setGeneratedVideoUrl(videoUrl);
        setVideoBlob(blob);
      } else {
        throw new Error('No video URI in response');
      }

    } catch (err: any) {
      console.error("Video generation failed:", err);
      let errorMessage = err.message || 'Generation failed';

      // Specific Error Handling
      if (errorMessage.includes('404') || errorMessage.includes('Requested entity was not found')) {
         errorMessage = "API Key Error: Project not found or invalid key.";
      } else if (errorMessage.includes('429') || errorMessage.includes('quota') || errorMessage.includes('RESOURCE_EXHAUSTED')) {
         errorMessage = "Quota Exceeded: Veo generation limit reached. Please wait a moment or check your billing plan.";
      }

      setError(errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (videoBlob) {
      const url = URL.createObjectURL(videoBlob);
      const a = document.createElement('a');
      a.href = url;
      // Use cacheKey as filename if available, otherwise default
      const filename = cacheKey ? `${cacheKey}.mp4` : `generated_video_${Date.now()}.mp4`;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const placeholderUrl = `https://picsum.photos/seed/${encodeURIComponent(prompt)}/1280/720`;

  return (
    <div className="w-full h-full bg-black relative overflow-hidden group">

      {localVideoUrl ? (
        <video
          src={localVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : generatedVideoUrl ? (
        <video
          src={generatedVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={placeholderUrl}
          alt={prompt}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
        />
      )}

      {/* Overlay UI */}
      {!generatedVideoUrl && !isGenerating && !error && !isCheckingDB && !localVideoUrl && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="mb-6 flex gap-4">
             <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
               {type === 'video' ? <Video className="w-8 h-8 text-white/80" /> : <ImageIcon className="w-8 h-8 text-white/80" />}
             </div>
          </div>

          <div className="bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl max-w-2xl text-center border border-white/10 mb-6">
            <p className="text-xs text-blue-400 font-bold uppercase mb-2 tracking-wider">
              {isCorrectAction ? 'CORRECT ACTION SCENARIO' : 'SCENARIO CONTEXT'}
            </p>
            <p className="text-white text-sm font-medium leading-relaxed opacity-90">"{prompt}"</p>
          </div>

          <button
            onClick={handleGenerateVideo}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg shadow-blue-900/50 transition-all hover:scale-105 active:scale-95"
          >
            <Wand2 size={18} />
            Generate with Veo AI
          </button>
        </div>
      )}

      {/* Checking DB State */}
      {isCheckingDB && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm z-20">
          <Loader2 className="w-8 h-8 text-white/50 animate-spin" />
        </div>
      )}

      {/* Error State */}
      {error && !isGenerating && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md z-30 p-8 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-white font-bold text-lg mb-2">Generation Failed</h3>
          <p className="text-red-300 text-sm mb-6 max-w-md">{error}</p>

          <button
            onClick={handleGenerateVideo}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full font-semibold transition-all"
          >
            <RefreshCw size={16} /> Retry Generation
          </button>
        </div>
      )}

      {/* Loading State */}
      {isGenerating && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
          <p className="text-blue-400 font-bold text-lg animate-pulse">{generationProgress}</p>
          <p className="text-slate-500 text-xs mt-2">Generating 720p Video (Veo 3)</p>
        </div>
      )}

      {/* Status Indicator & Download Controls */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">

        {/* Download Button (Only visible if video exists) */}
        {generatedVideoUrl && !isGenerating && (
          <button
            onClick={handleDownload}
            title="Download Video to Disk"
            className="bg-black/50 hover:bg-blue-600 p-2 rounded-full backdrop-blur-sm text-white transition-colors"
          >
            <Download size={16} />
          </button>
        )}

        <div className="flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
          <div className={`w-2.5 h-2.5 rounded-full ${isGenerating ? 'bg-yellow-500' : (error ? 'bg-red-500' : 'bg-green-500')} animate-pulse`}></div>
          <span className="text-xs font-mono text-white">
            {isGenerating ? 'GENERATING...' : (error ? 'ERROR' : (generatedVideoUrl ? 'SAVED' : 'PREVIEW'))}
          </span>
        </div>
      </div>

      {/* Grid Overlay for "Blueprint" feel */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>
    </div>
  );
};
