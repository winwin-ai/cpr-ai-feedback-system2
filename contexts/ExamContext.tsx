"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface AnswerData {
  questionId: string | number;
  questionDisplayId?: string;
  selectedOptionId: string;
  correctOptionId: string;
  isCorrect: boolean;
  retryCount: number;
}

interface ExamContextType {
  currentAttemptId: number | null;
  isRecording: boolean;
  startExam: (scenarioId: number, totalQuestions: number) => Promise<number | null>;
  recordAnswer: (answer: AnswerData) => Promise<void>;
  completeExam: (score: number, passed: boolean) => Promise<void>;
  resetExam: () => void;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export function ExamProvider({ children }: { children: ReactNode }) {
  const [currentAttemptId, setCurrentAttemptId] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const startExam = useCallback(
    async (scenarioId: number, totalQuestions: number): Promise<number | null> => {
      try {
        const res = await fetch("/api/exam/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scenarioId, totalQuestions }),
        });

        if (!res.ok) {
          // 로그인 안 된 경우 등
          console.log("Exam start failed - user may not be logged in");
          return null;
        }

        const data = await res.json();
        setCurrentAttemptId(data.attemptId);
        setIsRecording(true);
        return data.attemptId;
      } catch (error) {
        console.error("Start exam error:", error);
        return null;
      }
    },
    []
  );

  const recordAnswer = useCallback(
    async (answer: AnswerData): Promise<void> => {
      if (!currentAttemptId || !isRecording) {
        return;
      }

      try {
        await fetch("/api/exam/answer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            attemptId: currentAttemptId,
            ...answer,
            questionId: String(answer.questionId),
          }),
        });
      } catch (error) {
        console.error("Record answer error:", error);
      }
    },
    [currentAttemptId, isRecording]
  );

  const completeExam = useCallback(
    async (score: number, passed: boolean): Promise<void> => {
      if (!currentAttemptId || !isRecording) {
        return;
      }

      try {
        await fetch("/api/exam/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            attemptId: currentAttemptId,
            score,
            passed,
          }),
        });

        setIsRecording(false);
      } catch (error) {
        console.error("Complete exam error:", error);
      }
    },
    [currentAttemptId, isRecording]
  );

  const resetExam = useCallback(() => {
    setCurrentAttemptId(null);
    setIsRecording(false);
  }, []);

  return (
    <ExamContext.Provider
      value={{
        currentAttemptId,
        isRecording,
        startExam,
        recordAnswer,
        completeExam,
        resetExam,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  const context = useContext(ExamContext);
  if (context === undefined) {
    throw new Error("useExam must be used within an ExamProvider");
  }
  return context;
}
