import { Question } from "../../../types";

export const q1030: Question = {
  id: 1030,
  displayId: "3",
  scenarioId: 1,
  sessionId: 1,
  title: "도움 요청",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_1_2",
  questionText: "환자의 반응이 없습니다. 어떻게 해야 하나요?",
  options: [
    {
      id: "1",
      text: "도움을 요청한다.",
      imageUrl: "/images/questions/scenario1/Q03-A.jpg",
    },
    {
      id: "2",
      text: "혈당을 측정한다.",
      imageUrl: "/images/questions/scenario1/Q03-B.jpg",
    },
    {
      id: "3",
      text: "우선 환자를 침대로 옮긴다.",
      imageUrl: "/images/questions/scenario1/Q03-C.jpg",
    },
    {
      id: "4",
      text: "가슴압박을 시작한다.",
      imageUrl: "/images/questions/scenario1/Q03-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 환자의 반응이 없으면 즉시 주변에 도움을 요청해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 혈당 측정이나 환자를 옮기는 행동보다 먼저 도움을 요청해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314678/S1_2_rkfidu.mp4`,
  },
  nextId: 1040,
};
