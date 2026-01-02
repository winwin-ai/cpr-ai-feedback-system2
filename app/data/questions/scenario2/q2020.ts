import { Question } from "../../../types";

export const q2020: Question = {
  id: 2020,
  scenarioId: 2,
  sessionId: 1,
  title: "도움 요청",
  mediaType: "video",
  mediaPrompt: "Scenario2_Video_2_2",
  questionText: "환자의 반응이 없습니다. 어떻게 해야 하나요?",
  options: [
    {
      id: "1",
      text: "호출벨을 눌러 주변에 알린다.",
      imageUrl: "/images/questions/scenario2/Q02-A.jpg",
    },
    {
      id: "2",
      text: "환자를 부축해 침대로 옮긴다.",
      imageUrl: "/images/questions/scenario2/Q02-B.jpg",
    },
    {
      id: "3",
      text: "심전도 모니터를 부착한다.",
      imageUrl: "/images/questions/scenario2/Q02-C.jpg",
    },
    {
      id: "4",
      text: "혈당을 측정한다.",
      imageUrl: "/images/questions/scenario2/Q02-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 반응없는 환자를 발견한 경우 즉시 주변에 도움을 요청하는 것이 첫 번째 대응입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 환자를 옮기거나 모니터를 부착하는 것보다, 먼저 도움을 요청해 응급 대응 체계를 가동하는 것이 우선입니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365812/cpr-videos/q2020_question.mp4`,
  },
};
