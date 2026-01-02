import { Question } from "../../../types";

export const q3150: Question = {
  id: 3150,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 2",
  title: "구강기도유지기 삽입 (간호사 나)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_4_3",
  questionText:
    "백마스크 환기(Bag-mask Ventilation)를 위해 구강기도유지기(Airway)를 삽입할 때 올바른 방법은 무엇인가요?",
  options: [
    {
      id: "1",
      text: "환자의 코끝에서 귓불까지의 길이로 사이즈를 선택하고, 곡면을 아래로 하여 한 번에 밀어 넣는다.",
    },
    {
      id: "2",
      text: "환자의 입술 끝에서 하악각까지의 길이로 구강기도유지기 사이즈를 선택하고, head tilt-chin lift 자세로 기도를 개방한 뒤 곡면을 위로 하여 삽입 후 180도 회전시켜 넣습니다.",
    },
    {
      id: "3",
      text: "환자의 입술에서 흉골절흔까지의 길이로 사이즈를 선택하고, 혀를 억지로 누른 상태에서 삽입한다.",
    },
    {
      id: "4",
      text: "크기가 작은 기도유지기를 선택하여 혀 위에 올려두고 회전 없이 삽입한다.",
    },
  ],
  correctOptionId: "2",
  feedbackCorrect:
    "정확합니다! 구강기도유지기 사이즈는 환자의 입술 끝에서 하악각까지의 길이로 선택합니다. head tilt-chin lift 자세로 기도를 개방한 뒤 곡면을 위로 하여 삽입 후 180도 회전시켜 넣는 것이 올바른 방법입니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 구강기도유지기 삽입 시 올바른 사이즈 선택(입술 끝에서 하악각까지)과 삽입 방법(곡면을 위로 하여 삽입 후 180도 회전)을 따라야 합니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316225/S4_3_w1wq5g.mp4`,
  },
};
