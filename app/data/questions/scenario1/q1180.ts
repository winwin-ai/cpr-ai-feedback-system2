import { Question } from "../../../types";

export const q1180: Question = {
  id: 1180,
  displayId: "18",
  scenarioId: 1,
  sessionId: 2,
  title: "리듬 확인 (VF)",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_10",
  questionText: "2분 후 리듬 재확인 중입니다. 이 리듬은 무엇인가요?",
  options: [
    { id: "1", text: "VF (심실세동)", imageUrl: "/images/questions/scenario1/Q18-A.jpg" },
    {
      id: "2",
      text: "Normal Sinus Rhythm",
      imageUrl: "/images/questions/scenario1/Q18-B.jpg",
    },
    { id: "3", text: "Asystole", imageUrl: "/images/questions/scenario1/Q18-C.jpg" },
    { id: "4", text: "PEA", imageUrl: "/images/questions/scenario1/Q18-D.jpg" },
  ],
  correctOptionId: "1",
  feedbackCorrect: "정답입니다! 심실세동(VF)으로 Shockable 리듬입니다.",
  feedbackIncorrect: "틀렸습니다. 불규칙한 파형의 심실세동입니다.",
  explanation: "즉각적인 제세동이 필요합니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765288661/VF_r1yv9r.mp4`,
  },
  nextId: 1190,
};
