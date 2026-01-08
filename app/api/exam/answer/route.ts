import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { questionAnswers, examAttempts } from "@/lib/db/schema";
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

    const {
      attemptId,
      questionId,
      questionDisplayId,
      selectedOptionId,
      correctOptionId,
      isCorrect,
      retryCount,
    } = await request.json();

    if (!attemptId || !questionId || !selectedOptionId || !correctOptionId) {
      return NextResponse.json(
        { error: "필수 정보가 누락되었습니다." },
        { status: 400 }
      );
    }

    // 시험 시도가 현재 사용자의 것인지 확인
    const [attempt] = await db
      .select()
      .from(examAttempts)
      .where(
        and(
          eq(examAttempts.id, attemptId),
          eq(examAttempts.userId, session.userId)
        )
      )
      .limit(1);

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

    // 답변 기록 (기존 답변이 있으면 업데이트)
    const [existingAnswer] = await db
      .select()
      .from(questionAnswers)
      .where(
        and(
          eq(questionAnswers.attemptId, attemptId),
          eq(questionAnswers.questionId, String(questionId))
        )
      )
      .limit(1);

    if (existingAnswer) {
      // 기존 답변 업데이트
      await db
        .update(questionAnswers)
        .set({
          selectedOptionId,
          isCorrect,
          retryCount: retryCount || 0,
          answeredAt: new Date(),
        })
        .where(eq(questionAnswers.id, existingAnswer.id));
    } else {
      // 새 답변 생성
      await db.insert(questionAnswers).values({
        attemptId,
        questionId: String(questionId),
        questionDisplayId: questionDisplayId || null,
        selectedOptionId,
        correctOptionId,
        isCorrect,
        retryCount: retryCount || 0,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Record answer error:", error);
    return NextResponse.json(
      { error: "답변 기록 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
