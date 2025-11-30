
export interface StoredVideo {
  key: string;
  blob: Blob;
}

// Helper to get full URL
const getVideoUrl = (filename: string) => `/videos/${filename}`;

export const getVideoFromDB = async (key: string): Promise<Blob | null> => {
  try {
    // Check if file exists by trying to fetch it
    // We assume key is the filename without extension or with extension
    let filename = key;
    if (!filename.includes('.')) filename += '.mp4';

    const response = await fetch(getVideoUrl(filename));
    if (!response.ok) return null;

    return await response.blob();
  } catch (e) {
    console.error("Fetch video error:", e);
    return null;
  }
};

export const saveVideoToDB = async (key: string, blob: Blob): Promise<void> => {
  try {
    const formData = new FormData();
    // Ensure filename has extension
    let filename = key;
    if (!filename.includes('.')) filename += '.mp4';

    formData.append('file', blob, filename);
    formData.append('key', filename);

    const response = await fetch('/api/videos', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }
  } catch (e) {
    console.error("Save video error:", e);
    throw e;
  }
};

export const getAllVideosFromDB = async (): Promise<StoredVideo[]> => {
  try {
    const response = await fetch('/api/videos');
    if (!response.ok) return [];

    const data = await response.json();
    const files = data.files as string[];

    // Fetch all blobs to maintain interface compatibility
    // Note: In a real large app, we wouldn't fetch all blobs at once,
    // but for this migration we keep the signature.
    // Optimization: We could change StoredVideo to just have URL, but that requires changing UI.
    // For now, let's fetch blobs to keep UI changes minimal, or better yet,
    // let's update StoredVideo to allow URL usage directly if possible.
    // But to stick to the interface:

    const videos: StoredVideo[] = [];
    await Promise.all(files.map(async (filename) => {
        const blob = await getVideoFromDB(filename);
        if (blob) {
            // Remove extension for key to match previous behavior if needed,
            // or just use filename as key. Let's use filename as key.
            videos.push({ key: filename, blob });
        }
    }));

    return videos;
  } catch (e) {
    console.error("List videos error:", e);
    return [];
  }
};

export const deleteVideoFromDB = async (key: string): Promise<void> => {
  try {
    let filename = key;
    if (!filename.includes('.')) filename += '.mp4';

    const response = await fetch(`/api/videos/${filename}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Delete failed');
    }
  } catch (e) {
    console.error("Delete video error:", e);
    throw e;
  }
};
