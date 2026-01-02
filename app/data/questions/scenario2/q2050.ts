import { Question } from "../../../types";

export const q2050: Question = {
  id: 2050,
  scenarioId: 2,
  sessionId: 1,
  title: "적절한 조치",
  mediaType: "video",
  mediaPrompt: "Scenario2_Video_2_5",
  questionText: "환자는 정상호흡이나 의식이 없습니다. 적절한 조치는?",
  options: [
    {
      id: "1",
      text: "활력징후를 측정한 후, 주치의에게 즉시 보고한다.",
      imageUrl: "/images/questions/scenario2/Q05-A.jpg",
    },
    {
      id: "2",
      text: "CPR이 필요한 상황이므로 가슴압박을 시행한다.",
      imageUrl: "/images/questions/scenario2/Q05-B.jpg",
    },
    {
      id: "3",
      text: "환자가 깰 때까지 지켜본다.",
      imageUrl: "/images/questions/scenario2/Q05-C.jpg",
    },
    {
      id: "4",
      text: "보호자를 통해 병력과 과거 약물 정보를 파악한다.",
      imageUrl: "/images/questions/scenario2/Q05-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 환자는 심정지가 아니지만 의식이 없으므로, 기도를 유지하고 활력징후를 측정하며 즉시 의료진에게 보고하는 것이 적절한 조치입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 정상 호흡이 있어 CPR은 필요하지 않으며, 단순히 지켜보거나 보호자에게 병력을 묻는 것은 시급성을 간과한 대응입니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365837/cpr-videos/q2050_question.mp4`,
  },
};
