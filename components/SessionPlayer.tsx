import React, { useState, useEffect } from "react";
import { Question } from "@/app/types";
import { MediaDisplay } from "./MediaDisplay";
import { Timer, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import { getCloudinaryUrl } from "@/utils/cloudinaryUrl";

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
  const [playbackState, setPlaybackState] = useState<PlaybackState>("question");
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
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // Default to true or check on mount
  const [videoError, setVideoError] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    setIsMounted(true);
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 640);
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // Reset when question changes
  useEffect(() => {
    // If no video, skip straight to waiting (question)
    const hasQuestionVideo = !!questions[currentIndex].videoPaths?.question;
    setPlaybackState(hasQuestionVideo ? "question" : "waiting");

    setFeedbackState("idle");
    setSelectedOptionId(null);
    setDisabledOptionIds(new Set());
    setRetryCount(0);
    setTimer(null);
    setVideoError(false);
  }, [currentIndex, questions]);

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
      // Answer video ended, move to next question
      proceedToNextQuestion();
    }
  };

  const handleVideoError = () => {
    console.log("Video load error");
    setVideoError(true);
  };

  const handleSkipVideo = () => {
    setVideoError(false);
    handleVideoEnded();
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
      // Show correct feedback immediately
      setFeedbackState("correct");
    } else {
      setFeedbackState("incorrect");
      setDisabledOptionIds((prev) => new Set(prev).add(optionId));
      const newRetryCount = retryCount + 1;
      setRetryCount(newRetryCount);
    }
  };

  const handleFeedbackConfirm = () => {
    if (feedbackState === "correct") {
      // If there is an answer video, play it now
      if (currentQuestion.videoPaths?.answer) {
        setPlaybackState("answer");
        setFeedbackState("idle");
      } else {
        proceedToNextQuestion();
      }
    } else if (feedbackState === "incorrect") {
      if (retryCount >= 2) {
        proceedToNextQuestion();
      } else {
        setFeedbackState("idle");
        setSelectedOptionId(null);
      }
    }
  };

  // Determine Video Source (Cloudinary)
  const currentIntendedSrc =
    playbackState === "answer"
      ? getCloudinaryUrl(currentQuestion.videoPaths?.answer)
      : getCloudinaryUrl(currentQuestion.videoPaths?.question);

  useEffect(() => {
    if (currentIntendedSrc) {
      setActiveVideoSrc(currentIntendedSrc);
    }
  }, [currentIntendedSrc]);

  // Progress
  const progress = (currentIndex / questions.length) * 100;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-black font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between border-b border-slate-700 z-20">
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-1/2">
          <span className="text-xs sm:text-sm font-bold text-slate-400 whitespace-nowrap">
            SESSION {currentQuestion.sessionId || sessionId}
          </span>
          <div className="flex-grow h-1.5 sm:h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs sm:text-sm font-mono whitespace-nowrap">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* 모바일 세로모드 레이아웃 (sm 이하) */}
      <div className="flex-grow flex flex-col sm:hidden overflow-hidden">
        {/* 영상 영역 - 상단 40% */}
        <div className="relative h-[35%] w-full bg-black">
          {isMounted && !isDesktop && (
            <>
              {!videoError ? (
                <MediaDisplay
                  key={activeVideoSrc || "empty"}
                  type={currentQuestion.mediaType}
                  prompt={currentQuestion.mediaPrompt}
                  videoSrc={activeVideoSrc || undefined}
                  onVideoEnded={handleVideoEnded}
                  onError={handleVideoError}
                  autoLoop={false}
                  autoPlay={playbackState !== "intro" && !!currentIntendedSrc}
                />
              ) : (
                <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
                  <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                  <p className="text-white text-lg font-bold mb-2">
                    영상을 재생할 수 없습니다
                  </p>
                  <p className="text-slate-400 text-sm mb-6">
                    네트워크 상태를 확인하거나 다음으로 진행해주세요.
                  </p>
                  <button
                    onClick={handleSkipVideo}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors"
                  >
                    다음으로 진행
                  </button>
                </div>
              )}
            </>
          )}

          {/* Question Overlay (Small) - Mobile */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-white font-bold text-sm tracking-wider">
                Q{currentIndex + 1}
              </span>
            </div>
          </div>
        </div>

        {/* 질문 및 선택지 영역 - 하단 60% */}
        {playbackState === "waiting" && (
          <div
            className={`flex-grow flex flex-col p-3 overflow-auto ${
              feedbackState !== "idle"
                ? "opacity-30 blur-sm pointer-events-none"
                : ""
            }`}
          >
            {/* Transition UI Check */}
            {currentQuestion.isTransition ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="bg-blue-600/20 p-6 rounded-full">
                  <CheckCircle2 className="w-16 h-16 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-blue-400 font-bold text-sm mb-2 uppercase tracking-widest">
                    SESSION COMPLETE
                  </h2>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {currentQuestion.title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed max-w-xs mx-auto">
                    {currentQuestion.questionText}
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleOptionSelect(currentQuestion.options[0].id)
                  }
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {currentQuestion.options[0].text}
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              </div>
            ) : (
              // Standard Question UI
              <>
                <div className="bg-slate-800/80 backdrop-blur-sm px-4 py-3 rounded-xl mb-3 border border-slate-700">
                  <h2 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1">
                    Question {currentIndex + 1}
                  </h2>
                  <h3 className="text-white text-base font-bold leading-snug">
                    {currentQuestion.questionText}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2 flex-grow">
                  {currentQuestion.options.map((option) => {
                    const isDisabled = disabledOptionIds.has(option.id);
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleOptionSelect(option.id)}
                        disabled={isDisabled || feedbackState !== "idle"}
                        className={`
                        w-full rounded-lg overflow-hidden shadow-lg flex flex-col
                        transform transition-all duration-200
                        ${
                          isDisabled
                            ? "bg-slate-300 opacity-50 cursor-not-allowed grayscale"
                            : "bg-white/95 active:scale-95 cursor-pointer"
                        }
                        ${
                          selectedOptionId === option.id
                            ? "ring-3 ring-blue-500"
                            : "border border-slate-200"
                        }
                      `}
                      >
                        <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-md z-10">
                          {option.id.toUpperCase()}
                        </div>
                        <div className="p-4 flex-grow flex items-center justify-center text-center bg-white min-h-[80px]">
                          <span
                            className={`text-sm font-semibold line-clamp-3 leading-tight ${
                              isDisabled ? "text-slate-500" : "text-slate-900"
                            }`}
                          >
                            {option.text}
                          </span>
                        </div>
                        {isDisabled && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
                            <XCircle className="text-white w-8 h-8 opacity-80" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}

        {/* 인트로/영상 재생 중일 때 하단 빈 공간 */}
        {playbackState !== "waiting" && playbackState !== "intro" && (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-slate-500 text-sm">영상을 시청해주세요...</p>
          </div>
        )}
      </div>

      {/* PC/태블릿 레이아웃 (sm 이상) - 기존 레이아웃 유지 */}
      <div className="hidden sm:flex flex-grow relative w-full h-full flex-col">
        {/* Full Screen Media */}
        <div className="absolute inset-0 z-0">
          {isMounted && isDesktop && (
            <>
              {!videoError ? (
                <MediaDisplay
                  key={activeVideoSrc || "empty"}
                  type={currentQuestion.mediaType}
                  prompt={currentQuestion.mediaPrompt}
                  videoSrc={activeVideoSrc || undefined}
                  onVideoEnded={handleVideoEnded}
                  onError={handleVideoError}
                  autoLoop={false}
                  autoPlay={playbackState !== "intro" && !!currentIntendedSrc}
                />
              ) : (
                <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-12 text-center z-50 relative">
                  <div className="bg-slate-800/80 p-12 rounded-3xl border border-slate-700 backdrop-blur-md shadow-2xl max-w-2xl">
                    <AlertCircle className="w-24 h-24 text-red-500 mb-8 mx-auto" />
                    <h2 className="text-white text-3xl font-bold mb-4">
                      영상을 재생할 수 없습니다
                    </h2>
                    <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                      네트워크 상태를 확인하거나
                      <br />
                      일시적인 오류일 수 있습니다.
                    </p>
                    <button
                      onClick={handleSkipVideo}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-blue-500/20 shadow-lg"
                    >
                      다음 단계로 진행하기
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Question Overlay (Small) - Desktop */}
        <div className="absolute top-6 left-6 z-10">
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
            <span className="text-white font-bold text-xl tracking-wider">
              Question {currentIndex + 1}
            </span>
          </div>
        </div>

        {/* Overlays - Only in Waiting State */}
        {playbackState === "waiting" && (
          <>
            {currentQuestion.isTransition ? (
              // Desktop Transition UI
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-700">
                <div className="bg-slate-900/90 p-12 rounded-3xl border border-slate-700 shadow-2xl max-w-3xl w-full text-center">
                  <div className="inline-block p-4 mb-6 rounded-full bg-blue-500/20">
                    <CheckCircle2 className="w-20 h-20 text-blue-500" />
                  </div>
                  <h2 className="text-blue-400 font-bold text-xl uppercase tracking-widest mb-4">
                    SESSION COMPLETE
                  </h2>
                  <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    {currentQuestion.title}
                  </h1>
                  <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                    {currentQuestion.questionText}
                  </p>
                  <button
                    onClick={() =>
                      handleOptionSelect(currentQuestion.options[0].id)
                    }
                    className="bg-blue-600 hover:bg-blue-500 text-white text-2xl font-bold px-12 py-6 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                  >
                    {currentQuestion.options[0].text}
                    <CheckCircle2 className="w-8 h-8" />
                  </button>
                </div>
              </div>
            ) : (
              // Standard Desktop UI
              <>
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
                  className={`absolute bottom-8 left-0 right-0 p-4 z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-150 ease-out ${
                    feedbackState !== "idle"
                      ? "opacity-50 blur-sm pointer-events-none transition-all duration-500"
                      : "opacity-100"
                  }`}
                >
                  <div className="grid grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
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
                          <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-base font-bold shadow-md z-10 ring-1 ring-white/50">
                            {option.id.toUpperCase()}
                          </div>
                          <div className="p-6 h-full min-h-[120px] flex items-center justify-center text-center bg-white relative">
                            <span
                              className={`text-lg font-semibold leading-snug ${
                                isDisabled ? "text-slate-500" : "text-slate-900"
                              }`}
                            >
                              {option.text}
                            </span>
                            {isDisabled && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
                                <XCircle className="text-white w-12 h-12 opacity-80" />
                              </div>
                            )}
                          </div>
                          <div className="p-4 h-24 flex items-center text-left bg-white">
                            <span
                              className={`text-sm font-semibold line-clamp-3 leading-tight ${
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
          </>
        )}
      </div>

      {/* Feedback Overlays (O/X) - 모바일/PC 공통 */}
      {feedbackState !== "idle" && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          {feedbackState === "correct" ? (
            <>
              <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-[8px] sm:border-[12px] border-green-500 flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.6)] bg-green-500/10 animate-in zoom-in-50 duration-300">
                <span className="text-[80px] sm:text-[120px] md:text-[160px] font-black text-green-500 leading-none pb-2 sm:pb-4 select-none">
                  O
                </span>
              </div>
              <p className="mt-4 sm:mt-8 text-2xl sm:text-4xl md:text-6xl font-black text-green-500 tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-5 duration-500">
                정답입니다!
              </p>
              <div className="mt-3 sm:mt-6 max-w-md sm:max-w-2xl px-4 sm:px-6">
                <p className="text-sm sm:text-xl md:text-2xl text-white text-center font-medium leading-relaxed drop-shadow-md animate-in slide-in-from-bottom-6 duration-500 delay-100">
                  {currentQuestion.feedbackCorrect}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 animate-in zoom-in-50 duration-300">
                {/* X Shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <XCircle
                    className="w-full h-full text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.6)]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <p className="mt-4 sm:mt-8 text-2xl sm:text-4xl md:text-6xl font-black text-red-500 tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-5 duration-500">
                오답입니다...
              </p>
              <div className="mt-3 sm:mt-6 max-w-md sm:max-w-2xl px-4 sm:px-6">
                <p className="text-sm sm:text-xl md:text-2xl text-white text-center font-medium leading-relaxed drop-shadow-md animate-in slide-in-from-bottom-6 duration-500 delay-100">
                  {retryCount === 1
                    ? "다시 선택해 보세요."
                    : currentQuestion.feedbackIncorrect}
                </p>
              </div>
            </>
          )}

          <button
            onClick={handleFeedbackConfirm}
            className="mt-6 sm:mt-10 px-6 sm:px-10 py-3 sm:py-4 bg-white text-black text-lg sm:text-xl md:text-2xl font-bold rounded-full hover:scale-105 active:scale-95 hover:bg-slate-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200 pointer-events-auto"
          >
            확인
          </button>
        </div>
      )}
    </div>
  );
};
