import React from 'react';
import { Trophy, AlertTriangle, RotateCcw, Home, CheckCircle } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  total: number;
  passed: boolean;
  sessionId: number;
  onRetry: () => void;
  onContinue: () => void;
  isFinal?: boolean;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ 
  score, 
  total, 
  passed, 
  sessionId, 
  onRetry, 
  onContinue,
  isFinal = false 
}) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Header Image/Icon */}
        <div className={`h-48 flex items-center justify-center ${passed ? 'bg-gradient-to-br from-green-500 to-teal-600' : 'bg-gradient-to-br from-orange-400 to-red-500'}`}>
          {passed ? (
            <div className="text-center text-white">
              <Trophy className="w-20 h-20 mx-auto mb-2 opacity-90" />
              <h2 className="text-3xl font-black tracking-tight">{isFinal ? '최종 수료 완료!' : '세션 통과!'}</h2>
            </div>
          ) : (
             <div className="text-center text-white">
              <AlertTriangle className="w-20 h-20 mx-auto mb-2 opacity-90" />
              <h2 className="text-3xl font-black tracking-tight">재학습 필요</h2>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="p-8 text-center">
          <div className="mb-8">
            <span className="text-slate-500 font-medium uppercase text-xs tracking-widest">Performance Score</span>
            <div className="flex items-baseline justify-center gap-2 mt-2">
              <span className={`text-6xl font-black ${passed ? 'text-green-600' : 'text-red-600'}`}>{percentage}%</span>
            </div>
            <p className="text-slate-400 text-sm mt-1">{score} out of {total} correct</p>
          </div>

          <div className="space-y-4 mb-8">
            {passed ? (
              <p className="text-slate-700 leading-relaxed">
                {isFinal 
                  ? "축하합니다! 환자의 자발순환(ROSC)이 회복되었습니다. 성공적으로 CPR 교육 과정을 수료하셨습니다." 
                  : "우수한 성과입니다. 심정지 초기 대응 절차를 완벽하게 숙지하셨습니다. 다음 단계로 진행하세요."}
              </p>
            ) : (
              <p className="text-slate-700 leading-relaxed">
                정답률이 80% 미만입니다. 환자의 생존율을 높이기 위해 절차를 다시 한 번 학습하고 도전해주세요.
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            {passed ? (
              isFinal ? (
                 <button 
                  onClick={onContinue} // Go to home
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Home size={20} /> 메인으로 돌아가기
                </button>
              ) : (
                <button 
                  onClick={onContinue}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                >
                  다음 세션 진행 <CheckCircle size={20} />
                </button>
              )
            ) : (
              <button 
                onClick={onRetry}
                className="w-full py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw size={20} /> 세션 다시 하기
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};