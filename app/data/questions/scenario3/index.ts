import { Question, Scenario } from "../../../types";
import { q3010 } from "./q3010";
import { q3020 } from "./q3020";
import { q3030 } from "./q3030";
import { q3040 } from "./q3040";
import { q3050 } from "./q3050";
import { q3060 } from "./q3060";
import { q3070 } from "./q3070";
import { q3080 } from "./q3080";
import { q3090 } from "./q3090";
import { q3100 } from "./q3100";
import { q3110 } from "./q3110";
import { q3120 } from "./q3120";
import { q3130 } from "./q3130";
import { q3140 } from "./q3140";
import { q3150 } from "./q3150";
import { q3160 } from "./q3160";
import { q3170 } from "./q3170";
import { q3180 } from "./q3180";

export const scenario3Questions: Question[] = [
  // ========== 간호사1 (Nurse 1) - 5문항 ==========
  q3010, // 문제 1: 반응 확인
  q3020, // 문제 2: 도움 요청
  q3030, // 문제 3: 맥박 호흡 확인
  q3040, // 문제 4: 호흡양상 확인
  q3050, // 문제 5: 가슴압박 시작

  // ========== 간호사2 (Nurse 2) - 4문항 ==========
  q3060, // 문제 6: CPR팀 호출
  q3070, // 문제 7: 산소공급
  q3080, // 문제 8: 구강기도유지기 삽입
  q3090, // 문제 9: 백마스크 환기

  // ========== 간호사3 (Nurse 3) - 9문항 ==========
  q3100, // 문제 10: E-cart와 공간 준비
  q3110, // 문제 11: 공간 확보
  q3120, // 문제 12: 제세동기 준비
  q3130, // 문제 13: 흡인 준비
  q3140, // 문제 14: 기관삽관 물품 준비
  q3150, // 문제 15: Laryngoscope 준비
  q3160, // 문제 16: E-tube/Stylet 준비
  q3170, // 문제 17: E-tube Cuff 확인
  q3180, // 문제 18: 에피네프린 준비
];

export const scenario3: Scenario = {
  id: 3,
  title: "전문 심폐소생술 (팀 리더)",
  startQuestionId: 3010,
  questions: scenario3Questions.reduce((acc, q) => {
    acc[q.id] = q;
    return acc;
  }, {} as Record<string | number, Question>),
};
