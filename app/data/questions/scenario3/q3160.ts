import { Question } from "../../../types";

export const q3160: Question = {
  id: 3160,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 2",
  title: "백마스크 환기 (간호사 나)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_4_4",
  questionText:
    "효과적인 백마스크 환기(bag-mask ventilation)의 방법은 무엇인가요?",
  options: [
    {
      id: "1",
      text: "E-C기법으로 Ambumask를 환자에게 밀착시키고, 6초에 1번씩 Ambubag의 약1/4을 짠다",
    },
    {
      id: "2",
      text: "Ambumask를 환자에게 밀착시키고, Ambubag을 2초에 1번씩 짠다.",
    },
    {
      id: "3",
      text: "E-C기법으로 Ambumask를 환자에게 밀착시키고, 6초에 1번씩 Ambubag을 최대한 세게 양손으로 짠다.",
    },
    {
      id: "4",
      text: "환자의 머리를 최대한 젖힌 후, 6초에 1번씩 Ambubag의 약 1/2을 짠다.",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! E-C기법은 ambumask를 환자의 얼굴에 효과적으로 밀착시키고, ambubag을 압박하여 산소를 공급할 수 있게 합니다. ambubag은 6초에 1번씩 1/4의 양만 짜는 것이 심정지 환자에게 적절한 산소 공급 방법입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 환자의 머리를 과도하게 젖히거나 ambumask만을 밀착시키면 산소가 적절하게 제공되지 않을 수 있습니다. 또한 ambubag을 너무 빠른 간격으로 강한 압력을 주어 짜면 산소가 폐에 제대로 전달되지 않거나 폐에 손상을 줄 수 있습니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: ``,
  },
};
