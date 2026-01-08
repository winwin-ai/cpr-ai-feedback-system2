import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { users, examAttempts, questionAnswers } from "@/lib/db/schema";
import { eq, desc, count, sql } from "drizzle-orm";
import { sessionOptions, SessionData } from "@/lib/session";

export async function GET(request: Request) {
  try {
    const session = await getIronSession<SessionData>(
      await cookies(),
      sessionOptions
    );

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
    }

    // 관리자 확인
    const [adminUser] = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId))
      .limit(1);

    if (!adminUser?.isAdmin) {
      return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    // 특정 사용자의 시험 이력 조회
    if (userId) {
      const userIdNum = parseInt(userId, 10);

      const [user] = await db
        .select({
          id: users.id,
          email: users.email,
          name: users.name,
          school: users.school,
          studentId: users.studentId,
          createdAt: users.createdAt,
        })
        .from(users)
        .where(eq(users.id, userIdNum))
        .limit(1);

      if (!user) {
        return NextResponse.json({ error: "사용자를 찾을 수 없습니다." }, { status: 404 });
      }

      const attempts = await db
        .select()
        .from(examAttempts)
        .where(eq(examAttempts.userId, userIdNum))
        .orderBy(desc(examAttempts.completedAt));

      const attemptsWithAnswers = await Promise.all(
        attempts.map(async (attempt) => {
          const answers = await db
            .select()
            .from(questionAnswers)
            .where(eq(questionAnswers.attemptId, attempt.id));
          return { ...attempt, answers };
        })
      );

      return NextResponse.json({ user, attempts: attemptsWithAnswers });
    }

    // 전체 사용자 목록 조회 (관리자 제외)
    const userList = await db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
        school: users.school,
        studentId: users.studentId,
        createdAt: users.createdAt,
      })
      .from(users)
      .where(eq(users.isAdmin, false))
      .orderBy(desc(users.createdAt));

    // 각 사용자별 시험 통계
    const usersWithStats = await Promise.all(
      userList.map(async (user) => {
        const [statsResult] = await db
          .select({
            totalAttempts: count(),
            passedCount: sql<number>`SUM(CASE WHEN ${examAttempts.passed} = true THEN 1 ELSE 0 END)`,
          })
          .from(examAttempts)
          .where(eq(examAttempts.userId, user.id));

        return {
          ...user,
          totalAttempts: statsResult?.totalAttempts || 0,
          passedCount: statsResult?.passedCount || 0,
        };
      })
    );

    return NextResponse.json({ users: usersWithStats });
  } catch (error) {
    console.error("Admin users error:", error);
    return NextResponse.json(
      { error: "사용자 목록 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
