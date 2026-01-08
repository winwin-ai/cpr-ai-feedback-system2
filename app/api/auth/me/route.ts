import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { sessionOptions, SessionData } from "@/lib/session";

export async function GET() {
  try {
    const session = await getIronSession<SessionData>(
      await cookies(),
      sessionOptions
    );

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    // 사용자 정보 조회
    const [user] = await db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
        school: users.school,
        studentId: users.studentId,
        isAdmin: users.isAdmin,
      })
      .from(users)
      .where(eq(users.id, session.userId))
      .limit(1);

    if (!user) {
      // 세션은 있지만 사용자가 없는 경우 (삭제된 사용자)
      session.destroy();
      return NextResponse.json({ user: null }, { status: 200 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { error: "사용자 정보를 가져오는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
