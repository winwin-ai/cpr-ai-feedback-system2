import { Question } from "../../../types";

export const q3030: Question = {
  id: 3030,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 1",
  title: "맥박 호흡 확인 (간호사 가)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_3_3",
  questionText: "도움요청 후 무엇을 해야 하나요?",
  options: [
    {
      id: "1",
      text: "환자의 맥박과 호흡을 10초 이내로 확인한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q03-A.jpg",
    },
    {
      id: "2",
      text: "모니터를 가지고 와서 환자에게 부착한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q03-B.jpg",
    },
    {
      id: "3",
      text: "정맥 주사라인을 확보한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q03-C.jpg",
    },
    {
      id: "4",
      text: "환자에게 산소를 적용한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q03-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 도움 요청 후에는 환자의 맥박과 호흡을 10초 이내로 확인해야 합니다. 이 단계에서 심정지 여부를 판단하게 됩니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 도움 요청 후에는 모니터 부착이나 정맥 확보보다 먼저 환자의 맥박과 호흡을 10초 이내로 확인해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315634/S3_3_ulrjqq.mp4`,
  },
};
