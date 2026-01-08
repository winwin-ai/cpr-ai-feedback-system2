import { Question } from "../../../types";

export const q1072: Question = {
  id: 1072,
  displayId: "7-2",
  scenarioId: 1,
  sessionId: 1,
  title: "호흡 양상 판단 (추가2)",
  mediaType: "video",
  mediaPrompt: "Q07(2)",
  questionText: "이 환자의 호흡 상태는 어떤 양상을 보이나요?",
  options: [
    { id: "1", text: "규칙적이고 깊은 정상 호흡을 보임" },
    {
      id: "2",
      text: "호흡의 깊이와 속도가 주기적으로 변하며 무호흡이 반복됨(Cheyne–Stokes breathing)",
    },
    { id: "3", text: "불규칙하고 간헐적인 헐떡임을 보임" },
    { id: "4", text: "호흡이 전혀 관찰되지 않음" },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 영상에서 보이는 간헐적 헐떡임은 정상 호흡이 아닌 심정지 호흡(agonal breathing)입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 간헐적 헐떡임은 정상 호흡이 아니며 심정지 상태의 특징입니다.",
  explanation:
    "",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767390969/cpr-videos/q1071_question.mp4`,
  },
  nextId: 1073,
};
