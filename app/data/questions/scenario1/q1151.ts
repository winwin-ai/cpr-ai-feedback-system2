import { Question } from "../../../types";

export const q1151: Question = {
  id: 1151,
  displayId: "15-1",
  scenarioId: 1,
  sessionId: 1,
  title: "심장 리듬 확인 (PEA)",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_7_1",
  questionText: "다음 심전도는 무슨 리듬인가요?",
  options: [
    { id: "1", text: "Asystole (무수축)" },
    { id: "2", text: "PEA (무맥성 전기활동)" },
    { id: "3", text: "VF (심실세동)" },
    { id: "4", text: "Pulseless VT (무맥성 심실빈맥)" },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정확합니다! 제시된 파형은 PEA(무맥성 전기활동)로 Non-shockable 리듬입니다.",
  feedbackIncorrect: "틀렸습니다. 이 파형은 PEA(무맥성 전기활동)입니다.",
  explanation: "심전도상 전기적 활동은 보이나 맥박이 없는 상태입니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767270178/cpr-videos/PEA-NSR.mp4`,
  },
  nextId: 1152,
};
