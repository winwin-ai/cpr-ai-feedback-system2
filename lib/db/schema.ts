import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  real,
  timestamp,
  index,
} from "drizzle-orm/pg-core";

// 사용자 테이블
export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    email: text("email").unique().notNull(),
    passwordHash: text("password_hash").notNull(),
    name: text("name").notNull(),
    school: text("school"),
    studentId: text("student_id"),
    isAdmin: boolean("is_admin").notNull().default(false),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => [index("idx_users_email").on(table.email)]
);

// 시험 시도 테이블
export const examAttempts = pgTable(
  "exam_attempts",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    scenarioId: integer("scenario_id").notNull(),
    score: integer("score").notNull().default(0),
    totalQuestions: integer("total_questions").notNull(),
    percentage: real("percentage").notNull().default(0),
    passed: boolean("passed").notNull().default(false),
    startedAt: timestamp("started_at").defaultNow(),
    completedAt: timestamp("completed_at"),
  },
  (table) => [
    index("idx_exam_attempts_user_id").on(table.userId),
    index("idx_exam_attempts_scenario").on(table.scenarioId),
  ]
);

// 문항별 답변 테이블
export const questionAnswers = pgTable(
  "question_answers",
  {
    id: serial("id").primaryKey(),
    attemptId: integer("attempt_id")
      .notNull()
      .references(() => examAttempts.id, { onDelete: "cascade" }),
    questionId: text("question_id").notNull(),
    questionDisplayId: text("question_display_id"),
    selectedOptionId: text("selected_option_id").notNull(),
    correctOptionId: text("correct_option_id").notNull(),
    isCorrect: boolean("is_correct").notNull(),
    retryCount: integer("retry_count").default(0),
    answeredAt: timestamp("answered_at").defaultNow(),
  },
  (table) => [index("idx_question_answers_attempt").on(table.attemptId)]
);

// 타입 추출
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type ExamAttempt = typeof examAttempts.$inferSelect;
export type NewExamAttempt = typeof examAttempts.$inferInsert;
export type QuestionAnswer = typeof questionAnswers.$inferSelect;
export type NewQuestionAnswer = typeof questionAnswers.$inferInsert;
