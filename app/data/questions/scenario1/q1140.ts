import { Question } from "../../../types";

export const q1140: Question = {
  id: 1140,
  displayId: "14",
  scenarioId: 1,
  sessionId: 2,
  title: "패드 부착 위치",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_6",
  questionText: "제세동 패드의 올바른 부착 위치는?",
  options: [
    {
      id: "1",
      text: "오른쪽 쇄골 아래와 왼쪽 유두 아래 겨드랑이 선",
      imageUrl: "/images/questions/scenario1/Q14-A.jpg",
    },
    {
      id: "2",
      text: "왼쪽 쇄골 아래와 오른쪽 유두 아래",
      imageUrl: "/images/questions/scenario1/Q14-B.jpg",
    },
    {
      id: "3",
      text: "양쪽 가슴 중앙",
      imageUrl: "/images/questions/scenario1/Q14-C.jpg",
    },
    { id: "4", text: "복부와 등", imageUrl: "/images/questions/scenario1/Q14-D.jpg" },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 우측 쇄골 하부와 좌측 유두 옆 겨드랑이 선에 부착합니다.",
  feedbackIncorrect: "위치가 잘못되었습니다. 표준 부착 위치를 확인하세요.",
  explanation: "Anterior-Lateral 위치에 부착합니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314811/S1_2_6_ep5fxi.mp4`,
  },
  nextId: 1151,
};
