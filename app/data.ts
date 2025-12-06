import { Question } from "./types";

// Common media prompts (kept for reference, using placeholders for now)
const COMMON_BG_WARD = "Cinematic 8K video...";
const COMMON_BG_ER = "Cinematic 8K video...";

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
        imageUrl: "/videos/Q01-C.png",
      },
      {
        id: "d",
        text: "경련을 하므로 PRN 진정제가 있는지 확인한다.",
        imageUrl: "/videos/Q01-D.png",
      },
    ],
    correctOptionId: "a",
    feedbackCorrect: "정답입니다. 먼저 환자의 반응을 확인해야 합니다.",
    feedbackIncorrect: "가장 먼저 환자의 의식/반응을 확인해야 합니다.",
    explanation:
      "쓰러진 환자 발견 시 가장 먼저 수행해야 할 단계는 의식 확인입니다.",
    videoPaths: { question: "/videos/Q01.mp4", answer: "/videos/Q01-A.mp4" },
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
        imageUrl: "/videos/Q02-C.png",
      },
      {
        id: "d",
        text: "어깨를 세게 흔들며 이름을 부른다.",
        imageUrl: "/videos/Q02-D.png",
      },
    ],
    correctOptionId: "c",
    feedbackCorrect: "정답입니다. 어깨를 가볍게 두드리며 큰 소리로 확인합니다.",
    feedbackIncorrect: "어깨를 두드리며 큰 소리로 질문해야 합니다.",
    explanation:
      "반응 확인은 양쪽 어깨를 가볍게 두드리며 큰 목소리로 물어보는 것이 표준 절차입니다.",
    videoPaths: { question: "/videos/Q02.mp4", answer: "/videos/Q02-C.mp4" },
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
        imageUrl: "/videos/Q03-C.png",
      },
      { id: "d", text: "가슴압박을 시작한다.", imageUrl: "/videos/Q03-D.png" },
    ],
    correctOptionId: "a",
    feedbackCorrect: "정답입니다. 즉시 도움을 요청해야 합니다.",
    feedbackIncorrect: "혼자 해결하려 하지 말고 도움을 요청해야 합니다.",
    explanation:
      "환자가 반응이 없다면 즉시 주변에 도움을 요청하여 의료 응급팀(Code Blue 등)을 활성화해야 합니다.",
    videoPaths: { question: "/videos/Q03.mp4", answer: "/videos/Q03-A.mp4" },
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
    feedbackCorrect: "정답입니다. 호출벨을 이용하여 신속하게 알립니다.",
    feedbackIncorrect: "가장 빠르고 효율적인 수단인 호출벨을 사용해야 합니다.",
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
    feedbackCorrect: "정답입니다. 맥박과 호흡을 10초 이내에 확인합니다.",
    feedbackIncorrect:
      "전문 소생술 전, 환자 상태(맥박/호흡) 확인이 우선입니다.",
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
    feedbackCorrect: "정답입니다. 경동맥과 흉부 움직임을 동시에 확인합니다.",
    feedbackIncorrect:
      "성인은 경동맥 확인이 원칙이며, 시각/청각/촉각을 이용해 호흡을 확인합니다.",
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
    feedbackCorrect: "정답입니다. 심정지 호흡(Agonal breathing)입니다.",
    feedbackIncorrect:
      "이는 심정지 초기에 나타나는 비정상적인 호흡 패턴입니다.",
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
    feedbackCorrect: "정답입니다. 즉시 가슴압박을 시작해야 합니다.",
    feedbackIncorrect: "심정지 상황이므로 즉시 CPR을 시작해야 합니다.",
    explanation:
      "비정상 호흡(심정지 호흡)과 맥박 부재 시 즉시 흉부 압박을 시작하는 것이 생존율을 높입니다.",
    videoPaths: { question: "/videos/Q08.mp4", answer: "/videos/Q08-D.mp4" },
  },
  {
    id: 9,
    sessionId: 1,
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
    feedbackCorrect: "정답입니다. 흉골 하부 절반 위치입니다.",
    feedbackIncorrect: "흉골 하부 중앙을 압박해야 효과적입니다.",
    explanation:
      "흉골의 하부 1/2 지점(양쪽 젖꼭지 연결선의 중앙)이 정확한 압박 위치입니다.",
    videoPaths: { question: "/videos/Q09.mp4", answer: "/videos/Q09-A.mp4" },
  },
  {
    id: 10,
    sessionId: 1,
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
    feedbackCorrect: "정답입니다. 충분한 깊이와 완전한 이완이 중요합니다.",
    feedbackIncorrect: "깊이뿐만 아니라 완전한 이완(recoil)도 중요합니다.",
    explanation:
      "성인 기준 약 5cm 깊이로 강하게 압박하고, 각 압박 후 가슴이 완전히 올라오도록 이완해야 합니다.",
    videoPaths: { question: "/videos/Q10.mp4", answer: "/videos/Q10-A.mp4" },
  },
  {
    id: 11,
    sessionId: 1,
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
    feedbackCorrect: "정답입니다. 분당 100~120회를 유지해야 합니다.",
    feedbackIncorrect: "너무 느리거나 빠르지 않게, 100~120회를 유지하세요.",
    explanation: "가슴압박 속도는 분당 100~120회가 권장됩니다.",
    videoPaths: { question: "/videos/Q11.mp4", answer: "/videos/Q11-A.mp4" },
  },
  {
    id: 12,
    sessionId: 1,
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
    feedbackCorrect: "정답입니다. 팔을 펴고 수직으로 체중을 실어야 합니다.",
    feedbackIncorrect:
      "효율적인 압박을 위해 팔꿈치를 펴고 수직 자세를 유지해야 합니다.",
    explanation:
      "구조자의 어깨가 환자 가슴 바로 위에 오도록 하고, 팔꿈치를 곧게 펴 체중을 실어 압박합니다.",
    videoPaths: { question: "/videos/Q12.mp4", answer: "/videos/Q12-C.mp4" },
  },
  {
    id: 13,
    sessionId: 1,
    title: "제세동기 준비 순서",
    mediaType: "video",
    mediaPrompt: "Q13",
    questionText:
      "가슴압박을 교대한 후... 어떤 순서로 제세동기를 준비하고 사용해야 할까요?",
    options: [
      {
        id: "a",
        text: "A(전원)-C(전극부착)-B(리듬확인)",
        imageUrl: "/videos/Q13-A.jpg",
      },
      { id: "b", text: "A-C-B-D", imageUrl: "/videos/Q13-B.jpg" },
      { id: "c", text: "A-D", imageUrl: "/videos/Q13-C.png" },
      { id: "d", text: "A-E", imageUrl: "/videos/Q13-D.png" },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다. 전원 켜기 -> 패드 부착 -> 리듬 분석 순입니다.",
    feedbackIncorrect: "AED 사용의 기본 순서는 전원, 패드, 분석입니다.",
    explanation:
      "제세동기 사용은 전원을 켜고, 패드를 부착한 뒤, 심전도 리듬을 분석하는 순서로 진행됩니다.",
    videoPaths: { question: "/videos/Q13.mp4", answer: "/videos/Q13-A.mp4" },
  },
  {
    id: 14,
    sessionId: 1,
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
    feedbackCorrect: "정답입니다. 3 lead 모니터링 시 권장되는 위치입니다.",
    feedbackIncorrect: "올바른 심전도 모니터링을 위한 위치를 선정해야 합니다.",
    explanation:
      "일반적인 3-lead 모니터링 부착 위치는 우측 쇄골 아래(RA), 좌측 쇄골 아래(LA), 좌측 갈비뼈 아래(LL) 입니다.",
    videoPaths: { question: "/videos/Q14.mp4", answer: "/videos/Q14-C.mp4" },
  },
  {
    id: 15,
    sessionId: 1,
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
    feedbackCorrect: "정답입니다. 무수축(Asystole) 리듬입니다.",
    feedbackIncorrect: "평탄한 선으로 나타나는 무수축 리듬입니다.",
    explanation: "전기적 활동이 없는 상태인 무수축(Asystole) 입니다.",
    videoPaths: { question: "/videos/Q15.mp4", answer: "/videos/Q15-C.mp4" },
  },
  {
    id: 16,
    sessionId: 1,
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
      "정답입니다. 제세동 불가 리듬이므로 즉시 가슴압박을 지속합니다.",
    feedbackIncorrect: "Asystole은 제세동 적응증이 아닙니다.",
    explanation:
      "무수축(Asystole)은 충격 필요 리듬이 아니므로, 즉시 고품질 CPR(가슴압박)을 이어서 수행해야 합니다.",
    videoPaths: { question: "/videos/Q16.mp4", answer: "/videos/Q16-B.mp4" },
  },
  {
    id: 17,
    sessionId: 1,
    title: "Asystole 약물 투여",
    mediaType: "video",
    mediaPrompt: "Q17",
    questionText:
      "심정지 환자(Asystole)에서... 에피네프린은 어떻게 투여해야 할까요?",
    options: [
      {
        id: "a",
        text: "제세동 후 투여하며 3~5분 간격으로 반복 주사한다.",
        imageUrl: "/videos/Q17-A.jpg",
      },
      {
        id: "b",
        text: "가능한 한 빨리 투여하며 3~5분 간격으로 반복 주사한다.",
        imageUrl: "/videos/Q17-B.jpg",
      },
      {
        id: "c",
        text: "자발순환 회복 후 투여한다.",
        imageUrl: "/videos/Q17-C.png",
      },
      {
        id: "d",
        text: "Shockable 리듬에서만 투여한다.",
        imageUrl: "/videos/Q17-D.png",
      },
    ],
    correctOptionId: "b",
    feedbackCorrect:
      "정답입니다. 제세동 불가 리듬에서는 가능한 빨리 투여합니다.",
    feedbackIncorrect:
      "Asystole의 경우 지체 없이 에피네프린을 투여해야 합니다.",
    explanation:
      "제세동 불가 리듬(Asystole, PEA)에서는 에피네프린을 가능한 한 빨리 투여하고, 3~5분마다 반복합니다.",
    videoPaths: { question: "/videos/Q17.mp4", answer: "/videos/Q17-B.mp4" },
  },
  {
    id: 18,
    sessionId: 1,
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
    feedbackCorrect: "정답입니다. 불규칙한 파형의 심실세동(VF)입니다.",
    feedbackIncorrect: "불규칙하고 무질서한 파형은 심실세동의 특징입니다.",
    explanation:
      "심실세동(Ventricular Fibrillation)은 심장이 무질서하게 떨리는 상태로, 즉각적인 제세동이 필요합니다.",
    videoPaths: { question: "/videos/Q18.mp4", answer: "/videos/Q18-A.mp4" },
  },
  {
    id: 19,
    sessionId: 1,
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
    feedbackCorrect: "정답입니다. VF는 제세동이 필요한 리듬입니다.",
    feedbackIncorrect: "심실세동은 제세동(Shock)이 가장 중요한 치료입니다.",
    explanation:
      "심실세동(VF)은 Shockable rhythm이므로 즉시 제세동(Defibrillation)을 준비하고 시행해야 합니다.",
    videoPaths: { question: "/videos/Q19.mp4", answer: "/videos/Q19-A.mp4" },
  },
  {
    id: 20,
    sessionId: 1,
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
    feedbackCorrect: "정답입니다. 젤-충전-비켜-쇼크 순서입니다.",
    feedbackIncorrect: "준비(젤)-충전-안전확인-쇼크 순서를 지켜야 합니다.",
    explanation:
      "패들 준비(젤) -> 충전 -> 안전 확인(물러나세요) -> 쇼크 실행 및 즉시 가슴압박 재개 순서입니다.",
    videoPaths: { question: "/videos/Q20.mp4", answer: "/videos/Q20-A.mp4" },
  },
  {
    id: 21,
    sessionId: 1,
    title: "VF 에피네프린 투여 시점",
    mediaType: "video",
    mediaPrompt: "Q21",
    questionText:
      "심정지 환자에서 심실세동(VF)이 확인되었습니다. 이때 에피네프린 투여 시점은?",
    options: [
      {
        id: "a",
        text: "심정지가 확인되면 즉시 투여한다.",
        imageUrl: "/videos/Q21-A.jpg",
      },
      {
        id: "b",
        text: "제세동하기 전에 먼저 투여한다.",
        imageUrl: "/videos/Q21-B.jpg",
      },
      {
        id: "c",
        text: "제세동을 한 뒤 이어지는 가슴압박 시간에 투여하며 3~5분 간격으로 반복 주사한다.",
        imageUrl: "/videos/Q21-C.png",
      },
      {
        id: "d",
        text: "Shockable 리듬에서는 투여하지 않는다.",
        imageUrl: "/videos/Q21-D.png",
      },
    ],
    correctOptionId: "c",
    feedbackCorrect: "정답입니다. 2차 제세동 후 투여가 원칙입니다.",
    feedbackIncorrect:
      "Shockable 리듬에서는 제세동이 우선이며, 약물은 그 후 고려됩니다.",
    explanation:
      "VF/pVT의 경우 제세동과 CPR이 우선이며, 에피네프린은 2번째 제세동 후에도 순환이 돌아오지 않을 때 투여합니다.",
    videoPaths: { question: "/videos/Q21.mp4", answer: "/videos/Q21-C.mp4" },
  },
  {
    id: 22,
    sessionId: 1,
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
    feedbackCorrect: "정답입니다! 자발 맥박과 혈압이 측정되어야 ROSC입니다.",
    feedbackIncorrect: "맥박 촉지와 혈압 측정이 가장 확실한 징후입니다.",
    explanation:
      "자발순환 회복(ROSC)은 경동맥 등에서 자발적인 맥박이 촉지되고 혈압이 측정되는 상태를 의미합니다.",
    videoPaths: { question: "/videos/Q22.mp4", answer: "/videos/Q22-B.mp4" },
  },
];

// Removed separate session2Questions as Q1-Q22 are now consolidated.
export const session2Questions: Question[] = [];
