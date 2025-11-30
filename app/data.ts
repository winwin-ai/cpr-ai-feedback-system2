import { Question } from './types';

const COMMON_BG_WARD = "Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor.";
const COMMON_BG_ER = "Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment.";
const ACTOR_NURSE = "A late 20s Korean female nurse in a clean blue scrub uniform, looking professional and focused.";
const ACTOR_PATIENT = "A 50-year-old Korean male patient, unconscious, pale face.";

// Session 1: Cardiac Arrest Recognition & Initial Response (Q1-Q9)
export const session1Questions: Question[] = [
  {
    id: 1,
    sessionId: 1,
    title: "현장 안전 확인 (Safety)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_WARD} ${ACTOR_NURSE} quickly scans the surroundings (floor, ceiling) for 0.5 seconds to ensure safety, then kneels beside the patient.`,
    questionText: "환자를 발견했습니다. 가장 먼저 해야 할 행동은 무엇입니까?",
    options: [
      { id: "a", text: "즉시 환자의 어깨를 흔든다." },
      { id: "b", text: "주변 현장의 안전을 확인한다." },
      { id: "c", text: "맥박을 확인한다." },
      { id: "d", text: "제세동기를 가져온다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다! 구조자의 안전이 확보되지 않으면 구조를 시작할 수 없습니다.",
    feedbackIncorrect: "안전 확인이 우선입니다.",
    explanation: "환자에게 접근하기 전, 현장이 안전한지(감전, 가스 누출 등) 확인하는 것이 최우선 순위입니다."
  },
  {
    id: 2,
    sessionId: 1,
    title: "환자 접근 (Approach)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_WARD} ${ACTOR_NURSE} approaches the patient safely and prepares to check responsiveness. Close up on the nurse's calm but urgent face.`,
    questionText: "현장이 안전합니다. 환자에게 어떻게 접근해야 합니까?",
    options: [
      { id: "a", text: "환자의 머리맡으로 이동한다." },
      { id: "b", text: "환자의 다리 쪽에서 말을 건다." },
      { id: "c", text: "환자의 어깨 옆에 무릎을 꿇고 앉는다." },
      { id: "d", text: "환자를 바로 안아 일으킨다." }
    ],
    correctOptionId: "c",
    feedbackCorrect: "정답입니다! 어깨 옆에 위치해야 얼굴을 확인하고 압박을 시행하기 좋습니다.",
    feedbackIncorrect: "상체 처치를 위해 어깨 옆이 가장 적절합니다.",
    explanation: "환자의 어깨 옆에 위치하는 것이 의식 확인 및 가슴 압박을 수행하기에 가장 효율적인 위치입니다."
  },
  {
    id: 3,
    sessionId: 1,
    title: "반응 확인 (Check Response)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_WARD} Close up shot. ${ACTOR_NURSE} taps the patient's both shoulders firmly and shouts 'Are you okay?' loudly near the patient's ear.`,
    questionText: "환자의 반응을 확인하는 올바른 방법은?",
    options: [
      { id: "a", text: "뺨을 때리며 이름을 부른다." },
      { id: "b", text: "몸을 심하게 흔들어 깨운다." },
      { id: "c", text: "어깨를 가볍게 두드리며 큰 소리로 '괜찮으세요?'라고 물어본다." },
      { id: "d", text: "통증 자극을 주기 위해 꼬집는다." }
    ],
    correctOptionId: "c",
    feedbackCorrect: "정답입니다! 어깨를 두드리며 큰 소리로 반응을 확인하는 것이 표준 절차입니다.",
    feedbackIncorrect: "과도한 자극이나 흔들기는 경추 손상을 악화시킬 수 있습니다.",
    explanation: "양쪽 어깨를 가볍게 두드리며 큰 소리로 의식을 확인해야 합니다."
  },
  {
    id: 4,
    sessionId: 1,
    title: "반응 없음 판단 (Unresponsive)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_WARD} The patient shows absolutely no movement or sound. The nurse observes the face closely. Silence and stillness emphasized.`,
    questionText: "환자가 아무런 반응이 없습니다. 이를 무엇이라 판단합니까?",
    options: [
      { id: "a", text: "깊은 잠에 빠진 상태" },
      { id: "b", text: "의식 없음 (Unresponsive)" },
      { id: "c", text: "일시적 실신" },
      { id: "d", text: "청각 장애" }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다. 자극에 반응이 없으므로 의식이 없는 상태입니다.",
    feedbackIncorrect: "반응이 없다면 최악의 상황인 심정지 가능성을 염두에 두어야 합니다.",
    explanation: "언어적, 신체적 자극에 반응이 없다면 의식이 없는 위급 상황으로 판단합니다."
  },
  {
    id: 5,
    sessionId: 1,
    title: "도움 요청 (Call for Help)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_WARD} Dynamic shot. ${ACTOR_NURSE} points a finger authoritatively towards the camera (or bystander) and shouts for help, then presses the emergency code blue button on the wall.`,
    questionText: "환자가 반응이 없습니다. 다음 행동으로 적절한 것은?",
    options: [
      { id: "a", text: "즉시 흉부 압박을 시작한다." },
      { id: "b", text: "주변에 도움을 요청하고 119 신고 및 AED를 요청한다." },
      { id: "c", text: "보호자를 찾아 상황을 설명한다." },
      { id: "d", text: "환자의 호흡이 돌아올 때까지 기다린다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다! 신속한 응급의료체계 활성화가 중요합니다.",
    feedbackIncorrect: "도움 요청 없이 혼자 처치하면 소생 확률이 낮아집니다.",
    explanation: "특정인을 지목하여 119 신고와 자동심장충격기(AED)를 가져오도록 명확히 지시해야 합니다. 병원 내라면 코드 블루/호출벨을 사용합니다."
  },
  {
    id: 6,
    sessionId: 1,
    title: "호흡 확인 준비 (Check Breathing Prep)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_WARD} ${ACTOR_NURSE} leans over the patient's face, looking at the chest, placing an ear near the mouth. Ready to check breathing and pulse simultaneously.`,
    questionText: "도움 요청 후, 환자의 상태를 파악하기 위해 무엇을 해야 합니까?",
    options: [
      { id: "a", text: "동공 반사를 확인한다." },
      { id: "b", text: "혈압을 측정한다." },
      { id: "c", text: "호흡과 맥박을 동시에 확인한다." },
      { id: "d", text: "체온을 측정한다." }
    ],
    correctOptionId: "c",
    feedbackCorrect: "정답입니다. 심정지 확인을 위해 호흡과 맥박을 동시에 체크합니다.",
    feedbackIncorrect: "심정지 상황에서는 호흡과 맥박 확인이 가장 시급합니다.",
    explanation: "의료 종사자는 호흡과 맥박 확인을 동시에 시행하여 시간을 단축해야 합니다."
  },
  {
    id: 7,
    sessionId: 1,
    title: "맥박 및 호흡 확인 (Check Pulse)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_WARD} Close up on ${ACTOR_NURSE}'s hand. Two fingers placed on the patient's carotid artery. The nurse's eyes are watching the patient's chest for movement. A timer graphic counts down from 10 to 0.`,
    questionText: "맥박과 호흡을 확인하려 합니다. 올바른 방법과 시간은?",
    hasTimer: true,
    options: [
      { id: "a", text: "손목 요골동맥을 5초 이내로 확인한다." },
      { id: "b", text: "경동맥을 10초 이내로 확인하며 동시에 호흡 유무를 관찰한다." },
      { id: "c", text: "가슴에 귀를 대고 심장 소리를 1분간 듣는다." },
      { id: "d", text: "맥박 확인은 생략하고 바로 압박한다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다! 경동맥 촉지와 흉곽 움직임 관찰이 표준입니다.",
    feedbackIncorrect: "정확하지 않습니다. 손목 맥박은 신뢰도가 낮으며 10초를 넘겨선 안 됩니다.",
    explanation: "일반인은 맥박 확인이 어려울 수 있으나, 의료인은 10초 이내에 경동맥 맥박과 호흡을 동시에 확인해야 합니다."
  },
  {
    id: 8,
    sessionId: 1,
    title: "비정상 호흡 판단 (Agonal Breathing)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_WARD} Extreme close up on patient's face. Lips are slightly blue. The patient gasps irregularly (Agonal Breathing). The chest does not rise normally.`,
    questionText: "환자가 간헐적으로 헐떡이는 호흡(Agonal breathing)을 보입니다. 이것은 무엇을 의미합니까?",
    options: [
      { id: "a", text: "호흡이 회복되고 있는 신호이다." },
      { id: "b", text: "심정지 초기 징후이며, 즉각적인 심폐소생술이 필요하다." },
      { id: "c", text: "기도가 막혔으니 하임리히법을 시행한다." },
      { id: "d", text: "정상 호흡이므로 지켜본다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다! 심정지 환자의 약 40%에서 발생하는 초기 현상입니다.",
    feedbackIncorrect: "심정지 상황입니다. 호흡이 있는 것으로 오판하면 안 됩니다.",
    explanation: "임종 호흡(Agonal breathing)은 심정지 직후 뇌에 남은 산소로 인해 발생하는 반사적 행동으로, 즉시 가슴압박을 시작해야 합니다."
  },
  {
    id: 9,
    sessionId: 1,
    title: "가슴압박 준비 (Prep Compression)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_WARD} ${ACTOR_NURSE} swiftly moves hands to the center of the chest, interlocking fingers, and straightening elbows. Ready to compress.`,
    questionText: "심정지로 판단했습니다. 가슴 압박을 시작하기 직전, 가장 먼저 취해야 할 자세는?",
    options: [
      { id: "a", text: "환자의 고개를 옆으로 돌린다." },
      { id: "b", text: "가슴 중앙에 손꿈치를 대고 깍지를 낀다." },
      { id: "c", text: "환자의 다리를 들어 올린다." },
      { id: "d", text: "심호흡을 크게 한 번 한다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다. 지체 없이 압박 위치를 잡아야 합니다.",
    feedbackIncorrect: "즉시 압박을 준비해야 합니다.",
    explanation: "심정지 인지 즉시 가슴 압박을 시작할 수 있도록 정확한 위치(흉골 하부 1/2)를 잡습니다."
  }
];

// Session 2: High Quality CPR & Defibrillation (Q10-Q21)
export const session2Questions: Question[] = [
  {
    id: 10,
    sessionId: 2,
    title: "가슴 압박 위치 (Hand Position)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Close up on the chest. The nurse places the heel of one hand on the center of the patient's chest (lower half of sternum) and the other hand on top. Fingers are interlaced and lifted off the ribs.`,
    questionText: "가슴 압박을 시작합니다. 정확한 압박 위치는 어디입니까?",
    options: [
      { id: "a", text: "왼쪽 가슴 심장 부위" },
      { id: "b", text: "명치 끝부분" },
      { id: "c", text: "흉골(가슴뼈)의 아래쪽 절반(중앙)" },
      { id: "d", text: "쇄골 중앙" }
    ],
    correctOptionId: "c",
    feedbackCorrect: "정답입니다! 흉골 하부 1/2 지점이 올바른 위치입니다.",
    feedbackIncorrect: "위치가 잘못되면 갈비뼈 골절이나 장기 손상을 유발할 수 있습니다.",
    explanation: "양쪽 젖꼭지를 이은 선의 중앙(흉골 하부)에 손꿈치를 대고 압박해야 합니다."
  },
  {
    id: 11,
    sessionId: 2,
    title: "압박 자세 (Posture)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Side view. The nurse kneels beside the patient. Arms are perfectly straight vertically. Shoulders are directly over the hands. Using body weight to compress.`,
    questionText: "효율적인 압박을 위한 구조자의 자세로 올바른 것은?",
    options: [
      { id: "a", text: "팔꿈치를 살짝 굽혀 충격을 완화한다." },
      { id: "b", text: "팔을 수직으로 곧게 펴고 체중을 싣는다." },
      { id: "c", text: "엉덩이를 바닥에 대고 앉아서 누른다." },
      { id: "d", text: "한 손으로만 압박한다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다. 팔을 펴야 체중을 이용해 강한 압박이 가능합니다.",
    feedbackIncorrect: "팔을 굽히면 근육의 힘만 쓰게 되어 지치기 쉽고 깊이가 얕아집니다.",
    explanation: "구조자의 어깨, 팔꿈치, 손목이 일직선이 되도록 하여 체중을 실어 압박해야 합니다."
  },
  {
    id: 12,
    sessionId: 2,
    title: "압박 속도 (Rate)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} The nurse is performing CPR. A metronome visual effect beats at 110 bpm. The compression rhythm matches the beat perfectly. Fast and strong.`,
    questionText: "가슴 압박의 적절한 속도는?",
    options: [
      { id: "a", text: "분당 60~80회" },
      { id: "b", text: "분당 100~120회" },
      { id: "c", text: "분당 140회 이상" },
      { id: "d", text: "속도는 중요하지 않다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다. 분당 100~120회가 최적의 혈류를 생성합니다.",
    feedbackIncorrect: "너무 느리거나 빠르면 심박출량이 감소합니다.",
    explanation: "분당 100~120회의 빠르고 강한 압박이 필요합니다."
  },
  {
    id: 13,
    sessionId: 2,
    title: "압박 깊이 및 이완 (Depth & Recoil)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Close up side view of the chest. The chest is compressed deep (5cm) and then returns fully to normal position (full recoil) before the next push. Rhythmic and mechanical precision.`,
    questionText: "가슴 압박 깊이와 이완에 대한 설명으로 옳은 것은?",
    options: [
      { id: "a", text: "3cm 깊이로 압박하고 이완은 신경 쓰지 않는다." },
      { id: "b", text: "최소 5cm 깊이로 압박하고, 압박 후 가슴이 완전히 펴지도록(이완) 한다." },
      { id: "c", text: "최대한 깊게(7cm 이상) 압박한다." },
      { id: "d", text: "압박 후 손을 가슴에서 뗀다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다! 고품질 CPR의 핵심 요소입니다.",
    feedbackIncorrect: "압박이 너무 얕거나 이완이 안 되면 혈류가 채워지지 않습니다.",
    explanation: "성인 기준 최소 5cm 깊이로 압박하며, 다음 압박 전 심장에 혈액이 차도록 완전한 이완(Recoil)이 필수적입니다."
  },
  {
    id: 14,
    sessionId: 2,
    title: "제세동기 전원 (AED Power)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Montage sequence. 1. Hand pressing 'Power' button on AED. 2. Removing pads from package. 3. AED screen lighting up.`,
    questionText: "자동심장충격기(AED)가 도착했습니다. 가장 먼저 해야 할 일은?",
    options: [
      { id: "a", text: "패드를 부착한다." },
      { id: "b", text: "환자의 옷을 벗긴다." },
      { id: "c", text: "전원을 켠다." },
      { id: "d", text: "주변 사람을 물러나게 한다." }
    ],
    correctOptionId: "c",
    feedbackCorrect: "정답입니다! 전원을 켜야 음성 안내에 따라 절차를 진행할 수 있습니다.",
    feedbackIncorrect: "전원을 켜는 것이 항상 첫 번째 단계입니다.",
    explanation: "AED 사용의 첫 단계는 전원 켜기입니다. 이후 음성 지시에 따라 패드를 부착하고 리듬을 분석합니다."
  },
  {
    id: 15,
    sessionId: 2,
    title: "패드 부착 위치 (Pad Placement)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Top down view. Pads are applied to the patient's bare chest. One pad on the right upper chest (below clavicle), the other on the left lower ribs (mid-axillary line).`,
    questionText: "패드를 부착할 정확한 위치는 어디입니까?",
    options: [
      { id: "a", text: "오른쪽 가슴 위, 왼쪽 가슴 아래" },
      { id: "b", text: "왼쪽 가슴 위, 오른쪽 가슴 아래" },
      { id: "c", text: "가슴 중앙, 등 중앙" },
      { id: "d", text: "양쪽 젖꼭지 위" }
    ],
    correctOptionId: "a",
    feedbackCorrect: "정답입니다. 우측 쇄골 하부와 좌측 유두 바깥쪽 겨드랑이 선입니다.",
    feedbackIncorrect: "심장을 관통하는 전류 흐름을 만들기 위한 위치입니다.",
    explanation: "전류가 심장을 대각선으로 통과하도록 우측 쇄골 아래와 좌측 옆구리에 부착합니다."
  },
  {
    id: 16,
    sessionId: 2,
    title: "심장 리듬 분석 (VF Rhythm)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Close up on AED screen. It shows a chaotic, rapid, irregular waveform (Ventricular Fibrillation). Text on screen: 'ANALYZING RHYTHM'.`,
    questionText: "AED가 '심장 리듬을 분석 중입니다'라고 합니다. 이때 주의할 점은?",
    options: [
      { id: "a", text: "가슴 압박을 계속한다." },
      { id: "b", text: "환자에게서 손을 떼고 접촉하지 않는다." },
      { id: "c", text: "패드를 꾹 눌러준다." },
      { id: "d", text: "인공호흡을 한다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다. 정확한 분석을 위해 움직임이나 접촉이 없어야 합니다.",
    feedbackIncorrect: "접촉 시 오작동하거나 분석 오류가 발생할 수 있습니다.",
    explanation: "리듬 분석 중에는 환자의 몸이 흔들리면 안 되므로, 가슴 압박을 중단하고 모두 물러나야 합니다."
  },
  {
    id: 17,
    sessionId: 2,
    title: "제세동 필요 안내 (Shock Advised)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} AED device close up. The button flashes orange/red. Audio visual indicator shows 'SHOCK ADVISED'.`,
    questionText: "AED가 '제세동이 필요합니다'라고 안내합니다. 다음 단계는?",
    options: [
      { id: "a", text: "즉시 버튼을 누른다." },
      { id: "b", text: "충전되는 동안 잠시 가슴 압박을 하고, 충전 완료 시 버튼을 누를 준비를 한다." },
      { id: "c", text: "전원을 끈다." },
      { id: "d", text: "패드를 떼어낸다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다. 충전 시간 동안에도 가슴 압박을 하여 중단 시간을 최소화합니다.",
    feedbackIncorrect: "충전 시간을 그냥 기다리는 것보다 압박을 하는 것이 좋습니다.",
    explanation: "충전에는 수 초가 소요되므로, 그동안 가슴 압박을 하다가 충전 완료 신호가 오면 물러나서 쇼크를 줍니다."
  },
  {
    id: 18,
    sessionId: 2,
    title: "충격 준비 (Prep Shock)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} The nurse puts hands near the shock button but does not press yet. Looking around to ensure clearance.`,
    questionText: "충전이 완료되었습니다. 버튼을 누르기 전 필수 행동은?",
    options: [
      { id: "a", text: "기도 유지" },
      { id: "b", text: "주변 안전 확인" },
      { id: "c", text: "패드 위치 수정" },
      { id: "d", text: "맥박 확인" }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다. 버튼 누르기 직전 다시 한번 안전을 확인해야 합니다.",
    feedbackIncorrect: "쇼크 버튼을 누르기 전 최종 확인이 필요합니다.",
    explanation: "감전 사고를 막기 위해 마지막으로 환자와 접촉한 사람이 없는지 확인해야 합니다."
  },
  {
    id: 19,
    sessionId: 2,
    title: "충격 전달 (Clear for Shock)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Dynamic shot. ${ACTOR_NURSE} shouts 'Stand Clear!' with hands up in the air, looking around, then decisively presses the shock button. Patient body jerks slightly.`,
    questionText: "제세동 버튼(Shock)을 누르기 전에 반드시 확인해야 할 것은?",
    options: [
      { id: "a", text: "환자의 맥박을 다시 확인한다." },
      { id: "b", text: "아무도 환자와 접촉하지 않았는지 눈으로 확인하고 '비켜주세요' 외친다." },
      { id: "c", text: "기도를 확보한다." },
      { id: "d", text: "산소 마스크를 씌운다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다! 감전 사고 예방과 정확한 에너지 전달을 위해 필수적입니다.",
    feedbackIncorrect: "접촉된 사람이 있으면 감전될 위험이 있습니다.",
    explanation: "쇼크 전달 시 환자와 접촉해 있으면 감전 위험이 있고, 에너지가 분산되어 제세동 효과가 떨어질 수 있습니다."
  },
  {
    id: 20,
    sessionId: 2,
    title: "압박 재개 (Resume CPR)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Immediately after the shock, the nurse instantly places hands back on the chest and resumes compressions without hesitation.`,
    questionText: "제세동(쇼크)을 실시한 직후 해야 할 행동은?",
    options: [
      { id: "a", text: "맥박을 확인한다." },
      { id: "b", text: "즉시 가슴 압박을 다시 시작한다." },
      { id: "c", text: "AED 전원을 끈다." },
      { id: "d", text: "2분간 휴식한다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다. 쇼크 후 즉시 압박을 재개해야 합니다.",
    feedbackIncorrect: "맥박 확인이나 리듬 분석은 2분 후 시행합니다. 지금은 즉시 압박해야 합니다.",
    explanation: "쇼크 직후에는 심장이 바로 정상 박동을 찾지 못할 수 있으므로, 즉시 흉부 압박을 재개하여 혈류를 공급해야 합니다."
  },
  {
    id: 21,
    sessionId: 2,
    title: "ROSC 확인 (Return of Spontaneous Circulation)",
    mediaType: "video",
    mediaPrompt: `${COMMON_BG_ER} Monitor screen shows a normal sinus rhythm with blood pressure reading 120/80. The nurse checks the carotid pulse and nods, signaling recovery. Patient coughs or moves.`,
    questionText: "제세동 후 가슴 압박을 지속하던 중 환자가 움직이고 모니터에 정상 리듬이 보입니다. 조치는?",
    options: [
      { id: "a", text: "계속해서 가슴 압박을 한다." },
      { id: "b", text: "맥박과 호흡을 확인하고, 회복되었다면 회복 자세를 취하거나 전문 소생술 팀을 기다린다." },
      { id: "c", text: "다시 제세동을 실시한다." },
      { id: "d", text: "환자를 즉시 일으켜 앉힌다." }
    ],
    correctOptionId: "b",
    feedbackCorrect: "정답입니다! ROSC(자발순환회복)가 확인되면 환자를 안정시키고 관찰해야 합니다.",
    feedbackIncorrect: "회복된 환자에게 가슴 압박이나 제세동을 하면 위험합니다.",
    explanation: "환자가 의식/호흡/맥박이 돌아왔다면(ROSC), 기도를 유지하고 활력 징후를 모니터링하며 전문 의료진에게 인계합니다."
  }
];