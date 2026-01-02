import { Question } from "../../../types";

export const q3170: Question = {
  id: 3170,
  scenarioId: 3,
  sessionId: 1,
  role: "Nurse 3",
  title: "기관삽관 물품 준비 (간호사 다)",
  mediaType: "video",
  mediaPrompt: "Scenario3_Video_5_5",
  questionType: "dragdrop",
  questionText:
    "기관삽관을 해야 합니다. 필요한 물품을 선택해 주세요.",
  options: [],
  dragItems: [
    { id: "etube", label: "E-tube", imageUrl: "/images/questions/scenario3/intubation/etube.jpg" },
    { id: "laryngoscope", label: "Laryngoscope", imageUrl: "/images/questions/scenario3/intubation/laryngoscope.jpg" },
    { id: "blade", label: "Blade", imageUrl: "/images/questions/scenario3/intubation/blade.jpg" },
    { id: "stylet", label: "Stylet", imageUrl: "/images/questions/scenario3/intubation/stylet.jpg" },
    { id: "syringe10cc", label: "10cc Syringe", imageUrl: "/images/questions/scenario3/intubation/syringe10cc.jpg" },
    { id: "airway", label: "Airway", imageUrl: "/images/questions/scenario3/intubation/airway.jpg" },
    { id: "stethoscope", label: "청진기", imageUrl: "/images/questions/scenario3/intubation/stethoscope.jpg" },
    { id: "cleanjo", label: "크린조", imageUrl: "/images/questions/scenario3/intubation/cleanjo.jpg" },
    { id: "fixband", label: "고정밴드", imageUrl: "/images/questions/scenario3/intubation/fixband.jpg" },
    { id: "sterilegloves", label: "멸균장갑", imageUrl: "/images/questions/scenario3/intubation/sterilegloves.jpg" },
    { id: "o2cannula", label: "O2 Cannula", imageUrl: "/images/questions/scenario3/intubation/o2cannula.jpg" },
    { id: "o2mask", label: "O2 Mask", imageUrl: "/images/questions/scenario3/intubation/o2mask.jpg" },
    { id: "medicut", label: "Medicut", imageUrl: "/images/questions/scenario3/intubation/medicut.jpg" },
    { id: "thermometer", label: "체온계", imageUrl: "/images/questions/scenario3/intubation/thermometer.jpg" },
    { id: "bpmeter", label: "혈압계", imageUrl: "/images/questions/scenario3/intubation/bpmeter.jpg" },
    { id: "ivfluid", label: "수액", imageUrl: "/images/questions/scenario3/intubation/ivfluid.jpg" },
  ],
  correctOrder: ["etube", "laryngoscope", "blade", "stylet", "syringe10cc", "airway", "stethoscope", "cleanjo", "fixband", "sterilegloves"],
  correctOptionId: "",
  feedbackCorrect:
    "정확합니다! 기관삽관에 필요한 물품을 올바르게 선택하셨습니다. E-tube, laryngoscope, blade, stylet, 10cc syringe, airway, 청진기, 크린조, 고정밴드, 멸균장갑이 필요합니다.",
  feedbackIncorrect:
    "잘못된 선택입니다. 기관삽관에는 E-tube, laryngoscope, blade, stylet, 10cc syringe, airway, 청진기, 크린조, 고정밴드(또는 반창고), 멸균장갑이 필요합니다. O2 cannula, O2 mask, medicut, 체온계, 혈압계, 수액 등은 기관삽관 물품이 아닙니다.",
  explanation: "추가 설명이 없습니다.",
  videoPaths: {
    question: ``,
  },
};
