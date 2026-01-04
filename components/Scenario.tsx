import React, { useState } from "react";
import { ArrowRight, FileText, Activity, AlertTriangle, X } from "lucide-react";
import Image from "next/image";

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
  roleImage?: string;
}

export const Scenario: React.FC<ScenarioProps> = ({
  title,
  description,
  patientInfo,
  eventInfo,
  onNext,
  roleImage,
}) => {
  const [showRolePopup, setShowRolePopup] = useState(false);

  const handleInitialClick = () => {
    if (roleImage) {
      setShowRolePopup(true);
    } else {
      onNext();
    }
  };

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
              onClick={handleInitialClick}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {roleImage ? "간호사 역할" : "상황 인지 및 훈련 시작"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Role Popup Modal */}
      {showRolePopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowRolePopup(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">
                간호사 역할 가이드
              </h3>
              <button
                onClick={() => setShowRolePopup(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-auto max-h-[70vh] flex flex-col items-center">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                <Image
                  src={roleImage!}
                  alt="Nurse Team Roles"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="mt-6 text-slate-600 text-center">
                <p>각 역할에 따른 임무를 숙지한 후 훈련을 시작해 주세요.</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 flex justify-center">
              <button
                onClick={onNext}
                className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg active:scale-95"
              >
                상황 인지 및 훈련 시작
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
