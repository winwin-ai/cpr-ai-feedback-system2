import { Question } from "../../../types";

export const q1210: Question = {
  id: 1210,
  displayId: "21",
  scenarioId: 1,
  sessionId: 1,
  title: "VF 약물 투여 시점",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_13",
  questionText:
    "심정지 환자에서 심실세동(VF)이 확인되었습니다. 이때 에피네프린 투여 시점은 언제가 적절한가요? (VF, Shockable Rhythm 상황)",
  options: [
    { id: "1", text: "심정지가 확인되면 즉시 투여한다" },
    { id: "2", text: "제세동하기 전에 먼저 투여한다" },
    {
      id: "3",
      text: "제세동을 한 뒤, 이어지는 가슴압박 시간에 투여하며, 3~5분 간격으로 반복 주사한다.",
    },
    { id: "4", text: "Shockable 리듬에서는 투여하지 않는다" },
  ],
  correctOptionId: "3",
  feedbackCorrect:
    "정답입니다. 제세동 후 가슴압박 시간에 투여하며, 3~5분 간격으로 반복합니다.",
  feedbackIncorrect: "에피네프린 투여 시점을 다시 확인하세요.",
  explanation: "Shockable 리듬에서는 제세동 후 가슴압박 중에 투여합니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765288661/VF_r1yv9r.mp4`,
  },
  nextId: 1220,
};
