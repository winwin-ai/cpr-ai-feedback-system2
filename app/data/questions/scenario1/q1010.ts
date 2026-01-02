import { Question } from "../../../types";

export const q1010: Question = {
  id: 1010,
  displayId: "1",
  scenarioId: 1,
  sessionId: 1,
  title: "반응 확인",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_1_1",
  questionText: "쓰러진 환자를 발견한 당신이 가장 먼저 해야 할 행동은?",
  options: [
    {
      id: "1",
      text: "환자의 반응을 확인한다.",
      imageUrl: "/images/questions/scenario1/Q01-A.jpg",
    },
    {
      id: "2",
      text: "선임간호사에게 알려서 도움을 요청한다.",
      imageUrl: "/images/questions/scenario1/Q01-B.jpg",
    },
    {
      id: "3",
      text: "쓰러진 환자를 바로 눕혀 기도 확보를 먼저 시도한다.",
      imageUrl: "/images/questions/scenario1/Q01-C.jpg",
    },
    {
      id: "4",
      text: "경련을 하므로 진정제 PRN이 있는지 확인한다.",
      imageUrl: "/images/questions/scenario1/Q01-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 환자의 반응을 확인하는 것이 초기 대응의 첫 단계입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 환자를 옮기거나 약을 찾기보다 먼저 환자가 반응하는지 확인해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365693/cpr-videos/q1010_question.mp4`,
  },
  nextId: 1020,
};
