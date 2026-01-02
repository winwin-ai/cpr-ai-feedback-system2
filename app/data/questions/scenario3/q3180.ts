import { Question } from "../../../types";

export const q3180: Question = {
  id: 3180,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "에피네프린 준비 (간호사3)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_9",
  questionText:
    "에피네프린 주사 준비와 관련하여 간호사가 반드시 숙지해야 할 내용으로 옳은 것은?",
  options: [
    {
      id: "1",
      text: "에피네프린은 1mg을 지속주입(infusion)으로 천천히 투여한다",
    },
    {
      id: "2",
      text: "심폐소생술이 진행되는 동안, 정맥주사로 1mg 에피네프린을 bolus 주사하고 생리식염수로 flush 해야한다",
    },
    {
      id: "3",
      text: "Shockable과 Non-shockable 리듬에 상관없이 CPR 시작 즉시 무조건 에피네프린을 준다",
    },
    {
      id: "4",
      text: "에피네프린은 간호사가 독자적으로 판단하여 투여할 수 있다",
    },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정확합니다! 에피네프린은 1mg IV를 3~5분 간격으로 반복 투여하며, 투여 후 생리식염수로 flush해야 합니다. Shockable 리듬은 제세동 후, Non-shockable 리듬은 즉시 투여합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 심정지 상황에서 에피네프린은 1mg을 정맥주사 bolus로 3~5분 간격으로 반복 투여해야하며, 투여 후 생리식염수로 flush 해야합니다. Shockable과 Non-shockable 리듬에 따라 투여 시점이 다르며, 의사 처방에 따라 투여해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365998/cpr-videos/q3180_question.mp4`,
    answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365982/cpr-videos/q3180_answer.mp4`,
  },
};
