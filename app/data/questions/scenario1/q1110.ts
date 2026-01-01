import { Question } from "../../../types";

export const q1110: Question = {
  id: 1110,
  displayId: "11",
  scenarioId: 1,
  sessionId: 1,
  title: "가슴압박 속도",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_3",
  questionText: "가슴압박의 올바른 속도는 얼마인가요?",
  options: [
    { id: "1", text: "100~120회/분으로 압박한다." },
    { id: "2", text: "50회/분으로 압박한다." },
    { id: "3", text: "150회/분으로 압박한다." },
    { id: "4", text: "가능한 빠르게 누른다." },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "잘했습니다! 100~120회/분은 뇌와 심장에 혈류를 공급할 수 있는 최적 속도입니다.",
  feedbackIncorrect:
    "오답입니다. 너무 빠르거나 느린 속도는 효과적인 순환을 방해합니다. 100~120회/분을 유지하세요.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315418/S1_2_3_hkmklv.mp4`,
  },
  nextId: 1120,
};
