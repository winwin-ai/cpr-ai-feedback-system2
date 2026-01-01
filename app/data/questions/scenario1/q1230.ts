import { Question } from "../../../types";

export const q1230: Question = {
  id: 1230,
  displayId: "23",
  scenarioId: 1,
  sessionId: 2,
  title: "리듬 확인 (Pulseless VT)",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_15",
  questionText: "다음 심전도는 무슨 리듬인가요?",
  options: [
    { id: "1", text: "Pulseless VT (무맥성 심실빈맥)" },
    { id: "2", text: "Asystole (무수축)" },
    { id: "3", text: "PEA (무맥성 전기활동)" },
    { id: "4", text: "VF (심실세동)" },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 이는 무맥성 심실빈맥(Pulseless VT)입니다. 심실세동(VF)과 마찬가지로 제세동이 필요한 Shockable Rhythm입니다.",
  feedbackIncorrect:
    "틀렸습니다. 이 리듬은 Pulseless VT로, 즉각적인 제세동이 필요한 상태입니다.",
  explanation: "VF와 마찬가지로 Shockable Rhythm입니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765288668/Pulseless_VT_kbzktc.mp4`,
  },
};
