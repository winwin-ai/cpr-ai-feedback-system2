import React from "react";
import { Activity, HeartPulse } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  viewState: string;
  onGoHome?: () => void;
  questionInfo?: {
    displayId: string;
    title: string;
  };
  progressInfo?: {
    current: number;
    total: number;
    scenarioTitle: string;
  };
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  viewState,
  onGoHome,

  questionInfo,
  progressInfo,
}) => {
  const handleLogoClick = () => {
    if (viewState === "DASHBOARD") {
      return; // 이미 홈이면 아무것도 하지 않음
    }
    if (
      window.confirm(
        "홈으로 이동하시겠습니까?\n진행 중인 내용은 저장되지 않습니다."
      )
    ) {
      onGoHome?.();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div
            className={`flex items-center gap-2 ${
              viewState !== "DASHBOARD"
                ? "cursor-pointer hover:opacity-80 transition-opacity"
                : ""
            }`}
            onClick={handleLogoClick}
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                심폐소생술 교육 플랫폼
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {progressInfo ? (
              <div className="flex items-center">
                <div className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="text-blue-600">
                    {progressInfo.scenarioTitle}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span>
                    {progressInfo.current}/{progressInfo.total}
                  </span>
                </div>
              </div>
            ) : (
              viewState === "DASHBOARD" && (
                <div className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-500">
                  대기 중
                </div>
              )
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">{children}</main>

      {/* Footer - 휴대폰 가로모드에서 숨김 */}
      <footer className="mobile-landscape-hidden fixed bottom-0 left-0 right-0 z-[60] bg-slate-900 text-slate-400 py-2 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs flex flex-wrap justify-center items-center gap-2 md:gap-4">
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
