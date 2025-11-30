import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { writeFile } from 'fs/promises';

const UPLOAD_DIR = path.join(process.cwd(), 'public/videos');

// Ensure directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export async function GET() {
  try {
    const files = fs.readdirSync(UPLOAD_DIR);
    // Filter only video files if needed, or just return all
    const videoFiles = files.filter(file =>
      file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.ogg')
    );

    return NextResponse.json({ files: videoFiles });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to list videos' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const key = formData.get('key') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    // Sanitize filename: use key if provided, else original name.
    // Ensure extension matches or append .mp4 if missing/unknown
    let filename = key || file.name;
    if (!filename.includes('.')) {
        filename += '.mp4';
    }

    // Prevent directory traversal
    filename = path.basename(filename);

    const filepath = path.join(UPLOAD_DIR, filename);

    await writeFile(filepath, buffer);

    return NextResponse.json({ success: true, filename });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
