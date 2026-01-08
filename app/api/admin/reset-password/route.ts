import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { sessionOptions, SessionData } from "@/lib/session";

// 사용자 비밀번호 초기화 (관리자 전용)
export async function POST(request: Request) {
  try {
    const session = await getIronSession<SessionData>(
      await cookies(),
      sessionOptions
    );

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
    }

    // 관리자 확인
    const adminUser = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId))
      .get();

    if (!adminUser?.isAdmin) {
      return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
    }

    const { userId, newPassword } = await request.json();

    if (!userId || !newPassword) {
      return NextResponse.json(
        { error: "사용자 ID와 새 비밀번호를 입력해주세요." },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: "비밀번호는 6자 이상이어야 합니다." },
        { status: 400 }
      );
    }

    // 대상 사용자 확인
    const targetUser = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .get();

    if (!targetUser) {
      return NextResponse.json({ error: "사용자를 찾을 수 없습니다." }, { status: 404 });
    }

    // 관리자 계정 비밀번호는 이 API로 변경 불가 (보안)
    if (targetUser.isAdmin) {
      return NextResponse.json(
        { error: "관리자 계정은 이 기능으로 변경할 수 없습니다." },
        { status: 403 }
      );
    }

    // 비밀번호 변경
    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    await db
      .update(users)
      .set({ passwordHash: newPasswordHash, updatedAt: new Date().toISOString() })
      .where(eq(users.id, userId));

    return NextResponse.json({
      success: true,
      message: "비밀번호가 초기화되었습니다."
    });
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { error: "비밀번호 초기화 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
