import { Question } from "../../../types";

export const q3110: Question = {
  id: 3110,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "공간 확보 (간호사3)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_2",
  questionText:
    "E-cart를 가져온 후, intubation을 위해 공간확보를 준비해야 합니다. 어떻게 해야 할까요?",
  options: [
    {
      id: "1",
      text: "환자의 머리를 높여 베개를 받쳐준다.",
      imageUrl: "/images/questions/scenario3/3-3/Q02-A.jpg",
    },
    {
      id: "2",
      text: "침대를 그대로 둔 채 환자 체위만 조정한다.",
      imageUrl: "/images/questions/scenario3/3-3/Q02-B.jpg",
    },
    {
      id: "3",
      text: "침상을 뒤로 빼고, 침상 헤드를 분리하여 충분한 공간을 확보한다.",
      imageUrl: "/images/questions/scenario3/3-3/Q02-C.jpg",
    },
    {
      id: "4",
      text: "침상난간을 내린다.",
      imageUrl: "/images/questions/scenario3/3-3/Q02-D.jpg",
    },
  ],
  correctOptionId: "3",
  feedbackCorrect:
    "정확합니다! 기관삽관을 위해서는 충분한 공간 확보가 필요합니다. 침상을 뒤로 빼고 침상 헤드를 분리하여 의료진이 환자의 머리 쪽에서 삽관을 수행할 수 있도록 해야 합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 기관삽관을 위해서는 침상을 뒤로 빼고 침상 헤드를 분리하여 충분한 공간을 확보해야 합니다. 베개를 받치거나 체위만 조정하는 것은 적절하지 않습니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315280/S5_2_xp2bth.mp4`,
  },
};
