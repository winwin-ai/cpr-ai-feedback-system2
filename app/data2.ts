import { Question } from "./types";

const CLOUDINARY_BASE = "https://res.cloudinary.com/dn3cicucf";

// 시나리오 1: 심소생 (심정지 환자) - 세션 1 & 2
export const scenario1Questions: Question[] = [
  {
    id: 101,
    scenarioId: 1,
    sessionId: 1,
    title: "반응 확인",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_1_1",
    questionText: "쓰러진 환자를 발견한 당신이 가장 먼저 해야 할 행동은?",
    options: [
      { id: "1", text: "환자의 반응을 확인한다." },
      { id: "2", text: "선임간호사에게 알려서 도움을 요청한다." },
      { id: "3", text: "쓰러진 환자를 바로 눕혀 기도 확보를 먼저 시도한다." },
      { id: "4", text: "경련을 하므로 진정제 PRN이 있는지 확인한다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 환자의 반응을 확인하는 것이 초기 대응의 첫 단계입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 환자를 옮기거나 약을 찾기보다 먼저 환자가 반응하는지 확인해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288685/S1_1_ltbciy.mp4`,
    },
  },
  {
    id: 102,
    scenarioId: 1,
    sessionId: 1,
    title: "반응 확인 방법",
    mediaType: "video",
    mediaPrompt: "1_1_FollowUp",
    questionText: "환자의 반응을 확인하는 방법은 무엇인가요?",
    options: [
      { id: "1", text: "환자에게 큰소리로 말을 걸어본다." },
      { id: "2", text: "환자의 얼굴을 가까이 들여다보며 호흡 소리를 듣는다." },
      {
        id: "3",
        text: "환자의 어깨를 두드리며 큰소리로 '괜찮으세요?'라고 묻는다.",
      },
      { id: "4", text: "어깨를 세게 흔들며 이름을 부른다." },
    ],
    correctOptionId: "3",
    feedbackCorrect:
      "정확합니다! 어깨를 두드리며 큰소리로 묻는 것이 표준화된 반응 확인 방법입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 얼굴을 가까이 대거나 세게 흔드는 것은 잘못된 방법입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288685/S1_1_ltbciy.mp4`,
    },
  },
  {
    id: 103,
    scenarioId: 1,
    sessionId: 1,
    title: "도움 요청",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_1_2",
    questionText: "환자의 반응이 없습니다. 어떻게 해야 하나요?",
    options: [
      { id: "1", text: "도움을 요청한다." },
      { id: "2", text: "혈당을 측정한다." },
      { id: "3", text: "우선 환자를 침대로 옮긴다." },
      { id: "4", text: "가슴압박을 시작한다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 환자의 반응이 없으면 즉시 주변에 도움을 요청해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 혈당 측정이나 환자 이송보다 도움 요청이 우선입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288679/S1_2_rkfidu.mp4`,
    },
  },
  {
    id: 104,
    scenarioId: 1,
    sessionId: 1,
    title: "도움 요청 방법",
    mediaType: "video",
    mediaPrompt: "1_2_FollowUp",
    questionText: "도움 요청을 어떻게 해야 할까요?",
    options: [
      { id: "1", text: "간호사실에 가서 상황을 보고한다." },
      { id: "2", text: "내 핸드폰으로 선임간호사에게 전화한다." },
      { id: "3", text: "보호자에게 간호사를 불러오라고 한다." },
      { id: "4", text: "호출벨을 눌러 주변에 알린다." },
    ],
    correctOptionId: "4",
    feedbackCorrect:
      "정확합니다! 호출벨을 누르는 것이 가장 빠르고 효과적인 도움 요청 방법입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 전화를 걸거나 이동하는 것보다 호출벨이 신속합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288679/S1_2_rkfidu.mp4`,
    },
  },
  {
    id: 105,
    scenarioId: 1,
    sessionId: 1,
    title: "맥박 및 호흡 확인",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_1_3",
    questionText: "도움 요청 후 무엇을 해야 하나요?",
    options: [
      { id: "1", text: "환자의 맥박과 호흡을 10초 이내로 확인한다." },
      { id: "2", text: "모니터를 가지고 와서 환자에게 부착한다." },
      { id: "3", text: "정맥 주사라인을 확보한다." },
      { id: "4", text: "환자에게 산소를 적용한다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 도움 요청 후에는 10초 이내에 맥박과 호흡을 확인해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 모니터나 IV보다 심정지 여부 확인이 우선입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288684/S1_3_dvpmqa.mp4`,
    },
  },
  {
    id: 106,
    scenarioId: 1,
    sessionId: 1,
    title: "맥박/호흡 확인 방법",
    mediaType: "video",
    mediaPrompt: "1_3_FollowUp",
    questionText: "맥박과 호흡은 어떻게 확인하나요?",
    options: [
      {
        id: "1",
        text: "경동맥에 두 손가락을 대어 맥박을 느끼며 동시에 가슴의 움직임과 호흡음을 관찰한다.",
      },
      {
        id: "2",
        text: "손목의 요골맥을 짚고 호흡은 환자의 코에 손을 대서 확인한다.",
      },
      { id: "3", text: "복부에 귀를 대어 배 움직임으로 호흡을 확인한다." },
      { id: "4", text: "심전도 모니터를 붙여 맥박과 호흡을 동시에 확인한다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정답입니다! 경동맥 촉지와 흉곽 움직임, 호흡음 동시 확인이 표준 절차입니다.",
    feedbackIncorrect:
      "정확하지 않습니다. 요골맥이나 복부 확인은 부정확할 수 있습니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288684/S1_3_dvpmqa.mp4`,
    },
  },
  {
    id: 107,
    scenarioId: 1,
    sessionId: 1,
    title: "호흡 양상 판단",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_1_4",
    questionText: "이 환자의 호흡 상태는 어떤 양상을 보이나요?",
    options: [
      { id: "1", text: "규칙적이고 깊은 정상 호흡을 보임" },
      {
        id: "2",
        text: "심정지 호흡(agonal breathing) 또는 간헐적 헐떡임을 보임",
      },
      { id: "3", text: "코골이 소리가 나는 수면성 호흡을 보임" },
      { id: "4", text: "빠르고 얕은 과호흡을 보임" },
    ],
    correctOptionId: "2",
    feedbackCorrect:
      "정확합니다! 영상 속 호흡은 심정지 호흡(agonal breathing)입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 이는 정상 호흡이 아니며 심정지 징후입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288697/S1_4_woqoql.mp4`,
    },
  },
  {
    id: 108,
    scenarioId: 1,
    sessionId: 1,
    title: "초기 조치 결정",
    mediaType: "video",
    mediaPrompt: "1_4_FollowUp",
    questionText:
      "환자의 호흡을 고려했을 때, 당신은 어떤 조치를 취해야 할까요?",
    options: [
      { id: "1", text: "E-cart를 가져온다." },
      { id: "2", text: "주치의에게 연락한 후 처방을 기다린다." },
      { id: "3", text: "모니터를 가지고 와서 환자에게 부착한다." },
      { id: "4", text: "가슴압박을 시작한다." },
    ],
    correctOptionId: "4",
    feedbackCorrect:
      "정답입니다! 심정지 호흡이 확인되면 즉시 가슴압박을 시작해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 다른 준비보다 가슴압박이 최우선입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288697/S1_4_woqoql.mp4`,
    },
  },
  {
    id: 109,
    scenarioId: 1,
    sessionId: 2,
    title: "가슴압박 위치",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_1",
    questionText: "가슴압박 시 올바른 압박 위치는 어디인가요?",
    options: [
      {
        id: "1",
        text: "흉골 중앙의 하단부, 양쪽 nipple 사이에 손바닥을 올리고 압박한다.",
      },
      { id: "2", text: "왼쪽 가슴 위를 손끝으로 빠르게 압박한다." },
      { id: "3", text: "환자의 배 위(명치 부분)를 눌러준다." },
      { id: "4", text: "흉골를 세게 3~4회만 눌러 반응을 본다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "올바릅니다! 흉골 중앙 하단부(양쪽 젖꼭지 사이)가 정확한 위치입니다.",
    feedbackIncorrect: "오답입니다. 정확한 위치는 흉골 중앙 하단부입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/cpr-videos/Q09.mp4`, // No explicit mapping, using old Q09 logic if available or placeholder
    },
  },
  {
    id: 110,
    scenarioId: 1,
    sessionId: 2,
    title: "가슴압박 깊이",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_2",
    questionText: "가슴압박의 올바른 방법은 무엇인가요?",
    options: [
      {
        id: "1",
        text: "5cm 깊이로 압박하고 압박 후에는 흉곽이 완전히 이완되도록 한다.",
      },
      {
        id: "2",
        text: "5cm 깊이로 압박하고 이완되지 않게 빠르게 압박을 지속한다.",
      },
      { id: "3", text: "10cm 이상 깊이로 압박한다." },
      { id: "4", text: "깊이와 상관없이 빠르게만 누른다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정답입니다! 5cm 깊이 압박과 완전한 이완(recoil)이 중요합니다.",
    feedbackIncorrect:
      "오답입니다. 충분한 이완 없이는 혈류 순환이 되지 않습니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/cpr-videos/Q10.mp4`,
    },
  },
  {
    id: 111,
    scenarioId: 1,
    sessionId: 2,
    title: "가슴압박 속도",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_3",
    questionText: "가슴압박의 올바른 속도는 얼마인가요?",
    options: [
      { id: "1", text: "100~120회/분으로 압박한다." },
      { id: "2", text: "50회/분으로 압박한다." },
      { id: "3", text: "150회/분으로 압박한다." },
      { id: "4", text: "가능한 빠르게 누른다." },
    ],
    correctOptionId: "1",
    feedbackCorrect: "잘했습니다! 분당 100~120회가 최적의 압박 속도입니다.",
    feedbackIncorrect: "오답입니다. 너무 빠르거나 느리면 효과가 떨어집니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/cpr-videos/Q11.mp4`,
    },
  },
  {
    id: 113,
    scenarioId: 1,
    sessionId: 2,
    title: "제세동기 준비 순서",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_4",
    questionText: "가슴압박 교대 후 제세동기를 준비합니다. 올바른 순서는?",
    options: [
      { id: "1", text: "전원 켜기 -> 전극 부착 -> 리듬 확인" },
      { id: "2", text: "전원 켜기 -> 전극 부착 -> 리듬 확인 -> 200J 충전" },
      { id: "3", text: "전원 켜기 -> 200J 충전" },
      { id: "4", text: "전원 켜기 -> 처방 대기" },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 전원을 켜고 전극을 부착한 뒤 리듬을 확인해야 합니다.",
    feedbackIncorrect:
      "잘못된 순서입니다. 충전은 리듬 확인 및 처방 후에 수행합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/cpr-videos/Q13.mp4`,
    },
  },
  {
    id: 115,
    scenarioId: 1,
    sessionId: 2,
    title: "리듬 확인 (Asystole)",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_5",
    questionText: "제세동기 부착 후 확인된 심전도 리듬은 무엇인가요?",
    options: [
      { id: "1", text: "VF (심실세동)" },
      { id: "2", text: "Pulseless VT (무맥성 심실빈맥)" },
      { id: "3", text: "Asystole (무수축)" },
      { id: "4", text: "PEA (무맥성 전기활동)" },
    ],
    correctOptionId: "3",
    feedbackCorrect: "정확합니다! 제시된 파형은 Asystole(무수축)입니다.",
    feedbackIncorrect: "잘못된 판별입니다. 평탄한 파형은 Asystole입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/cpr-videos/Q15.mp4`,
    },
  },
  {
    id: 116,
    scenarioId: 1,
    sessionId: 2,
    title: "Asystole 대응",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_6",
    questionText: "Asystole을 확인한 경우 어떻게 해야 하나요?",
    options: [
      { id: "1", text: "제세동을 준비한다." },
      { id: "2", text: "가슴압박을 지속한다." },
      { id: "3", text: "응급약물을 준비한다." },
      { id: "4", text: "혈압을 측정한다." },
    ],
    correctOptionId: "2",
    feedbackCorrect:
      "정답입니다! Asystole은 제세동 대상이 아니므로 가슴압박을 지속해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. Asystole은 Non-shockable 리듬입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/cpr-videos/Q16.mp4`,
    },
  },
  {
    id: 118,
    scenarioId: 1,
    sessionId: 2,
    title: "리듬 확인 (VF)",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_7",
    questionText: "가슴압박 중 재확인한 심전도 리듬은 무엇인가요?",
    options: [
      { id: "1", text: "VF (심실세동)" },
      { id: "2", text: "Pulseless VT" },
      { id: "3", text: "Asystole" },
      { id: "4", text: "PEA" },
    ],
    correctOptionId: "1",
    feedbackCorrect: "정확합니다! 불규칙한 파형은 심실세동(VF)입니다.",
    feedbackIncorrect: "오답입니다. VF 파형입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/cpr-videos/Q18.mp4`,
    },
  },
  {
    id: 120,
    scenarioId: 1,
    sessionId: 2,
    title: "제세동 시행",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_8",
    questionText: "제세동 시행 시 올바른 순서는?",
    options: [
      {
        id: "1",
        text: "패들 젤 도포 -> 충전 -> '물러나세요' 외침 -> Shock -> 가슴압박 재개",
      },
      { id: "2", text: "충전 -> 젤 도포 -> '물러나세요' 외침 -> Shock" },
      { id: "3", text: "젤 도포 -> '물러나세요' 외침 -> 충전 -> Shock" },
      { id: "4", text: "'물러나세요' 외침 -> 젤 도포 -> 충전 -> Shock" },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 안전 확보(물러나세요)와 충격 후 즉각적인 압박 재개가 중요합니다.",
    feedbackIncorrect:
      "잘못된 순서입니다. 안전 확보와 압박 재개 순서를 기억하세요.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/cpr-videos/Q20.mp4`,
    },
  },
];

// 시나리오 2: 김여린 (실신/정상호흡) - 세션 1
export const scenario2Questions: Question[] = [
  {
    id: 201,
    scenarioId: 2,
    sessionId: 1,
    title: "반응 확인",
    mediaType: "video",
    mediaPrompt: "Scenario2_Video_2_1",
    questionText: "환자에게 접근했습니다. 다음으로 어떤 행동을 하시겠습니까?",
    options: [
      {
        id: "1",
        text: "환자의 어깨를 두드리며 큰 소리로 '괜찮으세요?'라고 묻는다.",
      },
      { id: "2", text: "환자를 바로 눕히고 산소를 적용한다." },
      { id: "3", text: "침대로 옮기기 위해 환자를 일으킨다." },
      { id: "4", text: "맥박을 확인하여 심정지 여부를 판단한다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 반응 확인은 어깨를 가볍게 두드리고 큰소리로 말을 거는 것이 우선입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 산소나 이송보다 반응 확인이 먼저입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288671/S2_1_djheyy.mp4`,
    },
  },
  {
    id: 202,
    scenarioId: 2,
    sessionId: 1,
    title: "도움 요청",
    mediaType: "video",
    mediaPrompt: "Scenario2_Video_2_2",
    questionText: "환자의 반응이 없습니다. 어떻게 해야 하나요?",
    options: [
      { id: "1", text: "호출벨을 눌러 주변에 알린다." },
      { id: "2", text: "환자를 부축해 침대로 옮긴다." },
      { id: "3", text: "심전도 모니터를 부착한다." },
      { id: "4", text: "혈당을 측정한다." },
    ],
    correctOptionId: "1",
    feedbackCorrect: "정확합니다! 반응이 없으면 즉시 도움을 요청해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 이송이나 측정보다 도움 요청이 우선입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288668/S2_2_yjxhvv.mp4`,
    },
  },
  {
    id: 203,
    scenarioId: 2,
    sessionId: 1,
    title: "맥박/호흡 확인",
    mediaType: "video",
    mediaPrompt: "Scenario2_Video_2_3",
    questionText: "주변에 도움을 요청한 후, 다음 행동은?",
    options: [
      { id: "1", text: "경동맥 맥박과 호흡을 10초 이내로 확인한다." },
      { id: "2", text: "심전도 모니터를 부착한다." },
      { id: "3", text: "정맥로 확보를 시도한다." },
      { id: "4", text: "환자를 침대로 옮긴다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 도움 요청 후에는 즉시 심정지 여부를 판단해야 합니다.",
    feedbackIncorrect: "잘못된 선택입니다. 맥박과 호흡 확인이 우선입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288664/S2_3_dvrtt1.mp4`,
    },
  },
  {
    id: 204,
    scenarioId: 2,
    sessionId: 1,
    title: "호흡 양상 판단",
    mediaType: "video",
    mediaPrompt: "Scenario2_Video_2_4",
    questionText: "이 환자의 호흡 상태는 어떤 양상을 보이나요?",
    options: [
      { id: "1", text: "규칙적인 정상 호흡을 보임" },
      { id: "2", text: "심정지 호흡(agonal breathing)을 보임" },
      { id: "3", text: "코골이 소리가 나는 수면성 호흡을 보임" },
      { id: "4", text: "빠르고 얕은 과호흡 양상을 보임" },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 이 환자는 규칙적이고 깊은 정상 호흡을 하고 있습니다.",
    feedbackIncorrect: "잘못된 판단입니다. 영상은 정상 호흡을 보여줍니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288675/S2_4_ikoiia.mp4`,
    },
  },
  {
    id: 205,
    scenarioId: 2,
    sessionId: 1,
    title: "적절한 조치",
    mediaType: "video",
    mediaPrompt: "Scenario2_Video_2_5",
    questionText: "환자는 정상호흡이나 의식이 없습니다. 적절한 조치는?",
    options: [
      { id: "1", text: "활력징후를 측정한 후, 주치의에게 즉시 보고한다." },
      { id: "2", text: "CPR이 필요한 상황이므로 가슴압박을 시행한다." },
      { id: "3", text: "환자가 깰 때까지 지켜본다." },
      { id: "4", text: "보호자를 통해 병력과 과거 약물 정보를 파악한다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 심정지가 아니므로 기도를 유지하고 보고하는 것이 적절합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 정상 호흡 환자에게 CPR은 불필요합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288676/S2_5_allcbm.mp4`,
    },
  },
];

// 시나리오 3: 장소중 (팀 기반 CPR) - 간호사 1, 2, 3 역할
export const scenario3Questions: Question[] = [
  // 간호사 1 (최초 발견자)
  {
    id: 301,
    scenarioId: 3,
    sessionId: 1,
    role: "Nurse 1",
    title: "반응 확인 (간호사1)",
    mediaType: "video",
    mediaPrompt: "Scenario3_Video_3_1",
    questionText: "환자가 침상에 쓰러졌습니다. 어떻게 하시겠습니까?",
    options: [
      { id: "1", text: "환자의 반응을 확인한다." },
      { id: "2", text: "선임간호사에게 알려서 도움을 요청한다." },
      { id: "3", text: "쓰러진 환자를 바른 자세로 눕힌다." },
      { id: "4", text: "수혈을 위해 정맥주사라인을 확보한다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 어깨를 두드리며 반응을 확인하는 것이 첫 단계입니다.",
    feedbackIncorrect: "잘못된 선택입니다. 반응 확인이 가장 먼저입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288685/S3_1_zn1hxj.mp4`,
    },
  },
  {
    id: 302,
    scenarioId: 3,
    sessionId: 1,
    role: "Nurse 1",
    title: "도움 요청 (간호사1)",
    mediaType: "video",
    mediaPrompt: "Scenario3_Video_3_2",
    questionText: "환자의 반응이 없습니다. 어떻게 해야 하나요?",
    options: [
      { id: "1", text: "도움을 요청한다." },
      { id: "2", text: "응급내시경 준비를 계속한다." },
      { id: "3", text: "기도확보를 위해 환자를 일으킨다." },
      { id: "4", text: "가슴압박을 시작한다." },
    ],
    correctOptionId: "1",
    feedbackCorrect: "정확합니다! 즉시 주변에 도움을 요청해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 다른 처치보다 도움 요청이 우선입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288690/S3_2_ugitot.mp4`,
    },
  },
  {
    id: 305,
    scenarioId: 3,
    sessionId: 1,
    role: "Nurse 1",
    title: "가슴압박 시작 (간호사1)",
    mediaType: "video",
    mediaPrompt: "Scenario3_Video_3_5",
    questionText: "맥박이 없고 무호흡 상태입니다. 어떤 조치를 취해야 할까요?",
    options: [
      { id: "1", text: "E-cart를 가져온다." },
      { id: "2", text: "주치의 처방을 기다린다." },
      { id: "3", text: "모니터를 부착한다." },
      { id: "4", text: "가슴압박을 시작한다." },
    ],
    correctOptionId: "4",
    feedbackCorrect:
      "정확합니다! 심정지 인지 후 즉시 가슴압박을 시작해야 합니다.",
    feedbackIncorrect: "잘못된 선택입니다. 즉각적인 압박이 필요합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765289085/S3_5_sezwy8.mp4`,
    },
  },

  // 간호사 2 (도움 요청 수신자)
  {
    id: 306,
    scenarioId: 3,
    sessionId: 1,
    role: "Nurse 2",
    title: "도움 요청 수신 (간호사2)",
    mediaType: "video",
    mediaPrompt: "Scenario3_Video_4_1",
    questionText: "CPR 상황에 도움 요청을 받았습니다. 어떻게 해야 할까요?",
    options: [
      { id: "1", text: "가슴압박을 돕는다." },
      { id: "2", text: "정맥주사라인을 확보한다." },
      { id: "3", text: "CPR팀과 제세동기 보유부서, 주치의에게 요청한다." },
      { id: "4", text: "주치의에게 연락하고 보호자에게 알린다." },
    ],
    correctOptionId: "3",
    feedbackCorrect:
      "정확합니다! CPR팀 호출과 제세동기 확보가 최우선 역할입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 팀 호출과 장비 확보를 먼저 해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288677/S4_1_z43cvx.mp4`,
    },
  },
  {
    id: 307,
    scenarioId: 3,
    sessionId: 1,
    role: "Nurse 2",
    title: "산소 공급 (간호사2)",
    mediaType: "video",
    mediaPrompt: "Scenario3_Video_4_3",
    questionText: "CPR 상황에서 산소 공급 방법으로 옳은 짝은?",
    options: [
      { id: "1", text: "Head tilt-chin lift - O2 mask 10L" },
      { id: "2", text: "Head tilt-chin lift - Ambubag O2 full" },
      { id: "3", text: "머리에 베개 - Ambubag O2 full" },
      { id: "4", text: "Head up 30도 - O2 cannula 3L" },
    ],
    correctOptionId: "2",
    feedbackCorrect:
      "정확합니다! 기도 확보 후 앰부백으로 최대 산소를 공급해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 심정지 시 앰부백을 통한 고농도 산소 공급이 필수입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288674/S4_3_w1wq5g.mp4`,
    },
  },

  // 간호사 3 (장비/투약 담당)
  {
    id: 310,
    scenarioId: 3,
    sessionId: 1,
    role: "Nurse 3",
    title: "E-cart 준비 (간호사3)",
    mediaType: "video",
    mediaPrompt: "Scenario3_Video_5_1",
    questionText: "간호사1이 가슴압박 중일 때 간호사3의 역할은?",
    options: [
      { id: "1", text: "E-cart를 가져온다." },
      { id: "2", text: "가슴압박 교대를 위해 기다린다." },
      { id: "3", text: "혈압을 측정한다." },
      { id: "4", text: "제세동기를 빌려온다." },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! CPR 진행을 위해 E-cart를 신속히 준비해야 합니다.",
    feedbackIncorrect: "잘못된 선택입니다. 장비와 약물 준비가 우선입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765289075/S5_1_jc9v9i.mp4`,
    },
  },
  {
    id: 318,
    scenarioId: 3,
    sessionId: 1,
    role: "Nurse 3",
    title: "에피네프린 준비 (간호사3)",
    mediaType: "video",
    mediaPrompt: "Scenario3_Video_5_10",
    questionText: "에피네프린 주사 준비 시 올바른 내용은?",
    options: [
      { id: "1", text: "1mg을 지속주입(infusion)으로 천천히 투여한다." },
      { id: "2", text: "CPR 중 1mg을 정맥주사(bolus)하고 식염수로 flush한다." },
      { id: "3", text: "CPR 시작 즉시 무조건 투여한다." },
      { id: "4", text: "간호사가 독자적으로 판단하여 투여한다." },
    ],
    correctOptionId: "2",
    feedbackCorrect:
      "정답입니다! 에피네프린은 3-5분 간격 Bolus 투여 후 Flush가 원칙입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. Bolus 투여와 리듬에 따른 투여 시점을 기억하세요.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `${CLOUDINARY_BASE}/video/upload/v1765288674/S5_10_qr5wzd.mp4`,
    },
  },
];
