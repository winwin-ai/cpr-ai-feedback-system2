import { Question } from "../../../types";

export const q1071: Question = {
  id: 1071,
  displayId: "7-1",
  scenarioId: 1,
  sessionId: 1,
  title: "호흡 양상 판단 (추가1)",
  mediaType: "video",
  mediaPrompt: "Q07(1)",
  questionText: "이 환자의 호흡 상태는 어떤 양상을 보이나요?",
  options: [
    { id: "1", text: "불규칙하고 간헐적인 헐떡임을 보임" },
    { id: "2", text: "호흡의 깊이와 속도가 주기적으로 변하며 무호흡이 반복됨" },
    { id: "3", text: "규칙적이고 깊은 정상 호흡을 보임" },
    { id: "4", text: "호흡이 전혀 관찰되지 않음" },
  ],
  correctOptionId: "3",
  feedbackCorrect: "정답입니다! 규칙적이고 깊은 정상 호흡을 보이고 있습니다.",
  feedbackIncorrect:
    "다시 확인해 보세요. 환자의 가슴 움직임과 깊이가 규칙적입니다.",
  explanation: "정상 호흡 양상입니다.",

  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767390969/cpr-videos/q1071_question.mp4`,
  },
  nextId: 1072,
};
