import { Question } from "../../../types";

export const q3140: Question = {
  id: 3140,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 2",
  title: "산소공급 (간호사 나)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_4_2",
  questionText:
    "CPR상황에 환자에게 산소공급은 어떻게 적용해야 하나요? 옳은 답으로 짝지어진 것은?\n\n| 환자 자세 | 방법 |\n|-----------|------|\n| ㄱ. head tilt-chin lift 자세 | A. O2 mask 10L 적용 |\n| ㄴ. head up 30도 | B. O2 cannula 3L 적용 |\n| ㄷ. 머리에 베개 받치기 | C. Ambubag-Ambumask결합후 O2 full적용 |",
  options: [
    {
      id: "1",
      text: "ㄱ-A",
    },
    {
      id: "2",
      text: "ㄱ-C",
    },
    {
      id: "3",
      text: "ㄷ-C",
    },
    {
      id: "4",
      text: "ㄴ-B",
    },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정확합니다! head tilt-chin lift 자세는 기도가 직선으로 확보되어 산소 공급을 최적화됩니다. 심정지 상황에서는 Ambubag-Ambumask를 결합하여 O2를 full로 공급해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. Head up이나 베개를 적용할 시에 기도를 부분적으로 막아 산소 공급이 원활하지 않을 수 있습니다. 또한 cannula나 mask를 통한 산소 공급은 자발호흡이 없는 심정지 환자에게는 적합하지 않으며 ambubagging을 통한 최대한의 산소를 공급해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315997/S4_2_ylfao2.mp4`,
  },
};
