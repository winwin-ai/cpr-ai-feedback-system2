import { Question } from "../../../types";

export const q3040: Question = {
  id: 3040,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 1",
  title: "호흡양상 확인 (간호사1)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_3_4",
  questionText: "이 환자의 호흡 상태는 어떤 양상을 보이나요?",
  options: [
    {
      id: "1",
      text: "규칙적이고 깊은 정상 호흡을 보임",
    },
    {
      id: "2",
      text: "무호흡을 보임",
    },
    {
      id: "3",
      text: "코골이 소리가 나는 수면성 호흡을 보임",
    },
    {
      id: "4",
      text: "빠르고 얕은 과호흡을 보임",
    },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정확합니다! 환자가 무호흡 상태를 보이고 있습니다. 이는 심정지의 중요한 징후입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 영상에서 환자는 무호흡 상태를 보이고 있습니다. 호흡이 없는 상태는 심정지의 중요한 징후이므로 정확하게 파악해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365854/cpr-videos/q3040_question.mp4`,
  },
};
