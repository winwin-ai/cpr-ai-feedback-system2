import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { examAttempts } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { sessionOptions, SessionData } from "@/lib/session";

export async function POST(request: Request) {
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

    const { attemptId, score, passed } = await request.json();

    if (attemptId === undefined || score === undefined || passed === undefined) {
      return NextResponse.json(
        { error: "필수 정보가 누락되었습니다." },
        { status: 400 }
      );
    }

    // 시험 시도가 현재 사용자의 것인지 확인
    const attempt = await db
      .select()
      .from(examAttempts)
      .where(
        and(
          eq(examAttempts.id, attemptId),
          eq(examAttempts.userId, session.userId)
        )
      )
      .get();

    if (!attempt) {
      return NextResponse.json(
        { error: "유효하지 않은 시험 시도입니다." },
        { status: 404 }
      );
    }

    // 이미 완료된 시험인지 확인
    if (attempt.completedAt) {
      return NextResponse.json(
        { error: "이미 완료된 시험입니다." },
        { status: 400 }
      );
    }

    // 정답률 계산
    const percentage = (score / attempt.totalQuestions) * 100;

    // 시험 완료 처리
    const result = await db
      .update(examAttempts)
      .set({
        score,
        percentage,
        passed,
        completedAt: new Date().toISOString(),
      })
      .where(eq(examAttempts.id, attemptId))
      .returning();

    const updatedAttempt = result[0];

    return NextResponse.json({
      success: true,
      examResult: {
        id: updatedAttempt.id,
        scenarioId: updatedAttempt.scenarioId,
        score: updatedAttempt.score,
        totalQuestions: updatedAttempt.totalQuestions,
        percentage: updatedAttempt.percentage,
        passed: updatedAttempt.passed,
        completedAt: updatedAttempt.completedAt,
      },
    });
  } catch (error) {
    console.error("Complete exam error:", error);
    return NextResponse.json(
      { error: "시험 완료 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
