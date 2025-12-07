import React from "react";
import { Activity, HeartPulse } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  viewState: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, viewState }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                전남대 CPR 교육
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                심폐소생술 교육 플랫폼
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                viewState.includes("SESSION")
                  ? "bg-green-100 text-green-700 animate-pulse"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {viewState === "DASHBOARD" ? "대기 중" : "시뮬레이션 진행 중"}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">{children}</main>

      {/* Footer - 휴대폰 가로모드에서 숨김 */}
      <footer className="mobile-landscape-hidden fixed bottom-0 left-0 right-0 z-[60] bg-slate-900 text-slate-400 py-2 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs flex flex-wrap justify-center items-center gap-2 md:gap-4">
          <span className="text-slate-300 font-medium">
            전남대학교 간호대학 조인영 교수 연구 프로젝트
          </span>
          <span className="hidden md:inline px-1">|</span>
          <span>
            © 2025 전남대학교 간호대학 CPR 교육 플랫폼. All rights reserved.
          </span>
          <span className="hidden md:inline px-1">|</span>
          <span className="flex items-center gap-1">
            <HeartPulse size={12} className="text-red-500" /> 생명을 살리는 기술
          </span>
        </div>
      </footer>
    </div>
  );
};
