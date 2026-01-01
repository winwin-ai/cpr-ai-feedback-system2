import { Question } from "../../../types";

export const q1190: Question = {
  id: 1190,
  displayId: "19",
  scenarioId: 1,
  sessionId: 2,
  title: "VF 확인 시 행동",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_11",
  questionText: "VF가 확인되었습니다. 우선적인 행동은?",
  options: [
    {
      id: "1",
      text: "즉시 제세동(Shock)을 준비/시행한다.",
      imageUrl: "/images/questions/scenario1/Q19-A.jpg",
    },
    {
      id: "2",
      text: "가슴압박만 계속한다.",
      imageUrl: "/images/questions/scenario1/Q19-B.jpg",
    },
    {
      id: "3",
      text: "에피네프린을 먼저 투여한다.",
      imageUrl: "/images/questions/scenario1/Q19-C.jpg",
    },
    {
      id: "4",
      text: "기도 삽관을 한다.",
      imageUrl: "/images/questions/scenario1/Q19-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect: "정확합니다! Shockable 리듬이므로 제세동이 우선입니다.",
  feedbackIncorrect: "제세동이 가장 시급한 처치입니다.",
  explanation: "심실세동은 제세동이 유일한 교정 방법입니다.",
  nextId: 1200,
};
