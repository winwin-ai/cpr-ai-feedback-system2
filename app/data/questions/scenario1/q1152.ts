import { Question } from "../../../types";

export const q1152: Question = {
  id: 1152,
  displayId: "15-2",
  scenarioId: 1,
  sessionId: 2,
  title: "심장 리듬 확인 (Asystole)",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_7_2",
  questionText: "다음 심전도는 무슨 리듬인가요?",
  options: [
    {
      id: "1",
      text: "Asystole (무수축)",
      imageUrl: "/images/questions/scenario1/Q15-C.jpg",
    },
    {
      id: "2",
      text: "Pulseless VT (무맥성 심실빈맥)",
      imageUrl: "/images/questions/scenario1/Q15-B.jpg",
    },
    {
      id: "3",
      text: "PEA (무맥성 전기활동)",
      imageUrl: "/images/questions/scenario1/Q15-D.jpg",
    },
    {
      id: "4",
      text: "VF (심실세동)",
      imageUrl: "/images/questions/scenario1/Q15-A.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 제시된 파형은 Asystole(무수축)으로 Non-shockable 리듬입니다.",
  feedbackIncorrect: "틀렸습니다. 이 파형은 Asystole(무수축)입니다.",
  explanation: "전기적 활동이 없는 일직선의 파형입니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765288666/Asystole_gq88ky.mp4`,
  },
  nextId: 1153,
};
