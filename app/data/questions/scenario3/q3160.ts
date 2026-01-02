import { Question } from "../../../types";

export const q3160: Question = {
  id: 3160,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "E-tube/Stylet 준비 (간호사3)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_7",
  questionText:
    "기관삽관을 위해 E-tube를 준비하는 적절한 방법은 무엇입니까?",
  options: [
    {
      id: "1",
      text: "E-tube안에 stylet을 약 1cm 남기고 삽입한 후 하키채 모양으로 만들어 준다.",
    },
    {
      id: "2",
      text: "E-tube안에 stylet을 끝까지 삽입하여 단단히 고정한다.",
    },
    {
      id: "3",
      text: "E-tube안에 stylet을 절반 정도 삽입한 후 하키채 모양으로 만들어 둔다.",
    },
    {
      id: "4",
      text: "E-tube안에 삽입한 후, 튜브 곡선을 최대한 꺾어 각도를 만들어 둔다.",
    },
  ],
  correctOptionId: "1",
  feedbackCorrect:
    "정확합니다! stylet을 튜브 끝보다 약간 짧게 (약 1cm) 남기고 삽입해야 삽관시 튜브 끝이 기도 점막을 손상시키지 않으며, 튜브의 형태를 하키채 모양으로 만들어 주면 stylet이 움직이지 않으며 안정적으로 유지할 수 있습니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. stylet을 끝까지 삽입하면 삽관시 기도 점막 손상이나 천공 위험이 있을 수 있습니다. 또한 과도하게 꺾어서 삽관하면 삽관이 불가능하고, 기도 손상 위험이 커집니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1767365961/cpr-videos/q3160_question.mp4`,
  },
};
