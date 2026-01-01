import { Question } from "../../../types";

export const q1210: Question = {
  id: 1210,
  displayId: "21",
  scenarioId: 1,
  sessionId: 1,
  title: "VF 약물 투여 시점",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_13",
  questionText: "Shockable 리듬(VF/VT)에서 에피네프린 투여 시점은?",
  options: [
    { id: "1", text: "첫 번째 제세동 후" },
    {
      id: "2",
      text: "두 번째 제세동 후, 지속되는 가슴압박 기간 중",
    },
    { id: "3", text: "즉시 투여" },
    { id: "4", text: "세 번째 제세동 후" },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정답입니다. Shockable 리듬에서는 2차 제세동 실패 후 투여를 고려합니다.",
  feedbackIncorrect: "타이밍이 맞지 않습니다.",
  explanation: "가이드라인에 따라 투여 시점을 잡습니다.",
  nextId: 1220,
};
