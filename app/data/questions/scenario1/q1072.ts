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
    "정답입니다! 호흡의 깊이와 속도가 변하며 무호흡이 반복되는 Cheyne–Stokes breathing 양상입니다.",
  feedbackIncorrect:
    "다시 확인해 보세요. 호흡의 리듬과 깊이가 주기적으로 변하고 있습니다.",
  explanation:
    "체인-스토크스 호흡(Cheyne-Stokes respiration)에 대한 설명입니다.",

  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767390969/cpr-videos/q1071_question.mp4`,
  },
  nextId: 1073,
};
