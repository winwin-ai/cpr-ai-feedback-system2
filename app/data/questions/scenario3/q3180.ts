import { Question } from "../../../types";

export const q3180: Question = {
  id: 3180,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "에피네프린 준비 (간호사3)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_10",
  questionText: "에피네프린 주사 준비 시 올바른 내용은?",
  options: [
    {
      id: "1",
      text: "1mg을 지속주입(infusion)으로 천천히 투여한다.",
      imageUrl: "/images/questions/scenario3/3-3/Q02-A.jpg",
    },
    {
      id: "2",
      text: "CPR 중 1mg을 정맥주사(bolus)하고 식염수로 flush한다.",
      imageUrl: "/images/questions/scenario3/3-3/Q02-B.jpg",
    },
    {
      id: "3",
      text: "CPR 시작 즉시 무조건 투여한다.",
      imageUrl: "/images/questions/scenario3/3-3/Q02-C.jpg",
    },
    {
      id: "4",
      text: "간호사가 독자적으로 판단하여 투여한다.",
      imageUrl: "/images/questions/scenario3/3-3/Q02-D.jpg",
    },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "에피네프린은 1mg IV를 3~5분 간격으로 반복 투여하며, Shockable 리듬은 제세동 후, Non-shockable 리듬은 즉시 투여합니다",
  feedbackIncorrect:
    "잘못된 선택입니다. 심정지 상황에서 에피네프린은 1mg을 정맥주사 bolus로 3~5분 간격으로 반복 투여해야하며, 투여 후 생리식염수로 flush 해야합니다. Shockable과 Non-shockable 리듬에 따라 투여 시점이 다릅니다. Shockable 리듬은 제세동 후 이어지는 가슴압박 시간에, Non-shockable 리듬은 가능한 한 빨리 투여합니다. 또한 의사 처방에 따라 투여해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316168/S5_10_qr5wzd.mp4`,
  },
};
