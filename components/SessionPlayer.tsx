import React, { useState, useEffect } from 'react';
import { Question } from '@/app/types';
import { MediaDisplay } from './MediaDisplay';
import { FeedbackModal } from './FeedbackModal';
import { Timer, AlertCircle } from 'lucide-react';

interface SessionPlayerProps {
  questions: Question[];
  sessionId: number;
  onComplete: (correctCount: number) => void;
}

export const SessionPlayer: React.FC<SessionPlayerProps> = ({ questions, sessionId, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedbackState, setFeedbackState] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [score, setScore] = useState(0);
  const [retryCount, setRetryCount] = useState(0); // Track retries for current question
  const [timer, setTimer] = useState<number | null>(null);

  const currentQuestion = questions[currentIndex];

  // Timer Logic for specific questions (e.g. Q7 Pulse Check)
  useEffect(() => {
    if (currentQuestion.hasTimer && feedbackState === 'idle') {
      setTimer(10);
    } else {
      setTimer(null);
    }
  }, [currentQuestion, feedbackState]);

  useEffect(() => {
    if (timer !== null && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOptionSelect = (optionId: string) => {
    if (feedbackState !== 'idle') return;

    setSelectedOptionId(optionId);
    const isCorrect = optionId === currentQuestion.correctOptionId;

    if (isCorrect) {
      setFeedbackState('correct');
      if (retryCount === 0) {
          setScore(prev => prev + 1);
      }
    } else {
      setFeedbackState('incorrect');
    }
  };

  const handleNext = () => {
    // Reset states for next question
    setSelectedOptionId(null);
    setFeedbackState('idle');
    setRetryCount(0);
    setTimer(null);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Session Finished
      onComplete(score + (feedbackState === 'correct' && retryCount === 0 && currentIndex === questions.length -1 ? 0 : 0)); // Score is already updated on click
    }
  };

  const handleRetry = () => {
    setFeedbackState('idle');
    setSelectedOptionId(null);
    setRetryCount(prev => prev + 1);
  };

  // Progress Percentage
  const progress = ((currentIndex) / questions.length) * 100;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">
      {/* Top Bar: Progress & Timer */}
      <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-4 w-1/2">
          <span className="text-sm font-bold text-slate-400">SESSION {sessionId}</span>
          <div className="flex-grow h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-sm font-mono">{currentIndex + 1} / {questions.length}</span>
        </div>

        {timer !== null && (
          <div className="flex items-center gap-2 text-red-400 animate-pulse font-mono text-xl font-bold">
            <Timer className="w-5 h-5" />
            <span>00:{timer.toString().padStart(2, '0')}</span>
          </div>
        )}
      </div>

      <div className="flex-grow flex flex-col md:flex-row">
        {/* Left/Top: Media Area */}
        <div className="w-full md:w-2/3 bg-black relative flex items-center justify-center h-[40vh] md:h-auto">
          <MediaDisplay
            type={currentQuestion.mediaType}
            prompt={feedbackState === 'correct' ? `${currentQuestion.mediaPrompt} - Correct Action` : currentQuestion.mediaPrompt}
            isCorrectAction={feedbackState === 'correct'}
          />

          {/* Feedback Modal Overlay */}
          {feedbackState !== 'idle' && (
            <FeedbackModal
              isCorrect={feedbackState === 'correct'}
              feedbackText={feedbackState === 'correct' ? currentQuestion.feedbackCorrect : currentQuestion.feedbackIncorrect}
              explanation={currentQuestion.explanation}
              onNext={handleNext}
              onRetry={handleRetry}
              canRetry={retryCount === 0 && feedbackState === 'incorrect'} // Allow 1 retry
            />
          )}
        </div>

        {/* Right/Bottom: Interaction Area */}
        <div className="w-full md:w-1/3 bg-white border-l border-slate-200 flex flex-col p-6 md:p-8 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">Question {currentIndex + 1}</h2>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
              {currentQuestion.questionText}
            </h3>
          </div>

          <div className="space-y-3 flex-grow">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                disabled={feedbackState !== 'idle'}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 relative group
                  ${selectedOptionId === option.id
                    ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-100'
                    : 'border-slate-200 hover:border-blue-400 hover:bg-slate-50'
                  }
                  ${feedbackState !== 'idle' && 'opacity-50 cursor-not-allowed'}
                `}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border flex-shrink-0 mt-0.5
                    ${selectedOptionId === option.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-400 border-slate-300 group-hover:border-blue-400'}
                  `}>
                    {option.id.toUpperCase()}
                  </div>
                  <span className={`text-sm md:text-base font-medium ${selectedOptionId === option.id ? 'text-blue-900' : 'text-slate-700'}`}>
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
             <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg text-xs text-slate-500">
               <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
               <p>신중하게 선택하세요. 실제 상황에서는 한 번의 판단이 환자의 생명을 좌우합니다.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};