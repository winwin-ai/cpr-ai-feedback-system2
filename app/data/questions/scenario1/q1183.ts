import { Question } from "../../../types";

export const q1183: Question = {
  id: 1183,
  displayId: "18-3",
  scenarioId: 1,
  sessionId: 1,
  title: "리듬 확인 (VF)",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_10_3",
  questionText: "다음 심전도는 무슨 리듬인가요?",
  options: [
    { id: "1", text: "Asystole" },
    { id: "2", text: "PEA" },
    { id: "3", text: "VF" },
    { id: "4", text: "Pulseless VT" },
  ],
  correctOptionId: "3",
  feedbackCorrect: "정답입니다! 심실세동(VF)으로 Shockable 리듬입니다.",
  feedbackIncorrect: "틀렸습니다. 불규칙한 파형의 심실세동(VF)입니다.",
  explanation: "즉각적인 제세동이 필요합니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767506164/VF2_jx6212.mp4`,
  },
  nextId: 1190,
};
