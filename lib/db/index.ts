import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Neon PostgreSQL 연결
const sql = neon(process.env.DATABASE_URL!);

// Drizzle ORM 인스턴스
export const db = drizzle(sql, { schema });

// 테이블 초기화 함수
export async function initializeDatabase() {
  try {
    // users 테이블
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        name TEXT NOT NULL,
        school TEXT,
        student_id TEXT,
        is_admin BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // exam_attempts 테이블
    await sql`
      CREATE TABLE IF NOT EXISTS exam_attempts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        scenario_id INTEGER NOT NULL,
        score INTEGER NOT NULL DEFAULT 0,
        total_questions INTEGER NOT NULL,
        percentage REAL NOT NULL DEFAULT 0,
        passed BOOLEAN NOT NULL DEFAULT false,
        started_at TIMESTAMP DEFAULT NOW(),
        completed_at TIMESTAMP
      )
    `;

    // question_answers 테이블
    await sql`
      CREATE TABLE IF NOT EXISTS question_answers (
        id SERIAL PRIMARY KEY,
        attempt_id INTEGER NOT NULL REFERENCES exam_attempts(id) ON DELETE CASCADE,
        question_id TEXT NOT NULL,
        question_display_id TEXT,
        selected_option_id TEXT NOT NULL,
        correct_option_id TEXT NOT NULL,
        is_correct BOOLEAN NOT NULL,
        retry_count INTEGER DEFAULT 0,
        answered_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // 인덱스 생성
    await sql`CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_exam_attempts_user_id ON exam_attempts(user_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_exam_attempts_scenario ON exam_attempts(scenario_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_question_answers_attempt ON question_answers(attempt_id)`;

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization error:", error);
  }
}
