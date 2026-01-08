import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { users, examAttempts } from "@/lib/db/schema";
import { eq, count, avg, sql } from "drizzle-orm";
import { sessionOptions, SessionData } from "@/lib/session";

export async function GET() {
  try {
    const session = await getIronSession<SessionData>(
      await cookies(),
      sessionOptions
    );

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
    }

    // 관리자 확인
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId))
      .get();

    if (!user?.isAdmin) {
      return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
    }

    // 전체 사용자 수 (관리자 제외)
    const totalUsersResult = await db
      .select({ count: count() })
      .from(users)
      .where(eq(users.isAdmin, false))
      .get();
    const totalUsers = totalUsersResult?.count || 0;

    // 전체 시험 시도 수
    const totalAttemptsResult = await db
      .select({ count: count() })
      .from(examAttempts)
      .get();
    const totalAttempts = totalAttemptsResult?.count || 0;

    // 완료된 시험 수
    const completedAttemptsResult = await db
      .select({ count: count() })
      .from(examAttempts)
      .where(sql`${examAttempts.completedAt} IS NOT NULL`)
      .get();
    const completedAttempts = completedAttemptsResult?.count || 0;

    // 통과율
    const passedAttemptsResult = await db
      .select({ count: count() })
      .from(examAttempts)
      .where(eq(examAttempts.passed, true))
      .get();
    const passedAttempts = passedAttemptsResult?.count || 0;
    const passRate = completedAttempts > 0 ? (passedAttempts / completedAttempts) * 100 : 0;

    // 평균 점수
    const avgScoreResult = await db
      .select({ avg: avg(examAttempts.percentage) })
      .from(examAttempts)
      .where(sql`${examAttempts.completedAt} IS NOT NULL`)
      .get();
    const avgScore = avgScoreResult?.avg || 0;

    // 시나리오별 통계
    const scenarioStats = await db
      .select({
        scenarioId: examAttempts.scenarioId,
        count: count(),
        avgScore: avg(examAttempts.percentage),
      })
      .from(examAttempts)
      .where(sql`${examAttempts.completedAt} IS NOT NULL`)
      .groupBy(examAttempts.scenarioId);

    return NextResponse.json({
      totalUsers,
      totalAttempts,
      completedAttempts,
      passedAttempts,
      passRate: Math.round(passRate * 10) / 10,
      avgScore: Math.round(Number(avgScore) * 10) / 10,
      scenarioStats,
    });
  } catch (error) {
    console.error("Admin stats error:", error);
    return NextResponse.json(
      { error: "통계 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
