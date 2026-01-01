import { Question } from "../../../types";

export const q1080: Question = {
  id: 1080,
  displayId: "8",
  scenarioId: 1,
  sessionId: 1,
  title: "초기 조치 결정",
  mediaType: "video",
  mediaPrompt: "1_4_FollowUp",
  questionText: "환자의 호흡을 고려했을 때, 당신은 어떤 조치를 취해야 할까요?",
  options: [
    {
      id: "1",
      text: "E-cart를 가져온다.",
      imageUrl: "/images/questions/scenario1/Q08-A.jpg",
    },
    {
      id: "2",
      text: "주치의에게 연락한 후 처방을 기다린다.",
      imageUrl: "/images/questions/scenario1/Q08-B.jpg",
    },
    {
      id: "3",
      text: "모니터를 가지고 와서 환자에게 부착한다.",
      imageUrl: "/images/questions/scenario1/Q08-C.jpg",
    },
    {
      id: "4",
      text: "가슴압박을 시작한다.",
      imageUrl: "/images/questions/scenario1/Q08-D.jpg",
    },
  ],
  correctOptionId: "4",
  feedbackCorrect:
    "정답입니다! 심정지 호흡이 관찰되면 즉시 가슴압박을 시작해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 주치의 지시를 기다리거나 모니터 부착보다 가슴압박을 바로 시작해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  nextId: 1085,
};
