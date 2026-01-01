import { Question } from "../../../types";

export const q1130: Question = {
  id: 1130,
  displayId: "13",
  scenarioId: 1,
  sessionId: 1,
  title: "제세동기 준비 순서",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_5",
  questionText: "제세동기를 준비합니다. 올바른 순서는?",
  options: [
    {
      id: "1",
      text: "전원 켜기 -> 전극 부착 -> 리듬 확인 -> 충전",
      imageUrl: "/images/questions/scenario1/Q13-A.jpg",
    },
    {
      id: "2",
      text: "전극 부착 -> 전원 켜기 -> 충전 -> 리듬 확인",
      imageUrl: "/images/questions/scenario1/Q13-B.jpg",
    },
    {
      id: "3",
      text: "충전 -> 전원 켜기 -> 전극 부착",
      imageUrl: "/images/questions/scenario1/Q13-C.jpg",
    },
    {
      id: "4",
      text: "전원 켜기 -> 처방 대기",
      imageUrl: "/images/questions/scenario1/Q13-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 제세동기는 전원을 켜고, 전극을 부착한 후 리듬을 확인해야 합니다.",
  feedbackIncorrect:
    "잘못된 순서입니다. 전원 켜기 -> 패드 부착 -> 리듬 확인 순서가 표준입니다.",
  explanation: "전원 → 패드 → 리듬 → 충전 순서입니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315481/S1_2_5_zayh1c.mp4`,
  },
  nextId: 1140,
};
