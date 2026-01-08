import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { examAttempts, questionAnswers } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { sessionOptions, SessionData } from "@/lib/session";

export async function GET() {
  try {
    const session = await getIronSession<SessionData>(
      await cookies(),
      sessionOptions
    );

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json(
        { error: "로그인이 필요합니다." },
        { status: 401 }
      );
    }

    // 사용자의 시험 이력 조회 (완료된 것만, 최신순)
    const attempts = await db
      .select({
        id: examAttempts.id,
        scenarioId: examAttempts.scenarioId,
        score: examAttempts.score,
        totalQuestions: examAttempts.totalQuestions,
        percentage: examAttempts.percentage,
        passed: examAttempts.passed,
        startedAt: examAttempts.startedAt,
        completedAt: examAttempts.completedAt,
      })
      .from(examAttempts)
      .where(eq(examAttempts.userId, session.userId))
      .orderBy(desc(examAttempts.completedAt));

    // 각 시험의 답변 정보 조회
    const attemptsWithAnswers = await Promise.all(
      attempts.map(async (attempt) => {
        const answers = await db
          .select({
            questionId: questionAnswers.questionId,
            questionDisplayId: questionAnswers.questionDisplayId,
            selectedOptionId: questionAnswers.selectedOptionId,
            correctOptionId: questionAnswers.correctOptionId,
            isCorrect: questionAnswers.isCorrect,
            retryCount: questionAnswers.retryCount,
          })
          .from(questionAnswers)
          .where(eq(questionAnswers.attemptId, attempt.id));

        return {
          ...attempt,
          answers,
        };
      })
    );

    return NextResponse.json({
      attempts: attemptsWithAnswers,
    });
  } catch (error) {
    console.error("Get history error:", error);
    return NextResponse.json(
      { error: "시험 이력 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
