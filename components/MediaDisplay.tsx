import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getVideoFromDB } from "../utils/videoStorage";
import { Play, Pause, Volume2, VolumeX, RefreshCw, Loader2 } from "lucide-react";

interface MediaDisplayProps {
  type: "video" | "image";
  prompt?: string;
  isCorrectAction?: boolean;
  localVideoFilename?: string;
  videoSrc?: string; // Direct URL/Path
  cacheKey?: string; // Unique key for storage (e.g., "s1_q1_scn")
  onVideoEnded?: () => void;
  onError?: () => void;
  autoLoop?: boolean; // Controls looping
  autoPlay?: boolean; // Controls initial playback
}

export const MediaDisplay: React.FC<MediaDisplayProps> = ({
  cacheKey,
  localVideoFilename,
  videoSrc,
  onVideoEnded,
  onError,
  autoLoop = true,
  autoPlay = true,
}) => {
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(
    null
  );
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay compatibility
  const [isLoading, setIsLoading] = useState(true);
  const [isStalled, setIsStalled] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const videoRef = React.useRef<HTMLVideoElement>(null);
  const stallTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch((e) => console.log("Playback failed", e));
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Reload video
  const reloadVideo = () => {
    setIsStalled(false);
    setIsLoading(true);
    setReloadKey((prev) => prev + 1);

    // Also try to reload via video element
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((e) => console.log("Reload play failed", e));
    }
  };

  // Clear stall timeout helper
  const clearStallTimeout = () => {
    if (stallTimeoutRef.current) {
      clearTimeout(stallTimeoutRef.current);
      stallTimeoutRef.current = null;
    }
  };

  // Start stall timeout (10 seconds)
  const startStallTimeout = () => {
    clearStallTimeout();
    stallTimeoutRef.current = setTimeout(() => {
      setIsStalled(true);
    }, 10000);
  };

  // Sync isPlaying state with video events and handle loading/stall detection
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
      setIsStalled(false);
      clearStallTimeout();
    };
    const handlePause = () => setIsPlaying(false);
    const handleCanPlay = () => {
      setIsLoading(false);
      setIsStalled(false);
      clearStallTimeout();
    };
    const handleWaiting = () => {
      setIsLoading(true);
      startStallTimeout();
    };
    const handlePlaying = () => {
      setIsLoading(false);
      setIsStalled(false);
      clearStallTimeout();
    };
    const handleStalled = () => {
      startStallTimeout();
    };
    const handleLoadStart = () => {
      setIsLoading(true);
      setIsStalled(false);
      startStallTimeout();
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("stalled", handleStalled);
    video.addEventListener("loadstart", handleLoadStart);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("stalled", handleStalled);
      video.removeEventListener("loadstart", handleLoadStart);
      clearStallTimeout();
    };
  }, [videoSrc, localVideoUrl, generatedVideoUrl, reloadKey]);

  // Handle autoPlay changes
  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current
        .play()
        .catch((e) => console.log("Playback failed/prevented", e));
    }
  }, [autoPlay, videoSrc, localVideoUrl, generatedVideoUrl]);

  // Check for local video file
  useEffect(() => {
    const checkLocalVideo = async () => {
      if (!localVideoFilename) {
        setLocalVideoUrl(null);
        return;
      }

      try {
        const videoPath = `/videos/${localVideoFilename}`;
        const response = await fetch(videoPath, { method: "HEAD" });
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

  // Use cacheKey if provided, otherwise null (we removed prompt dependency)
  const storageKey = cacheKey;

  // Restore video from DB on key change
  useEffect(() => {
    // If we have a direct video source or local video file, we don't need to check DB
    if (videoSrc || localVideoUrl || !storageKey) {
      return;
    }

    let isActive = true;
    let objectUrl: string | null = null;

    const loadFromCache = async () => {
      setGeneratedVideoUrl(null);

      try {
        const cachedBlob = await getVideoFromDB(storageKey);
        if (isActive && cachedBlob) {
          objectUrl = URL.createObjectURL(cachedBlob);
          setGeneratedVideoUrl(objectUrl);
        }
      } catch (err) {
        console.error("Cache restoration failed:", err);
      }
    };

    loadFromCache();

    return () => {
      isActive = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [storageKey, localVideoUrl, videoSrc]);

  // Fixed placeholder for fallback
  const placeholderUrl = "https://picsum.photos/seed/cpr-fallback/1280/720";

  return (
    <div className="w-full h-full bg-black relative overflow-hidden group">
      {videoSrc ? (
        <video
          ref={videoRef}
          key={`${videoSrc}-${reloadKey}`} // Force re-render on src change or reload
          src={videoSrc}
          autoPlay={autoPlay}
          loop={autoLoop}
          muted={true}
          onEnded={onVideoEnded}
          onError={onError}
          playsInline
          className="w-full h-full object-contain"
          style={{ objectFit: "contain" }}
        />
      ) : localVideoUrl ? (
        <video
          ref={videoRef}
          src={localVideoUrl}
          autoPlay={autoPlay}
          loop={autoLoop}
          muted={true}
          onEnded={onVideoEnded}
          onError={onError}
          playsInline
          className="w-full h-full object-contain"
          style={{ objectFit: "contain" }}
        />
      ) : generatedVideoUrl ? (
        <video
          ref={videoRef}
          src={generatedVideoUrl}
          autoPlay={autoPlay}
          loop={autoLoop}
          muted={true}
          onEnded={onVideoEnded}
          onError={onError}
          playsInline
          className="w-full h-full object-contain"
          style={{ objectFit: "contain" }}
        />
      ) : (
        <Image
          src={placeholderUrl}
          alt="Media placeholder"
          fill
          unoptimized
          className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
        />
      )}

      {/* Grid Overlay for "Blueprint" feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Video Control Buttons - Right Side Center */}
      {(videoSrc || localVideoUrl || generatedVideoUrl) && (
        <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="w-10 h-12 sm:w-12 sm:h-14
                       bg-black/50 hover:bg-black/70
                       backdrop-blur-sm rounded-lg
                       flex items-center justify-center
                       transition-all duration-200
                       border border-white/20 hover:border-white/40
                       shadow-lg hover:shadow-xl
                       group"
            aria-label={isPlaying ? "일시 중지" : "재생"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform ml-0.5" />
            )}
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="w-10 h-12 sm:w-12 sm:h-14
                       bg-black/50 hover:bg-black/70
                       backdrop-blur-sm rounded-lg
                       flex items-center justify-center
                       transition-all duration-200
                       border border-white/20 hover:border-white/40
                       shadow-lg hover:shadow-xl
                       group"
            aria-label={isMuted ? "소리 켜기" : "소리 끄기"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 group-hover:scale-110 transition-transform" />
            ) : (
              <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            )}
          </button>

          {/* Reload Button - Shows when stalled or always available */}
          <button
            onClick={reloadVideo}
            className={`w-10 h-12 sm:w-12 sm:h-14
                       backdrop-blur-sm rounded-lg
                       flex items-center justify-center
                       transition-all duration-200
                       border shadow-lg hover:shadow-xl
                       group
                       ${isStalled
                         ? "bg-red-500/70 hover:bg-red-500/90 border-red-400 animate-pulse"
                         : "bg-black/50 hover:bg-black/70 border-white/20 hover:border-white/40"
                       }`}
            aria-label="영상 다시 로드"
          >
            {isLoading && !isStalled ? (
              <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-spin" />
            ) : (
              <RefreshCw className={`w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform ${isStalled ? "text-white" : "text-white"}`} />
            )}
          </button>
        </div>
      )}
    </div>
  );
};
