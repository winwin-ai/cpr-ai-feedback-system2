import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import * as path from 'path';

// Cloudinary 설정
cloudinary.config({
  cloud_name: 'dn3cicucf',
  api_key: '824611141468424',
  api_secret: 'IE3Y5yvq1yPS0KssMktRmJicoZ0',
});

const CONVERTED_DIR = '/Users/ieunho/Desktop/Data/converted';
const CLOUDINARY_FOLDER = 'cpr-videos';

interface UploadResult {
  fileName: string;
  publicId: string;
  url: string;
}

async function uploadVideo(filePath: string): Promise<UploadResult | null> {
  const fileName = path.basename(filePath);
  const publicId = path.parse(fileName).name; // 확장자 제외한 파일명
  
  try {
    const fileSize = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2);
    console.log(`📤 업로드 중: ${fileName} (${fileSize} MB)`);
    
    const result = await cloudinary.uploader.upload(filePath, {
      folder: CLOUDINARY_FOLDER,
      public_id: publicId,
      resource_type: 'video',
      overwrite: true,
    });
    
    console.log(`✅ 완료: ${result.secure_url}\n`);
    return {
      fileName,
      publicId: `${CLOUDINARY_FOLDER}/${publicId}`,
      url: result.secure_url,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`❌ 실패: ${fileName}`);
      console.error(`   ${error.message}\n`);
    }
    return null;
  }
}

async function main() {
  console.log('🚀 Cloudinary 업로드 시작\n');
  
  if (!fs.existsSync(CONVERTED_DIR)) {
    console.error(`❌ 변환된 파일 폴더가 없습니다: ${CONVERTED_DIR}`);
    console.log('먼저 convert-videos-with-mapping.ts 스크립트를 실행하세요.');
    return;
  }
  
  const files = fs.readdirSync(CONVERTED_DIR)
    .filter(f => f.endsWith('.mp4'))
    .sort();
  
  console.log(`📁 총 ${files.length}개 파일 발견\n`);
  
  const results: UploadResult[] = [];
  let success = 0;
  let failed = 0;
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(CONVERTED_DIR, file);
    
    console.log(`[${i + 1}/${files.length}]`);
    const result = await uploadVideo(filePath);
    
    if (result) {
      results.push(result);
      success++;
    } else {
      failed++;
    }
    
    // Rate limiting 방지
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 업로드 완료: 성공 ${success}개, 실패 ${failed}개`);
  console.log(`${'='.repeat(60)}\n`);
  
  // 결과를 JSON 파일로 저장
  const resultsPath = path.join(__dirname, 'upload-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`📄 결과 저장: ${resultsPath}`);
  
  // URL 매핑 테이블 출력 (코드에서 사용할 수 있는 형태)
  console.log('\n📋 업로드된 영상 URL 매핑 (TypeScript 객체):');
  console.log('const VIDEO_URLS = {');
  for (const result of results) {
    const key = path.parse(result.fileName).name;
    console.log(`  "${key}": "${result.url}",`);
  }
  console.log('};');
}

main().catch(console.error);
