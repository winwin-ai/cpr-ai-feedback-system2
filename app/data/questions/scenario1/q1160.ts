import { Question } from "../../../types";

export const q1160: Question = {
  id: 1160,
  displayId: "16",
  scenarioId: 1,
  sessionId: 1,
  title: "Asystole 시 행동",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_8",
  questionText: "Asystole을 확인한 경우에 어떻게 해야 하나요?",
  options: [
    {
      id: "1",
      text: "제세동을 준비한다.",
      imageUrl: "/images/questions/scenario1/Q16-A.jpg",
    },
    {
      id: "2",
      text: "가슴압박을 지속한다.",
      imageUrl: "/images/questions/scenario1/Q16-B.jpg",
    },
    {
      id: "3",
      text: "응급약물을 준비한다.",
      imageUrl: "/images/questions/scenario1/Q16-C.jpg",
    },
    {
      id: "4",
      text: "혈압을 측정한다.",
      imageUrl: "/images/questions/scenario1/Q16-D.jpg",
    },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정답입니다! Asystole리듬은 제세동 대상이 아니므로 가슴압박을 지속해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. Asystole은 Non-shockable 리듬으로 제세동 대상이 아닙니다.",
  explanation: "CPR을 2분간 지속합니다.",
    videoPaths: {
        question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767270173/cpr-videos/Asystole.mp4`,
    },
  nextId: 1170,
};
