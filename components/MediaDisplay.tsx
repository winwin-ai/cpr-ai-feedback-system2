import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getVideoFromDB } from "../utils/videoStorage";

interface MediaDisplayProps {
  type: "video" | "image";
  prompt: string;
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

  const videoRef = React.useRef<HTMLVideoElement>(null);

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
          key={videoSrc} // Force re-render on src change
          src={videoSrc}
          autoPlay={autoPlay}
          loop={autoLoop}
          muted={false}
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
          muted={false}
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
          muted={false}
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
    </div>
  );
};
