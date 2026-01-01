export enum ViewState {
  DASHBOARD = "DASHBOARD",
  SCENARIO = "SCENARIO",
  SESSION_1 = "SESSION_1",
  SESSION_2 = "SESSION_2",
  RESULT_PASS = "RESULT_PASS",
  RESULT_FAIL = "RESULT_FAIL",
  COMPLETION = "COMPLETION",
}

export interface Option {
  id: string;
  text: string;
  imageUrl?: string;
  nextId?: number | string; // Branching path based on choice
}

export interface Question {
  id: number | string;
  sessionId: number;
  scenarioId?: number; // Optional scenario ID
  role?: string; // Optional role for team CPR
  title: string;
  description?: string; // Additional context
  mediaType: "video" | "image";
  mediaPrompt: string; // Description of the AI media for the placeholder
  questionText: string;
  options: Option[];
  correctOptionId: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
  explanation: string; // Detailed medical explanation
  hasTimer?: boolean; // For the pulse check question
  videoPaths?: {
    question: string;
    answer?: string; // Video to play upon correct answer
  };
  localVideoFilename?: string; // Local video file in /public/videos/
  displayId?: string; // Custom question number for display (e.g., "7-1")
  nextId?: number | string; // Direct link to next question
  isTransition?: boolean; // If true, displayed as a session transition screen
}

export interface Scenario {
  id: number;
  title: string;
  questions: Record<string | number, Question>;
  startQuestionId: string | number;
}

export interface SessionResult {
  sessionId: number;
  correctCount: number;
  totalQuestions: number;
  passed: boolean;
}
