import * as fs from 'fs';
import * as path from 'path';

const CONVERTED_DIR = '/Users/ieunho/Desktop/Data/converted';

// 파일명 정규화 (한글 -> 영문)
function normalizeFileName(fileName: string): string {
  return fileName
    .replace('시나리오 ', 'S')
    .replace('_심정지 추가', '_cardiac_arrest')
    .replace('_정상호흡', '_normal_breathing')
    .replace('_자막X', '_no_subtitle');
}

async function main() {
  console.log('🚀 파일명 영문 변환 시작\n');
  
  const files = fs.readdirSync(CONVERTED_DIR)
    .filter(f => f.endsWith('.mp4'))
    .sort();
  
  console.log(`📁 총 ${files.length}개 파일 발견\n`);
  
  let renamed = 0;
  
  for (const file of files) {
    const oldPath = path.join(CONVERTED_DIR, file);
    const newName = normalizeFileName(file);
    const newPath = path.join(CONVERTED_DIR, newName);
    
    if (file !== newName) {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ ${file} → ${newName}`);
      renamed++;
    } else {
      console.log(`⏭️  ${file} (변경 없음)`);
    }
  }
  
  console.log(`\n📊 완료: ${renamed}개 파일 이름 변경됨`);
  
  // 최종 파일 목록
  console.log('\n📋 최종 파일 목록:');
  const finalFiles = fs.readdirSync(CONVERTED_DIR).filter(f => f.endsWith('.mp4')).sort();
  finalFiles.forEach(f => console.log(`   ${f}`));
}

main().catch(console.error);
