import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const DATA_DIR = '/Users/ieunho/Desktop/Data';
const OUTPUT_DIR = '/Users/ieunho/Desktop/Data/converted';

// 원본 영상 파일 -> 질문 ID 매핑
// 문서 분석 기반으로 매핑
const videoMappings: { [key: string]: { folder: string; originalFile: string; questionId: string; type: 'question' | 'answer' }[] } = {
  // ===== 시나리오 1-1 (시나리오 1: 간호사1 역할) =====
  '시나리오 1-1': [
    { folder: '시나리오 1-1', originalFile: '시나리오 1_1.mp4', questionId: 'q1010', type: 'question' },
    { folder: '시나리오 1-1', originalFile: '시나리오 1_2.mp4', questionId: 'q1030', type: 'question' },
    { folder: '시나리오 1-1', originalFile: '시나리오 1_3.mp4', questionId: 'q1050', type: 'question' },
    { folder: '시나리오 1-1', originalFile: '시나리오 1_4.mp4', questionId: 'q1060', type: 'answer' },
    { folder: '시나리오 1-1', originalFile: '시나리오 1_4_심정지 추가.mp4', questionId: 'q1070', type: 'question' },
    { folder: '시나리오 1-1', originalFile: '시나리오 1_5.mp4', questionId: 'q1090', type: 'question' },
  ],
  
  // ===== 시나리오 1-2 (시나리오 1: 세션 2 - 제세동기 등) =====
  '시나리오 1-2': [
    { folder: '시나리오 1-2', originalFile: '시나리오 1_2_1.mp4', questionId: 'q1090', type: 'answer' },
    { folder: '시나리오 1-2', originalFile: '시나리오 1_2_2.mp4', questionId: 'q1120', type: 'answer' },
    { folder: '시나리오 1-2', originalFile: '시나리오 1_2_3.mp4', questionId: 'q1130', type: 'answer' },
    { folder: '시나리오 1-2', originalFile: '시나리오 1_2_4.mp4', questionId: 'q1140', type: 'answer' },
    { folder: '시나리오 1-2', originalFile: '시나리오 1_2_5.mp4', questionId: 'q1170', type: 'question' },
    { folder: '시나리오 1-2', originalFile: '시나리오 1_2_6.mp4', questionId: 'q1170', type: 'answer' },
    { folder: '시나리오 1-2', originalFile: '시나리오 1_2_7.mp4', questionId: 'q1200', type: 'question' },
    { folder: '시나리오 1-2', originalFile: '시나리오 1_2_8.mp4', questionId: 'q1200', type: 'answer' },
    { folder: '시나리오 1-2', originalFile: '시나리오 1_2_8_자막X.mp4', questionId: 'q1200_nosub', type: 'answer' },
    { folder: '시나리오 1-2', originalFile: '시나리오 1_2_9.mp4', questionId: 'q1220', type: 'answer' },
  ],
  
  // ===== 시나리오 2 =====
  '시나리오 2': [
    { folder: '시나리오 2', originalFile: '시나리오 2_1.mp4', questionId: 'q2010', type: 'question' },
    { folder: '시나리오 2', originalFile: '시나리오 2_2.mp4', questionId: 'q2020', type: 'question' },
    { folder: '시나리오 2', originalFile: '시나리오 2_3.mp4', questionId: 'q2030', type: 'question' },
    { folder: '시나리오 2', originalFile: '시나리오 2_4.mp4', questionId: 'q2040', type: 'question' },
    { folder: '시나리오 2', originalFile: '시나리오 2_4_정상호흡.mp4', questionId: 'q2040_normal', type: 'question' },
    { folder: '시나리오 2', originalFile: '시나리오 2_5.mp4', questionId: 'q2050', type: 'question' },
  ],
  
  // ===== 시나리오 3 (간호사1, 간호사2, 간호사3) =====
  '시나리오 3': [
    // 간호사1 (영상 3_x)
    { folder: '시나리오 3', originalFile: '시나리오 3_1.mp4', questionId: 'q3010', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 3_2.mp4', questionId: 'q3020', type: 'answer' },
    { folder: '시나리오 3', originalFile: '시나리오 3_3.mp4', questionId: 'q3030', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 3_4.mp4', questionId: 'q3040', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 3_5.mp4', questionId: 'q3050', type: 'answer' },
    
    // 간호사2 (영상 4_x)
    { folder: '시나리오 3', originalFile: '시나리오 4_1.mp4', questionId: 'q3060', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 4_2.mp4', questionId: 'q3060', type: 'answer' },
    { folder: '시나리오 3', originalFile: '시나리오 4_3.mp4', questionId: 'q3070', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 4_4.mp4', questionId: 'q3080', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 4_5.mp4', questionId: 'q3090', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 4_6.mp4', questionId: 'q3090', type: 'answer' },
    
    // 간호사3 (영상 5_x)
    { folder: '시나리오 3', originalFile: '시나리오 5_1.mp4', questionId: 'q3100', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 5_2.mp4', questionId: 'q3110', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 5_3.mp4', questionId: 'q3120', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 5_4.mp4', questionId: 'q3130', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 5_4_자막X.mp4', questionId: 'q3130_nosub', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 5_5.mp4', questionId: 'q3140', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 5_6.mp4', questionId: 'q3150', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 5_7.mp4', questionId: 'q3160', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 5_8.mp4', questionId: 'q3170', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 5_9.mp4', questionId: 'q3180', type: 'question' },
    { folder: '시나리오 3', originalFile: '시나리오 5_10.mp4', questionId: 'q3180', type: 'answer' },
    { folder: '시나리오 3', originalFile: '시나리오 5_11.mp4', questionId: 'q3180_extra', type: 'answer' },
  ],
};

// ffmpeg로 1080p 스트리밍용 변환
function convertTo1080p(inputPath: string, outputPath: string): boolean {
  const args = [
    '-i', inputPath,
    '-vf', 'scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2',
    '-c:v', 'libx264',
    '-preset', 'medium',
    '-crf', '23',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-movflags', '+faststart',
    '-y',
    outputPath,
  ];

  try {
    console.log(`   🔄 변환 중...`);
    const result = spawnSync('ffmpeg', args, { 
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf-8'
    });
    
    if (result.status !== 0) {
      console.error(`   ❌ 변환 실패`);
      return false;
    }
    return true;
  } catch (error) {
    console.error(`   ❌ 변환 실패`);
    return false;
  }
}

async function main() {
  console.log('🚀 영상 1080p 변환 및 파일명 정규화 시작\n');
  
  // 출력 디렉토리 초기화
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  
  let totalFiles = 0;
  let converted = 0;
  let failed = 0;
  
  const results: { originalFile: string; newFile: string; questionId: string; type: string }[] = [];
  
  for (const [folderName, mappings] of Object.entries(videoMappings)) {
    console.log(`\n📁 ${folderName} 처리 중...`);
    
    for (const mapping of mappings) {
      totalFiles++;
      const inputPath = path.join(DATA_DIR, mapping.folder, mapping.originalFile);
      
      // 새 파일명: q1010_question.mp4 형식
      const newFileName = `${mapping.questionId}_${mapping.type}.mp4`;
      const outputPath = path.join(OUTPUT_DIR, newFileName);
      
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  [${totalFiles}] 파일 없음: ${mapping.originalFile}`);
        failed++;
        continue;
      }
      
      const inputSize = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(2);
      console.log(`📤 [${totalFiles}] ${mapping.originalFile} (${inputSize} MB)`);
      console.log(`   → ${newFileName}`);
      
      if (convertTo1080p(inputPath, outputPath)) {
        const outputSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
        console.log(`   ✅ 완료 (${outputSize} MB)\n`);
        converted++;
        results.push({
          originalFile: mapping.originalFile,
          newFile: newFileName,
          questionId: mapping.questionId,
          type: mapping.type,
        });
      } else {
        failed++;
        console.log('');
      }
    }
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 변환 완료: 성공 ${converted}개, 실패 ${failed}개 (총 ${totalFiles}개)`);
  console.log(`📂 출력 폴더: ${OUTPUT_DIR}`);
  console.log(`${'='.repeat(60)}\n`);
  
  // 결과를 JSON으로 저장
  const resultsPath = path.join(__dirname, 'video-mappings.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`📄 매핑 정보 저장: ${resultsPath}`);
  
  // 최종 파일 목록 출력
  console.log('\n📋 변환된 파일 목록:');
  const convertedFiles = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.mp4')).sort();
  convertedFiles.forEach(f => console.log(`   ${f}`));
}

main().catch(console.error);
