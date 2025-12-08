import React from "react";
import { ArrowRight, FileText, Activity, AlertTriangle } from "lucide-react";

interface ScenarioProps {
  onNext: () => void;
}

export const Scenario: React.FC<ScenarioProps> = ({ onNext }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 w-full min-h-screen flex flex-col justify-top">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 px-8 py-6 flex items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Session 1 시작 전 환자 상태 확인
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-8">
          {/* Patient Profile */}
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 mb-8 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
              <Activity className="w-4 h-4 text-blue-500" />
              Epilepsy 환자
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              기저질환: 고혈압, 당뇨
            </div>
          </div>

          <div className="prose prose-lg text-slate-700 leading-relaxed space-y-6">
            <p>
              <span className="font-bold text-slate-900 border-b-2 border-blue-100">
                환자 상태:
              </span>{" "}
              상기 환자는 Epilepsy 환자로 간헐적 발작 증세를 보여 병동에 입원
              관찰 중입니다. 기저질환으로는 고혈압, 당뇨가 있고, 입원 3일 동안
              새로운 발작 증세는 보이지 않으며, 활력징후는 정상입니다. 입원 당시
              진행한 Brain MRI도 정상입니다.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-700 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                응급 상황 발생 (입원 3일째)
              </h3>
              <p className="text-red-900">
                환자는 점심식사 후 보호자 동반하에 화장실을 갔다가 대변을 본 뒤
                일어서다 쓰러졌습니다.
                <br />
                <br />
                보호자가 <span className="font-bold">"환자가 쓰러졌어요"</span>
                라고 해서 화장실에 갔을 때 환자는 바닥에 쓰러져 있었습니다. 눈을
                감은 채로 사지에{" "}
                <span className="font-bold decoration-red-300 underline underline-offset-4">
                  미세한 떨림
                </span>
                을 보이고 있었습니다.
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="pt-8 flex justify-end">
            <button
              onClick={onNext}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1"
            >
              상황 인지 및 훈련 시작
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
