import { Question } from "../../../types";

export const q3010: Question = {
  id: 3010,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 1",
  title: "반응 확인 (간호사1)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_3_1",
  questionText: "환자가 침상에 쓰러졌습니다. 어떻게 하시겠습니까?",
  options: [
    {
      id: "1",
      text: "환자의 반응을 확인한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q01-A.jpg",
    },
    {
      id: "2",
      text: "선임간호사에게 알려서 도움을 요청한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q01-B.jpg",
    },
    {
      id: "3",
      text: "쓰러진 환자를 바른 자세로 눕힌다.",
      imageUrl: "/images/questions/scenario3/3-1/Q01-C.jpg",
    },
    {
      id: "4",
      text: "수혈을 위해 정맥주사라인을 확보한다.",
      imageUrl: "/images/questions/scenario3/3-1/Q01-D.jpg",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! 환자의 반응을 확인하는 것이 초기 대응의 첫 단계입니다. 여기서 올바른 반응 확인 방법은 어깨를 두드리며 큰소리로 묻는 것입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 환자를 옮기거나 라인을 확보하기보다 먼저 환자가 반응하는지 확인해야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365844/cpr-videos/q3010_question.mp4`,
  },
};
