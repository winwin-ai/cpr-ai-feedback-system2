import { Question } from "../../../types";

export const q1220: Question = {
  id: 1220,
  displayId: "22",
  scenarioId: 1,
  sessionId: 1,
  title: "ROSC 확인",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_2_14",
  questionText:
    "환자의 ROSC를 확인해야합니다. 다음 중 ROSC(자발순환 회복)의 징후로 가장 올바른 것은 무엇인가요?",
  options: [
    { id: "1", text: "Shock 직후 심전도 파형의 일시적 변화" },
    { id: "2", text: "자발 맥박이 돌아오고 혈압이 측정되는 것" },
    { id: "3", text: "가슴압박 시 피부색이 잠시 좋아지는 것" },
    { id: "4", text: "환자의 동공이 확장된 상태로 유지되는 것" },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정확합니다! 맥박이 만져지고 혈압이 측정되면 ROSC 상태입니다.",
  feedbackIncorrect: "다른 징후들은 확실한 ROSC 증거가 아닙니다.",
  explanation: "교육이 종료됩니다. 수고하셨습니다.",
    videoPaths: {
        answer: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314710/S1_2_9_iso4al.mp4`,
    },
};
