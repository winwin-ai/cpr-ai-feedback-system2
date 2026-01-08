import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// 관리자 계정 초기화 (최초 1회만)
export async function POST() {
  try {
    // 관리자 계정이 이미 있는지 확인
    const existingAdmin = await db
      .select()
      .from(users)
      .where(eq(users.email, "admin"))
      .get();

    if (existingAdmin) {
      return NextResponse.json(
        { message: "관리자 계정이 이미 존재합니다." },
        { status: 200 }
      );
    }

    // 관리자 계정 생성 (admin / cpr!@#0108)
    const passwordHash = await bcrypt.hash("cpr!@#0108", 10);

    await db.insert(users).values({
      email: "admin",
      passwordHash,
      name: "관리자",
      isAdmin: true,
    });

    return NextResponse.json({
      success: true,
      message: "관리자 계정이 생성되었습니다.",
    });
  } catch (error) {
    console.error("Admin init error:", error);
    return NextResponse.json(
      { error: "관리자 계정 생성 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
