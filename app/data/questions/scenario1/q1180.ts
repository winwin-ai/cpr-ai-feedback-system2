import { Question } from "../../../types";

export const q1180: Question = {
  id: 1180,
  displayId: "18",
  scenarioId: 1,
  sessionId: 1,
  title: "리듬 확인 (VF)",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_10",
  questionText:
    "가슴압박 중 환자의 심장 리듬을 재확인했습니다. 다음 심전도는 무슨 리듬인가요?",
  options: [
    { id: "1", text: "VF (심실세동)" },
    { id: "2", text: "Pulseless VT (무맥성 심실빈맥)" },
    { id: "3", text: "Asystole (무수축)" },
    { id: "4", text: "PEA (무맥성 전기활동)" },
  ],
  correctOptionId: "1",
  feedbackCorrect: "정답입니다! 심실세동(VF)으로 Shockable 리듬입니다.",
  feedbackIncorrect: "틀렸습니다. 불규칙한 파형의 심실세동입니다.",
  explanation: "즉각적인 제세동이 필요합니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765288661/VF_r1yv9r.mp4`,
  },
  nextId: 1181,
};
