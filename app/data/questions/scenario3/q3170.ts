import { Question } from "../../../types";

export const q3170: Question = {
  id: 3170,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "기관삽관 물품 준비 (간호사 다)",
  mediaType: "image",
  mediaPrompt: "Scenario3_Image_5_5",
  questionType: "dragdrop",
  questionText: "기관삽관을 해야 합니다. 필요한 물품을 선택해 주세요.",
  options: [],
  dragItems: [
    {
      id: "etube",
      label: "E-tube",
      imageUrl: "/images/questions/scenario3/3-3/E-tube.jpg",
    },
    {
      id: "laryngoscope",
      label: "Laryngoscope",
      imageUrl: "/images/questions/scenario3/3-3/laryngoscope.jpg",
    },
    {
      id: "stylet",
      label: "Stylet",
      imageUrl: "/images/questions/scenario3/3-3/stylet.jpg",
    },
    {
      id: "syringe10cc",
      label: "10cc Syringe",
      imageUrl: "/images/questions/scenario3/3-3/10cc_syringe.jpg",
    },
    {
      id: "airway",
      label: "Airway",
      imageUrl: "/images/questions/scenario3/3-3/airway.jpg",
    },
    {
      id: "stethoscope",
      label: "청진기",
      imageUrl: "/images/questions/scenario3/3-3/청진기.jpg",
    },
    {
      id: "cleanjo",
      label: "크린조",
      imageUrl: "/images/questions/scenario3/3-3/크린조.jpg",
    },
    {
      id: "fixband",
      label: "고정밴드",
      imageUrl: "/images/questions/scenario3/3-3/고정밴드.jpg",
    },
    {
      id: "sterilegloves",
      label: "멸균장갑",
      imageUrl: "/images/questions/scenario3/3-3/멸균장갑.jpg",
    },
    {
      id: "o2cannula",
      label: "O2 Cannula",
      imageUrl: "/images/questions/scenario3/3-3/O2_cannula.jpg",
    },
    {
      id: "o2mask",
      label: "O2 Mask",
      imageUrl: "/images/questions/scenario3/3-3/O2_mask.jpg",
    },
    {
      id: "medicut",
      label: "Medicut",
      imageUrl: "/images/questions/scenario3/3-3/medicut.jpg",
    },
    {
      id: "thermometer",
      label: "체온계",
      imageUrl: "/images/questions/scenario3/3-3/체온계.jpg",
    },
    {
      id: "bpmeter",
      label: "혈압계",
      imageUrl: "/images/questions/scenario3/3-3/혈압계.jpg",
    },
    {
      id: "ivfluid",
      label: "수액",
      imageUrl: "/images/questions/scenario3/3-3/수액.jpg",
    },
  ],
  correctOrder: [
    "etube",
    "laryngoscope",
    "stylet",
    "syringe10cc",
    "airway",
    "stethoscope",
    "cleanjo",
    "fixband",
    "sterilegloves",
  ],
  correctOptionId: "",
  feedbackCorrect:
    "정확합니다! 기관삽관에 필요한 물품을 올바르게 선택하셨습니다. E-tube, laryngoscope, stylet, 10cc syringe, airway, 청진기, 크린조, 고정밴드, 멸균장갑이 필요합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 기관삽관에는 E-tube, laryngoscope, stylet, 10cc syringe, airway, 청진기, 크린조, 고정밴드(또는 반창고), 멸균장갑이 필요합니다. O2 cannula, O2 mask, medicut, 체온계, 혈압계, 수액 등은 기관삽관 물품이 아닙니다.",
  explanation: "추가 설명이 없습니다.",
};
