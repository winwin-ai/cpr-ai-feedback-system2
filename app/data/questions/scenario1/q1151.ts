import { Question } from "../../../types";

export const q1151: Question = {
  id: 1151,
  displayId: "15-1",
  scenarioId: 1,
  sessionId: 1,
  title: "심장 리듬 확인 (PEA)",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_7_1",
  questionText:
    "모니터를 확인한 후 환자의 맥박을 확인해 보았으나 맥박이 느껴지지 않았습니다. 다음 심전도는 무슨 리듬인가요?",
  options: [
    { id: "1", text: "Asystole" },
    { id: "2", text: "PEA" },
    { id: "3", text: "VF" },
    { id: "4", text: "Pulseless VT" },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정확합니다! 제시된 파형은 PEA(무맥성 전기활동)로 Non-shockable 리듬입니다.",
  feedbackIncorrect: "틀렸습니다. 이 파형은 PEA(무맥성 전기활동)입니다.",
  explanation: "심전도상 전기적 활동은 보이나 맥박이 없는 상태입니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767506168/PEA-NSR2_dhnwvi.mp4`,
  },
  nextId: 1152,
};
