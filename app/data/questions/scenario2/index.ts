import { Question, Scenario } from "../../../types";
import { q2010 } from "./q2010";
import { q2020 } from "./q2020";
import { q2030 } from "./q2030";
import { q2040 } from "./q2040";
import { q2050 } from "./q2050";

export const scenario2Questions: Question[] = [
  q2010,
  q2020,
  q2030,
  q2040,
  q2050,
];

export const scenario2: Scenario = {
  id: 2,
  title: "심정지 예방 및 조기 대처",
  startQuestionId: 2010,
  questions: scenario2Questions.reduce((acc, q) => {
    acc[q.id] = q;
    return acc;
  }, {} as Record<string | number, Question>),
};
