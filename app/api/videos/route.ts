import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function GET() {
  try {
    // Cloudinary에서 비디오 목록 조회
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'cpr-videos/',
      resource_type: 'video',
      max_results: 100,
    });

    const files = result.resources.map((r: { public_id: string; secure_url: string; format: string }) => ({
      publicId: r.public_id,
      url: r.secure_url,
      filename: r.public_id.replace('cpr-videos/', '') + '.' + r.format,
    }));

    return NextResponse.json({ files });
  } catch (error) {
    console.error('Cloudinary error:', error);
    return NextResponse.json({ error: 'Failed to list videos' }, { status: 500 });
  }
}
