import { Question } from "../../../types";

export const q2030: Question = {
  id: 2030,
  scenarioId: 2,
  sessionId: 1,
  title: "맥박/호흡 확인",
  mediaType: "video",
  mediaPrompt: "Scenario2_Video_2_3",
  questionText: "주변에 도움을 요청한 후, 다음 행동은?",
  options: [
    {
      id: "1",
      text: "경동맥 맥박과 호흡을 10초 이내로 확인한다.",
      imageUrl: "/images/questions/scenario2/Q03-A.jpg",
    },
    {
      id: "2",
      text: "심전도 모니터를 부착한다.",
      imageUrl: "/images/questions/scenario2/Q03-B.jpg",
    },
    {
      id: "3",
      text: "정맥로 확보를 시도한다.",
      imageUrl: "/images/questions/scenario2/Q03-C.jpg",
    },
    {
      id: "4",
      text: "환자를 침대로 옮긴다.",
      imageUrl: "/images/questions/scenario2/Q03-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 심정지 여부를 판단하기 위해 도움 요청 후에는 반드시 10초 이내에 맥박과 호흡을 동시에 확인해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 모니터 부착이나 IV 확보보다 먼저 환자가 심정지 상태인지 확인하는 것이 중요합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316458/S2_3_dvrtt1.mp4`,
  },
};
