import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { examAttempts } from "@/lib/db/schema";
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

    const { scenarioId, totalQuestions } = await request.json();

    if (!scenarioId || !totalQuestions) {
      return NextResponse.json(
        { error: "시나리오 ID와 총 문제 수가 필요합니다." },
        { status: 400 }
      );
    }

    // 시험 시도 생성
    const result = await db
      .insert(examAttempts)
      .values({
        userId: session.userId,
        scenarioId,
        totalQuestions,
        score: 0,
        percentage: 0,
        passed: false,
      })
      .returning({ id: examAttempts.id });

    const attemptId = result[0].id;

    return NextResponse.json({
      success: true,
      attemptId,
    });
  } catch (error) {
    console.error("Start exam error:", error);
    return NextResponse.json(
      { error: "시험 시작 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
