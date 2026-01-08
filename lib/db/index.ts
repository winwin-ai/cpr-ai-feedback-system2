import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import path from "path";

// 데이터베이스 경로 설정
const dbPath =
  process.env.DATABASE_PATH ||
  path.join(process.cwd(), "data", "cpr-education.db");

// SQLite 연결
const sqlite = new Database(dbPath);

// WAL 모드 활성화 (성능 향상)
sqlite.pragma("journal_mode = WAL");

// Drizzle ORM 인스턴스
export const db = drizzle(sqlite, { schema });

// 테이블 초기화 함수
export function initializeDatabase() {
  // users 테이블
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      school TEXT,
      student_id TEXT,
      is_admin INTEGER NOT NULL DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);

  // is_admin 컬럼이 없으면 추가 (기존 DB 마이그레이션)
  try {
    sqlite.exec(`ALTER TABLE users ADD COLUMN is_admin INTEGER NOT NULL DEFAULT 0`);
  } catch {
    // 컬럼이 이미 존재하면 무시
  }

  // exam_attempts 테이블
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS exam_attempts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      scenario_id INTEGER NOT NULL,
      score INTEGER NOT NULL DEFAULT 0,
      total_questions INTEGER NOT NULL,
      percentage REAL NOT NULL DEFAULT 0,
      passed INTEGER NOT NULL DEFAULT 0,
      started_at TEXT DEFAULT (datetime('now')),
      completed_at TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  // question_answers 테이블
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS question_answers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      attempt_id INTEGER NOT NULL,
      question_id TEXT NOT NULL,
      question_display_id TEXT,
      selected_option_id TEXT NOT NULL,
      correct_option_id TEXT NOT NULL,
      is_correct INTEGER NOT NULL,
      retry_count INTEGER DEFAULT 0,
      answered_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (attempt_id) REFERENCES exam_attempts(id) ON DELETE CASCADE
    )
  `);

  // 인덱스 생성
  sqlite.exec(`
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    CREATE INDEX IF NOT EXISTS idx_exam_attempts_user_id ON exam_attempts(user_id);
    CREATE INDEX IF NOT EXISTS idx_exam_attempts_scenario ON exam_attempts(scenario_id);
    CREATE INDEX IF NOT EXISTS idx_question_answers_attempt ON question_answers(attempt_id);
  `);

  console.log("Database initialized successfully");
}

// 앱 시작 시 DB 초기화
initializeDatabase();

export { sqlite };
