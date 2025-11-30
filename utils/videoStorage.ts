
const DB_NAME = 'CPR_Training_DB';
const STORE_NAME = 'videos';
const DB_VERSION = 1;

export interface StoredVideo {
  key: string;
  blob: Blob;
}

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

export const getVideoFromDB = async (key: string): Promise<Blob | null> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onerror = () => resolve(null);
      request.onsuccess = () => resolve(request.result || null);
    });
  } catch (e) {
    console.warn("IndexedDB read warning:", e);
    return null;
  }
};

export const saveVideoToDB = async (key: string, blob: Blob): Promise<void> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(blob, key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  } catch (e) {
    console.error("IndexedDB write error:", e);
    throw e;
  }
};

export const getAllVideosFromDB = async (): Promise<StoredVideo[]> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAllKeys();
      
      request.onsuccess = async () => {
        const keys = request.result as string[];
        const videos: StoredVideo[] = [];
        
        // We fetch blobs one by one or we could use openCursor. 
        // For simplicity and to allow parallel fetching:
        const promises = keys.map(async (key) => {
            const blob = await getVideoFromDB(key);
            if (blob) videos.push({ key, blob });
        });
        
        await Promise.all(promises);
        resolve(videos);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    console.error("IndexedDB list error:", e);
    return [];
  }
};

export const deleteVideoFromDB = async (key: string): Promise<void> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  } catch (e) {
    console.error("IndexedDB delete error:", e);
    throw e;
  }
};
