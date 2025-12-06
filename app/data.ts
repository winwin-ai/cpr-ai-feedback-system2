import { Question } from "./types";

const COMMON_BG_WARD =
  "Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor.";
const COMMON_BG_ER =
  "Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment.";
const ACTOR_NURSE =
  "A late 20s Korean female nurse in a clean blue scrub uniform, looking professional and focused.";
const ACTOR_PATIENT =
  "A 50-year-old Korean male patient, unconscious, pale face.";

// Session 1: Cardiac Arrest Recognition & Initial Response (Q1-Q3 Demo)
export const session1Questions: Question[] = [
  {
    id: 1,
    sessionId: 1,
    title: "현장 안전 확인 (Safety)",
    mediaType: "video",
    mediaPrompt: "Q01 Placeholder",
    questionText:
      '보호자가 "환자가 쓰러졌어요"라고 외쳤습니다. 어떻게 하시겠습니까?',
    options: [
      {
        id: "a",
        text: "즉시 주변 안전을 확인하고 환자에게 접근한다.",
        imageUrl: "/videos/Q01-A.jpg",
      },
      {
        id: "b",
        text: '보호자에게 "괜찮아질 거예요"라고 안심시키며 지켜본다.',
        imageUrl: "/videos/Q01-B.jpg",
      },
      {
        id: "c",
        text: "간질 환자라 하니 발작이 멈출 때까지 기다린다.",
        imageUrl: "/videos/Q01-C.png",
      },
      {
        id: "d",
        text: "바로 환자의 팔다리를 붙잡아 경련을 막는다.",
        imageUrl: "/videos/Q01-D.png",
      },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다! 구조자의 안전이 확보되지 않으면 구조를 시작할 수 없습니다.",
    feedbackIncorrect: "안전 확인이 우선입니다.",
    explanation:
      "환자에게 접근하기 전, 현장이 안전한지(감전, 가스 누출 등) 확인하는 것이 최우선 순위입니다.",
    videoPaths: {
      question: "/videos/Q01.mp4",
      answer: "/videos/Q01-A.mp4",
    },
  },
  {
    id: 2,
    sessionId: 1,
    title: "환자 접근 (Approach)",
    mediaType: "video",
    mediaPrompt: "Q02 Placeholder",
    questionText: "쓰러진 환자를 발견한 당신이 가장 먼저 해야 할 행동은?",
    options: [
      {
        id: "a",
        text: "환자의 반응을 확인한다.",
        imageUrl: "/videos/Q02-A.jpg",
      },
      {
        id: "b",
        text: "선임간호사에게 알려서 도움을 요청한다.",
        imageUrl: "/videos/Q02-B.jpg",
      },
      {
        id: "c",
        text: "쓰러진 환자를 바로 눕혀 기도 확보를 먼저 시도한다.",
        imageUrl: "/videos/Q02-C.png",
      },
      {
        id: "d",
        text: "경련을 하니까 PRN 진정제가 있는지 확인한다.",
        imageUrl: "/videos/Q02-D.png",
      },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다! 어깨 옆에 위치해야 얼굴을 확인하고 압박을 시행하기 좋습니다.",
    feedbackIncorrect: "상체 처치를 위해 어깨 옆이 가장 적절합니다.",
    explanation:
      "환자의 어깨 옆에 위치하는 것이 의식 확인 및 가슴 압박을 수행하기에 가장 효율적인 위치입니다.",
    videoPaths: {
      question: "/videos/Q02.mp4",
      answer: "/videos/Q02-A.mp4",
    },
  },
  {
    id: 3,
    sessionId: 1,
    title: "반응 확인 (Check Response)",
    mediaType: "video",
    mediaPrompt: "Q03 Placeholder",
    questionText: "환자의 반응을 확인하는 방법은 무엇인가요?",
    options: [
      {
        id: "a",
        text: "환자에게 큰소리로 말을 걸어본다.",
        imageUrl: "/videos/Q03-A.jpg",
      },
      {
        id: "b",
        text: "환자의 얼굴을 가까이 들여다보며 호흡 소리를 듣는다.",
        imageUrl: "/videos/Q03-B.jpg",
      },
      {
        id: "c",
        text: '환자의 어깨를 두드리며 큰소리로 "괜찮으세요"라고 묻는다.',
        imageUrl: "/videos/Q03-C.png",
      }, // Q03-C.mp4 exists, so C is likely intended or at least the video exists
      {
        id: "d",
        text: "어깨를 세게 흔들며 이름을 부른다.",
        imageUrl: "/videos/Q03-D.png",
      },
    ],
    correctOptionId: "c",
    feedbackCorrect:
      "정답입니다! 어깨를 두드리며 큰 소리로 반응을 확인하는 것이 표준 절차입니다.",
    feedbackIncorrect:
      "과도한 자극이나 흔들기는 경추 손상을 악화시킬 수 있습니다.",
    explanation:
      "양쪽 어깨를 가볍게 두드리며 큰 소리로 의식을 확인해야 합니다.",
    videoPaths: {
      question: "/videos/Q03.mp4",
      answer: "/videos/Q03-C.mp4",
    },
  },
];

// Session 2: High Quality CPR & Defibrillation (Q10-Q21)
export const session2Questions: Question[] = [
  {
    id: 10,
    sessionId: 2,
    title: "가슴 압박 위치 (Hand Position)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Close up on the chest. The nurse places the heel of one hand on the center of the patient's chest (lower half of sternum) and the other hand on top. Fingers are interlaced and lifted off the ribs.`,
    questionText: "가슴압박 시 올바른 손 위치는 어디인가요?",
    options: [
      { id: "a", text: "흉골 중앙에 손바닥을 올린다." },
      { id: "b", text: "왼쪽 가슴 위를 손끝으로 빠르게 누른다." },
      { id: "c", text: "환자의 배 위(명치 부분)를 눌러준다." },
      { id: "d", text: "흉골을 세게 3~4회만 눌러 반응을 본다." },
    ],
    correctOptionId: "a",
    feedbackCorrect: "정답입니다! 흉골 하부 1/2 지점이 올바른 위치입니다.",
    feedbackIncorrect:
      "위치가 잘못되면 갈비뼈 골절이나 장기 손상을 유발할 수 있습니다.",
    explanation:
      "양쪽 젖꼭지를 이은 선의 중앙(흉골 하부)에 손꿈치를 대고 압박해야 합니다.",
  },
  {
    id: 11,
    sessionId: 2,
    title: "압박 자세 (Posture)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Side view. The nurse kneels beside the patient. Arms are perfectly straight vertically. Shoulders are directly over the hands. Using body weight to compress.`,
    questionText: "가슴압박의 올바른 깊이는 얼마인가요?",
    options: [
      { id: "a", text: "5cm 깊이로 압박한다." },
      { id: "b", text: "1cm 깊이로 압박한다." },
      { id: "c", text: "10cm 이상 깊이로 압박한다." },
      { id: "d", text: "깊이와 상관없이 빠르게만 누른다." },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다. 팔을 펴야 체중을 이용해 강한 압박이 가능합니다.",
    feedbackIncorrect:
      "팔을 굽히면 근육의 힘만 쓰게 되어 지치기 쉽고 깊이가 얕아집니다.",
    explanation:
      "구조자의 어깨, 팔꿈치, 손목이 일직선이 되도록 하여 체중을 실어 압박해야 합니다.",
  },
  {
    id: 12,
    sessionId: 2,
    title: "압박 속도 (Rate)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} The nurse is performing CPR. A metronome visual effect beats at 110 bpm. The compression rhythm matches the beat perfectly. Fast and strong.`,
    questionText: "가슴압박의 올바른 속도는 얼마인가요?",
    options: [
      { id: "a", text: "100~120회/분으로 압박한다." },
      { id: "b", text: "50회/분으로 압박한다." },
      { id: "c", text: "150회/분으로 압박한다." },
      { id: "d", text: "가능한 빠르게 누른다." },
    ],
    correctOptionId: "a",
    feedbackCorrect: "정답입니다. 분당 100~120회가 최적의 혈류를 생성합니다.",
    feedbackIncorrect: "너무 느리거나 빠르면 심박출량이 감소합니다.",
    explanation: "분당 100~120회의 빠르고 강한 압박이 필요합니다.",
  },
  {
    id: 13,
    sessionId: 2,
    title: "압박 깊이 및 이완 (Depth & Recoil)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Close up side view of the chest. The chest is compressed deep (5cm) and then returns fully to normal position (full recoil) before the next push. Rhythmic and mechanical precision.`,
    questionText: "가슴압박 시 신체 자세로 옳은 것은? (올바른 자세)",
    options: [
      { id: "a", text: "팔꿈치를 굽히고 손목의 힘을 이용한다." },
      { id: "b", text: "손가락 끝으로 흉부를 누른다." },
      {
        id: "c",
        text: "팔을 곧게 펴고 어깨가 환자 흉부 위에 수직이 되도록 한다.",
      },
      { id: "d", text: "허리를 굽혀 상체만으로 압박한다." },
    ],
    correctOptionId: "c",
    feedbackCorrect: "정답입니다! 고품질 CPR의 핵심 요소입니다.",
    feedbackIncorrect:
      "압박이 너무 얕거나 이완이 안 되면 혈류가 채워지지 않습니다.",
    explanation:
      "성인 기준 최소 5cm 깊이로 압박하며, 다음 압박 전 심장에 혈액이 차도록 완전한 이완(Recoil)이 필수적입니다.",
  },
  {
    id: 14,
    sessionId: 2,
    title: "제세동기 전원 (AED Power)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Montage sequence. 1. Hand pressing 'Power' button on AED. 2. Removing pads from package. 3. AED screen lighting up.`,
    questionText:
      "어떤 순서로 제세동기를 준비하고 사용해야 할까요? (순서 배열)",
    options: [
      { id: "a", text: "A(전원)-C(패드)-B(리듬확인)" },
      { id: "b", text: "A(전원)-C(패드)-B(리듬확인)-D(충전)" },
      { id: "c", text: "A(전원)-D(충전)" },
      { id: "d", text: "A(전원)-E(처방대기)" },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다! 전원을 켜야 음성 안내에 따라 절차를 진행할 수 있습니다.",
    feedbackIncorrect: "전원을 켜는 것이 항상 첫 번째 단계입니다.",
    explanation:
      "AED 사용의 첫 단계는 전원 켜기입니다. 이후 음성 지시에 따라 패드를 부착하고 리듬을 분석합니다.",
  },
  {
    id: 15,
    sessionId: 2,
    title: "패드 부착 위치 (Pad Placement)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Top down view. Pads are applied to the patient's bare chest. One pad on the right upper chest (below clavicle), the other on the left lower ribs (mid-axillary line).`,
    questionText: "패드를 성인 환자에게 부착할 때 올바른 위치는?",
    options: [
      { id: "a", text: "오른쪽 어깨와 왼쪽 어깨" },
      { id: "b", text: "오른쪽 갈비뼈 아래와 왼쪽 갈비뼈 아래" },
      { id: "c", text: "오른쪽 쇄골 아래와 왼쪽 유두 외측(겨드랑이) 아래쪽" },
      { id: "d", text: "목 부위와 배꼽 부위" },
    ],
    correctOptionId: "c",
    feedbackCorrect:
      "정답입니다. 우측 쇄골 하부와 좌측 유두 바깥쪽 겨드랑이 선입니다.",
    feedbackIncorrect: "심장을 관통하는 전류 흐름을 만들기 위한 위치입니다.",
    explanation:
      "전류가 심장을 대각선으로 통과하도록 우측 쇄골 아래와 좌측 옆구리에 부착합니다.",
  },
  {
    id: 16,
    sessionId: 2,
    title: "심장 리듬 분석 (VF Rhythm)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Close up on AED screen. It shows a chaotic, rapid, irregular waveform (Ventricular Fibrillation). Text on screen: 'ANALYZING RHYTHM'.`,
    questionText: "다음 심전도는 무슨 리듬인가요? (VF 파형 영상 제시)",
    options: [
      { id: "a", text: "VF (심실세동)" },
      { id: "b", text: "Pulseless VT (무맥성 심실빈맥)" },
      { id: "c", text: "A-systole (무수축)" },
      { id: "d", text: "PEA (무맥성 전기활동)" },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다. 정확한 분석을 위해 움직임이나 접촉이 없어야 합니다.",
    feedbackIncorrect: "접촉 시 오작동하거나 분석 오류가 발생할 수 있습니다.",
    explanation:
      "리듬 분석 중에는 환자의 몸이 흔들리면 안 되므로, 가슴 압박을 중단하고 모두 물러나야 합니다.",
  },
  {
    id: 17,
    sessionId: 2,
    title: "제세동 필요 안내 (Shock Advised)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} AED device close up. The button flashes orange/red. Audio visual indicator shows 'SHOCK ADVISED'.`,
    questionText: "V-fib을 확인한 당신은 어떻게 해야 하나요?",
    options: [
      { id: "a", text: "제세동을 준비한다." },
      { id: "b", text: "가슴압박을 지속한다." },
      { id: "c", text: "응급약물을 준비한다." },
      { id: "d", text: "혈압을 측정한다." },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다. 충전 시간 동안에도 가슴 압박을 하여 중단 시간을 최소화합니다.",
    feedbackIncorrect:
      "충전 시간을 그냥 기다리는 것보다 압박을 하는 것이 좋습니다.",
    explanation:
      "충전에는 수 초가 소요되므로, 그동안 가슴 압박을 하다가 충전 완료 신호가 오면 물러나서 쇼크를 줍니다.",
  },
  {
    id: 18,
    sessionId: 2,
    title: "충격 준비 (Prep Shock)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} The nurse puts hands near the shock button but does not press yet. Looking around to ensure clearance.`,
    questionText:
      "의사가 제세동을 지시했습니다. 간호사가 가장 먼저 해야 할 행동은?",
    options: [
      { id: "a", text: "패들에 젤을 바르고 제세동기 충전을 한다." },
      { id: "b", text: '"물러나세요"라고 외치며 주변을 확인한다.' },
      { id: "c", text: "Shock 버튼을 바로 누른다." },
      { id: "d", text: "보호자에게 상황을 설명한다." },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다. 버튼 누르기 직전 다시 한번 안전을 확인해야 합니다.",
    feedbackIncorrect: "쇼크 버튼을 누르기 전 최종 확인이 필요합니다.",
    explanation:
      "감전 사고를 막기 위해 마지막으로 환자와 접촉한 사람이 없는지 확인해야 합니다.",
  },
  {
    id: 19,
    sessionId: 2,
    title: "충격 전달 (Clear for Shock)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Dynamic shot. ${ACTOR_NURSE} shouts 'Stand Clear!' with hands up in the air, looking around, then decisively presses the shock button. Patient body jerks slightly.`,
    questionText:
      "제세동기를 충전한 후 간호사가 가장 먼저 해야 할 올바른 행동은?",
    options: [
      {
        id: "a",
        text: '의사가 충격 버튼을 누르기 전 "물러나세요"를 외치며 주변의 접촉을 확인한다.',
      },
      { id: "b", text: "가슴압박을 멈추지 않고 계속 진행한다." },
      { id: "c", text: "패들에 젤을 다시 바른다." },
      { id: "d", text: "보호자에게 상태를 설명한다." },
    ],
    correctOptionId: "a",
    feedbackCorrect:
      "정답입니다! 감전 사고 예방과 정확한 에너지 전달을 위해 필수적입니다.",
    feedbackIncorrect: "접촉된 사람이 있으면 감전될 위험이 있습니다.",
    explanation:
      "쇼크 전달 시 환자와 접촉해 있으면 감전 위험이 있고, 에너지가 분산되어 제세동 효과가 떨어질 수 있습니다.",
  },
  {
    id: 20,
    sessionId: 2,
    title: "압박 재개 (Resume CPR)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Immediately after the shock, the nurse instantly places hands back on the chest and resumes compressions without hesitation.`,
    questionText:
      "의사의 제세동 지시가 있을 때 간호사가 수행해야 할 올바른 순서는?",
    options: [
      { id: "a", text: "A-B-C-D" },
      { id: "b", text: "B-A-C-D" },
      { id: "c", text: "A-C-B-D" },
      { id: "d", text: "C-A-B-D" },
    ],
    correctOptionId: "a",
    feedbackCorrect: "정답입니다. 쇼크 후 즉시 압박을 재개해야 합니다.",
    feedbackIncorrect:
      "맥박 확인이나 리듬 분석은 2분 후 시행합니다. 지금은 즉시 압박해야 합니다.",
    explanation:
      "쇼크 직후에는 심장이 바로 정상 박동을 찾지 못할 수 있으므로, 즉시 흉부 압박을 재개하여 혈류를 공급해야 합니다.",
  },
  {
    id: 21,
    sessionId: 2,
    title: "ROSC 확인 (Return of Spontaneous Circulation)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Monitor screen shows a normal sinus rhythm with blood pressure reading 120/80. The nurse checks the carotid pulse and nods, signaling recovery. Patient coughs or moves.`,
    questionText: "다음 중 자발순환 회복(ROSC)의 징후로 가장 올바른 것은?",
    options: [
      { id: "a", text: "Shock 직후 심전도 파형의 일시적 변화" },
      { id: "b", text: "자발 맥박이 돌아오고 혈압이 측정되는 것" },
      { id: "c", text: "가슴압박 시 피부색이 잠시 좋아지는 것" },
      { id: "d", text: "환자의 동공이 확장된 상태로 유지되는 것" },
    ],
    correctOptionId: "b",
    feedbackCorrect:
      "정답입니다! ROSC(자발순환회복)가 확인되면 환자를 안정시키고 관찰해야 합니다.",
    feedbackIncorrect:
      "회복된 환자에게 가슴 압박이나 제세동을 하면 위험합니다.",
    explanation:
      "환자가 의식/호흡/맥박이 돌아왔다면(ROSC), 기도를 유지하고 활력 징후를 모니터링하며 전문 의료진에게 인계합니다.",
  },
];
