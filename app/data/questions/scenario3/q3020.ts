import { Question } from "../../../types";

export const q3020: Question = {
  id: 3020,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 1",
  title: "도움 요청 (간호사1)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_3_2",
  questionText: "환자의 반응이 없습니다. 어떻게 해야 하나요?",
  options: [
    {
      id: "1",
      text: "도움을 요청한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q02-A.jpg",
    },
    {
      id: "2",
      text: "응급내시경 준비를 계속한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q02-B.jpg",
    },
    {
      id: "3",
      text: "기도확보를 위해 환자를 일으킨다.",
      imageUrl: "/images/questions/scenario3/3-1/Q02-C.jpg",
    },
    {
      id: "4",
      text: "가슴압박을 시작한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q02-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 환자의 반응이 없으면 즉시 주변에 도움을 요청해야 합니다. 여기서 올바른 도움요청 방법은 큰소리로 도움을 외치거나 호출벨을 누르는 것이 가장 빠른 방법입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 다른 처치보다 먼저 도움을 요청해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315593/S3_2_ugitot.mp4`,
  },
};
