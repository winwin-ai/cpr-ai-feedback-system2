import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface FeedbackModalProps {
  isCorrect: boolean;
  feedbackText: string;
  explanation: string;
  onNext: () => void;
  onRetry: () => void; // For incorrect answers, option to retry or see explanation
  canRetry: boolean;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ 
  isCorrect, 
  feedbackText, 
  explanation, 
  onNext, 
  onRetry,
  canRetry 
}) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all duration-300">
      <div className={`bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 animate-in fade-in zoom-in duration-300`}>
        
        {/* Header Color Bar */}
        <div className={`h-2 w-full ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}></div>

        <div className="p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              {isCorrect ? (
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              ) : (
                <XCircle className="w-16 h-16 text-red-500" />
              )}
            </div>
            
            <div className="flex-grow">
              <h3 className={`text-2xl font-bold mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? '정답입니다!' : '정확하지 않습니다.'}
              </h3>
              <p className="text-lg text-slate-700 font-medium mb-4">{feedbackText}</p>
              
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Medical Explanation</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{explanation}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
             {!isCorrect && canRetry ? (
               <button 
                onClick={onRetry}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors"
               >
                 <RotateCcw size={18} /> 다시 시도
               </button>
             ) : (
               <button 
                onClick={onNext}
                className={`flex items-center gap-2 px-6 py-3 font-bold rounded-lg text-white transition-colors shadow-md ${isCorrect ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-800 hover:bg-slate-900'}`}
               >
                 {isCorrect ? '다음 문제' : '계속 진행'} <ArrowRight size={18} />
               </button>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};