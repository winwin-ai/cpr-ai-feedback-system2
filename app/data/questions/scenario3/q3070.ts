import { Question } from "../../../types";

export const q3070: Question = {
  id: 3070,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 2",
  title: "산소공급 (간호사2)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_4_2",
  questionText:
    "CPR상황에 환자에게 산소공급은 어떻게 적용해야 하나요? 올바른 환자 자세와 방법을 연결하세요.",
  questionType: "matching",
  matchingLeftTitle: "환자 자세",
  matchingRightTitle: "방법",
  matchingLeftItems: [
    {
      id: "ㄱ",
      text: "head tilt-chin lift 자세",
    },
    {
      id: "ㄴ",
      text: "head up 30도",
    },
    {
      id: "ㄷ",
      text: "머리에 베개 받치기",
    },
  ],
  matchingRightItems: [
    {
      id: "A",
      text: "O2 mask 10L 적용",
    },
    {
      id: "B",
      text: "O2 cannula 3L 적용",
    },
    {
      id: "C",
      text: "Ambubag-Ambumask 결합 후 O2 full 적용",
    },
  ],
  matchingCorrectPairs: [
    { leftId: "ㄱ", rightId: "C" },
  ],
  options: [],
  correctOptionId: "",
  feedbackCorrect:
    "정확합니다! head tilt-chin lift 자세는 기도가 직선으로 확보되어 산소 공급을 최적화됩니다. 심정지 상황에서는 Ambubag-Ambumask를 결합하여 O2를 full로 공급해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. Head up이나 베개를 적용할 시에 기도를 부분적으로 막아 산소 공급이 원활하지 않을 수 있습니다. 또한 cannula나 mask를 통한 산소 공급은 자발호흡이 없는 심정지 환자에게는 적합하지 않으며 ambubagging을 통한 최대한의 산소를 공급해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365874/cpr-videos/q3070_question.mp4`,
  },
};
