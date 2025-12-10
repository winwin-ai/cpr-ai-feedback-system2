import { Question } from "./types";

const CLOUDINARY_BASE = "https://res.cloudinary.com/dn3cicucf";

// 시나리오 1: 심소생 (심정지 환자) - 세션 1 & 2
export const scenario1Questions: Question[] = [
  // --- Session 1 ---
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
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765292860/S1_1_ltbciy.mp4`,
    },
  },
  {
    id: 102,
    scenarioId: 1,
    sessionId: 1,
    title: "반응 확인 방법",
    mediaType: "video",
    mediaPrompt: "1_1_FollowUp", // No video
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
      "어깨를 두드리며 큰소리로 묻는 것이 표준화된 반응 확인 방법입니다.",
    feedbackIncorrect:
      "얼굴을 가까이 들여다보거나 세게 흔드는 것은 잘못된 방법입니다. 어깨를 가볍게 두드리며 큰소리로 물어야 합니다.",
    explanation: "추가 설명이 없습니다.",
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
      "잘못된 선택입니다. 혈당 측정이나 환자를 옮기는 행동보다 먼저 도움을 요청해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314678/S1_2_rkfidu.mp4`,
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
      "도움요청을 위해 호출벨을 누르는 것이 가장 빠른 방법입니다.",
    feedbackIncorrect:
      "전화나 간접적인 요청보다 즉각적으로 도움요청을 위해 호출벨을 눌러야 신속 대응이 가능합니다.",
    explanation: "추가 설명이 없습니다.",
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
      "정확합니다! 도움 요청 후에는 환자의 맥박과 호흡을 10초 이내로 확인해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 모니터 부착이나 IV 확보보다 먼저 심정지 여부를 확인해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314644/S1_3_dvpmqa.mp4`,
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
      "정답입니다! 경동맥 촉지와 흉곽 움직임, 호흡음 확인이 표준 절차입니다.",
    feedbackIncorrect:
      "정확하지 않습니다. 손목 맥박은 신뢰도가 낮으며, 복부나 코에 손을 대는 방법은 표준이 아닙니다.",
    explanation: "추가 설명이 없습니다.",
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
      "정확합니다! 영상에서 보이는 간헐적 헐떡임은 정상 호흡이 아닌 심정지 호흡(agonal breathing)입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 간헐적 헐떡임은 정상 호흡이 아니며 심정지 상태의 특징입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314580/S1_4_woqoql.mp4`,
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
      "정답입니다! 심정지 호흡이 관찰되면 즉시 가슴압박을 시작해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 주치의 지시를 기다리거나 모니터 부착보다 가슴압박을 바로 시작해야 합니다.",
    explanation: "추가 설명이 없습니다.",
  },

  // --- Transition to Session 2 ---
  {
    id: 1085,
    scenarioId: 1,
    sessionId: 2, // Start showing Session 2
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
  },

  // --- Session 2 ---
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
      "올바릅니다! 흉골 중앙의 하단부, 즉 양쪽 nipple 사이를 압박해야 합니다.",
    feedbackIncorrect:
      "오답입니다. 가슴압박은 반드시 흉골 중앙의 하단부에 손바닥을 올려 심장에 효과적으로 압력을 전달해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315067/S1_2_1_eheqyh.mp4`,
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
      "정답입니다! 5cm 깊이는 성인에게 적절한 심장 압박 깊이입니다. 그리고 압박 후에는 효과적인 순환을 위해 흉곽을 완전히 이완시키는 것(recoil)이 중요합니다.",
    feedbackIncorrect:
      "오답입니다. 5cm보다 얕거나 깊으면 효과적인 순환이 이루어지지 않거나 손상 위험이 있으며, 완전 이완(recoil) 없이 압박만 지속하면 효과적인 순환이 어렵습니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315022/S1_2_2_qtbre1.mp4`,
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
    feedbackCorrect:
      "잘했습니다! 100~120회/분은 뇌와 심장에 혈류를 공급할 수 있는 최적 속도입니다.",
    feedbackIncorrect:
      "오답입니다. 너무 빠르거나 느린 속도는 효과적인 순환을 방해합니다. 100~120회/분을 유지하세요.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315418/S1_2_3_hkmklv.mp4`,
    },
  },
  {
    id: 112,
    scenarioId: 1,
    sessionId: 2,
    title: "가슴압박 자세",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_4",
    questionText: "가슴압박 시 신체 자세로 옳은 것은?",
    options: [
      { id: "1", text: "팔꿈치를 굽히고 손목의 힘을 이용한다." },
      { id: "2", text: "손가락 끝으로 흉부를 누른다." },
      {
        id: "3",
        text: "팔을 곧게 펴고 어깨가 환자 흉부 위에 수직이 되도록 한다.",
      },
      { id: "4", text: "허리를 굽혀 상체만으로 압박한다." },
    ],
    correctOptionId: "3",
    feedbackCorrect:
      "정답입니다! 팔을 곧게 펴고 어깨를 환자 흉부 위에 수직으로 위치시키면 효율적으로 압박할 수 있습니다.",
    feedbackIncorrect:
      "오답입니다. 팔꿈치를 굽히거나 손가락만으로 누르는 방식은 힘이 분산되어 압박 효과가 떨어집니다.",
    explanation: "구조자의 어깨가 환자 가슴 바로 위에 오도록 합니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314973/S1_2_4_h4y1jm.mp4`,
    },
  },
  {
    id: 113,
    scenarioId: 1,
    sessionId: 2,
    title: "제세동기 준비 순서",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_5",
    questionText: "제세동기를 준비합니다. 올바른 순서는?",
    options: [
      { id: "1", text: "전원 켜기 -> 전극 부착 -> 리듬 확인 -> 충전" },
      { id: "2", text: "전극 부착 -> 전원 켜기 -> 충전 -> 리듬 확인" },
      { id: "3", text: "충전 -> 전원 켜기 -> 전극 부착" },
      { id: "4", text: "전원 켜기 -> 처방 대기" },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 제세동기는 전원을 켜고, 전극을 부착한 후 리듬을 확인해야 합니다.",
    feedbackIncorrect:
      "잘못된 순서입니다. 전원 켜기 -> 패드 부착 -> 리듬 확인 순서가 표준입니다.",
    explanation: "전원 → 패드 → 리듬 → 충전 순서입니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314878/S1_2_5_dmebob.mp4`,
    },
  },
  {
    id: 114,
    scenarioId: 1,
    sessionId: 2,
    title: "패드 부착 위치",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_6",
    questionText: "제세동 패드의 올바른 부착 위치는?",
    options: [
      { id: "1", text: "오른쪽 쇄골 아래와 왼쪽 유두 아래 겨드랑이 선" },
      { id: "2", text: "왼쪽 쇄골 아래와 오른쪽 유두 아래" },
      { id: "3", text: "양쪽 가슴 중앙" },
      { id: "4", text: "복부와 등" },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 우측 쇄골 하부와 좌측 유두 옆 겨드랑이 선에 부착합니다.",
    feedbackIncorrect: "위치가 잘못되었습니다. 표준 부착 위치를 확인하세요.",
    explanation: "Anterior-Lateral 위치에 부착합니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314811/S1_2_6_ep5fxi.mp4`,
    },
  },
  {
    id: 115,
    scenarioId: 1,
    sessionId: 2,
    title: "심장 리듬 확인 (Asystole)",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_7",
    questionText: "화면에 보이는 심전도 리듬은 무엇인가요?",
    options: [
      { id: "1", text: "VF (심실세동)" },
      { id: "2", text: "Pulseless VT (무맥성 심실빈맥)" },
      { id: "3", text: "Asystole (무수축)" },
      { id: "4", text: "PEA (무맥성 전기활동)" },
    ],
    correctOptionId: "3",
    feedbackCorrect:
      "정확합니다! 무수축(Asystole)이며 Non-shockable 리듬입니다.",
    feedbackIncorrect: "틀렸습니다. 이 파형은 무수축(Asystole)입니다.",
    explanation: "전기적 활동이 없는 상태입니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314753/S1_2_7_wb6ydm.mp4`,
    },
  },
  {
    id: 116,
    scenarioId: 1,
    sessionId: 2,
    title: "Asystole 시 행동",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_8",
    questionText: "Asystole이 확인되었습니다. 가장 먼저 해야 할 행동은?",
    options: [
      { id: "1", text: "제세동을 실시한다." },
      { id: "2", text: "가슴압박을 즉시 재개한다." },
      { id: "3", text: "맥박을 1분간 확인한다." },
      { id: "4", text: "기도 삽관을 시도한다." },
    ],
    correctOptionId: "2",
    feedbackCorrect:
      "정답입니다! Non-shockable 리듬이므로 즉시 가슴압박을 지속해야 합니다.",
    feedbackIncorrect:
      "제세동 대상이 아닙니다. 가슴압박을 우선 지속해야 합니다.",
    explanation: "CPR을 2분간 지속합니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316513/S1_2_8_jwrlmd.mp4`,
    },
  },
  {
    id: 117,
    scenarioId: 1,
    sessionId: 2,
    title: "Asystole 약물 투여",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_9",
    questionText: "Asystole 상황에서 에피네프린 투여 방법은?",
    options: [
      { id: "1", text: "가능한 빨리 1mg 투여 후 3~5분마다 반복" },
      { id: "2", text: "제세동 후 투여" },
      { id: "3", text: "3mg을 한번에 투여" },
      { id: "4", text: "투여하지 않는다" },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다. Non-shockable 리듬에서는 IV/IO 확보 즉시 에피네프린을 투여합니다.",
    feedbackIncorrect:
      "틀렸습니다. 가능한 빨리 투여하고 3~5분 간격으로 반복합니다.",
    explanation: "가급적 빠른 투여가 권장됩니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765314710/S1_2_9_iso4al.mp4`,
    },
  },
  {
    id: 118,
    scenarioId: 1,
    sessionId: 2,
    title: "리듬 확인 (VF)",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_10",
    questionText: "2분 후 리듬 재확인 중입니다. 이 리듬은 무엇인가요?",
    options: [
      { id: "1", text: "VF (심실세동)" },
      { id: "2", text: "Normal Sinus Rhythm" },
      { id: "3", text: "Asystole" },
      { id: "4", text: "PEA" },
    ],
    correctOptionId: "1",
    feedbackCorrect: "정답입니다! 심실세동(VF)으로 Shockable 리듬입니다.",
    feedbackIncorrect: "틀렸습니다. 불규칙한 파형의 심실세동입니다.",
    explanation: "즉각적인 제세동이 필요합니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765288661/VF_r1yv9r.mp4`,
    },
  },
  {
    id: 119,
    scenarioId: 1,
    sessionId: 2,
    title: "VF 확인 시 행동",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_11",
    questionText: "VF가 확인되었습니다. 우선적인 행동은?",
    options: [
      { id: "1", text: "즉시 제세동(Shock)을 준비/시행한다." },
      { id: "2", text: "가슴압박만 계속한다." },
      { id: "3", text: "에피네프린을 먼저 투여한다." },
      { id: "4", text: "기도 삽관을 한다." },
    ],
    correctOptionId: "1",
    feedbackCorrect: "정확합니다! Shockable 리듬이므로 제세동이 우선입니다.",
    feedbackIncorrect: "제세동이 가장 시급한 처치입니다.",
    explanation: "심실세동은 제세동이 유일한 교정 방법입니다.",
  },
  {
    id: 120,
    scenarioId: 1,
    sessionId: 2,
    title: "제세동 시행 순서",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_12",
    questionText: "제세동 시행 시 올바른 순서는?",
    options: [
      {
        id: "1",
        text: "패드 젤/부착 -> 충전 -> '물러나세요' 확인 -> Shock -> 가슴압박 재개",
      },
      { id: "2", text: "충전 -> 부착 -> Shock -> 확인" },
      { id: "3", text: "Shock -> 충전 -> 부착" },
      { id: "4", text: "확인 없이 즉시 Shock" },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 안전 확인 후 Shock, 즉시 가슴압박 재개입니다.",
    feedbackIncorrect: "순서와 안전 확인이 중요합니다.",
    explanation: "주변인의 안전을 확보하는 것이 중요합니다.",
  },
  {
    id: 121,
    scenarioId: 1,
    sessionId: 2,
    title: "VF 약물 투여 시점",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_13",
    questionText: "Shockable 리듬(VF/VT)에서 에피네프린 투여 시점은?",
    options: [
      { id: "1", text: "첫 번째 제세동 후" },
      {
        id: "2",
        text: "두 번째 제세동 후, 지속되는 가슴압박 기간 중",
      },
      { id: "3", text: "즉시 투여" },
      { id: "4", text: "세 번째 제세동 후" },
    ],
    correctOptionId: "2",
    feedbackCorrect:
      "정답입니다. Shockable 리듬에서는 2차 제세동 실패 후 투여를 고려합니다.",
    feedbackIncorrect: "타이밍이 맞지 않습니다.",
    explanation: "가이드라인에 따라 투여 시점을 잡습니다.",
  },
  {
    id: 122,
    scenarioId: 1,
    sessionId: 2,
    title: "ROSC 확인",
    mediaType: "video",
    mediaPrompt: "Scenario1_Video_2_14",
    questionText: "자발순환회복(ROSC)의 징후로 옳은 것은?",
    options: [
      { id: "1", text: "자발 맥박 촉지 및 혈압 상승" },
      { id: "2", text: "가슴압박 중단 시 심전도 변화" },
      { id: "3", text: "동공반사 소실" },
      { id: "4", text: "피부색 변화" },
    ],
    correctOptionId: "1",
    feedbackCorrect:
      "정확합니다! 맥박이 만져지고 혈압이 측정되면 ROSC 상태입니다.",
    feedbackIncorrect: "다른 징후들은 확실한 ROSC 증거가 아닙니다.",
    explanation: "교육이 종료됩니다. 수고하셨습니다.",
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
      "정확합니다! 반응 확인은 어깨를 가볍게 두드리고 큰소리로 말을 거는 것이 표준 절차입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 산소 적용이나 맥박 확인보다 먼저 환자의 반응부터 확인해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316267/S2_1_djheyy.mp4`,
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
    feedbackCorrect:
      "정확합니다! 반응없는 환자를 발견한 경우 즉시 주변에 도움을 요청하는 것이 첫 번째 대응입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 환자를 옮기거나 모니터를 부착하는 것보다, 먼저 도움을 요청해 응급 대응 체계를 가동하는 것이 우선입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316400/S2_2_yjxhvv.mp4`,
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
      "정확합니다! 심정지 여부를 판단하기 위해 도움 요청 후에는 반드시 10초 이내에 맥박과 호흡을 동시에 확인해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 모니터 부착이나 IV 확보보다 먼저 환자가 심정지 상태인지 확인하는 것이 중요합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316458/S2_3_dvrtt1.mp4`,
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
      "정확합니다! 이 환자는 규칙적이고 깊은 정상 호흡을 보이고 있어 심정지 상황은 아닙니다..",
    feedbackIncorrect:
      "잘못된 판단입니다. 간헐적이거나 비정상적인 호흡과 달리, 이 영상은 규칙적이고 깊은 정상 호흡을 나타냅니다. 심정지가 아님을 인지해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316102/S2_4_ikoiia.mp4`,
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
      "정확합니다! 환자는 심정지가 아니지만 의식이 없으므로, 기도를 유지하고 활력징후를 측정하며 즉시 의료진에게 보고하는 것이 적절한 조치입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 정상 호흡이 있어 CPR은 필요하지 않으며, 단순히 지켜보거나 보호자에게 병력을 묻는 것은 시급성을 간과한 대응입니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316044/S2_5_allcbm.mp4`,
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
      "정확합니다! 환자의 반응을 확인하는 것이 초기 대응의 첫 단계입니다. 여기서 올바른 반응 확인 방법은 어깨를 두드리며 큰소리로 묻는 것입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 환자를 옮기거나 라인을 확보하기보다 먼저 환자가 반응하는지 확인해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315689/S3_1_zn1hxj.mp4`,
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
    feedbackCorrect:
      "정확합니다! 환자의 반응이 없으면 즉시 주변에 도움을 요청해야 합니다. 여기서 올바른 도움요청 방법은 큰소리로 도움을 외치거나 호출벨을 누르는 것이 가장 빠른 방법입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 다른 처치보다 먼저 도움을 요청해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315593/S3_2_ugitot.mp4`,
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
      "정확합니다! 심정지 인지 후에는 즉시 가슴 압박을 시작해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 주치의 처방을 기다리거나 모니터 부착보다 바로 가슴 압박을 시작하는 것이 중요합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315150/S3_5_sezwy8.mp4`,
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
      "정확합니다! CPR상황이므로 도움 요청을 받았으면 즉시 CPR팀과 주치의를 호출하고 제세동을 위해 제세동기 보유부서에 제세동기를 요청해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. CPR상황에서 도움 요청을 받은 간호사는 CPR팀과 주치의를 호출하는 것이 먼저입니다. 또 먼저 제세동기가 준비될 수 있게 조치를 한 후에 가슴 압박을 돕거나 정맥을 확보하는 등의 대응을 해야합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315915/S4_1_z43cvx.mp4`,
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
      "정확합니다! head tilt-chin lift 자세는 기도가 직선으로 확보되어 산소 공급을 최적화됩니다. 심정지 상황에서는 sniffing자세를 취한 후 ambubagging을 통해 O2를 full로 공급하여 최대한의 산소를 공급해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. Head up이나 베개를 적용할 시에 기도를 부분적으로 막아 산소 공급이 원활하지 않을 수 있습니다. 또한 cannula나 mask를 통한 산소 공급은 자발호흡이 없는 심정지 환자에게는 적합하지 않으며 ambubagging을 통한 최대한의 산소를 공급해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316225/S4_3_w1wq5g.mp4`,
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
      "정확합니다! 가슴압박이 시작되었다면 당신은 CPR다음 단계를 위한 준비를 위해 E-cart를 가지고 와야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 가슴압박 중에 혈압 측정은 불필요하며 CPR시 제세동기는 요청받은 보유부서에서 가지고 옵니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765315385/S5_1_jc9v9i.mp4`,
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
      "에피네프린은 1mg IV를 3~5분 간격으로 반복 투여하며, Shockable 리듬은 제세동 후, Non-shockable 리듬은 즉시 투여합니다",
    feedbackIncorrect:
      "잘못된 선택입니다. 심정지 상황에서 에피네프린은 1mg을 정맥주사 bolus로 3~5분 간격으로 반복 투여해야하며, 투여 후 생리식염수로 flush 해야합니다. Shockable과 Non-shockable 리듬에 따라 투여 시점이 다릅니다. Shockable 리듬은 제세동 후 이어지는 가슴압박 시간에, Non-shockable 리듬은 가능한 한 빨리 투여합니다. 또한 의사 처방에 따라 투여해야 합니다.",
    explanation: "추가 설명이 없습니다.",
    videoPaths: {
      question: `https://res.cloudinary.com/dn3cicucf/video/upload/v1765316168/S5_10_qr5wzd.mp4`,
    },
  },
];
