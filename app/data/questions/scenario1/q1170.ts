import { Question } from "../../../types";

export const q1170: Question = {
  id: 1170,
  displayId: "17",
  scenarioId: 1,
  sessionId: 1,
  title: "Asystole 약물 투여",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_9",
  questionText:
    "Asystole 심정지 환자에서 리듬이 확인되었습니다. 정맥로가 확보된 경우 에피네프린은 어떻게 투여해야 할까요? (상황: Asystole, Non-shockable Rhythm)",
  options: [
    { id: "1", text: "제세동 후 투여하며 3~5분 간격으로 반복 주사한다." },
    {
      id: "2",
      text: "가능한 한 빨리 투여하며 3~5분 간격으로 반복 주사한다.",
    },
    { id: "3", text: "자발순환 회복 후 투여한다." },
    { id: "4", text: "Shockable 리듬에서만 투여한다." },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정답입니다! 비충격 리듬은 제세동이 필요 없으므로 CPR 시작 후 정맥로가 확보되면 즉시 에피네프린 투여해야하며, 자발순환이 회복되거나 전문소생술이 끝날 때까지 3~5분 간격으로 반복 투여해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. Asystole은 Non-shockable 리듬으로 제세동이 필요없고 에피네프린은 가능한 한 빨리 투여해야 합니다.",
  explanation: "가급적 빠른 투여가 권장됩니다.",
    videoPaths: {
        question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314878/S1_2_5_dmebob.mp4`,
        answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314811/S1_2_6_ep5fxi.mp4`,
    },
  nextId: 1180,
};
