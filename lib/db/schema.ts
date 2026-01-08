import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// 사용자 테이블
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").unique().notNull(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  school: text("school"),
  studentId: text("student_id"),
  isAdmin: integer("is_admin", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at").default(sql`(datetime('now'))`),
  updatedAt: text("updated_at").default(sql`(datetime('now'))`),
});

// 시험 시도 테이블
export const examAttempts = sqliteTable("exam_attempts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  scenarioId: integer("scenario_id").notNull(),
  score: integer("score").notNull().default(0),
  totalQuestions: integer("total_questions").notNull(),
  percentage: real("percentage").notNull().default(0),
  passed: integer("passed", { mode: "boolean" }).notNull().default(false),
  startedAt: text("started_at").default(sql`(datetime('now'))`),
  completedAt: text("completed_at"),
});

// 문항별 답변 테이블
export const questionAnswers = sqliteTable("question_answers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  attemptId: integer("attempt_id")
    .notNull()
    .references(() => examAttempts.id, { onDelete: "cascade" }),
  questionId: text("question_id").notNull(),
  questionDisplayId: text("question_display_id"),
  selectedOptionId: text("selected_option_id").notNull(),
  correctOptionId: text("correct_option_id").notNull(),
  isCorrect: integer("is_correct", { mode: "boolean" }).notNull(),
  retryCount: integer("retry_count").default(0),
  answeredAt: text("answered_at").default(sql`(datetime('now'))`),
});

// 타입 추출
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type ExamAttempt = typeof examAttempts.$inferSelect;
export type NewExamAttempt = typeof examAttempts.$inferInsert;
export type QuestionAnswer = typeof questionAnswers.$inferSelect;
export type NewQuestionAnswer = typeof questionAnswers.$inferInsert;
