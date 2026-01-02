import { Question } from "../../../types";

export const q1140: Question = {
  id: 1140,
  displayId: "14",
  scenarioId: 1,
  sessionId: 1,
  title: "패드 부착 위치",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_6",
  questionText:
    "전극(electrode; magnerode)을 성인 환자에게 부착할 때 올바른 위치는?",
  options: [
    {
      id: "1",
      text: "오른쪽 어깨와 왼쪽 어깨.",
      imageUrl: "/images/questions/scenario1/Q14-A.jpg",
    },
    {
      id: "2",
      text: "오른쪽 쇄골 아래, 오른쪽 갈비뼈 아래와 왼쪽 갈비뼈 아래.",
      imageUrl: "/images/questions/scenario1/Q14-B.jpg",
    },
    {
      id: "3",
      text: "오른쪽 쇄골 아래, 왼쪽 쇄골 아래와 왼쪽 갈비뼈 아래.",
      imageUrl: "/images/questions/scenario1/Q14-C.jpg",
    },
    {
      id: "4",
      text: "목 부위와 배꼽 부위.",
      imageUrl: "/images/questions/scenario1/Q14-D.jpg",
    },
  ],
  correctOptionId: "3",
  feedbackCorrect:
    "정답입니다! 전극은 양쪽 쇄골 아래와 왼쪽 갈비뼈 아래에 부착해야 합니다.",
  feedbackIncorrect:
    "잘못된 위치입니다. 양 어깨나 목 부위, 갈비뼈 아래는 부착 위치가 아닙니다. 표준 위치를 기억하세요.",
  explanation: "Anterior-Lateral 위치에 부착합니다.",
    videoPaths: {
        answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314973/S1_2_4_h4y1jm.mp4`,
    },
  nextId: 1150,
};
