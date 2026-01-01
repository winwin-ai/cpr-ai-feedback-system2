import { Question } from "../../../types";

export const q1153: Question = {
  id: 1153,
  displayId: "15-3",
  scenarioId: 1,
  sessionId: 1,
  title: "심장 리듬 확인 (PEA)",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_7_3",
  questionText: "다음 심전도는 무슨 리듬인가요?",
  options: [
    {
      id: "1",
      text: "PEA (무맥성 전기활동)",
      imageUrl: "/images/questions/scenario1/Q15-D.jpg",
    },
    {
      id: "2",
      text: "VF (심실세동)",
      imageUrl: "/images/questions/scenario1/Q15-A.jpg",
    },
    {
      id: "3",
      text: "Asystole (무수축)",
      imageUrl: "/images/questions/scenario1/Q15-C.jpg",
    },
    {
      id: "4",
      text: "Pulseless VT (무맥성 심실빈맥)",
      imageUrl: "/images/questions/scenario1/Q15-B.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 제시된 파형은 PEA(무맥성 전기활동)로 Non-shockable 리듬입니다.",
  feedbackIncorrect: "틀렸습니다. 이 파형은 PEA(무맥성 전기활동)입니다.",
  explanation: "심전도상 전기적 활동은 보이나 맥박이 없는 상태입니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765288667/PEA_placeholder.mp4`,
  },
  nextId: 1160,
};
