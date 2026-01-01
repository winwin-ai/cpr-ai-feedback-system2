import { Question } from "../../../types";

export const q1183: Question = {
  id: 1183,
  displayId: "18-3",
  scenarioId: 1,
  sessionId: 2,
  title: "리듬 확인 (VF)",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_10_3",
  questionText: "다음 심전도는 무슨 리듬인가요?",
  options: [
    {
      id: "1",
      text: "Asystole (무수축)",
      imageUrl: "/images/questions/scenario1/Q18-C.jpg",
    },
    {
      id: "2",
      text: "PEA (무맥성 전기활동)",
      imageUrl: "/images/questions/scenario1/Q18-D.jpg",
    },
    {
      id: "3",
      text: "VF (심실세동)",
      imageUrl: "/images/questions/scenario1/Q18-A.jpg",
    },
    {
      id: "4",
      text: "Pulseless VT (무맥성 심실빈맥)",
      imageUrl: "/images/questions/scenario1/Q18-B.jpg",
    },
  ],
  correctOptionId: "3",
  feedbackCorrect: "정답입니다! 심실세동(VF)으로 Shockable 리듬입니다.",
  feedbackIncorrect: "틀렸습니다. 불규칙한 파형의 심실세동(VF)입니다.",
  explanation: "즉각적인 제세동이 필요합니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765288661/VF_r1yv9r.mp4`,
  },
  nextId: 1190,
};
