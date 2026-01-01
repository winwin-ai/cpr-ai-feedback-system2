import { Question } from "../../../types";

export const q1073: Question = {
  id: 1073,
  displayId: "7-3",
  scenarioId: 1,
  sessionId: 1,
  title: "호흡 양상 판단 (추가3)",
  mediaType: "video",
  mediaPrompt: "Q07(3)",
  questionText: "이 환자의 호흡 상태는 어떤 양상을 보이나요?",
  options: [
    { id: "1", text: "규칙적이고 깊은 정상 호흡을 보임" },
    { id: "2", text: "호흡의 깊이와 속도가 주기적으로 변하며 무호흡이 반복됨" },
    { id: "3", text: "심정지호흡(agonal breathing) 양상을 보임" },
    { id: "4", text: "호흡이 전혀 관찰되지 않음" },
  ],
  correctOptionId: "3",
  feedbackCorrect:
    "정답입니다! 심정지 시 나타나는 간헐적인 헐떡임인 심정지호흡 양상입니다.",
  feedbackIncorrect:
    "다시 확인해 보세요. 정상 호흡이 아닌 비정상적인 헐떡임이 관찰됩니다.",
  explanation:
    "심정지호흡(Agonal breathing)은 즉각적인 심폐소생술이 필요한 상태입니다.",
  localVideoFilename: "Q07(3).mp4",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767099237/cpr-videos/Q07%283%29.mp4`,
  },
  nextId: 1080,
};
