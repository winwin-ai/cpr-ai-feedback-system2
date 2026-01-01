import { Question } from "../../../types";

export const q3070: Question = {
  id: 3070,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 2",
  title: "산소 공급 (간호사2)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_4_3",
  questionText: "CPR 상황에서 산소 공급 방법으로 옳은 짝은?",
  options: [
    {
      id: "1",
      text: "Head tilt-chin lift - O2 mask 10L",
      imageUrl: "/images/questions/scenario3/3-2/Q02-A.jpg",
    },
    {
      id: "2",
      text: "Head tilt-chin lift - Ambubag O2 full",
      imageUrl: "/images/questions/scenario3/3-2/Q02-B.jpg",
    },
    {
      id: "3",
      text: "머리에 베개 - Ambubag O2 full",
      imageUrl: "/images/questions/scenario3/3-2/Q02-C.jpg",
    },
    {
      id: "4",
      text: "Head up 30도 - O2 cannula 3L",
      imageUrl: "/images/questions/scenario3/3-2/Q02-D.jpg",
    },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정확합니다! head tilt-chin lift 자세는 기도가 직선으로 확보되어 산소 공급을 최적화됩니다. 심정지 상황에서는 sniffing자세를 취한 후 ambubagging을 통해 O2를 full로 공급하여 최대한의 산소를 공급해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. Head up이나 베개를 적용할 시에 기도를 부분적으로 막아 산소 공급이 원활하지 않을 수 있습니다. 또한 cannula나 mask를 통한 산소 공급은 자발호흡이 없는 심정지 환자에게는 적합하지 않으며 ambubagging을 통한 최대한의 산소를 공급해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316225/S4_3_w1wq5g.mp4`,
  },
};
