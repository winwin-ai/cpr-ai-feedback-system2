import { Question } from "../../../types";

export const q3100: Question = {
  id: 3100,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "E-cart와 공간 준비 (간호사3)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_1",
  questionText:
    "CPR상황입니다. 간호사1이 가슴압박을 하고 있을 때 어떻게 해야 할까요?",
  options: [
    {
      id: "1",
      text: "E-cart를 가져온다.",
      imageUrl: "/images/questions/scenario3/3-3/Q01-A.jpg",
    },
    {
      id: "2",
      text: "가슴압박 교대를 위해 옆에서 기다린다.",
      imageUrl: "/images/questions/scenario3/3-3/Q01-B.jpg",
    },
    {
      id: "3",
      text: "혈압을 측정한다.",
      imageUrl: "/images/questions/scenario3/3-3/Q01-C.jpg",
    },
    {
      id: "4",
      text: "제세동기를 빌려온다.",
      imageUrl: "/images/questions/scenario3/3-3/Q01-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 가슴압박이 시작되었다면 당신은 CPR다음 단계를 위한 준비를 위해 E-cart를 가지고 와야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 가슴압박 중에 혈압 측정은 불필요하며 CPR시 제세동기는 요청받은 보유부서에서 가지고 옵니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315385/S5_1_jc9v9i.mp4`,
  },
};
