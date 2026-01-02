import { Question } from "../../../types";

export const q3070: Question = {
  id: 3070,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "제세동기 준비 (간호사 다)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_3",
  questionText:
    "제세동기가 도착했습니다. 어떤 순서로 제세동기를 준비하고 사용해야 할까요?\nA. 전원을 켠다.\nB. 리듬을 확인한다.\nC. 전극(electrode)를 부착한다.\nD. 200J 충전을 한다.\nE. 처방이 있을 때까지 기다린다.",
  options: [
    {
      id: "1",
      text: "A-C-B",
    },
    {
      id: "2",
      text: "A-C-B-D",
    },
    {
      id: "3",
      text: "A-D",
    },
    {
      id: "4",
      text: "A-E",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 제세동기 준비 순서는 전원을 켜고(A), 전극을 부착한 후(C), 리듬을 확인(B)하는 순서입니다. 충전은 Shockable 리듬이 확인된 후에 진행합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 제세동기 준비는 전원을 켜고(A), 전극을 부착한 후(C), 리듬을 확인(B)하는 순서로 진행해야 합니다. 리듬 확인 전에 충전하거나 처방을 기다리지 않습니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315231/S5_3_ia9edt.mp4`,
  },
};
