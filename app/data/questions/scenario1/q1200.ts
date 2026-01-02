import { Question } from "../../../types";

export const q1200: Question = {
  id: 1200,
  displayId: "20",
  scenarioId: 1,
  sessionId: 1,
  title: "제세동 시행 순서",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_12",
  questionText: "제세동이 필요할 때 올바른 순서로 묶인 것은?",
  questionType: "dragdrop",
  dragItems: [
    {
      id: "A",
      label: "A. 패들에 젤을 바른다",
      imageUrl: "/images/questions/scenario1/Q20-A.jpg",
    },
    {
      id: "B",
      label: "B. 제세동기 충전",
      imageUrl: "/images/questions/scenario1/Q20-B.jpg",
    },
    {
      id: "C",
      label: "C. \"물러나세요!\"라고 외쳐 주변 접촉 차단",
      imageUrl: "/images/questions/scenario1/Q20-C.jpg",
    },
    {
      id: "D",
      label: "D. Shock 후 가슴압박 재개",
      imageUrl: "/images/questions/scenario1/Q20-D.jpg",
    },
  ],
  correctOrder: ["A", "B", "C", "D"],
  options: [],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 패들에 젤 바르기(A) → 충전(B) → 물러나세요 외치기(C) → Shock 후 가슴압박 재개(D) 순서입니다.",
  feedbackIncorrect:
    "잘못된 순서입니다. A → B → C → D 순서가 올바릅니다.",
  explanation: "제세동 시 안전 확인 후 Shock, 즉시 가슴압박 재개가 중요합니다.",
    videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365795/cpr-videos/q1200_question.mp4`,
    answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365781/cpr-videos/q1200_answer.mp4`,
  },
  nextId: 1210,
};
