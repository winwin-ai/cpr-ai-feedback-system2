import { Question } from "../../../types";

export const q2040: Question = {
  id: 2040,
  scenarioId: 2,
  sessionId: 1,
  title: "호흡 양상 판단",
  mediaType: "video",
  mediaPrompt: "Scenario2_Video_2_4",
  questionText: "이 환자의 호흡 상태는 어떤 양상을 보이나요?",
  options: [
    { id: "1", text: "규칙적인 정상 호흡을 보임" },
    { id: "2", text: "심정지 호흡(agonal breathing)을 보임" },
    { id: "3", text: "코골이 소리가 나는 수면성 호흡을 보임" },
    { id: "4", text: "빠르고 얕은 과호흡 양상을 보임" },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 이 환자는 규칙적이고 깊은 정상 호흡을 보이고 있어 심정지 상황은 아닙니다..",
  feedbackIncorrect:
    "잘못된 판단입니다. 간헐적이거나 비정상적인 호흡과 달리, 이 영상은 규칙적이고 깊은 정상 호흡을 나타냅니다. 심정지가 아님을 인지해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365827/cpr-videos/q2040_question.mp4`,
    answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767372471/cpr-videos/q2040_normal_question.mp4`,
  },
};
