import { Question } from "../../../types";

export const q1190: Question = {
  id: 1190,
  displayId: "19",
  scenarioId: 1,
  sessionId: 1,
  title: "VF 확인 시 행동",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_11",
  questionText: "V-fib을 확인한 당신은 어떻게 해야 하나요?",
  options: [
    { id: "1", text: "제세동을 준비 한다." },
    { id: "2", text: "가슴압박을 지속한다." },
    { id: "3", text: "응급약물을 준비한다." },
    { id: "4", text: "혈압을 측정 한다." },
  ],
  correctOptionId: "1",
  feedbackCorrect: "정확합니다! Shockable 리듬이므로 제세동이 우선입니다.",
  feedbackIncorrect: "제세동이 가장 시급한 처치입니다.",
  explanation: "심실세동은 제세동이 유일한 교정 방법입니다.",
    videoPaths: {
        question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765288661/VF_r1yv9r.mp4`,
    },
  nextId: 1200,
};
