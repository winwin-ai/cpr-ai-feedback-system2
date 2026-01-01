import { Question } from "../../../types";

export const q1120: Question = {
  id: 1120,
  displayId: "12",
  scenarioId: 1,
  sessionId: 1,
  title: "가슴압박 자세",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_4",
  questionText: "가슴압박 시 신체 자세로 옳은 것은?",
  options: [
    {
      id: "1",
      text: "팔꿈치를 굽히고 손목의 힘을 이용한다.",
      imageUrl: "/images/questions/scenario1/Q12-A.jpg",
    },
    {
      id: "2",
      text: "손가락 끝으로 흉부를 누른다.",
      imageUrl: "/images/questions/scenario1/Q12-B.jpg",
    },
    {
      id: "3",
      text: "팔을 곧게 펴고 어깨가 환자 흉부 위에 수직이 되도록 한다.",
      imageUrl: "/images/questions/scenario1/Q12-C.jpg",
    },
    {
      id: "4",
      text: "허리를 굽혀 상체만으로 압박한다.",
      imageUrl: "/images/questions/scenario1/Q12-D.jpg",
    },
  ],
  correctOptionId: "3",
  feedbackCorrect:
    "정답입니다! 팔을 곧게 펴고 어깨를 환자 흉부 위에 수직으로 위치시키면 효율적으로 압박할 수 있습니다.",
  feedbackIncorrect:
    "오답입니다. 팔꿈치를 굽히거나 손가락만으로 누르는 방식은 힘이 분산되어 압박 효과가 떨어집니다.",
  explanation: "구조자의 어깨가 환자 가슴 바로 위에 오도록 합니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314973/S1_2_4_h4y1jm.mp4`,
  },
  nextId: 1130,
};
