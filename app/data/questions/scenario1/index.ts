import { Question } from "../../../types";
import { q1010 } from "./q1010";
import { q1020 } from "./q1020";
import { q1030 } from "./q1030";
import { q1040 } from "./q1040";
import { q1050 } from "./q1050";
import { q1060 } from "./q1060";
import { q1070 } from "./q1070";
import { q1071 } from "./q1071";
import { q1072 } from "./q1072";
import { q1073 } from "./q1073";
import { q1080 } from "./q1080";
import { q1085 } from "./q1085";
import { q1090 } from "./q1090";
import { q1100 } from "./q1100";
import { q1110 } from "./q1110";
import { q1120 } from "./q1120";
import { q1130 } from "./q1130";
import { q1140 } from "./q1140";
import { q1150 } from "./q1150";
import { q1160 } from "./q1160";
import { q1170 } from "./q1170";
import { q1180 } from "./q1180";
import { q1190 } from "./q1190";
import { q1200 } from "./q1200";
import { q1210 } from "./q1210";
import { q1220 } from "./q1220";
import { q1230 } from "./q1230";

import { Scenario } from "../../../types";

export const scenario1Questions: Question[] = [
  q1010,
  q1020,
  q1030,
  q1040,
  q1050,
  q1060,
  q1070,
  q1071,
  q1072,
  q1073,
  q1080,
  q1085,
  q1090,
  q1100,
  q1110,
  q1120,
  q1130,
  q1140,
  q1150,
  q1160,
  q1170,
  q1180,
  q1190,
  q1200,
  q1210,
  q1220,
  q1230,
];

export const scenario1: Scenario = {
  id: 1,
  title: "심소생 (심정지 환자)",
  startQuestionId: 1010,
  questions: scenario1Questions.reduce((acc, q) => {
    acc[q.id] = q;
    return acc;
  }, {} as Record<string | number, Question>),
};
