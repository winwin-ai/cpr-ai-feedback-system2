import { Question } from "./types";

export const session1Questions: Question[] = [
  {
    id: 1,
    sessionId: 1,
    title: "초기 대응 확인",
    mediaType: "video",
    mediaPrompt: "Q01",
    questionText: "쓰러진 환자를 발견한 당신이 가장 먼저 해야 할 행동은?",
    options: [
      {
        id: "a",
        text: "환자의 반응을 확인한다.",
        imageUrl: "/videos/Q01-A.jpg",
      },
      {
        id: "b",
        text: "선임간호사에게 알려서 도움을 요청한다.",
        imageUrl: "/videos/Q01-B.jpg",
      },
      {
        id: "c",
        text: "쓰러진 환자를 바로 눕혀 기도 확보를 먼저 시도한다.",
        imageUrl: "/videos/Q01-C.jpg",
      },
      {
        id: "d",
        text: "경련을 하므로 PRN 진정제가 있는지 확인한다.",
        imageUrl: "/videos/Q01-D.jpg",
      },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정확합니다! 환자의 반응을 확인하는 것이 초기 대응의 첫 단계입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 환자를 옮기거나 약을 찾기보다 먼저 환자가 반응하는지 확인해야 합니다.",
    explanation:
      "쓰러진 환자 발견 시 가장 먼저 수행해야 할 단계는 의식 확인입니다.",
    videoPaths: {
      question:
        "https://res.cloudinary.com/dn3cicucf/video/upload/v1765032264/Q01.mp4",
      answer:
        "https://res.cloudinary.com/dn3cicucf/video/upload/v1765032263/Q01-A.mp4",
    },
  },
  {
    id: 2,
    sessionId: 1,
    title: "반응 확인 방법",
    mediaType: "video",
    mediaPrompt: "Q02",
    questionText: "환자의 반응을 확인하는 방법은 무엇인가요?",
    options: [
      {
        id: "a",
        text: "환자에게 큰소리로 말을 걸어본다.",
        imageUrl: "/videos/Q02-A.jpg",
      },
      {
        id: "b",
        text: "환자의 얼굴을 가까이 들여다보며 호흡 소리를 듣는다.",
        imageUrl: "/videos/Q02-B.jpg",
      },
      {
        id: "c",
        text: '환자의 어깨를 두드리며 큰소리로 "괜찮으세요"라고 묻는다.',
        imageUrl: "/videos/Q02-C.jpg",
      },
      {
        id: "d",
        text: "어깨를 세게 흔들며 이름을 부른다.",
        imageUrl: "/videos/Q02-D.jpg",
      },
    ],
    correctOptionId: "c",
    feedbackCorrect:
      "정답입니다. 어깨를 두드리며 큰소리로 묻는 것이 표준화된 반응 확인 방법입니다.",
    feedbackIncorrect:
      "잘못된 방법입니다. 얼굴을 가까이 들여다보거나 세게 흔드는 것은 잘못된 방법입니다. 어깨를 가볍게 두드리며 큰소리로 물어야 합니다.",
    explanation:
      "반응 확인은 양쪽 어깨를 가볍게 두드리며 큰 목소리로 물어보는 것이 표준 절차입니다.",
    videoPaths: {
      question:
        "https://res.cloudinary.com/dn3cicucf/video/upload/v1765032277/Q02.mp4",
      answer:
        "https://res.cloudinary.com/dn3cicucf/video/upload/v1765032272/Q02-C.mp4",
    },
  },
  {
    id: 3,
    sessionId: 1,
    title: "무반응 시 대처",
    mediaType: "video",
    mediaPrompt: "Q03",
    questionText: "환자의 반응이 없습니다. 어떻게 해야 하나요?",
    options: [
      { id: "a", text: "도움을 요청한다.", imageUrl: "/videos/Q03-A.jpg" },
      { id: "b", text: "혈당을 측정한다.", imageUrl: "/videos/Q03-B.jpg" },
      {
        id: "c",
        text: "우선 환자를 침대로 옮긴다.",
        imageUrl: "/videos/Q03-C.jpg",
      },
      { id: "d", text: "가슴압박을 시작한다.", imageUrl: "/videos/Q03-D.jpg" },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정확합니다! 환자의 반응이 없으면 즉시 주변에 도움을 요청해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 혈당 측정이나 환자를 옮기는 행동보다 먼저 도움을 요청해야 합니다.",
    explanation:
      "환자가 반응이 없다면 즉시 주변에 도움을 요청하여 의료 응급팀(Code Blue 등)을 활성화해야 합니다.",
    videoPaths: {
      question:
        "https://res.cloudinary.com/dn3cicucf/video/upload/v1765032270/Q03.mp4",
      answer:
        "https://res.cloudinary.com/dn3cicucf/video/upload/v1765032264/Q03-A.mp4",
    },
  },
  {
    id: 4,
    sessionId: 1,
    title: "도움 요청",
    mediaType: "video",
    mediaPrompt: "Q04",
    questionText: "도움요청을 어떻게 해야 할까요?",
    options: [
      {
        id: "a",
        text: "간호사실에 가서 상황을 보고한다.",
        imageUrl: "/videos/Q04-A.jpg",
      },
      {
        id: "b",
        text: "내 핸드폰으로 선임간호사에게 전화한다.",
        imageUrl: "/videos/Q04-B.jpg",
      },
      {
        id: "c",
        text: "보호자에게 간호사를 불러오라고 한다.",
        imageUrl: "/videos/Q04-C.png",
      },
      {
        id: "d",
        text: "호출벨을 눌러 주변에 알린다.",
        imageUrl: "/videos/Q04-D.png",
      },
    ],
    correctOptionId: "d",
    feedbackCorrect:
      "정답입니다. 도움요청을 위해 호출벨을 누르는 것이 가장 빠른 방법입니다.",
    feedbackIncorrect:
      "오답입니다. 전화나 간접적인 요청보다 즉각적으로 도움요청을 위해 호출벨을 눌러야 신속 대응이 가능합니다.",
    explanation:
      "병실 내 호출벨을 사용하여 즉시 동료 의료진에게 상황을 전파해야 합니다.",
    videoPaths: { question: "/videos/Q04.mp4", answer: "/videos/Q04-D.mp4" },
  },
  {
    id: 5,
    sessionId: 1,
    title: "도움 요청 후 조치",
    mediaType: "video",
    mediaPrompt: "Q05",
    questionText: "도움요청 후 무엇을 해야 하나요?",
    options: [
      {
        id: "a",
        text: "환자의 맥박과 호흡을 10초 이내로 확인한다.",
        imageUrl: "/videos/Q05-A.jpg",
      },
      {
        id: "b",
        text: "모니터를 가지고 와서 환자에게 부착한다.",
        imageUrl: "/videos/Q05-B.jpg",
      },
      {
        id: "c",
        text: "정맥 주사라인을 확보한다.",
        imageUrl: "/videos/Q05-C.png",
      },
      {
        id: "d",
        text: "환자에게 산소를 적용한다.",
        imageUrl: "/videos/Q05-D.png",
      },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정확합니다! 도움 요청 후에는 환자의 맥박과 호흡을 10초 이내로 확인해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 모니터 부착이나 IV 확보보다 먼저 심정지 여부를 확인해야 합니다.",
    explanation:
      "심정지 여부를 판단하기 위해 10초 이내에 맥박과 호흡 유무를 동시에 확인해야 합니다.",
    videoPaths: { question: "/videos/Q05.mp4", answer: "/videos/Q05-A.mp4" },
  },
  {
    id: 6,
    sessionId: 1,
    title: "맥박과 호흡 확인",
    mediaType: "video",
    mediaPrompt: "Q06",
    questionText: "맥박과 호흡은 어떻게 확인하나요?",
    options: [
      {
        id: "a",
        text: "경동맥에 두 손가락을 대어 맥박을 느끼며 동시에 가슴의 움직임과 호흡음을 관찰한다.",
        imageUrl: "/videos/Q06-A.jpg",
      },
      {
        id: "b",
        text: "손목의 요골맥을 짚고 호흡은 환자의 코에 손을 대서 확인한다.",
        imageUrl: "/videos/Q06-B.jpg",
      },
      {
        id: "c",
        text: "복부에 귀를 대어 배 움직임으로 호흡을 확인한다.",
        imageUrl: "/videos/Q06-C.png",
      },
      {
        id: "d",
        text: "심전도 모니터를 붙여 맥박과 호흡을 동시에 확인한다.",
        imageUrl: "/videos/Q06-D.png",
      },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다! 경동맥 촉지와 흉곽 움직임, 호흡음 확인이 표준 절차입니다.",
    feedbackIncorrect:
      "정확하지 않습니다. 손목 맥박은 신뢰도가 낮으며, 복부나 코에 손을 대는 방법은 표준이 아닙니다.",
    explanation:
      "경동맥 촉지와 흉부 상승 관찰을 동시에 수행하여 5~10초 이내에 완료해야 합니다.",
    videoPaths: { question: "/videos/Q06.mp4", answer: "/videos/Q06-A.mp4" },
  },
  {
    id: 7,
    sessionId: 1,
    title: "호흡 양상 판단",
    mediaType: "video",
    mediaPrompt: "Q07",
    questionText: "이 환자의 호흡 상태는 어떤 양상을 보이나요?",
    options: [
      {
        id: "a",
        text: "규칙적이고 깊은 정상 호흡을 보임",
        imageUrl: "/videos/Q07-A.jpg",
      },
      {
        id: "b",
        text: "심정지호흡을 보임 / 또는 간헐적 헐떡임(agonal breathing) 양상을 보임",
        imageUrl: "/videos/Q07-B.jpg",
      },
      {
        id: "c",
        text: "코골이 소리가 나는 수면성 호흡을 보임",
        imageUrl: "/videos/Q07-C.png",
      },
      {
        id: "d",
        text: "빠르고 얕은 과호흡을 보임",
        imageUrl: "/videos/Q07-D.png",
      },
    ],
    correctOptionId: "b",
    feedbackCorrect:
      "정확합니다! 영상에서 보이는 간헐적 헐떡임은 정상 호흡이 아닌 심정지 호흡(agonal breathing)입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 간헐적 헐떡임은 정상 호흡이 아니며 심정지 상태의 특징입니다.",
    explanation:
      "심정지 직후 나타나는 헐떡임(Agonal breathing)은 정상 호흡이 아니며, 즉시 심정지로 간주해야 합니다.",
    videoPaths: { question: "/videos/Q07.mp4", answer: "/videos/Q07-B.mp4" },
  },
  {
    id: 8,
    sessionId: 1,
    title: "호흡 고려 조치",
    mediaType: "video",
    mediaPrompt: "Q08",
    questionText:
      "환자의 호흡을 고려했을 때, 당신은 어떤 조치를 취해야 할까요?",
    options: [
      { id: "a", text: "E-cart를 가져온다.", imageUrl: "/videos/Q08-A.jpg" },
      {
        id: "b",
        text: "주치의에게 연락한 후 처방을 기다린다.",
        imageUrl: "/videos/Q08-B.jpg",
      },
      {
        id: "c",
        text: "모니터를 가지고 와서 환자에게 부착한다.",
        imageUrl: "/videos/Q08-C.png",
      },
      { id: "d", text: "가슴압박을 시작한다.", imageUrl: "/videos/Q08-D.png" },
    ],
    correctOptionId: "d",
    feedbackCorrect:
      "정답입니다! 심정지 호흡이 관찰되면 즉시 가슴압박을 시작해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 주치의 지시를 기다리거나 모니터 부착보다 가슴압박을 바로 시작해야 합니다.",
    explanation:
      "비정상 호흡(심정지 호흡)과 맥박 부재 시 즉시 흉부 압박을 시작하는 것이 생존율을 높입니다.",
    videoPaths: { question: "/videos/Q08.mp4", answer: "/videos/Q08-D.mp4" },
  },
];

export const session2Questions: Question[] = [
  {
    id: 9,
    sessionId: 2,
    title: "가슴 압박 위치",
    mediaType: "video",
    mediaPrompt: "Q09",
    questionText: "가슴압박 시 올바른 압박 위치는 어디인가요?",
    options: [
      {
        id: "a",
        text: "흉골 중앙의 하단부(양쪽 nipple 사이)에 손바닥을 올리고 압박한다.",
        imageUrl: "/videos/Q09-A.jpg",
      },
      {
        id: "b",
        text: "왼쪽 가슴 위를 손끝으로 빠르게 압박한다.",
        imageUrl: "/videos/Q09-B.jpg",
      },
      {
        id: "c",
        text: "환자의 배 위(명치 부분)를 눌러준다.",
        imageUrl: "/videos/Q09-C.png",
      },
      {
        id: "d",
        text: "흉골을 세게 3~4회만 눌러 반응을 본다.",
        imageUrl: "/videos/Q09-D.png",
      },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "올바릅니다! 흉골 중앙의 하단부, 즉 양쪽 nipple 사이를 압박해야 합니다.",
    feedbackIncorrect:
      "오답입니다. 가슴압박은 반드시 흉골 중앙의 하단부에 손바닥을 올려 심장에 효과적으로 압력을 전달해야 합니다.",
    explanation:
      "흉골의 하부 1/2 지점(양쪽 젖꼭지 연결선의 중앙)이 정확한 압박 위치입니다.",
    videoPaths: { question: "/videos/Q09.mp4", answer: "/videos/Q09-A.mp4" },
  },
  {
    id: 10,
    sessionId: 2,
    title: "가슴 압박 방법",
    mediaType: "video",
    mediaPrompt: "Q10",
    questionText: "가슴압박의 올바른 방법은 무엇인가요?",
    options: [
      {
        id: "a",
        text: "5cm 깊이로 압박하고 압박 후에는 흉곽이 완전히 이완되도록 한다.",
        imageUrl: "/videos/Q10-A.jpg",
      },
      {
        id: "b",
        text: "5cm 깊이로 압박하고 이완되지 않게 빠르게 압박을 지속한다.",
        imageUrl: "/videos/Q10-B.jpg",
      },
      {
        id: "c",
        text: "10cm 이상 깊이로 압박한다.",
        imageUrl: "/videos/Q10-C.png",
      },
      {
        id: "d",
        text: "깊이와 상관없이 빠르게만 누른다.",
        imageUrl: "/videos/Q10-D.png",
      },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다! 5cm 깊이는 성인에게 적절한 심장 압박 깊이입니다. 그리고 압박 후에는 효과적인 순환을 위해 흉곽을 완전히 이완시키는 것(recoil)이 중요합니다.",
    feedbackIncorrect:
      "오답입니다. 5cm보다 얕거나 깊으면 효과적인 순환이 이루어지지 않거나 손상 위험이 있으며, 완전 이완(recoil) 없이 압박만 지속하면 효과적인 순환이 어렵습니다.",
    explanation:
      "성인 기준 약 5cm 깊이로 강하게 압박하고, 각 압박 후 가슴이 완전히 올라오도록 이완해야 합니다.",
    videoPaths: { question: "/videos/Q10.mp4", answer: "/videos/Q10-A.mp4" },
  },
  {
    id: 11,
    sessionId: 2,
    title: "가슴 압박 속도",
    mediaType: "video",
    mediaPrompt: "Q11",
    questionText: "가슴압박의 올바른 속도는 얼마인가요?",
    options: [
      {
        id: "a",
        text: "100~120회/분으로 압박한다.",
        imageUrl: "/videos/Q11-A.jpg",
      },
      { id: "b", text: "50회/분으로 압박한다.", imageUrl: "/videos/Q11-B.jpg" },
      {
        id: "c",
        text: "150회/분으로 압박한다.",
        imageUrl: "/videos/Q11-C.png",
      },
      { id: "d", text: "가능한 빠르게 누른다.", imageUrl: "/videos/Q11-D.png" },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "잘했습니다! 100~120회/분은 뇌와 심장에 혈류를 공급할 수 있는 최적 속도입니다.",
    feedbackIncorrect:
      "오답입니다. 너무 빠르거나 느린 속도는 효과적인 순환을 방해합니다. 100~120회/분을 유지하세요.",
    explanation: "가슴압박 속도는 분당 100~120회가 권장됩니다.",
    videoPaths: { question: "/videos/Q11.mp4", answer: "/videos/Q11-A.mp4" },
  },
  {
    id: 12,
    sessionId: 2,
    title: "가슴 압박 자세",
    mediaType: "video",
    mediaPrompt: "Q12",
    questionText: "가슴압박 시 신체 자세로 옳은 것은? (올바른 자세)",
    options: [
      {
        id: "a",
        text: "팔꿈치를 굽히고 손목의 힘을 이용한다.",
        imageUrl: "/videos/Q12-A.jpg",
      },
      {
        id: "b",
        text: "손가락 끝으로 흉부를 누른다.",
        imageUrl: "/videos/Q12-B.jpg",
      },
      {
        id: "c",
        text: "팔을 곧게 펴고 어깨가 환자 흉부 위에 수직이 되도록 한다.",
        imageUrl: "/videos/Q12-C.png",
      },
      {
        id: "d",
        text: "허리를 굽혀 상체만으로 압박한다.",
        imageUrl: "/videos/Q12-D.png",
      },
    ],
    correctOptionId: "c",
    feedbackCorrect:
      "정답입니다! 팔을 곧게 펴고 어깨를 환자 흉부 위에 수직으로 위치시키면 효율적으로 압박할 수 있습니다.",
    feedbackIncorrect:
      "오답입니다. 팔꿈치를 굽히거나 손가락만으로 누르는 방식은 힘이 분산되어 압박 효과가 떨어집니다.",
    explanation:
      "구조자의 어깨가 환자 가슴 바로 위에 오도록 하고, 팔꿈치를 곧게 펴 체중을 실어 압박합니다.",
    videoPaths: { question: "/videos/Q12.mp4", answer: "/videos/Q12-C.mp4" },
  },
  {
    id: 13,
    sessionId: 2,
    title: "제세동기 준비 순서",
    mediaType: "video",
    mediaPrompt: "Q13",
    questionText:
      "가슴압박을 교대한 후, 당신은 제세동기를 준비해야 합니다. 어떤 순서로 제세동기를 준비하고 사용해야 할 까요?\n\nA. 전원을 켠다.\nB. 리듬을 확인한다.\nC. 전극(magnerode)을 부착한다.\nD. 200J 충전을 한다.\nE. 처방이 있을 때까지 기다린다.",
    options: [
      {
        id: "a",
        text: "A-C-B",
        imageUrl: "/videos/Q13-A.jpg",
      },
      { id: "b", text: "A-C-B-D", imageUrl: "/videos/Q13-B.jpg" },
      { id: "c", text: "A-D", imageUrl: "/videos/Q13-C.png" },
      { id: "d", text: "A-E", imageUrl: "/videos/Q13-D.png" },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정확합니다! 제세동기는 전원을 켜고 전극을 부착한 후 리듬을 확인해야 합니다.",
    feedbackIncorrect:
      "잘못된 순서입니다. 전원을 먼저 켜고 전극 부착 후 리듬 확인, 처방이 있을시에 충전해야 합니다.",
    explanation:
      "제세동기 사용은 전원을 켜고, 패드를 부착한 뒤, 심전도 리듬을 분석하는 순서로 진행됩니다.",
    videoPaths: { question: "/videos/Q13.mp4", answer: "/videos/Q13-A.mp4" },
  },
  {
    id: 14,
    sessionId: 2,
    title: "전극 부착 위치",
    mediaType: "video",
    mediaPrompt: "Q14",
    questionText: "전극(electrode)를 성인 환자에게 부착할 때 올바른 위치는?",
    options: [
      {
        id: "a",
        text: "오른쪽 어깨와 왼쪽 어깨",
        imageUrl: "/videos/Q14-A.jpg",
      },
      {
        id: "b",
        text: "오른쪽 쇄골 아래, 오른쪽 갈비뼈 아래와 왼쪽 갈비뼈 아래",
        imageUrl: "/videos/Q14-B.jpg",
      },
      {
        id: "c",
        text: "오른쪽 쇄골 아래, 왼쪽 쇄골 아래와 왼쪽 갈비뼈 아래",
        imageUrl: "/videos/Q14-C.png",
      },
      { id: "d", text: "목 부위와 배꼽 부위", imageUrl: "/videos/Q14-D.png" },
    ],
    correctOptionId: "c",
    feedbackCorrect:
      "정답입니다! 전극은 양쪽 쇄골 아래와 왼쪽 갈비뼈 아래에 부착해야 합니다.",
    feedbackIncorrect:
      "잘못된 위치입니다. 양 어깨나 목 부위, 갈비뼈 아래는 부착 위치가 아닙니다. 표준 위치를 기억하세요.",
    explanation:
      "일반적인 3-lead 모니터링 부착 위치는 우측 쇄골 아래(RA), 좌측 쇄골 아래(LA), 좌측 갈비뼈 아래(LL) 입니다.",
    videoPaths: { question: "/videos/Q14.mp4", answer: "/videos/Q14-C.mp4" },
  },
  {
    id: 15,
    sessionId: 2,
    title: "심전도 리듬 확인 (Asystole)",
    mediaType: "video",
    mediaPrompt: "Q15",
    questionText:
      "제세동기 전극 부착 후... 다음 심전도는 무슨 리듬인가요? (Asystole 영상)",
    options: [
      { id: "a", text: "VF", imageUrl: "/videos/Q15-A.jpg" },
      { id: "b", text: "Pulseless VT", imageUrl: "/videos/Q15-B.jpg" },
      { id: "c", text: "A-systole", imageUrl: "/videos/Q15-C.png" },
      { id: "d", text: "PEA", imageUrl: "/videos/Q15-D.png" },
    ],
    correctOptionId: "c",
    feedbackCorrect:
      "정확합니다! 제시된 파형은 Asystole으로 Non-shockable 리듬입니다.",
    feedbackIncorrect:
      "잘못된 판별입니다. 이 파형은 Asystole으로 Non-shockable 리듬입니다.",
    explanation: "전기적 활동이 없는 상태인 무수축(Asystole) 입니다.",
    videoPaths: { question: "/videos/Q15.mp4", answer: "/videos/Q15-C.mp4" },
  },
  {
    id: 16,
    sessionId: 2,
    title: "Asystole 대처",
    mediaType: "video",
    mediaPrompt: "Q16",
    questionText: "Asystole을 확인한 경우에 어떻게 해야 하나요?",
    options: [
      { id: "a", text: "제세동을 준비한다.", imageUrl: "/videos/Q16-A.jpg" },
      { id: "b", text: "가슴압박을 지속한다.", imageUrl: "/videos/Q16-B.jpg" },
      { id: "c", text: "응급약물을 준비한다.", imageUrl: "/videos/Q16-C.png" },
      { id: "d", text: "혈압을 측정한다.", imageUrl: "/videos/Q16-D.png" },
    ],
    correctOptionId: "b",
    feedbackCorrect:
      "정답입니다! Asystole 리듬은 제세동 대상이 아니므로 가슴압박을 지속해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. Asystole은 Non-shockable 리듬으로 제세동 대상이 아닙니다.",
    explanation:
      "무수축(Asystole)은 충격 필요 리듬이 아니므로, 즉시 고품질 CPR(가슴압박)을 이어서 수행해야 합니다.",
    videoPaths: { question: "/videos/Q16.mp4", answer: "/videos/Q16-B.mp4" },
  },
  {
    id: 17,
    sessionId: 2,
    title: "Asystole 약물 투여",
    mediaType: "video",
    mediaPrompt: "Q17",
    questionText:
      "심정지 환자에서 Asystole 리듬이 확인되었습니다. 정맥로가 확보된 경우, 에피네프린은 어떻게 투여해야 할 까요?\n(Asystole, Non-shockable Rhythm 상황)",
    options: [
      {
        id: "a",
        text: "제세동 후 투여하며, 3~5분 간격으로 반복 주사한다.",
        imageUrl: "/videos/Q17-A.jpg",
      },
      {
        id: "b",
        text: "가능한 한 빨리 투여하며, 3~5분 간격으로 반복 주사한다.",
        imageUrl: "/videos/Q17-B.jpg",
      },
      {
        id: "c",
        text: "자발순환 회복 후 투여한다",
        imageUrl: "/videos/Q17-C.png",
      },
      {
        id: "d",
        text: "Shockable 리듬에서만 투여한다",
        imageUrl: "/videos/Q17-D.png",
      },
    ],
    correctOptionId: "b",
    feedbackCorrect:
      "정답입니다! 비충격 리듬은 제세동이 필요 없으므로 CPR 시작 후 정맥로가 확보되면 즉시 에피네프린 투여해야하며, 자발순환이 회복되거나 전문소생술이 끝날 때까지 3~5분 간격으로 반복 투여해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. Asystole은 Non-shockable 리듬으로 제세동이 필요없고 에피네프린은 가능한 한 빨리 투여해야 합니다.",
    explanation:
      "제세동 불가 리듬(Asystole, PEA)에서는 에피네프린을 가능한 한 빨리 투여하고, 3~5분마다 반복합니다.",
    videoPaths: { question: "/videos/Q17.mp4", answer: "/videos/Q17-B.mp4" },
  },
  {
    id: 18,
    sessionId: 2,
    title: "심전도 리듬 확인 (VF)",
    mediaType: "video",
    mediaPrompt: "Q18",
    questionText: "가슴압박 중... 다음 심전도는 무슨 리듬인가요? (VF 영상)",
    options: [
      { id: "a", text: "VF (심실세동)", imageUrl: "/videos/Q18-A.jpg" },
      { id: "b", text: "Pulseless VT", imageUrl: "/videos/Q18-B.jpg" },
      { id: "c", text: "A-systole", imageUrl: "/videos/Q18-C.png" },
      { id: "d", text: "PEA", imageUrl: "/videos/Q18-D.png" },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정확합니다! 제시된 파형은 무맥성 심실세동(VF)으로 Shockable 리듬입니다.",
    feedbackIncorrect:
      "잘못된 판별입니다. 이 파형은 무맥성 심실세동(VF)이며 즉시 제세동 대상입니다.",
    explanation:
      "심실세동(Ventricular Fibrillation)은 심장이 무질서하게 떨리는 상태로, 즉각적인 제세동이 필요합니다.",
    videoPaths: { question: "/videos/Q18.mp4", answer: "/videos/Q18-A.mp4" },
  },
  {
    id: 19,
    sessionId: 2,
    title: "VF 대처",
    mediaType: "video",
    mediaPrompt: "Q19",
    questionText: "V-fib을 확인한 당신은 어떻게 해야 하나요?",
    options: [
      { id: "a", text: "제세동을 준비한다.", imageUrl: "/videos/Q19-A.jpg" },
      { id: "b", text: "가슴압박을 지속한다.", imageUrl: "/videos/Q19-B.jpg" },
      { id: "c", text: "응급약물을 준비한다.", imageUrl: "/videos/Q19-C.png" },
      { id: "d", text: "혈압을 측정한다.", imageUrl: "/videos/Q19-D.png" },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다! VF 확인 후 가장 먼저 제세동을 준비해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 가슴압박과 응급약물도 중요하지만 VF는 제세동이 최우선입니다.",
    explanation:
      "심실세동(VF)은 Shockable rhythm이므로 즉시 제세동(Defibrillation)을 준비하고 시행해야 합니다.",
    videoPaths: { question: "/videos/Q19.mp4", answer: "/videos/Q19-A.mp4" },
  },
  {
    id: 20,
    sessionId: 2,
    title: "제세동 순서",
    mediaType: "video",
    mediaPrompt: "Q20",
    questionText: "제세동이 필요할 때 올바른 순서로 묶인 것은?",
    options: [
      { id: "a", text: "A-B-C-D", imageUrl: "/videos/Q20-A.jpg" },
      { id: "b", text: "B-A-C-D", imageUrl: "/videos/Q20-B.jpg" },
      { id: "c", text: "A-C-B-D", imageUrl: "/videos/Q20-C.png" },
      { id: "d", text: "C-A-B-D", imageUrl: "/videos/Q20-D.png" },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정확합니다! 올바른 순서는 A-B-C-D(패들 젤→충전→안전확인→가슴압박재개)입니다.",
    feedbackIncorrect:
      "잘못된 순서입니다. 항상 패들 젤 바르기 → 충전 → 주변 안전 확인 → 충격 후 가슴압박 재개 순으로 진행해야 합니다.",
    explanation:
      "패들 준비(젤) -> 충전 -> 안전 확인(물러나세요) -> 쇼크 실행 및 즉시 가슴압박 재개 순서입니다.",
    videoPaths: { question: "/videos/Q20.mp4", answer: "/videos/Q20-A.mp4" },
  },
  {
    id: 21,
    sessionId: 2,
    title: "VF 에피네프린 투여 시점",
    mediaType: "video",
    mediaPrompt: "Q21",
    questionText:
      "심정지 환자에서 심실세동(VF)이 확인되었습니다. 이때 에피네프린 투여 시점은 언제가 적절한가요?\n(VF, Shockable Rhythm 상황)",
    options: [
      {
        id: "a",
        text: "심정지가 확인되면 즉시 투여한다",
        imageUrl: "/videos/Q21-A.jpg",
      },
      {
        id: "b",
        text: "제세동하기 전에 먼저 투여한다",
        imageUrl: "/videos/Q21-B.jpg",
      },
      {
        id: "c",
        text: "제세동을 한 뒤, 이어지는 가슴압박 시간에 투여하며, 3~5분 간격으로 반복 주사한다.",
        imageUrl: "/videos/Q21-C.png",
      },
      {
        id: "d",
        text: "Shockable 리듬에서는 투여하지 않는다",
        imageUrl: "/videos/Q21-D.png",
      },
    ],
    correctOptionId: "c",
    feedbackCorrect:
      "정확합니다! Shockable 리듬은 제세동이 최우선입니다. 따라서 에피네프린은 첫 제세동 직후 다시 시작하는 2분 가슴압박 시간에 투여해야 하며, 3~5분 간격으로 반복 투여해야 합니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. VF는 Shockable Rhythm이므로 제세동이 최우선입니다. 제세동을 한 뒤에 에피네프린을 투여해야 합니다.",
    explanation:
      "VF/pVT의 경우 제세동과 CPR이 우선이며, 에피네프린은 2번째 제세동 후에도 순환이 돌아오지 않을 때 투여합니다.",
    videoPaths: { question: "/videos/Q21.mp4", answer: "/videos/Q21-C.mp4" },
  },
  {
    id: 22,
    sessionId: 2,
    title: "ROSC 징후 확인",
    mediaType: "video",
    mediaPrompt: "Q22",
    questionText:
      "환자의 ROSC를 확인해야 합니다. 다음 중 자발순환 회복(ROSC)의 징후로 가장 올바른 것은?",
    options: [
      {
        id: "a",
        text: "Shock 직후 심전도 파형의 일시적 변화",
        imageUrl: "/videos/Q22-A.jpg",
      },
      {
        id: "b",
        text: "자발 맥박이 돌아오고 혈압이 측정되는 것",
        imageUrl: "/videos/Q22-B.jpg",
      },
      {
        id: "c",
        text: "가슴압박 시 피부색이 잠시 좋아지는 것",
        imageUrl: "/videos/Q22-C.png",
      },
      {
        id: "d",
        text: "환자의 동공이 확장된 상태로 유지되는 것",
        imageUrl: "/videos/Q22-D.png",
      },
    ],
    correctOptionId: "b",
    feedbackCorrect:
      "정답입니다! 자발 맥박이 돌아오고 혈압 측정 가능은 ROSC의 대표적인 징후입니다.",
    feedbackIncorrect:
      "잘못된 선택입니다. 일시적인 심전도 변화나 피부색 변화는 ROSC를 의미하지 않으며, 동공 확장은 회복 징후가 아닙니다.",
    explanation:
      "자발순환 회복(ROSC)은 경동맥 등에서 자발적인 맥박이 촉지되고 혈압이 측정되는 상태를 의미합니다.",
    videoPaths: { question: "/videos/Q22.mp4", answer: "/videos/Q22-B.mp4" },
  },
];
