import { Question } from "../../../types";

export const q1100: Question = {
  id: 1100,
  displayId: "10",
  scenarioId: 1,
  sessionId: 1,
  title: "가슴압박 깊이",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_2",
  questionText: "가슴압박의 올바른 방법은 무엇인가요?",
  options: [
    {
      id: "1",
      text: "5cm 깊이로 압박하고 압박 후에는 흉곽이 완전히 이완되도록 한다.",
    },
    {
      id: "2",
      text: "5cm 깊이로 압박하고 이완되지 않게 빠르게 압박을 지속한다.",
    },
    { id: "3", text: "10cm 이상 깊이로 압박한다." },
    { id: "4", text: "깊이와 상관없이 빠르게만 누른다." },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정답입니다! 5cm 깊이는 성인에게 적절한 심장 압박 깊이입니다. 그리고 압박 후에는 효과적인 순환을 위해 흉곽을 완전히 이완시키는 것(recoil)이 중요합니다.",
  feedbackIncorrect:
    "오답입니다. 5cm보다 얕거나 깊으면 효과적인 순환이 이루어지지 않거나 손상 위험이 있으며, 완전 이완(recoil) 없이 압박만 지속하면 효과적인 순환이 어렵습니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315022/S1_2_2_qtbre1.mp4`,
  },
  nextId: 1110,
};
