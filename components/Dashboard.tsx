import React from "react";
import {
  PlayCircle,
  ShieldAlert,
  Heart,
  BarChart3,
  ChevronRight,
} from "lucide-react";

interface DashboardProps {
  onStart: () => void;
  onJumpToQuestion: (index: number) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onStart,
  onJumpToQuestion,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          전남대학교 간호대학 CPR 교육 플랫폼:
          <br />
          <span className="text-blue-600">The Digital Blueprint</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          전남대학교 간호대학이 개발한 교육 플랫폼으로,
          <br />
          실제 응급 상황 시나리오를 통해 심정지 인지부터 고품질 심폐소생술까지
          실전처럼 학습하세요.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onStart}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">교육 시작하기</span>
            <PlayCircle className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Curriculum Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldAlert className="w-24 h-24 text-blue-600" />
          </div>
          <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <ShieldAlert className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Session 1</h3>
          <p className="text-slate-500 mb-4 font-medium">
            심정지 인지 및 초기 대응
          </p>
          <ul className="text-sm text-slate-600 space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>현장
              안전 확인
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>의식
              및 호흡 확인
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              응급의료체계 신고
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Heart className="w-24 h-24 text-teal-600" />
          </div>
          <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Session 2</h3>
          <p className="text-slate-500 mb-4 font-medium">
            심폐소생술 및 제세동
          </p>
          <ul className="text-sm text-slate-600 space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
              가슴압박 위치 및 깊이
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>AED
              사용법 숙달
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>ROSC
              후 처치
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BarChart3 className="w-24 h-24 text-indigo-600" />
          </div>
          <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <BarChart3 className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Evaluation</h3>
          <p className="text-slate-500 mb-4 font-medium">피드백 및 성과 분석</p>
          <ul className="text-sm text-slate-600 space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>80%
              이상 합격 기준
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
              실시간 오답 피드백
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>종합
              결과 리포트
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden mb-16">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">준비되셨나요?</h3>
            <p className="text-slate-300">
              지금 바로 가상 시나리오에 접속하여 생명을 살리는 기술을 배우세요.
            </p>
          </div>
          <button
            onClick={onStart}
            className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            시작하기 <ChevronRight size={18} />
          </button>
        </div>
        {/* Abstract grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Dev Shortcuts */}
      <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
          Development Shortcuts
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2">
          {Array.from({ length: 22 }, (_, i) => (
            <button
              key={i}
              onClick={() => onJumpToQuestion(i)}
              className="px-2 py-2 bg-white border border-slate-300 rounded text-sm font-medium hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              Q{i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
