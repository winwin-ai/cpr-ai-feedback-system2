import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import * as path from 'path';

// Cloudinary 설정
cloudinary.config({
  cloud_name: 'dn3cicucf',
  api_key: '824611141468424',
  api_secret: 'IE3Y5yvq1yPS0KssMktRmJicoZ0',
});

const DATA_DIR = '/Users/ieunho/Desktop/Data';

// 폴더와 public_id 매핑
const folderMappings: { [key: string]: string } = {
  '시나리오 1-1': 'cpr-videos/scenario1-1',
  '시나리오 1-2': 'cpr-videos/scenario1-2',
  '시나리오 2': 'cpr-videos/scenario2',
  '시나리오 3': 'cpr-videos/scenario3',
};

// 파일명 정규화 (한글 -> 영문)
function normalizeFileName(fileName: string): string {
  return fileName
    .replace('시나리오 ', 'S')
    .replace('_심정지 추가', '_cardiac_arrest')
    .replace('_정상호흡', '_normal_breathing')
    .replace('_자막X', '_no_subtitle')
    .replace('.mp4', '');
}

interface UploadResult {
  fileName: string;
  publicId: string;
  url: string;
  folder: string;
}

async function uploadVideo(filePath: string, folder: string): Promise<UploadResult | null> {
  const fileName = path.basename(filePath);
  const publicId = normalizeFileName(fileName);
  
  try {
    console.log(`📤 업로드 중: ${fileName} (${(fs.statSync(filePath).size / 1024 / 1024).toFixed(2)} MB)`);
    
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
      public_id: publicId,
      resource_type: 'video',
      overwrite: true,
      // 1080p 스트리밍 최적화
      transformation: [
        {
          width: 1920,
          height: 1080,
          crop: 'limit',
          quality: 'auto:good',
        }
      ],
    });
    
    console.log(`✅ 완료: ${fileName} → ${result.secure_url}`);
    return {
      fileName,
      publicId: `${folder}/${publicId}`,
      url: result.secure_url,
      folder,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`❌ 실패: ${fileName} - ${error.message}`);
      console.error(`   Stack: ${error.stack}`);
    } else {
      console.error(`❌ 실패: ${fileName} - ${JSON.stringify(error)}`);
    }
    return null;
  }
}

async function main() {
  console.log('🚀 영상 업로드 시작\n');
  
  const allResults: UploadResult[] = [];
  let totalSuccess = 0;
  let totalFailed = 0;
  
  for (const [folderName, cloudinaryFolder] of Object.entries(folderMappings)) {
    const folderPath = path.join(DATA_DIR, folderName);
    
    if (!fs.existsSync(folderPath)) {
      console.log(`⚠️ 폴더 없음: ${folderPath}`);
      continue;
    }
    
    console.log(`\n📁 ${folderName} 처리 중...`);
    
    const files = fs.readdirSync(folderPath)
      .filter(f => f.endsWith('.mp4'))
      .sort();
    
    console.log(`   총 ${files.length}개 파일 발견`);
    
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const result = await uploadVideo(filePath, cloudinaryFolder);
      
      if (result) {
        allResults.push(result);
        totalSuccess++;
      } else {
        totalFailed++;
      }
      
      // Rate limiting 방지를 위한 딜레이
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 업로드 완료: 성공 ${totalSuccess}개, 실패 ${totalFailed}개`);
  console.log(`${'='.repeat(60)}\n`);
  
  // 결과를 JSON 파일로 저장
  const resultsPath = path.join(__dirname, 'upload-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(allResults, null, 2));
  console.log(`📄 결과 저장: ${resultsPath}`);
  
  // 매핑 테이블 출력
  console.log('\n📋 업로드된 영상 URL 목록:');
  for (const result of allResults) {
    console.log(`   ${result.fileName}: ${result.url}`);
  }
}

main().catch(console.error);
