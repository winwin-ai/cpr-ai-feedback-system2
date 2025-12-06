import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import * as path from 'path';

cloudinary.config({
  cloud_name: 'dn3cicucf',
  api_key: '824611141468424',
  api_secret: 'IE3Y5yvq1yPS0KssMktRmJicoZ0',
});

const UPLOAD_DIR = '/Users/ieunho/Desktop/CPR_Video';

async function upload() {
  const files = fs.readdirSync(UPLOAD_DIR).filter(f => 
    !f.startsWith('.') && (f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.mp4'))
  );
  
  console.log('📁 총 ' + files.length + '개 파일 발견\n');
  
  let success = 0;
  let failed = 0;
  
  for (const file of files) {
    const filePath = path.join(UPLOAD_DIR, file);
    const publicId = path.parse(file).name;
    const ext = path.parse(file).ext.toLowerCase();
    
    const isVideo = ['.mp4', '.webm', '.ogg', '.mov'].includes(ext);
    const resourceType: 'image' | 'video' = isVideo ? 'video' : 'image';
    
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'cpr-videos',
        public_id: publicId,
        resource_type: resourceType,
        overwrite: true,
      });
      console.log('✅ ' + file + ' → ' + result.secure_url);
      success++;
    } catch (error: any) {
      console.error('❌ ' + file + ' 실패: ' + error.message);
      failed++;
    }
  }
  
  console.log('\n📊 결과: 성공 ' + success + '개, 실패 ' + failed + '개');
}

upload();
