"use client";

import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Dashboard } from "../components/Dashboard";
import { SessionPlayer } from "../components/SessionPlayer";
import { ResultScreen } from "../components/ResultScreen";
import { Scenario } from "../components/Scenario";
import { ViewState, Question } from "./types";
import {
  scenario1Questions,
  scenario2Questions,
  scenario3Questions,
} from "./data2";

// Scenario Intro Data
const SCENARIO_DATA = {
  1: {
    title: "Scenario 1: 심소생 (심정지 환자)",
    description: "병동에서 발생한 심정지 상황입니다.",
    patientInfo: {
      status: "Epilepsy 환자",
      history: "고혈압, 당뇨",
    },
    eventInfo: {
      title: "응급 상황 발생 (입원 3일째)",
      description: (
        <>
          환자는 점심식사 후 보호자 동반하에 화장실을 갔다가 대변을 본 뒤
          일어서다 쓰러졌습니다.
          <br />
          <br />
          보호자가 <span className="font-bold">"환자가 쓰러졌어요"</span>
          라고 해서 화장실에 갔을 때 환자는 바닥에 쓰러져 있었습니다. 눈을 감은
          채로 사지에{" "}
          <span className="font-bold decoration-red-300 underline underline-offset-4">
            미세한 떨림
          </span>
          을 보이고 있었습니다.
        </>
      ),
    },
  },
  2: {
    title: "Scenario 2: 김여린 (실신/정상호흡)",
    description: "병동 순회 중 발견된 실신 환자 상황입니다.",
    patientInfo: {
      status: "실신 환자 (Syncope)",
      history: "특이사항 없음",
    },
    eventInfo: {
      title: "상황 인지",
      description: (
        <>
          병동 복도를 지나가던 중 환자가 비틀거리며 쓰러지는 것을 목격했습니다.
          <br />
          <br />
          환자는 바닥에 쓰러져 있으며, 의식이 명료하지 않아 보입니다. 즉각적인
          상태 확인과 조치가 필요합니다.
        </>
      ),
    },
  },
  3: {
    title: "Scenario 3: 장소중 (팀 기반 CPR)",
    description: "전문 심폐소생술 팀(Nurse 1, 2, 3) 훈련입니다.",
    patientInfo: {
      status: "심정지 환자 (Cardiac Arrest)",
      history: "심부전",
    },
    eventInfo: {
      title: "Code Blue 상황",
      description: (
        <>
          환자가 침상에서 의식을 잃고 발견되었습니다.
          <br />
          <br />
          <span className="font-bold">간호사 1</span>: 최초 발견 및 가슴압박
          <br />
          <span className="font-bold">간호사 2</span>: 기도 유지 및 환기
          <br />
          <span className="font-bold">간호사 3</span>: 약물 투여 및 제세동기
          운영
          <br />각 역할에 맞춰 시뮬레이션이 진행됩니다.
        </>
      ),
    },
  },
};

export default function Home() {
  const [viewState, setViewState] = useState<ViewState>(ViewState.DASHBOARD);
  const [sessionScore, setSessionScore] = useState(0);
  const [selectedScenarioId, setSelectedScenarioId] = useState<number>(1);

  // Helper to get questions based on scenario
  const getQuestions = () => {
    switch (selectedScenarioId) {
      case 1:
        return scenario1Questions;
      case 2:
        return scenario2Questions;
      case 3:
        return scenario3Questions;
      default:
        return scenario1Questions;
    }
  };

  const currentQuestions = getQuestions();

  const handleScenarioSelect = (scenarioId: number) => {
    setSelectedScenarioId(scenarioId);
    setViewState(ViewState.SCENARIO);
  };

  const handleScenarioComplete = () => {
    // Scenario 1 starts with Session 1 (which encompasses the whole flow in this simplified logic, or we can split it if needed)
    // For now, mapping all questions to "SESSION_1" view state which uses SessionPlayer
    setViewState(ViewState.SESSION_1);
  };

  const handleBackToDashboard = () => {
    setViewState(ViewState.DASHBOARD);
  };

  const handleSessionComplete = (correctCount: number) => {
    setSessionScore(correctCount);
    const percentage = correctCount / currentQuestions.length;
    if (percentage >= 0.8) {
      setViewState(ViewState.RESULT_PASS); // Or COMPLETION, simplified for now
    } else {
      setViewState(ViewState.RESULT_FAIL);
    }
  };

  const handleRetry = () => {
    setViewState(ViewState.SESSION_1);
  };

  const handleContinue = () => {
    // Return to dashboard for now, or next session if applicable
    setViewState(ViewState.DASHBOARD);
  };

  const activeScenarioData =
    SCENARIO_DATA[selectedScenarioId as keyof typeof SCENARIO_DATA];

  return (
    <Layout viewState={viewState}>
      {viewState === ViewState.DASHBOARD && (
        <Dashboard onSelectScenario={handleScenarioSelect} />
      )}

      {viewState === ViewState.SCENARIO && (
        <Scenario
          title={activeScenarioData.title}
          description={activeScenarioData.description}
          patientInfo={activeScenarioData.patientInfo}
          eventInfo={activeScenarioData.eventInfo}
          onNext={handleScenarioComplete}
        />
      )}

      {/* Reusing SESSION_1 state for the main player loop for any scenario */}
      {viewState === ViewState.SESSION_1 && (
        <SessionPlayer
          sessionId={1} // Just a display number
          questions={currentQuestions}
          onComplete={handleSessionComplete}
        />
      )}

      {(viewState === ViewState.RESULT_PASS ||
        viewState === ViewState.RESULT_FAIL) && (
        <ResultScreen
          score={sessionScore}
          total={currentQuestions.length}
          passed={viewState === ViewState.RESULT_PASS}
          sessionId={1}
          onRetry={handleRetry}
          onContinue={handleContinue}
          isFinal={true}
        />
      )}
    </Layout>
  );
}
