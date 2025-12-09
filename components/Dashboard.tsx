import React from "react";
import {
  PlayCircle,
  Activity,
  User,
  Users,
  ChevronRight,
  ShieldAlert,
  Heart,
  BarChart3,
} from "lucide-react";

interface DashboardProps {
  onSelectScenario: (scenarioId: number) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onSelectScenario }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          전남대학교 간호대학 CPR 교육 플랫폼
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          실제 응급 상황 시나리오를 통해 심정지 인지부터 고품질 심폐소생술까지
          실전처럼 학습하세요.
        </p>
      </div>

      {/* Scenario Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Scenario 1 */}
        <div
          onClick={() => onSelectScenario(1)}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Activity className="w-24 h-24 text-blue-600" />
          </div>
          <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Activity className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Scenario 1</h3>
          <p className="text-lg font-bold text-blue-600 mb-4">
            심소생 (심정지 환자)
          </p>
          <p className="text-slate-500 mb-6 text-sm">
            병동에서 발생한 심정지 상황. 초기 대응부터 심폐소생술, 제세동까지의
            과정을 훈련합니다.
          </p>
          <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
            시작하기 <ChevronRight className="w-5 h-5 ml-1" />
          </div>
        </div>

        {/* Scenario 2 */}
        <div
          onClick={() => onSelectScenario(2)}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <User className="w-24 h-24 text-teal-600" />
          </div>
          <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <User className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Scenario 2</h3>
          <p className="text-lg font-bold text-teal-600 mb-4">
            김여린 (실신/정상호흡)
          </p>
          <p className="text-slate-500 mb-6 text-sm">
            실신 환자 발생. 의식 확인 및 호흡 양상 판단을 통해 비심정지 상황을
            감별합니다.
          </p>
          <div className="flex items-center text-teal-600 font-bold group-hover:translate-x-2 transition-transform">
            시작하기 <ChevronRight className="w-5 h-5 ml-1" />
          </div>
        </div>

        {/* Scenario 3 */}
        <div
          onClick={() => onSelectScenario(3)}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users className="w-24 h-24 text-indigo-600" />
          </div>
          <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Scenario 3</h3>
          <p className="text-lg font-bold text-indigo-600 mb-4">
            장소중 (팀 기반 CPR)
          </p>
          <p className="text-slate-500 mb-6 text-sm">
            전문 심폐소생술 팀 활동. 간호사 1, 2, 3의 역할 분담과 협력을
            훈련합니다.
          </p>
          <div className="flex items-center text-indigo-600 font-bold group-hover:translate-x-2 transition-transform">
            시작하기 <ChevronRight className="w-5 h-5 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
