"use client";

import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Dashboard } from "../components/Dashboard";
import { SessionPlayer } from "../components/SessionPlayer";
import { ResultScreen } from "../components/ResultScreen";
import { ViewState } from "./types";
import { session1Questions, session2Questions } from "./data";

export default function Home() {
  const [viewState, setViewState] = useState<ViewState>(ViewState.DASHBOARD);
  const [sessionScore, setSessionScore] = useState(0);
  // Track which session is currently active or just finished
  const [activeSessionId, setActiveSessionId] = useState(1);

  const handleStart = () => {
    setViewState(ViewState.SESSION_1);
  };

  const handleBackToDashboard = () => {
    setViewState(ViewState.DASHBOARD);
  };

  const handleSession1Complete = (correctCount: number) => {
    setSessionScore(correctCount);
    const percentage = correctCount / session1Questions.length;
    if (percentage >= 0.8) {
      setViewState(ViewState.RESULT_PASS);
    } else {
      setViewState(ViewState.RESULT_FAIL);
    }
  };

  const handleSession2Complete = (correctCount: number) => {
    setSessionScore(correctCount);
    const percentage = correctCount / session2Questions.length;
    if (percentage >= 0.8) {
      setViewState(ViewState.COMPLETION);
    } else {
      setViewState(ViewState.RESULT_FAIL);
    }
  };

  const handleRetry = () => {
    // Determine which session to retry based on current state context
    if (activeSessionId === 1) {
      setViewState(ViewState.SESSION_1);
    } else {
      setViewState(ViewState.SESSION_2);
    }
  };

  const handleContinue = () => {
    if (viewState === ViewState.RESULT_PASS) {
      // Move to Session 2
      setActiveSessionId(2);
      setViewState(ViewState.SESSION_2);
    } else if (viewState === ViewState.COMPLETION) {
      // Reset to home
      setActiveSessionId(1);
      setViewState(ViewState.DASHBOARD);
    }
  };

  return (
    <Layout viewState={viewState}>
      {viewState === ViewState.DASHBOARD && (
        <Dashboard
          onStart={() => {
            setActiveSessionId(1);
            handleStart();
          }}
        />
      )}

      {viewState === ViewState.SESSION_1 && (
        <SessionPlayer
          sessionId={1}
          questions={session1Questions}
          onComplete={handleSession1Complete}
        />
      )}

      {viewState === ViewState.SESSION_2 && (
        <SessionPlayer
          sessionId={2}
          questions={session2Questions}
          onComplete={handleSession2Complete}
        />
      )}

      {(viewState === ViewState.RESULT_PASS ||
        viewState === ViewState.RESULT_FAIL) && (
        <ResultScreen
          score={sessionScore}
          total={
            activeSessionId === 1
              ? session1Questions.length
              : session2Questions.length
          }
          passed={viewState === ViewState.RESULT_PASS}
          sessionId={activeSessionId}
          onRetry={handleRetry}
          onContinue={handleContinue}
          isFinal={false}
        />
      )}

      {viewState === ViewState.COMPLETION && (
        <ResultScreen
          score={sessionScore}
          total={session2Questions.length}
          passed={true}
          sessionId={2}
          onRetry={handleRetry}
          onContinue={handleContinue}
          isFinal={true}
        />
      )}
    </Layout>
  );
}
