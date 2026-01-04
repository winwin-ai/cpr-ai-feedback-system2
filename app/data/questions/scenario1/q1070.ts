import { Question } from "../../../types";

export const q1070: Question = {
  id: 1070,
  displayId: "7",
  scenarioId: 1,
  sessionId: 1,
  title: "호흡 양상 판단",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_1_4",
  questionText: "이 환자의 호흡 상태는 어떤 양상을 보이나요?",
  options: [
    { id: "1", text: "규칙적이고 깊은 정상 호흡을 보임." },
    {
      id: "2",
      text: "심정지호흡을 보임 또는 간헐적 헐떡임(agonal breathing) 양상을 보임.",
    },
    { id: "3", text: "코골이 소리가 나는 수면성 호흡을 보임." },
    { id: "4", text: "빠르고 얕은 과호흡을 보임." },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정확합니다! 영상에서 보이는 간헐적 헐떡임은 정상 호흡이 아닌 심정지 호흡(agonal breathing)입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 간헐적 헐떡임은 정상 호흡이 아니며 심정지 상태의 특징입니다.",
  explanation: "추가 설명이 없습니다.",

  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767390962/cpr-videos/q1070_question.mp4`,
  },
  nextId: 1080,
};
