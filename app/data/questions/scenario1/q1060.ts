import { Question } from "../../../types";

export const q1060: Question = {
  id: 1060,
  displayId: "6",
  scenarioId: 1,
  sessionId: 1,
  title: "맥박/호흡 확인 방법",
  mediaType: "video",
  mediaPrompt: "1_3_FollowUp",
  questionText: "맥박과 호흡은 어떻게 확인하나요?",
  options: [
    {
      id: "1",
      text: "경동맥에 두 손가락을 대어 맥박을 느끼며 동시에 가슴의 움직임과 호흡음을 관찰한다.",
      imageUrl: "/images/questions/scenario1/Q06-1.jpg",
    },
    {
      id: "2",
      text: "손목의 요골맥을 짚고 호흡은 환자의 코에 손을 대서 확인한다.",
      imageUrl: "/images/questions/scenario1/Q06-B.jpg",
    },
    {
      id: "3",
      text: "복부에 귀를 대어 배 움직임으로 호흡을 확인한다.",
      imageUrl: "/images/questions/scenario1/Q06-C.jpg",
    },
    {
      id: "4",
      text: "심전도 모니터를 붙여 맥박과 호흡을 동시에 확인한다.",
      imageUrl: "/images/questions/scenario1/Q06-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정답입니다! 경동맥 촉지와 흉곽 움직임, 호흡음 확인이 표준 절차입니다.",
  feedbackIncorrect:
    "정확하지 않습니다. 손목 맥박은 신뢰도가 낮으며, 복부나 코에 손을 대는 방법은 표준이 아닙니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314580/S1_4_woqoql.mp4`,
  },
  nextId: 1070,
};
