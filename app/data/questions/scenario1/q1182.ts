import { Question } from "../../../types";

export const q1182: Question = {
  id: 1182,
  displayId: "18-2",
  scenarioId: 1,
  sessionId: 1,
  title: "리듬 확인 (Pulseless VT)",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_10_2",
  questionText: "다음 심전도는 무슨 리듬인가요?",
  options: [
    { id: "1", text: "Pulseless VT" },
    { id: "2", text: "Asystole" },
    { id: "3", text: "PEA" },
    { id: "4", text: "VF" },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정답입니다! 무맥성 심실빈맥(Pulseless VT)으로 Shockable 리듬입니다.",
  feedbackIncorrect:
    "틀렸습니다. 규칙적인 넓은 QRS 파형의 무맥성 심실빈맥(Pulseless VT)입니다.",
  explanation: "즉각적인 제세동이 필요합니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765288668/Pulseless_VT_kbzktc.mp4`,
  },
  nextId: 1183,
};
