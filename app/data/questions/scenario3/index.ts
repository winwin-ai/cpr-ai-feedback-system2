import { Question, Scenario } from "../../../types";
import { q3010 } from "./q3010";
import { q3020 } from "./q3020";
import { q3050 } from "./q3050";
import { q3060 } from "./q3060";
import { q3070 } from "./q3070";
import { q3100 } from "./q3100";
import { q3180 } from "./q3180";

export const scenario3Questions: Question[] = [
  q3010,
  q3020,
  q3050,
  q3060,
  q3070,
  q3100,
  q3180,
];

export const scenario3: Scenario = {
  id: 3,
  title: "전문 심폐소생술 (팀 리더)",
  startQuestionId: 3010,
  questions: scenario3Questions.reduce((acc, q) => {
    acc[q.id] = q;
    return acc;
  }, {} as Record<string | number, Question>),
};
