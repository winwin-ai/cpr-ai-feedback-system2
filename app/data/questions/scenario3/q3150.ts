import { Question } from "../../../types";

export const q3150: Question = {
  id: 3150,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "Laryngoscope 준비 (간호사3)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_6",
  questionText:
    "기관삽관을 위해 laryngoscope와 blade를 준비하는 가장 적절한 방법은 무엇인가요?",
  options: [
    {
      id: "1",
      text: "핸들과 blade를 결합하지 않고 필요 시 조립한다.",
    },
    {
      id: "2",
      text: "blade를 선택한 후 핸들과 결합하여 광원이 정상적으로 작동하는지 확인한다.",
    },
    {
      id: "3",
      text: "멸균 blade는 오염 방지를 위해 미리 개봉하지 않고 의사가 달라고 할 때 결합해서 준다.",
    },
    {
      id: "4",
      text: "blade 크기는 소아용도 우선 준비해 다양한 상황에 대비한다.",
    },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정확합니다! 기관삽관 전에 blade를 선택하여 핸들과 결합하고, 광원이 정상적으로 작동하는지 미리 확인해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 응급 상황에서는 미리 blade를 핸들과 결합하여 광원이 정상 작동하는지 확인해두어야 합니다. 필요 시 조립하거나 의사가 요청할 때 준비하면 시간 지연이 발생할 수 있습니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315786/S5_6_mrsqjy.mp4`,
  },
};
