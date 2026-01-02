import { Question } from "../../../types";

export const q3120: Question = {
  id: 3120,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "제세동기 준비 (간호사3)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_3",
  questionText:
    "제세동기가 도착했습니다. 어떤 순서로 제세동기를 준비하고 사용해야 할까요?",
  questionType: "dragdrop",
  dragItems: [
    {
      id: "A",
      label: "A. 전원을 켠다",
      imageUrl: "/images/questions/scenario1/Q13-A.jpg",
    },
    {
      id: "B",
      label: "B. 리듬을 확인한다",
      imageUrl: "/images/questions/scenario1/Q13-B.jpg",
    },
    {
      id: "C",
      label: "C. 전극(electrode)를 부착한다",
      imageUrl: "/images/questions/scenario1/Q13-C.jpg",
    },
    {
      id: "D",
      label: "D. 200J 충전을 한다",
      imageUrl: "/images/questions/scenario1/Q13-D.jpg",
    },
  ],
  correctOrder: ["A", "C", "B"],
  options: [],
  correctOptionId: "",
  feedbackCorrect:
    "정확합니다! 제세동기 준비 순서는 전원을 켜고(A), 전극을 부착한 후(C), 리듬을 확인(B)하는 순서입니다. 충전은 Shockable 리듬이 확인된 후에 진행합니다.",
  feedbackIncorrect:
    "잘못된 순서입니다. 제세동기 준비는 전원을 켜고(A), 전극을 부착한 후(C), 리듬을 확인(B)하는 순서로 진행해야 합니다. 리듬 확인 전에 충전하거나 처방을 기다리지 않습니다.",
  explanation:
    "전원 → 전극 부착 → 리듬 확인 순서입니다. 충전은 리듬 확인 후 Shockable 리듬일 때 진행합니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365916/cpr-videos/q3120_question.mp4`,
  },
};
