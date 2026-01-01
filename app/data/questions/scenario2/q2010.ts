import { Question } from "../../../types";

export const q2010: Question = {
  id: 2010,
  scenarioId: 2,
  sessionId: 1,
  title: "반응 확인",
  mediaType: "video",
  mediaPrompt: "Scenario2_Video_2_1",
  questionText: "환자에게 접근했습니다. 다음으로 어떤 행동을 하시겠습니까?",
  options: [
    {
      id: "1",
      text: "환자의 어깨를 두드리며 큰 소리로 '괜찮으세요?'라고 묻는다.",
      imageUrl: "/images/questions/scenario2/Q02-A.jpg",
    },
    {
      id: "2",
      text: "환자를 바로 눕히고 산소를 적용한다.",
      imageUrl: "/images/questions/scenario2/Q02-B.jpg",
    },
    {
      id: "3",
      text: "침대로 옮기기 위해 환자를 일으킨다.",
      imageUrl: "/images/questions/scenario2/Q02-C.jpg",
    },
    {
      id: "4",
      text: "맥박을 확인하여 심정지 여부를 판단한다.",
      imageUrl: "/images/questions/scenario2/Q02-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 반응 확인은 어깨를 가볍게 두드리고 큰소리로 말을 거는 것이 표준 절차입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 산소 적용이나 맥박 확인보다 먼저 환자의 반응부터 확인해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316267/S2_1_djheyy.mp4`,
  },
};
