# AI CPR Training Platform (AI 기반 심폐소생술 교육 플랫폼)

AI 기술을 활용하여 실제 응급 상황 시나리오를 제공하고, 학습자의 판단에 대해 실시간 피드백을 제공하는 인터랙티브 CPR 교육 플랫폼입니다.

## 주요 기능

- **실감나는 AI 시나리오**: Google Gemini Video Generation 모델을 프롬프팅하여 생성된 고화질 시나리오 영상을 통해 몰입감 있는 학습 환경을 제공합니다.
- **단계별 학습 (Session)**:
  - **Session 1**: 심정지 인지 및 초기 대응 (현장 안전, 의식 확인, 신고)
  - **Session 2**: 고품질 심폐소생술(CPR) 및 자동심장충격기(AED) 사용법
- **실시간 피드백**: 학습자의 선택에 따라 즉각적인 정답/오답 피드백과 상세한 해설을 제공합니다.
- **영상 보관함 (Video Library)**: AI로 생성된 시나리오 영상을 저장하고 다시 볼 수 있는 보관함 기능을 제공합니다.
- **성과 분석**: 세션 종료 후 점수와 합격 여부를 판정하고, 부족한 부분을 재학습하도록 유도합니다.

---

## 교육 커리큘럼 및 시나리오 상세

이 플랫폼에 탑재된 모든 교육 콘텐츠와 AI 영상 생성 프롬프트는 다음과 같습니다.

### Session 1: 심정지 인지 및 초기 대응 (Cardiac Arrest Recognition & Initial Response)

#### Q1. 현장 안전 확인 (Safety)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor. A late 20s Korean female nurse in a clean blue scrub uniform, looking professional and focused. quickly scans the surroundings (floor, ceiling) for 0.5 seconds to ensure safety, then kneels beside the patient.`
- **질문**: 환자를 발견했습니다. 가장 먼저 해야 할 행동은 무엇입니까?
- **정답**: **b) 주변 현장의 안전을 확인한다.**
- **해설**: 환자에게 접근하기 전, 현장이 안전한지(감전, 가스 누출 등) 확인하는 것이 최우선 순위입니다.

#### Q2. 환자 접근 (Approach)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor. A late 20s Korean female nurse in a clean blue scrub uniform, looking professional and focused. approaches the patient safely and prepares to check responsiveness. Close up on the nurse's calm but urgent face.`
- **질문**: 현장이 안전합니다. 환자에게 어떻게 접근해야 합니까?
- **정답**: **c) 환자의 어깨 옆에 무릎을 꿇고 앉는다.**
- **해설**: 환자의 어깨 옆에 위치하는 것이 의식 확인 및 가슴 압박을 수행하기에 가장 효율적인 위치입니다.

#### Q3. 반응 확인 (Check Response)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor. Close up shot. A late 20s Korean female nurse in a clean blue scrub uniform, looking professional and focused. taps the patient's both shoulders firmly and shouts 'Are you okay?' loudly near the patient's ear.`
- **질문**: 환자의 반응을 확인하는 올바른 방법은?
- **정답**: **c) 어깨를 가볍게 두드리며 큰 소리로 '괜찮으세요?'라고 물어본다.**
- **해설**: 양쪽 어깨를 가볍게 두드리며 큰 소리로 의식을 확인해야 합니다.

#### Q4. 반응 없음 판단 (Unresponsive)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor. The patient shows absolutely no movement or sound. The nurse observes the face closely. Silence and stillness emphasized.`
- **질문**: 환자가 아무런 반응이 없습니다. 이를 무엇이라 판단합니까?
- **정답**: **b) 의식 없음 (Unresponsive)**
- **해설**: 언어적, 신체적 자극에 반응이 없다면 의식이 없는 위급 상황으로 판단합니다.

#### Q5. 도움 요청 (Call for Help)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor. Dynamic shot. A late 20s Korean female nurse in a clean blue scrub uniform, looking professional and focused. points a finger authoritatively towards the camera (or bystander) and shouts for help, then presses the emergency code blue button on the wall.`
- **질문**: 환자가 반응이 없습니다. 다음 행동으로 적절한 것은?
- **정답**: **b) 주변에 도움을 요청하고 119 신고 및 AED를 요청한다.**
- **해설**: 특정인을 지목하여 119 신고와 자동심장충격기(AED)를 가져오도록 명확히 지시해야 합니다. 병원 내라면 코드 블루/호출벨을 사용합니다.

#### Q6. 호흡 확인 준비 (Check Breathing Prep)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor. A late 20s Korean female nurse in a clean blue scrub uniform, looking professional and focused. leans over the patient's face, looking at the chest, placing an ear near the mouth. Ready to check breathing and pulse simultaneously.`
- **질문**: 도움 요청 후, 환자의 상태를 파악하기 위해 무엇을 해야 합니까?
- **정답**: **c) 호흡과 맥박을 동시에 확인한다.**
- **해설**: 의료 종사자는 호흡과 맥박 확인을 동시에 시행하여 시간을 단축해야 합니다.

#### Q7. 맥박 및 호흡 확인 (Check Pulse)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor. Close up on A late 20s Korean female nurse in a clean blue scrub uniform, looking professional and focused.'s hand. Two fingers placed on the patient's carotid artery. The nurse's eyes are watching the patient's chest for movement. A timer graphic counts down from 10 to 0.`
- **질문**: 맥박과 호흡을 확인하려 합니다. 올바른 방법과 시간은?
- **정답**: **b) 경동맥을 10초 이내로 확인하며 동시에 호흡 유무를 관찰한다.**
- **해설**: 일반인은 맥박 확인이 어려울 수 있으나, 의료인은 10초 이내에 경동맥 맥박과 호흡을 동시에 확인해야 합니다.

#### Q8. 비정상 호흡 판단 (Agonal Breathing)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor. Extreme close up on patient's face. Lips are slightly blue. The patient gasps irregularly (Agonal Breathing). The chest does not rise normally.`
- **질문**: 환자가 간헐적으로 헐떡이는 호흡(Agonal breathing)을 보입니다. 이것은 무엇을 의미합니까?
- **정답**: **b) 심정지 초기 징후이며, 즉각적인 심폐소생술이 필요하다.**
- **해설**: 임종 호흡(Agonal breathing)은 심정지 직후 뇌에 남은 산소로 인해 발생하는 반사적 행동으로, 즉시 가슴압박을 시작해야 합니다.

#### Q9. 가슴압박 준비 (Prep Compression)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a university hospital ward bathroom. Cold fluorescent lighting creates a tense atmosphere. A 50-year-old Korean male patient in a hospital gown is lying supine on the floor. A late 20s Korean female nurse in a clean blue scrub uniform, looking professional and focused. swiftly moves hands to the center of the chest, interlocking fingers, and straightening elbows. Ready to compress.`
- **질문**: 심정지로 판단했습니다. 가슴 압박을 시작하기 직전, 가장 먼저 취해야 할 자세는?
- **정답**: **b) 가슴 중앙에 손꿈치를 대고 깍지를 낀다.**
- **해설**: 심정지 인지 즉시 가슴 압박을 시작할 수 있도록 정확한 위치(흉골 하부 1/2)를 잡습니다.

---

### Session 2: 고품질 심폐소생술 및 제세동 (High Quality CPR & Defibrillation)

#### Q10. 가슴 압박 위치 (Hand Position)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. Close up on the chest. The nurse places the heel of one hand on the center of the patient's chest (lower half of sternum) and the other hand on top. Fingers are interlaced and lifted off the ribs.`
- **질문**: 가슴 압박을 시작합니다. 정확한 압박 위치는 어디입니까?
- **정답**: **c) 흉골(가슴뼈)의 아래쪽 절반(중앙)**
- **해설**: 양쪽 젖꼭지를 이은 선의 중앙(흉골 하부)에 손꿈치를 대고 압박해야 합니다.

#### Q11. 압박 자세 (Posture)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. Side view. The nurse kneels beside the patient. Arms are perfectly straight vertically. Shoulders are directly over the hands. Using body weight to compress.`
- **질문**: 효율적인 압박을 위한 구조자의 자세로 올바른 것은?
- **정답**: **b) 팔을 수직으로 곧게 펴고 체중을 싣는다.**
- **해설**: 구조자의 어깨, 팔꿈치, 손목이 일직선이 되도록 하여 체중을 실어 압박해야 합니다.

#### Q12. 압박 속도 (Rate)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. The nurse is performing CPR. A metronome visual effect beats at 110 bpm. The compression rhythm matches the beat perfectly. Fast and strong.`
- **질문**: 가슴 압박의 적절한 속도는?
- **정답**: **b) 분당 100~120회**
- **해설**: 분당 100~120회의 빠르고 강한 압박이 필요합니다.

#### Q13. 압박 깊이 및 이완 (Depth & Recoil)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. Close up side view of the chest. The chest is compressed deep (5cm) and then returns fully to normal position (full recoil) before the next push. Rhythmic and mechanical precision.`
- **질문**: 가슴 압박 깊이와 이완에 대한 설명으로 옳은 것은?
- **정답**: **b) 최소 5cm 깊이로 압박하고, 압박 후 가슴이 완전히 펴지도록(이완) 한다.**
- **해설**: 성인 기준 최소 5cm 깊이로 압박하며, 다음 압박 전 심장에 혈액이 차도록 완전한 이완(Recoil)이 필수적입니다.

#### Q14. 제세동기 전원 (AED Power)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. Montage sequence. 1. Hand pressing 'Power' button on AED. 2. Removing pads from package. 3. AED screen lighting up.`
- **질문**: 자동심장충격기(AED)가 도착했습니다. 가장 먼저 해야 할 일은?
- **정답**: **c) 전원을 켠다.**
- **해설**: AED 사용의 첫 단계는 전원 켜기입니다. 이후 음성 지시에 따라 패드를 부착하고 리듬을 분석합니다.

#### Q15. 패드 부착 위치 (Pad Placement)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. Top down view. Pads are applied to the patient's bare chest. One pad on the right upper chest (below clavicle), the other on the left lower ribs (mid-axillary line).`
- **질문**: 패드를 부착할 정확한 위치는 어디입니까?
- **정답**: **a) 오른쪽 가슴 위, 왼쪽 가슴 아래**
- **해설**: 전류가 심장을 대각선으로 통과하도록 우측 쇄골 아래와 좌측 옆구리에 부착합니다.

#### Q16. 심장 리듬 분석 (VF Rhythm)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. Close up on AED screen. It shows a chaotic, rapid, irregular waveform (Ventricular Fibrillation). Text on screen: 'ANALYZING RHYTHM'.`
- **질문**: AED가 '심장 리듬을 분석 중입니다'라고 합니다. 이때 주의할 점은?
- **정답**: **b) 환자에게서 손을 떼고 접촉하지 않는다.**
- **해설**: 리듬 분석 중에는 환자의 몸이 흔들리면 안 되므로, 가슴 압박을 중단하고 모두 물러나야 합니다.

#### Q17. 제세동 필요 안내 (Shock Advised)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. AED device close up. The button flashes orange/red. Audio visual indicator shows 'SHOCK ADVISED'.`
- **질문**: AED가 '제세동이 필요합니다'라고 안내합니다. 다음 단계는?
- **정답**: **b) 충전되는 동안 잠시 가슴 압박을 하고, 충전 완료 시 버튼을 누를 준비를 한다.**
- **해설**: 충전에는 수 초가 소요되므로, 그동안 가슴 압박을 하다가 충전 완료 신호가 오면 물러나서 쇼크를 줍니다.

#### Q18. 충격 준비 (Prep Shock)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. The nurse puts hands near the shock button but does not press yet. Looking around to ensure clearance.`
- **질문**: 충전이 완료되었습니다. 버튼을 누르기 전 필수 행동은?
- **정답**: **b) 주변 안전 확인**
- **해설**: 감전 사고를 막기 위해 마지막으로 환자와 접촉한 사람이 없는지 확인해야 합니다.

#### Q19. 충격 전달 (Clear for Shock)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. Dynamic shot. A late 20s Korean female nurse in a clean blue scrub uniform, looking professional and focused. shouts 'Stand Clear!' with hands up in the air, looking around, then decisively presses the shock button. Patient body jerks slightly.`
- **질문**: 제세동 버튼(Shock)을 누르기 전에 반드시 확인해야 할 것은?
- **정답**: **b) 아무도 환자와 접촉하지 않았는지 눈으로 확인하고 '비켜주세요' 외친다.**
- **해설**: 쇼크 전달 시 환자와 접촉해 있으면 감전 위험이 있고, 에너지가 분산되어 제세동 효과가 떨어질 수 있습니다.

#### Q20. 압박 재개 (Resume CPR)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. Immediately after the shock, the nurse instantly places hands back on the chest and resumes compressions without hesitation.`
- **질문**: 제세동(쇼크)을 실시한 직후 해야 할 행동은?
- **정답**: **b) 즉시 가슴 압박을 다시 시작한다.**
- **해설**: 쇼크 직후에는 심장이 바로 정상 박동을 찾지 못할 수 있으므로, 즉시 흉부 압박을 재개하여 혈류를 공급해야 합니다.

#### Q21. ROSC 확인 (Return of Spontaneous Circulation)

- **AI Video Prompt**: `Cinematic 8K video, photorealistic. Inside a well-lit hospital treatment room. Emergency equipment and AED are visible. A professional medical environment. Monitor screen shows a normal sinus rhythm with blood pressure reading 120/80. The nurse checks the carotid pulse and nods, signaling recovery. Patient coughs or moves.`
- **질문**: 제세동 후 가슴 압박을 지속하던 중 환자가 움직이고 모니터에 정상 리듬이 보입니다. 조치는?
- **정답**: **b) 맥박과 호흡을 확인하고, 회복되었다면 회복 자세를 취하거나 전문 소생술 팀을 기다린다.**
- **해설**: 환자가 의식/호흡/맥박이 돌아왔다면(ROSC), 기도를 유지하고 활력 징후를 모니터링하며 전문 의료진에게 인계합니다.

---

## 실행 방법 (Getting Started)

개발 서버 실행:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.
