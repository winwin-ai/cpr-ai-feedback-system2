import { Question } from "../../../types";

export const q3170: Question = {
  id: 3170,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "E-tube Cuff 확인 (간호사3)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_8",
  questionText:
    "기관삽관 전에 Endotracheal tube를 준비할 때 미리 확인해야 할 것은 무엇입니까?",
  options: [
    {
      id: "1",
      text: "적절한 사이즈의 E-tube의 cuff에 10cc 주사기로 ballooning해서 누출 여부를 확인하고, 공기를 제거한 뒤 준비한다.",
    },
    {
      id: "2",
      text: "적절한 사이즈의 E-tube의 cuff에 10cc주사기로 ballooning한채로 준비한다.",
    },
    {
      id: "3",
      text: "감염방지를 위해 멸균 포장 채로 E-tube안에 stylet만 삽입한채 준비하고, 기관 삽관 직전에 꺼낸다.",
    },
    {
      id: "4",
      text: "ballooning을 위한 10cc 주사기를 준비하고, 감염방지를 위해 cuff확인은 삽관 전 미리 시행하지 않는다.",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! E-tube 준비 시 적절한 사이즈를 선택하고, cuff에 10cc 주사기로 ballooning하여 누출 여부를 확인한 후 공기를 제거하고 준비해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. E-tube 준비 시 cuff의 누출 여부를 미리 확인하는 것이 중요합니다. ballooning 상태로 두거나 확인을 하지 않으면 삽관 후 문제가 발생할 수 있습니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315852/S5_8_smzbkf.mp4`,
  },
};
