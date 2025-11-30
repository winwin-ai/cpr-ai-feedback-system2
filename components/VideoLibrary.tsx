
import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, Download, Trash2, Play, Film, AlertCircle, Upload } from 'lucide-react';
import { getAllVideosFromDB, deleteVideoFromDB, saveVideoToDB, StoredVideo } from '../utils/videoStorage';

interface VideoLibraryProps {
  onBack: () => void;
}

export const VideoLibrary: React.FC<VideoLibraryProps> = ({ onBack }) => {
  const [videos, setVideos] = useState<StoredVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<{ url: string; title: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    setIsLoading(true);
    const data = await getAllVideosFromDB();
    setVideos(data);
    setIsLoading(false);
  };

  const handleDelete = async (key: string) => {
    if (confirm('Are you sure you want to delete this video?')) {
      await deleteVideoFromDB(key);
      await loadVideos();
    }
  };

  const handleDownload = (video: StoredVideo) => {
    const url = URL.createObjectURL(video.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${video.key}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePlay = (video: StoredVideo) => {
    const url = URL.createObjectURL(video.blob);
    setPlayingVideo({ url, title: formatTitle(video.key) });
  };

  const closePlayer = () => {
    if (playingVideo) {
      URL.revokeObjectURL(playingVideo.url);
      setPlayingVideo(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsLoading(true);
      // Use filename without extension as key
      const key = file.name.replace(/\.[^/.]+$/, "");
      await saveVideoToDB(key, file);
      await loadVideos();
    } catch (error) {
      console.error("Upload failed", error);
      alert("Failed to upload video.");
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  // Helper to make "s1_q1_scn" readable -> "Session 1 / Q1 Context"
  const formatTitle = (key: string) => {
    const parts = key.split('_');
    if (parts.length < 3) return key;
    const session = parts[0].replace('s', 'Session ');
    const question = parts[1].replace('q', 'Question ');
    const type = parts[2] === 'ans' ? 'Correct Action' : 'Scenario Context';
    return `${session} | ${question} - ${type}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-slate-700" />
          </button>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Video Library</h2>
            <p className="text-slate-500">Manage your generated AI training materials.</p>
          </div>
        </div>

        <div>
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="video/mp4,video/webm,video/ogg"
            onChange={handleFileChange}
          />
          <button 
            onClick={handleUploadClick}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md font-bold text-sm"
          >
            <Upload size={18} />
            Upload Video
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : videos.length === 0 ? (
        <div className="text-center py-20 bg-slate-100 rounded-2xl border border-dashed border-slate-300">
          <Film className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-400">No Videos Saved Yet</h3>
          <p className="text-slate-500 mt-2">Generate videos in the training sessions or upload your own.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.key} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition-shadow">
              <div className="relative aspect-video bg-black">
                <video 
                  src={URL.createObjectURL(video.blob)} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                   <button 
                    onClick={() => handlePlay(video)}
                    className="p-3 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md text-white border border-white/50 transition-transform hover:scale-110"
                   >
                     <Play fill="currentColor" size={24} />
                   </button>
                </div>
                <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">
                  MP4
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1 truncate">{formatTitle(video.key)}</h3>
                <p className="text-xs text-slate-400 font-mono mb-4 truncate">{video.key}</p>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleDownload(video)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Download size={14} /> Download
                  </button>
                  <button 
                    onClick={() => handleDelete(video.key)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete Video"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video Player Modal */}
      {playingVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-black rounded-xl overflow-hidden relative shadow-2xl border border-white/10">
            <div className="p-4 flex items-center justify-between absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent">
               <h3 className="text-white font-bold">{playingVideo.title}</h3>
               <button onClick={closePlayer} className="text-white hover:text-gray-300">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               </button>
            </div>
            <video 
              src={playingVideo.url} 
              controls 
              autoPlay 
              className="w-full max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
