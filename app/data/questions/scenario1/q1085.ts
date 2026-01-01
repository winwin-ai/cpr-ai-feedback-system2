import { Question } from "../../../types";

export const q1085: Question = {
  id: 1085,
  scenarioId: 1,
  sessionId: 1,
  title: "세션 2 시작",
  mediaType: "video",
  mediaPrompt: "Scenario1_Video_1_5",
  questionText: "초기 대응이 끝났습니다. 전문 소생술(세션 2)을 시작합니다.",
  options: [{ id: "1", text: "세션 2 시작하기" }],
  correctOptionId: "1",
  feedbackCorrect:
    "세션 2로 진입합니다. 가슴압박 및 제세동 소생술을 수행합니다.",
  feedbackIncorrect: "",
  explanation: "세션 1 종료 및 세션 2 연결 영상입니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314530/S1_5_drwwcm.mp4`,
  },
  isTransition: true,
  nextId: 1090,
};
