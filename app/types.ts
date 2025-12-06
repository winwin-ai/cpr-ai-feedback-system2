export enum ViewState {
  DASHBOARD = "DASHBOARD",
  SESSION_1 = "SESSION_1",
  SESSION_2 = "SESSION_2",
  RESULT_PASS = "RESULT_PASS",
  RESULT_FAIL = "RESULT_FAIL",
  COMPLETION = "COMPLETION",
  LIBRARY = "LIBRARY",
}

export interface Option {
  id: string;
  text: string;
  imageUrl?: string;
}

export interface Question {
  id: number;
  sessionId: number;
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
}

export interface SessionResult {
  sessionId: number;
  correctCount: number;
  totalQuestions: number;
  passed: boolean;
}
