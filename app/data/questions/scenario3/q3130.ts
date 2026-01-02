import { Question } from "../../../types";

export const q3130: Question = {
  id: 3130,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "흡인 준비 (간호사3)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_4",
  questionText:
    "CPR상황에 기도확보 유지를 위해 기도내 분비물을 흡인해야 합니다. 올바른 흡인방법은 무엇인가요?",
  options: [
    {
      id: "1",
      text: "흡인기를 벽에 연결한 뒤 압력을 확인하고, 석션팁을 연결하여 크린조를 준비한다.",
    },
    {
      id: "2",
      text: "흡인기를 환자의 기도에 삽입해두고 필요할 때마다 흡인을 시작한다.",
    },
    {
      id: "3",
      text: "흡인기를 벽에 연결한 뒤 압력을 최대한 강하게 설정하여 굵은 분비물을 제거한다.",
    },
    {
      id: "4",
      text: "흡인기를 벽에 연결한 뒤 환자기도에 삽입하여 분비물이 잘 흡인되는지 압력을 확인한다.",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 흡인 준비는 흡인기를 벽에 연결한 뒤 적절한 압력을 확인하고, 석션팁을 연결하여 크린조를 준비하는 것이 올바른 방법입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 흡인기를 기도에 미리 삽입해두거나 압력을 최대한 강하게 설정하는 것은 적절하지 않습니다. 적절한 압력을 확인하고 석션팁을 연결하여 준비해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315530/S5_4_vpkths.mp4`,
  },
};
