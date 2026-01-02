import { Question } from "../../../types";

export const q1090: Question = {
  id: 1090,
  displayId: "9",
  scenarioId: 1,
  sessionId: 1,
  title: "가슴압박 위치",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_1",
  questionText: "가슴압박 시 올바른 압박 위치는 어디인가요?",
  options: [
    {
      id: "1",
      text: "흉골 중앙의 하단부, 양쪽 유두 사이에 손바닥을 올리고 압박한다.",
      imageUrl: "/images/questions/scenario1/Q09-A.jpg",
    },
    {
      id: "2",
      text: "왼쪽 가슴 위를 손끝으로 빠르게 압박한다.",
      imageUrl: "/images/questions/scenario1/Q09-B.jpg",
    },
    {
      id: "3",
      text: "환자의 배 위(명치 부분)를 눌러준다.",
      imageUrl: "/images/questions/scenario1/Q09-C.jpg",
    },
    {
      id: "4",
      text: "흉골을 세게 3~4회만 눌러 반응을 본다.",
      imageUrl: "/images/questions/scenario1/Q09-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "올바릅니다! 흉골 중앙의 하단부, 양쪽 유두 사이를 압박해야 합니다.",
  feedbackIncorrect:
    "오답입니다. 가슴압박은 반드시 흉골 중앙의 하단부에 손바닥을 올려 심장에 효과적으로 압력을 전달해야 합니다.",
  explanation: "추가 설명이 없습니다.",
    videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365726/cpr-videos/q1090_question.mp4`,
    answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365719/cpr-videos/q1090_answer.mp4`,
  },

  nextId: 1100,
};
