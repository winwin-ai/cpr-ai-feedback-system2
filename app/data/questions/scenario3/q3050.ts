import { Question } from "../../../types";

export const q3050: Question = {
  id: 3050,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 1",
  title: "가슴압박 시작 (간호사1)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_3_5",
  questionText:
    "환자의 맥박이 측정되지 않고, 무호흡을 보입니다. 당신은 어떤 조치를 취해야 할까요?",
  options: [
    {
      id: "1",
      text: "E-cart를 가져온다.",
      imageUrl: "/images/questions/scenario3/3-1/Q05-A.jpg",
    },
    {
      id: "2",
      text: "주치의에게 연락한 후 처방을 기다린다",
      imageUrl: "/images/questions/scenario3/3-1/Q05-B.jpg",
    },
    {
      id: "3",
      text: "모니터를 가지고 와서 환자에게 부착한다.",
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
    "정확합니다! 심정지 인지 후에는 즉시 가슴 압박을 시작해야 합니다. 지체 없이 고품질의 CPR을 시작하는 것이 생존률을 높입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 맥박이 없고 무호흡인 환자에게는 즉시 가슴압박을 시작해야 합니다. 주치의 처방을 기다리거나 다른 준비를 하는 것보다 바로 CPR을 시작하는 것이 중요합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365862/cpr-videos/q3050_answer.mp4`,
  },
};
