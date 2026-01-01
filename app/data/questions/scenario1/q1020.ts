import { Question } from "../../../types";

export const q1020: Question = {
  id: 1020,
  displayId: "2",
  scenarioId: 1,
  sessionId: 1,
  title: "반응 확인 방법",
  mediaType: "video",
  mediaPrompt: "1_1_FollowUp", // No video
  questionText: "환자의 반응을 확인하는 방법은 무엇인가요?",
  options: [
    {
      id: "1",
      text: "환자에게 큰소리로 말을 걸어본다.",
      imageUrl: "/images/questions/scenario1/Q02-A.jpg",
    },
    {
      id: "2",
      text: "환자의 얼굴을 가까이 들여다보며 호흡 소리를 듣는다.",
      imageUrl: "/images/questions/scenario1/Q02-B.jpg",
    },
    {
      id: "3",
      text: "환자의 어깨를 두드리며 큰소리로 '괜찮으세요?'라고 묻는다.",
      imageUrl: "/images/questions/scenario1/Q02-C.jpg",
    },
    {
      id: "4",
      text: "어깨를 세게 흔들며 이름을 부른다.",
      imageUrl: "/images/questions/scenario1/Q02-D.jpg",
    },
  ],
  correctOptionId: "3",
  feedbackCorrect:
    "어깨를 두드리며 큰소리로 묻는 것이 표준화된 반응 확인 방법입니다.",
  feedbackIncorrect:
    "얼굴을 가까이 들여다보거나 세게 흔드는 것은 잘못된 방법입니다. 어깨를 가볍게 두드리며 큰소리로 물어야 합니다.",
  explanation: "추가 설명이 없습니다.",
  nextId: 1030,
};
