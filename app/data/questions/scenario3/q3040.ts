import { Question } from "../../../types";

export const q3040: Question = {
  id: 3040,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 2",
  title: "CPR팀 호출 (간호사 나)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_4_1",
  questionText: "CPR상황에 도움 요청을 받았습니다. 어떻게 해야 할까요?",
  options: [
    {
      id: "1",
      text: "가슴압박을 돕는다.",
    },
    {
      id: "2",
      text: "정맥주사라인을 확보한다.",
    },
    {
      id: "3",
      text: "CPR팀과 제세동기 보유부서, 주치의에게 요청한다.",
    },
    {
      id: "4",
      text: "주치의에게 연락하고, 보호자에게 상황을 알린다.",
    },
  ],
  correctOptionId: "3",
  feedbackCorrect:
    "정확합니다! CPR상황이므로 도움 요청을 받았으면 즉시 CPR팀과 주치의를 호출하고 제세동을 위해 제세동기 보유부서에 제세동기를 요청해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. CPR상황에서 도움 요청을 받은 간호사는 CPR팀과 주치의를 호출하는 것이 먼저입니다. 또 먼저 제세동기가 준비될 수 있게 조치를 한 후에 가슴 압박을 돕거나 정맥을 확보하는 등의 대응을 해야합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315915/S4_1_z43cvx.mp4`,
  },
};
