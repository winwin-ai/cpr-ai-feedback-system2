import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import * as path from 'path';

// Cloudinary 설정
cloudinary.config({
  cloud_name: 'dn3cicucf',
  api_key: '824611141468424',
  api_secret: 'IE3Y5yvq1yPS0KssMktRmJicoZ0',
});

const VIDEOS_DIR = './public/videos';

async function migrate() {
  const files = fs.readdirSync(VIDEOS_DIR).filter(f => !f.startsWith('.'));
  
  console.log(`📁 총 ${files.length}개 파일 발견\n`);
  
  let success = 0;
  let failed = 0;
  
  for (const file of files) {
    const filePath = path.join(VIDEOS_DIR, file);
    const publicId = path.parse(file).name;
    const ext = path.parse(file).ext.toLowerCase();
    
    // 리소스 타입 결정
    let resourceType: 'image' | 'video' | 'raw' = 'image';
    if (['.mp4', '.webm', '.ogg', '.mov'].includes(ext)) {
      resourceType = 'video';
    }
    
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'cpr-videos',
        public_id: publicId,
        resource_type: resourceType,
        overwrite: true,
      });
      console.log(`✅ ${file} → ${result.secure_url}`);
      success++;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`❌ ${file} 실패: ${errorMessage}`);
      failed++;
    }
  }
  
  console.log(`\n📊 결과: 성공 ${success}개, 실패 ${failed}개`);
}

migrate();
