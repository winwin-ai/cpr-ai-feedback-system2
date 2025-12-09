import React from "react";
import { ArrowRight, FileText, Activity, AlertTriangle } from "lucide-react";

interface ScenarioProps {
  title: string;
  description: React.ReactNode;
  patientInfo: {
    status: string;
    history: string;
  };
  eventInfo: {
    title: string;
    description: React.ReactNode;
  };
  onNext: () => void;
}

export const Scenario: React.FC<ScenarioProps> = ({
  title,
  description,
  patientInfo,
  eventInfo,
  onNext,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 w-full min-h-screen flex flex-col justify-top">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 px-8 py-6 flex items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-8">
          {description && (
            <div className="text-slate-600 text-lg leading-relaxed">
              {description}
            </div>
          )}

          {/* Patient Profile */}
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 mb-8 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
              <Activity className="w-4 h-4 text-blue-500" />
              {patientInfo.status}
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              기저질환: {patientInfo.history}
            </div>
          </div>

          <div className="prose prose-lg text-slate-700 leading-relaxed space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-700 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                {eventInfo.title}
              </h3>
              <div className="text-red-900">{eventInfo.description}</div>
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
