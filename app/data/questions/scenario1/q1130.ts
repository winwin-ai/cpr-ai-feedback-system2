import { Question } from "../../../types";

export const q1130: Question = {
  id: 1130,
  displayId: "13",
  scenarioId: 1,
  sessionId: 1,
  title: "제세동기 준비 순서",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_5",
  questionText:
    "가슴압박을 교대한 후, 당신은 제세동기를 준비해야 합니다. 어떤 순서로 제세동기를 준비하고 사용해야 할까요?",
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
      label: "C. 전극(electrode; magnerode)을 부착한다",
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
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 제세동기는 전원을 켜고 전극을 부착한 후 리듬을 확인해야 합니다.",
  feedbackIncorrect:
    "잘못된 순서입니다. 전원을 먼저 켜고 전극 부착 후 리듬 확인, 처방이 있을시에 충전해야 합니다.",
  explanation:
    "전원 → 패드 → 리듬 확인 순서입니다. 충전은 리듬 확인 후 Shockable 리듬일 때 진행합니다.",
  videoPaths: {
    answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315418/S1_2_3_hkmklv.mp4`,
  },
  nextId: 1140,
};
