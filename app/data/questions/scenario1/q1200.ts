import { Question } from "../../../types";

export const q1200: Question = {
  id: 1200,
  displayId: "20",
  scenarioId: 1,
  sessionId: 2,
  title: "제세동 시행 순서",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_12",
  questionText: "제세동 시행 시 올바른 순서는?",
  options: [
    {
      id: "1",
      text: "패드 젤/부착 -> 충전 -> '물러나세요' 확인 -> Shock -> 가슴압박 재개",
      imageUrl: "/images/questions/scenario1/Q20-A.jpg",
    },
    {
      id: "2",
      text: "충전 -> 부착 -> Shock -> 확인",
      imageUrl: "/images/questions/scenario1/Q20-B.jpg",
    },
    {
      id: "3",
      text: "Shock -> 충전 -> 부착",
      imageUrl: "/images/questions/scenario1/Q20-C.jpg",
    },
    {
      id: "4",
      text: "확인 없이 즉시 Shock",
      imageUrl: "/images/questions/scenario1/Q20-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect: "정확합니다! 안전 확인 후 Shock, 즉시 가슴압박 재개입니다.",
  feedbackIncorrect: "순서와 안전 확인이 중요합니다.",
  explanation: "주변인의 안전을 확보하는 것이 중요합니다.",
  nextId: 1210,
};
