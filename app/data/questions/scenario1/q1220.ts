import { Question } from "../../../types";

export const q1220: Question = {
  id: 1220,
  displayId: "22",
  scenarioId: 1,
  sessionId: 1,
  title: "ROSC 확인",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_14",
  questionText: "자발순환회복(ROSC)의 징후로 옳은 것은?",
  options: [
    { id: "1", text: "자발 맥박 촉지 및 혈압 상승" },
    { id: "2", text: "가슴압박 중단 시 심전도 변화" },
    { id: "3", text: "동공반사 소실" },
    { id: "4", text: "피부색 변화" },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 맥박이 만져지고 혈압이 측정되면 ROSC 상태입니다.",
  feedbackIncorrect: "다른 징후들은 확실한 ROSC 증거가 아닙니다.",
  explanation: "교육이 종료됩니다. 수고하셨습니다.",
  nextId: 1230,
};
