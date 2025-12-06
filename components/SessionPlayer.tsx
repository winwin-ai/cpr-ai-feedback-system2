import React, { useState, useEffect } from "react";
import { Question } from "@/app/types";
import { MediaDisplay } from "./MediaDisplay";
import { Timer, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

interface SessionPlayerProps {
  questions: Question[];
  sessionId: number;
  initialQuestionIndex?: number;
  onComplete: (correctCount: number) => void;
}

type PlaybackState = "intro" | "question" | "waiting" | "answer";

export const SessionPlayer: React.FC<SessionPlayerProps> = ({
  questions,
  sessionId,
  initialQuestionIndex = 0,
  onComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialQuestionIndex);
  const [playbackState, setPlaybackState] = useState<PlaybackState>("intro");
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedbackState, setFeedbackState] = useState<
    "idle" | "correct" | "incorrect"
  >("idle");
  const [disabledOptionIds, setDisabledOptionIds] = useState<Set<string>>(
    new Set()
  );
  const [score, setScore] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const [timer, setTimer] = useState<number | null>(null);

  const currentQuestion = questions[currentIndex];

  // Reset when question changes and show Intro
  useEffect(() => {
    setPlaybackState("intro");
    setFeedbackState("idle");
    setSelectedOptionId(null);
    setDisabledOptionIds(new Set());
    setRetryCount(0);
    setTimer(null);

    const introTimer = setTimeout(() => {
      setPlaybackState("question");
    }, 2000);

    return () => clearTimeout(introTimer);
  }, [currentIndex]);

  const proceedToNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete(score);
    }
  };

  const handleVideoEnded = () => {
    if (playbackState === "question") {
      setPlaybackState("waiting");
    } else if (playbackState === "answer") {
      // Video ended, now show the "O" feedback
      setFeedbackState("correct");
      // Wait 2 seconds before moving to the next question
      setTimeout(() => {
        proceedToNextQuestion();
      }, 2000);
    }
  };

  const handleOptionSelect = (optionId: string) => {
    if (
      playbackState !== "waiting" ||
      feedbackState !== "idle" ||
      disabledOptionIds.has(optionId)
    )
      return;

    setSelectedOptionId(optionId);
    const isCorrect = optionId === currentQuestion.correctOptionId;

    if (isCorrect) {
      if (retryCount === 0) {
        setScore((prev) => prev + 1);
      }

      // Check if there is an answer video
      if (currentQuestion.videoPaths?.answer) {
        setPlaybackState("answer");
        setFeedbackState("idle"); // Ensure feedback is hidden while video plays
      } else {
        // If no video, show correct feedback immediately
        setFeedbackState("correct");
        setTimeout(() => {
          proceedToNextQuestion();
        }, 2000);
      }
    } else {
      setFeedbackState("incorrect");
      setDisabledOptionIds((prev) => new Set(prev).add(optionId));
      const newRetryCount = retryCount + 1;
      setRetryCount(newRetryCount);

      // Show X for 2 seconds
      setTimeout(() => {
        if (newRetryCount >= 2) {
          // If 2nd mistake, move to next
          proceedToNextQuestion();
        } else {
          // Allow retry
          setFeedbackState("idle");
          setSelectedOptionId(null);
        }
      }, 2000);
    }
  };

  // Determine Video Source
  const videoSrc =
    playbackState === "answer"
      ? currentQuestion.videoPaths?.answer
      : currentQuestion.videoPaths?.question;

  // Progress
  const progress = (currentIndex / questions.length) * 100;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-black font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between border-b border-slate-700 z-20">
        <div className="flex items-center gap-4 w-1/2">
          <span className="text-sm font-bold text-slate-400">
            SESSION {sessionId}
          </span>
          <div className="flex-grow h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-sm font-mono">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      <div className="flex-grow relative w-full h-full flex flex-col">
        {/* Full Screen Media */}
        <div className="absolute inset-0 z-0">
          <MediaDisplay
            type={currentQuestion.mediaType}
            prompt={currentQuestion.mediaPrompt}
            videoSrc={videoSrc}
            onVideoEnded={handleVideoEnded}
            autoLoop={false}
            autoPlay={playbackState !== "intro"}
          />
        </div>

        {/* Intro Overlay */}
        {playbackState === "intro" && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black animate-in fade-in duration-300">
            <div className="text-center space-y-4">
              <h2 className="text-2xl text-slate-400 font-bold uppercase tracking-widest">
                Session {sessionId}
              </h2>
              <h1 className="text-6xl text-white font-extrabold">
                Question {currentIndex + 1}
              </h1>
              <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
        )}

        {/* Overlays - Only in Waiting State */}
        {playbackState === "waiting" && (
          <>
            {/* Top: Title */}
            {/* Top: Title */}
            <div
              className={`absolute top-0 left-0 right-0 p-8 z-10 text-center animate-in fade-in slide-in-from-top-6 duration-700 ease-out ${
                feedbackState !== "idle"
                  ? "opacity-50 blur-sm transition-all duration-500"
                  : "opacity-100"
              }`}
            >
              <div className="bg-black/60 backdrop-blur-md inline-block px-8 py-4 rounded-2xl shadow-lg border border-white/10">
                <h2 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">
                  Question {currentIndex + 1}
                </h2>
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-relaxed">
                  {currentQuestion.questionText}
                </h3>
              </div>
            </div>

            {/* Bottom: Options Horizontal List */}
            <div
              className={`absolute bottom-8 left-0 right-0 p-2 md:p-4 z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-150 ease-out ${
                feedbackState !== "idle"
                  ? "opacity-50 blur-sm pointer-events-none transition-all duration-500"
                  : "opacity-100"
              }`}
            >
              <div className="grid grid-cols-4 gap-3 md:gap-6 w-full max-w-7xl mx-auto">
                {currentQuestion.options.map((option) => {
                  const isDisabled = disabledOptionIds.has(option.id);
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      disabled={isDisabled || feedbackState !== "idle"}
                      className={`
                          w-full rounded-xl overflow-hidden shadow-2xl
                          transform transition-all duration-300
                          ${
                            isDisabled
                              ? "bg-slate-300 opacity-50 cursor-not-allowed grayscale"
                              : "bg-white/90 backdrop-blur-sm hover:scale-105 hover:bg-white cursor-pointer hover:shadow-blue-500/30"
                          }
                          ${
                            selectedOptionId === option.id
                              ? "ring-4 ring-blue-500 scale-105"
                              : "border border-white/20"
                          }
                        `}
                    >
                      {/* Image Area */}
                      <div className="h-20 md:h-32 bg-slate-200 relative">
                        {option.imageUrl ? (
                          <img
                            src={option.imageUrl}
                            alt={option.text}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400">
                            No Image
                          </div>
                        )}
                        <div className="absolute top-2 left-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs md:text-base font-bold shadow-md ring-1 ring-white/50">
                          {option.id.toUpperCase()}
                        </div>

                        {/* Disabled Overlay */}
                        {isDisabled && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <XCircle className="text-white w-8 h-8 md:w-12 md:h-12 opacity-80" />
                          </div>
                        )}
                      </div>
                      {/* Text Area */}
                      <div className="p-2 md:p-4 h-16 md:h-24 flex items-center text-left bg-white">
                        <span
                          className={`text-xs md:text-sm font-semibold line-clamp-3 leading-tight ${
                            isDisabled ? "text-slate-500" : "text-slate-900"
                          }`}
                        >
                          {option.text}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Feedback Overlays (O/X) */}
        {/* Feedback Overlays (O/X) */}
        {feedbackState !== "idle" && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            {feedbackState === "correct" ? (
              <>
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[12px] border-green-500 flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.6)] bg-green-500/10 animate-in zoom-in-50 duration-300">
                  <span className="text-[120px] md:text-[160px] font-black text-green-500 leading-none pb-4 select-none">
                    O
                  </span>
                </div>
                <p className="mt-8 text-4xl md:text-6xl font-black text-green-500 tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-5 duration-500">
                  정답입니다!
                </p>
              </>
            ) : (
              <>
                <div className="relative w-48 h-48 md:w-64 md:h-64 animate-in zoom-in-50 duration-300">
                  {/* X Shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <XCircle
                      className="w-full h-full text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.6)]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <p className="mt-8 text-4xl md:text-6xl font-black text-red-500 tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-5 duration-500">
                  오답입니다...
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
