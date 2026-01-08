import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { sessionOptions, SessionData } from "@/lib/session";

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
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId))
      .get();

    if (!user?.isAdmin) {
      return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
    }

    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: "현재 비밀번호와 새 비밀번호를 입력해주세요." },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: "새 비밀번호는 6자 이상이어야 합니다." },
        { status: 400 }
      );
    }

    // 현재 비밀번호 확인
    const isValid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: "현재 비밀번호가 올바르지 않습니다." },
        { status: 401 }
      );
    }

    // 새 비밀번호로 변경
    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    await db
      .update(users)
      .set({ passwordHash: newPasswordHash, updatedAt: new Date().toISOString() })
      .where(eq(users.id, session.userId));

    return NextResponse.json({ success: true, message: "비밀번호가 변경되었습니다." });
  } catch (error) {
    console.error("Change password error:", error);
    return NextResponse.json(
      { error: "비밀번호 변경 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
