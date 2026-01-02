import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const DATA_DIR = '/Users/ieunho/Desktop/Data';
const OUTPUT_DIR = '/Users/ieunho/Desktop/Data/converted';

// 처리할 폴더 목록
const sourceFolders = [
  '시나리오 1-1',
  '시나리오 1-2',
  '시나리오 2',
  '시나리오 3',
];

// 파일명 정규화 (한글 -> 영문)
function normalizeFileName(fileName: string): string {
  return fileName
    .replace('시나리오 ', 'S')
    .replace('_심정지 추가', '_cardiac_arrest')
    .replace('_정상호흡', '_normal_breathing')
    .replace('_자막X', '_no_subtitle');
}

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
      console.error(`   ❌ 변환 실패: ${result.stderr?.slice(0, 200)}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error(`   ❌ 변환 실패`);
    if (error instanceof Error) {
      console.error(`   ${error.message}`);
    }
    return false;
  }
}

async function main() {
  console.log('🚀 영상 1080p 스트리밍용 변환 시작 (영문 파일명)\n');
  
  // 기존 출력 디렉토리 삭제 후 재생성
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  
  let totalFiles = 0;
  let converted = 0;
  let failed = 0;
  
  for (const folderName of sourceFolders) {
    const folderPath = path.join(DATA_DIR, folderName);
    
    if (!fs.existsSync(folderPath)) {
      console.log(`⚠️ 폴더 없음: ${folderPath}`);
      continue;
    }
    
    console.log(`\n📁 ${folderName} 처리 중...`);
    
    const files = fs.readdirSync(folderPath)
      .filter(f => f.endsWith('.mp4'))
      .sort();
    
    console.log(`   총 ${files.length}개 파일 발견\n`);
    
    for (const file of files) {
      totalFiles++;
      const inputPath = path.join(folderPath, file);
      const normalizedName = normalizeFileName(file);
      const outputPath = path.join(OUTPUT_DIR, normalizedName);
      
      const inputSize = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(2);
      console.log(`📤 [${totalFiles}] ${file} (${inputSize} MB)`);
      console.log(`   → ${normalizedName}`);
      
      if (convertTo1080p(inputPath, outputPath)) {
        const outputSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
        console.log(`   ✅ 완료 (${outputSize} MB)\n`);
        converted++;
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
  
  // 변환된 파일 목록 출력
  console.log('📋 변환된 파일 목록:');
  const convertedFiles = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.mp4')).sort();
  convertedFiles.forEach(f => console.log(`   ${f}`));
}

main().catch(console.error);
