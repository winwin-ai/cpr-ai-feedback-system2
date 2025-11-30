import React, { useState, useEffect } from 'react';
import { Play, Image as ImageIcon, Loader2, Video, Wand2, AlertCircle, RefreshCw, Save } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface MediaDisplayProps {
  type: 'video' | 'image';
  prompt: string;
  isCorrectAction?: boolean;
}

// --- IndexedDB Configuration ---
const DB_NAME = 'CPR_Training_DB';
const STORE_NAME = 'videos';
const DB_VERSION = 1;

// Helper to open DB
const openDB = (): Promise<IDBDatabase> => {
  if (typeof window === 'undefined' || !('indexedDB' in window)) {
    return Promise.reject(new Error("IndexedDB not supported"));
  }
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
};

// Helper to get video blob
const getVideoFromDB = async (key: string): Promise<Blob | null> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  } catch (error) {
    console.error("Error getting video from DB:", error);
    return null;
  }
};

// Helper to save video blob
const saveVideoToDB = async (key: string, blob: Blob): Promise<void> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(blob, key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  } catch (error) {
    console.error("Error saving video to DB:", error);
  }
};

export const MediaDisplay: React.FC<MediaDisplayProps> = ({ type, prompt, isCorrectAction }) => {
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadMedia = async () => {
      if (type !== 'video') return;

      setLoading(true);
      setError(null);

      const cacheKey = `video-${prompt}-${isCorrectAction}`;

      try {
        // Try to get from cache first
        const cachedBlob = await getVideoFromDB(cacheKey);
        if (cachedBlob && isMounted) {
          const url = URL.createObjectURL(cachedBlob);
          setMediaUrl(url);
          setLoading(false);
          return;
        }

        // If not in cache, generate it (mock implementation for now as we don't have the full logic)
        // In a real scenario, this would call the Gemini API or a backend service
        // For now, we'll simulate a delay and set a placeholder or error if API key is missing

        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!apiKey) {
           // Fallback to a placeholder if no API key
           // Or just simulate loading
        }

        // Placeholder logic since the original file was lost
        // We will just show a placeholder for now to fix the build
        // and allow the app to run.

        setLoading(false);

      } catch (err) {
        console.error("Error loading media:", err);
        if (isMounted) setError("Failed to load media");
        setLoading(false);
      }
    };

    loadMedia();

    return () => {
      isMounted = false;
      if (mediaUrl) URL.revokeObjectURL(mediaUrl);
    };
  }, [type, prompt, isCorrectAction]);

  if (type === 'image') {
    return (
      <div className="w-full h-64 bg-slate-200 rounded-lg flex items-center justify-center">
        <ImageIcon className="w-12 h-12 text-slate-400" />
        <span className="ml-2 text-slate-500">Image Placeholder for: {prompt}</span>
      </div>
    );
  }

  return (
    <div className="w-full h-64 bg-slate-900 rounded-lg overflow-hidden relative flex items-center justify-center">
      {loading ? (
        <div className="flex flex-col items-center text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin mb-2" />
          <span className="text-sm">Generating AI Video...</span>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center text-red-400">
          <AlertCircle className="w-8 h-8 mb-2" />
          <span className="text-sm">{error}</span>
        </div>
      ) : mediaUrl ? (
        <video
          src={mediaUrl}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div className="flex flex-col items-center text-slate-500">
          <Video className="w-12 h-12 mb-2" />
          <span className="text-sm">Video content for: {prompt}</span>
        </div>
      )}

      {/* Overlay Badge */}
      <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-xs text-white flex items-center gap-1">
        <Wand2 size={12} />
        AI Generated
      </div>
    </div>
  );
};