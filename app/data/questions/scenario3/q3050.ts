import { Question } from "../../../types";

export const q3050: Question = {
  id: 3050,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 1",
  title: "가슴압박 시작 (간호사1)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_3_5",
  questionText: "맥박이 없고 무호흡 상태입니다. 어떤 조치를 취해야 할까요?",
  options: [
    {
      id: "1",
      text: "E-cart를 가져온다.",
      imageUrl: "/images/questions/scenario3/3-1/Q05-A.jpg",
    },
    {
      id: "2",
      text: "주치의 처방을 기다린다.",
      imageUrl: "/images/questions/scenario3/3-1/Q05-B.jpg",
    },
    {
      id: "3",
      text: "모니터를 부착한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q05-C.jpg",
    },
    {
      id: "4",
      text: "가슴압박을 시작한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q05-D.jpg",
    },
  ],
  correctOptionId: "4",
  feedbackCorrect:
    "정확합니다! 심정지 인지 후에는 즉시 가슴 압박을 시작해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 주치의 처방을 기다리거나 모니터 부착보다 바로 가슴 압박을 시작하는 것이 중요합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315150/S3_5_sezwy8.mp4`,
  },
};
