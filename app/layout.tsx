import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "CPR 교육 플랫폼 - 전남대학교 간호대학",
  description: "전남대학교 간호대학 조인영 교수 연구 프로젝트 - 실시간 피드백 시스템을 활용한 심폐소생술 교육 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
