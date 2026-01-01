import { Question } from "../../../types";

export const q1040: Question = {
  id: 1040,
  displayId: "4",
  scenarioId: 1,
  sessionId: 1,
  title: "도움 요청 방법",
  mediaType: "video",
  mediaPrompt: "1_2_FollowUp",
  questionText: "도움 요청을 어떻게 해야 할까요?",
  options: [
    {
      id: "1",
      text: "간호사실에 가서 상황을 보고한다.",
      imageUrl: "/images/questions/scenario1/Q04-A.jpg",
    },
    {
      id: "2",
      text: "내 핸드폰으로 선임간호사에게 전화한다.",
      imageUrl: "/images/questions/scenario1/Q04-B.jpg",
    },
    {
      id: "3",
      text: "보호자에게 간호사를 불러오라고 한다.",
      imageUrl: "/images/questions/scenario1/Q04-C.jpg",
    },
    {
      id: "4",
      text: "호출벨을 눌러 주변에 알린다.",
      imageUrl: "/images/questions/scenario1/Q04-D.jpg",
    },
  ],
  correctOptionId: "4",
  feedbackCorrect: "도움요청을 위해 호출벨을 누르는 것이 가장 빠른 방법입니다.",
  feedbackIncorrect:
    "전화나 간접적인 요청보다 즉각적으로 도움요청을 위해 호출벨을 눌러야 신속 대응이 가능합니다.",
  explanation: "추가 설명이 없습니다.",
  nextId: 1050,
};
