import * as fs from 'fs';
import * as path from 'path';

const QUESTIONS_DIR = '/Users/ieunho/project/NursingEducation/cpr-ai-feedback-system2/app/data/questions';

// 업로드된 영상 URL 매핑
const VIDEO_URLS: { [key: string]: string } = {
  "q1010_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365693/cpr-videos/q1010_question.mp4",
  "q1030_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365699/cpr-videos/q1030_question.mp4",
  "q1050_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365703/cpr-videos/q1050_question.mp4",
  "q1060_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365708/cpr-videos/q1060_answer.mp4",
  "q1070_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365712/cpr-videos/q1070_question.mp4",
  "q1090_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365719/cpr-videos/q1090_answer.mp4",
  "q1090_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365726/cpr-videos/q1090_question.mp4",
  "q1120_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365732/cpr-videos/q1120_answer.mp4",
  "q1130_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365742/cpr-videos/q1130_answer.mp4",
  "q1140_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365748/cpr-videos/q1140_answer.mp4",
  "q1170_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365757/cpr-videos/q1170_answer.mp4",
  "q1170_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365763/cpr-videos/q1170_question.mp4",
  "q1200_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365781/cpr-videos/q1200_answer.mp4",
  "q1200_nosub_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365792/cpr-videos/q1200_nosub_answer.mp4",
  "q1200_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365795/cpr-videos/q1200_question.mp4",
  "q1220_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365799/cpr-videos/q1220_answer.mp4",
  "q2010_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365806/cpr-videos/q2010_question.mp4",
  "q2020_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365812/cpr-videos/q2020_question.mp4",
  "q2030_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365816/cpr-videos/q2030_question.mp4",
  "q2040_normal_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365820/cpr-videos/q2040_normal_question.mp4",
  "q2040_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365827/cpr-videos/q2040_question.mp4",
  "q2050_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365837/cpr-videos/q2050_question.mp4",
  "q3010_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365844/cpr-videos/q3010_question.mp4",
  "q3020_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365847/cpr-videos/q3020_answer.mp4",
  "q3030_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365850/cpr-videos/q3030_question.mp4",
  "q3040_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365854/cpr-videos/q3040_question.mp4",
  "q3050_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365862/cpr-videos/q3050_answer.mp4",
  "q3060_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365867/cpr-videos/q3060_answer.mp4",
  "q3060_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365870/cpr-videos/q3060_question.mp4",
  "q3070_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365874/cpr-videos/q3070_question.mp4",
  "q3080_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365887/cpr-videos/q3080_question.mp4",
  "q3090_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365895/cpr-videos/q3090_answer.mp4",
  "q3090_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365900/cpr-videos/q3090_question.mp4",
  "q3100_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365904/cpr-videos/q3100_question.mp4",
  "q3110_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365909/cpr-videos/q3110_question.mp4",
  "q3120_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365916/cpr-videos/q3120_question.mp4",
  "q3130_nosub_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365921/cpr-videos/q3130_nosub_question.mp4",
  "q3130_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365933/cpr-videos/q3130_question.mp4",
  "q3140_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365952/cpr-videos/q3140_question.mp4",
  "q3150_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365957/cpr-videos/q3150_question.mp4",
  "q3160_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365961/cpr-videos/q3160_question.mp4",
  "q3170_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365973/cpr-videos/q3170_question.mp4",
  "q3180_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365982/cpr-videos/q3180_answer.mp4",
  "q3180_extra_answer": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365990/cpr-videos/q3180_extra_answer.mp4",
  "q3180_question": "https://res.cloudinary.com/dn3cicucf/video/upload/v1767365998/cpr-videos/q3180_question.mp4",
};

// 질문 ID별 videoPaths 매핑
const questionVideoMapping: { [questionId: string]: { question?: string; answer?: string } } = {
  // Scenario 1
  'q1010': { question: VIDEO_URLS['q1010_question'] },
  'q1030': { question: VIDEO_URLS['q1030_question'] },
  'q1050': { question: VIDEO_URLS['q1050_question'] },
  'q1060': { answer: VIDEO_URLS['q1060_answer'] },
  'q1070': { question: VIDEO_URLS['q1070_question'] },
  'q1090': { question: VIDEO_URLS['q1090_question'], answer: VIDEO_URLS['q1090_answer'] },
  'q1120': { answer: VIDEO_URLS['q1120_answer'] },
  'q1130': { answer: VIDEO_URLS['q1130_answer'] },
  'q1140': { answer: VIDEO_URLS['q1140_answer'] },
  'q1170': { question: VIDEO_URLS['q1170_question'], answer: VIDEO_URLS['q1170_answer'] },
  'q1200': { question: VIDEO_URLS['q1200_question'], answer: VIDEO_URLS['q1200_answer'] },
  'q1220': { answer: VIDEO_URLS['q1220_answer'] },
  
  // Scenario 2
  'q2010': { question: VIDEO_URLS['q2010_question'] },
  'q2020': { question: VIDEO_URLS['q2020_question'] },
  'q2030': { question: VIDEO_URLS['q2030_question'] },
  'q2040': { question: VIDEO_URLS['q2040_question'] },
  'q2050': { question: VIDEO_URLS['q2050_question'] },
  
  // Scenario 3
  'q3010': { question: VIDEO_URLS['q3010_question'] },
  'q3020': { answer: VIDEO_URLS['q3020_answer'] },
  'q3030': { question: VIDEO_URLS['q3030_question'] },
  'q3040': { question: VIDEO_URLS['q3040_question'] },
  'q3050': { answer: VIDEO_URLS['q3050_answer'] },
  'q3060': { question: VIDEO_URLS['q3060_question'], answer: VIDEO_URLS['q3060_answer'] },
  'q3070': { question: VIDEO_URLS['q3070_question'] },
  'q3080': { question: VIDEO_URLS['q3080_question'] },
  'q3090': { question: VIDEO_URLS['q3090_question'], answer: VIDEO_URLS['q3090_answer'] },
  'q3100': { question: VIDEO_URLS['q3100_question'] },
  'q3110': { question: VIDEO_URLS['q3110_question'] },
  'q3120': { question: VIDEO_URLS['q3120_question'] },
  'q3130': { question: VIDEO_URLS['q3130_question'] },
  'q3140': { question: VIDEO_URLS['q3140_question'] },
  'q3150': { question: VIDEO_URLS['q3150_question'] },
  'q3160': { question: VIDEO_URLS['q3160_question'] },
  'q3170': { question: VIDEO_URLS['q3170_question'] },
  'q3180': { question: VIDEO_URLS['q3180_question'], answer: VIDEO_URLS['q3180_answer'] },
};

function updateQuestionFile(filePath: string, questionId: string): boolean {
  const mapping = questionVideoMapping[questionId];
  if (!mapping) {
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let updated = false;
  
  // videoPaths 객체 찾아서 업데이트
  const videoPathsRegex = /videoPaths:\s*\{[^}]*\}/gs;
  
  if (mapping.question && mapping.answer) {
    // question과 answer 모두 있는 경우
    const newVideoPaths = `videoPaths: {
    question: \`${mapping.question}\`,
    answer: \`${mapping.answer}\`,
  }`;
    content = content.replace(videoPathsRegex, newVideoPaths);
    updated = true;
  } else if (mapping.question) {
    // question만 있는 경우
    const newVideoPaths = `videoPaths: {
    question: \`${mapping.question}\`,
  }`;
    content = content.replace(videoPathsRegex, newVideoPaths);
    updated = true;
  } else if (mapping.answer) {
    // answer만 있는 경우
    const newVideoPaths = `videoPaths: {
    answer: \`${mapping.answer}\`,
  }`;
    content = content.replace(videoPathsRegex, newVideoPaths);
    updated = true;
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content);
  }
  
  return updated;
}

async function main() {
  console.log('🚀 시나리오 파일 videoPaths 업데이트 시작\n');
  
  const scenarios = ['scenario1', 'scenario2', 'scenario3'];
  let totalUpdated = 0;
  let totalSkipped = 0;
  
  for (const scenario of scenarios) {
    const scenarioDir = path.join(QUESTIONS_DIR, scenario);
    console.log(`\n📁 ${scenario} 처리 중...`);
    
    const files = fs.readdirSync(scenarioDir)
      .filter(f => f.startsWith('q') && f.endsWith('.ts') && f !== 'index.ts')
      .sort();
    
    for (const file of files) {
      const questionId = path.parse(file).name;
      const filePath = path.join(scenarioDir, file);
      
      if (updateQuestionFile(filePath, questionId)) {
        console.log(`   ✅ ${file} 업데이트됨`);
        totalUpdated++;
      } else {
        console.log(`   ⏭️  ${file} (매핑 없음)`);
        totalSkipped++;
      }
    }
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 완료: ${totalUpdated}개 업데이트, ${totalSkipped}개 스킵`);
  console.log(`${'='.repeat(60)}\n`);
}

main().catch(console.error);
