import React, { useState, useEffect } from "react";
import { MediaDisplay } from "./MediaDisplay";
import { DragDropQuestion } from "./DragDropQuestion";
import { MatchingQuestion } from "./MatchingQuestion";
import { MultiSelectQuestion } from "./MultiSelectQuestion";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import { getCloudinaryUrl } from "@/utils/cloudinaryUrl";
import { useExam } from "@/contexts/ExamContext";

interface SessionPlayerProps {
  questionsMap: Record<string | number, import("@/app/types").Question>;
  orderedQuestionIds: (string | number)[];
  initialQuestionId: string | number;
  sessionId: number;
  scenarioId: number;
  onComplete: (correctCount: number) => void;
  onQuestionChange?: (questionId: string | number) => void;
}

type PlaybackState = "question" | "waiting" | "answer";

export const SessionPlayer: React.FC<SessionPlayerProps> = ({
  questionsMap,
  orderedQuestionIds,
  initialQuestionId,
  sessionId,
  scenarioId,
  onComplete,
  onQuestionChange,
}) => {
  const { recordAnswer } = useExam();
  const [currentQuestionId, setCurrentQuestionId] = useState(initialQuestionId);
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
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // Default to true or check on mount
  const [videoError, setVideoError] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);
  const [dragDropResetKey, setDragDropResetKey] = useState(0);

  const currentQuestion = questionsMap[currentQuestionId];

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 640);
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // Sync with external initialQuestionId changes (e.g., from URL navigation)
  useEffect(() => {
    if (initialQuestionId && initialQuestionId !== currentQuestionId) {
      setCurrentQuestionId(initialQuestionId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuestionId]);

  // Reset when question changes
  useEffect(() => {
    if (!currentQuestion) return;

    // Notify parent of question change
    onQuestionChange?.(currentQuestionId);

    // If no video, skip straight to waiting (question)
    const hasQuestionVideo = !!currentQuestion.videoPaths?.question;
    setPlaybackState(hasQuestionVideo ? "question" : "waiting");
    setFeedbackState("idle");
    setSelectedOptionId(null);
    setDisabledOptionIds(new Set());
    setRetryCount(0);
    setVideoError(false);
  }, [currentQuestionId, currentQuestion, onQuestionChange]);

  const proceedToNextQuestion = () => {
    const selectedOption = currentQuestion.options.find(
      (o) => o.id === selectedOptionId
    );

    // 1. Check if option has a specific nextId (branching)
    if (selectedOption?.nextId && questionsMap[selectedOption.nextId]) {
      setCurrentQuestionId(selectedOption.nextId);
      return;
    }

    // 2. Check if question has a direct nextId
    if (currentQuestion.nextId && questionsMap[currentQuestion.nextId]) {
      setCurrentQuestionId(currentQuestion.nextId);
      return;
    }

    // 3. Fallback to ordered list if available
    const currentIndex = orderedQuestionIds.indexOf(currentQuestionId);
    if (currentIndex !== -1 && currentIndex < orderedQuestionIds.length - 1) {
      setCurrentQuestionId(orderedQuestionIds[currentIndex + 1]);
      return;
    }

    // 4. End of scenario
    onComplete(score);
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

    // 답변 기록 (로그인 된 경우에만)
    recordAnswer({
      questionId: currentQuestionId,
      questionDisplayId: currentQuestion.displayId,
      selectedOptionId: optionId,
      correctOptionId: currentQuestion.correctOptionId,
      isCorrect,
      retryCount,
    });

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
      // ----------------------------------------------------------------
      // [Scenario 1 / Q7] Branching Logic
      // If Q7(1070) is correct, mark Q7-1, Q7-2, Q7-3 as correct (bonus +3 score)
      // and skip directly to Q8(1080).
      // ----------------------------------------------------------------
      if (
        scenarioId === 1 &&
        String(currentQuestionId) === "1070" &&
        retryCount === 0
      ) {
        setScore((prev) => prev + 3);
        // Direct jump to Q8
        setCurrentQuestionId(1080);
        return;
      }

      // ----------------------------------------------------------------
      // [Scenario 1 / Q15] Branching Logic
      // If Q15(1150) is correct, mark Q15-1, Q15-2, Q15-3 as correct (bonus +3 score)
      // and skip directly to Q16(1160).
      // ----------------------------------------------------------------
      if (
        scenarioId === 1 &&
        String(currentQuestionId) === "1150" &&
        retryCount === 0
      ) {
        setScore((prev) => prev + 3);
        // Direct jump to Q16
        setCurrentQuestionId(1160);
        return;
      }

      // ----------------------------------------------------------------
      // [Scenario 1 / Q18] Branching Logic
      // If Q18(1180) is correct, mark Q18-1, Q18-2, Q18-3 as correct (bonus +3 score)
      // and skip directly to Q19(1190).
      // ----------------------------------------------------------------
      if (
        scenarioId === 1 &&
        String(currentQuestionId) === "1180" &&
        retryCount === 0
      ) {
        setScore((prev) => prev + 3);
        // Direct jump to Q19
        setCurrentQuestionId(1190);
        return;
      }

      // If there is an answer video, play it now
      if (currentQuestion.videoPaths?.answer) {
        setPlaybackState("answer");
        setFeedbackState("idle");
      } else {
        proceedToNextQuestion();
      }
    } else if (feedbackState === "incorrect") {
      if (retryCount >= 2) {
        // 2번 틀려도 answer 비디오가 있으면 재생 후 다음 문제로
        if (currentQuestion.videoPaths?.answer) {
          setPlaybackState("answer");
          setFeedbackState("idle");
        } else {
          proceedToNextQuestion();
        }
      } else {
        setFeedbackState("idle");
        setSelectedOptionId(null);
        // Reset DragDropQuestion by changing key
        setDragDropResetKey((prev) => prev + 1);
      }
    }
  };

  // Determine Video Source (Cloudinary)
  const currentIntendedSrc =
    playbackState === "answer"
      ? getCloudinaryUrl(currentQuestion.videoPaths?.answer)
      : getCloudinaryUrl(currentQuestion.videoPaths?.question);

  useEffect(() => {
    // Update activeVideoSrc when intended source changes
    if (currentIntendedSrc) {
      setActiveVideoSrc(currentIntendedSrc);
    }
  }, [currentIntendedSrc]);

  // Also update when playbackState changes to "answer"
  useEffect(() => {
    if (playbackState === "answer" && currentQuestion.videoPaths?.answer) {
      const answerVideoUrl = getCloudinaryUrl(
        currentQuestion.videoPaths.answer
      );
      setActiveVideoSrc(answerVideoUrl);
    }
  }, [playbackState, currentQuestion.videoPaths?.answer]);

  // Progress
  const currentIndexInOrdered = orderedQuestionIds.indexOf(currentQuestionId);
  const progress =
    orderedQuestionIds.length > 0
      ? (Math.max(0, currentIndexInOrdered) / orderedQuestionIds.length) * 100
      : 0;

  const isSpecialQuestion =
    scenarioId === 1 &&
    [
      "7",
      "7-1",
      "7-2",
      "7-3",
      "15",
      "15-1",
      "15-2",
      "15-3",
      "16",
      "18",
      "18-1",
      "18-2",
      "18-3",
    ].includes(String(currentQuestion.displayId));

  const showQuestionOverlay = playbackState === "waiting" || isSpecialQuestion;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-black font-sans">
      {/* 모바일 세로모드 레이아웃 (sm 이하) */}
      <div className="flex-grow flex flex-col sm:hidden overflow-hidden">
        {/* 영상 영역 - 상단 40% */}
        <div className="relative h-[35%] w-full bg-black">
          {isMounted && !isDesktop && (
            <>
              {!videoError ? (
                <MediaDisplay
                  key={`${currentQuestionId}-${activeVideoSrc || "empty"}`}
                  type={currentQuestion.mediaType}
                  videoSrc={activeVideoSrc || undefined}
                  onVideoEnded={handleVideoEnded}
                  onError={handleVideoError}
                  autoLoop={false}
                  autoPlay={!!currentIntendedSrc}
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
          {showQuestionOverlay && (
            <div className="absolute top-0 left-0 right-0 z-10 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="bg-black/60 backdrop-blur-md px-3 py-2 border-b border-white/10 flex items-center gap-2 justify-center">
                <span className="text-blue-400 font-bold text-sm tracking-wider shrink-0">
                  Q{currentQuestion.displayId || currentIndexInOrdered + 1}.
                </span>
                <p className="text-white font-bold text-sm line-clamp-1">
                  {currentQuestion.questionText}
                </p>
              </div>
            </div>
          )}
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
            ) : currentQuestion.questionType === "dragdrop" &&
              currentQuestion.dragItems &&
              currentQuestion.correctOrder ? (
              // Drag-Drop Question UI - 제목만 팝업, 나머지는 전체 영역
              <div className="flex flex-col h-full -mx-3 -mb-3">
                <div className="px-3">
                  <div className="bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-xl mb-4 border border-slate-700">
                    <h2 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-0.5">
                      Question{" "}
                      {currentQuestion.displayId || currentIndexInOrdered + 1}
                    </h2>
                    <h3 className="text-white text-sm font-bold leading-snug whitespace-pre-line">
                      {currentQuestion.questionText}
                    </h3>
                  </div>
                </div>

                <div className="flex-grow overflow-auto px-2 pb-2">
                  <DragDropQuestion
                    key={dragDropResetKey}
                    items={currentQuestion.dragItems}
                    correctOrder={currentQuestion.correctOrder}
                    onCorrect={() => {
                      setScore((prev) => prev + 1);
                      setFeedbackState("correct");
                    }}
                    onIncorrect={() => {
                      setRetryCount((prev) => prev + 1);
                      setFeedbackState("incorrect");
                    }}
                  />
                </div>
              </div>
            ) : currentQuestion.questionType === "matching" &&
              currentQuestion.matchingLeftItems &&
              currentQuestion.matchingRightItems &&
              currentQuestion.matchingCorrectPairs ? (
              // Matching Question UI - Mobile
              <div className="flex flex-col h-full -mx-3 -mb-3">
                <div className="px-3">
                  <div className="bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-xl mb-4 border border-slate-700">
                    <h2 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-0.5">
                      Question{" "}
                      {currentQuestion.displayId || currentIndexInOrdered + 1}
                    </h2>
                    <h3 className="text-white text-sm font-bold leading-snug whitespace-pre-line">
                      {currentQuestion.questionText}
                    </h3>
                  </div>
                </div>

                <div className="flex-grow overflow-auto px-2 pb-2">
                  <MatchingQuestion
                    key={dragDropResetKey}
                    leftItems={currentQuestion.matchingLeftItems}
                    rightItems={currentQuestion.matchingRightItems}
                    correctPairs={currentQuestion.matchingCorrectPairs}
                    onCorrect={() => {
                      setScore((prev) => prev + 1);
                      setFeedbackState("correct");
                    }}
                    onIncorrect={(matchRetryCount) => {
                      setRetryCount(matchRetryCount);
                      setFeedbackState("incorrect");
                    }}
                  />
                </div>
              </div>
            ) : currentQuestion.questionType === "multiselect" &&
              currentQuestion.dragItems &&
              currentQuestion.correctOrder ? (
              // MultiSelect Question UI - Mobile
              <div className="flex flex-col h-full -mx-3 -mb-3">
                <div className="px-3">
                  <div className="bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-xl mb-3 border border-slate-700">
                    <h2 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-0.5">
                      Question{" "}
                      {currentQuestion.displayId || currentIndexInOrdered + 1}
                    </h2>
                    <h3 className="text-white text-sm font-bold leading-snug whitespace-pre-line">
                      {currentQuestion.questionText}
                    </h3>
                  </div>
                </div>

                <div className="flex-grow overflow-auto px-2 pb-2">
                  <MultiSelectQuestion
                    key={dragDropResetKey}
                    items={currentQuestion.dragItems}
                    correctItems={currentQuestion.correctOrder}
                    onCorrect={() => {
                      setScore((prev) => prev + 1);
                      setFeedbackState("correct");
                    }}
                    onIncorrect={(selectRetryCount) => {
                      setRetryCount(selectRetryCount);
                      setFeedbackState("incorrect");
                    }}
                  />
                </div>
              </div>
            ) : (
              // Standard Question UI
              <>
                <div className="bg-slate-800/80 backdrop-blur-sm px-4 py-3 rounded-xl mb-3 border border-slate-700">
                  <h2 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1">
                    Question{" "}
                    {currentQuestion.displayId || currentIndexInOrdered + 1}
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
                        group relative w-full rounded-xl overflow-hidden shadow-lg flex flex-col
                        transform transition-all duration-200 border-2
                        ${!option.imageUrl ? "aspect-square" : ""}
                        ${
                          isDisabled
                            ? "bg-slate-200 border-slate-300 opacity-50 cursor-not-allowed grayscale"
                            : "bg-white border-transparent active:scale-95 cursor-pointer shadow-blue-500/10"
                        }
                        ${
                          selectedOptionId === option.id
                            ? "border-blue-500 ring-2 ring-blue-500/20"
                            : "hover:border-blue-200"
                        }
                      `}
                      >
                        {/* Option ID Badge */}
                        <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-md z-20 ring-1 ring-white/30">
                          {option.id.toUpperCase()}
                        </div>

                        {/* Image Section (Top) */}
                        {option.imageUrl && (
                          <div className="relative aspect-video w-full bg-slate-100 overflow-hidden flex-shrink-0">
                            <Image
                              src={option.imageUrl}
                              alt={option.text}
                              fill
                              className={`object-cover transition-transform duration-300 ${
                                !isDisabled && "group-hover:scale-105"
                              }`}
                            />
                            {isDisabled && (
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 backdrop-blur-[2px]">
                                <XCircle className="text-white w-8 h-8 opacity-90 drop-shadow-md" />
                              </div>
                            )}
                          </div>
                        )}

                        {isDisabled && !option.imageUrl && (
                          <div className="absolute inset-0 bg-black/10 flex items-center justify-center z-10 backdrop-blur-[1px]">
                            <XCircle className="text-slate-400 w-8 h-8 opacity-40" />
                          </div>
                        )}

                        {/* Text Section (Bottom) */}
                        <div
                          className={`p-3 flex-grow flex items-center justify-center text-center ${
                            isDisabled ? "bg-slate-50" : "bg-white"
                          }`}
                        >
                          <span
                            className={`text-sm font-bold line-clamp-3 leading-tight ${
                              isDisabled ? "text-slate-400" : "text-slate-800"
                            }`}
                          >
                            {option.text}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}

        {/* 영상 재생 중일 때 하단 빈 공간 */}
        {playbackState !== "waiting" && (
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
                  key={`${currentQuestionId}-${activeVideoSrc || "empty"}`}
                  type={currentQuestion.mediaType}
                  videoSrc={activeVideoSrc || undefined}
                  onVideoEnded={handleVideoEnded}
                  onError={handleVideoError}
                  autoLoop={false}
                  autoPlay={!!currentIntendedSrc}
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

          {/* Question Overlay - Desktop (Centered Top) */}
          {showQuestionOverlay && (
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-center animate-in fade-in slide-in-from-top-2 duration-500">
              <div className="bg-black/60 backdrop-blur-md px-8 py-3 rounded-b-2xl border-x border-b border-white/10 flex items-center gap-4 shadow-2xl">
                <span className="text-blue-400 font-bold text-xl tracking-widest uppercase">
                  Q{currentQuestion.displayId || currentIndexInOrdered + 1}.
                </span>
                <p className="text-white font-bold text-2xl leading-snug">
                  {currentQuestion.questionText}
                </p>
              </div>
            </div>
          )}
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
            ) : currentQuestion.questionType === "dragdrop" &&
              currentQuestion.dragItems &&
              currentQuestion.correctOrder ? (
              // Drag-Drop Desktop UI
              <div className="absolute inset-0 flex flex-col z-10 p-6 pt-16 pb-12">
                {/* 드래그 드롭 영역 */}
                <div className="flex-grow flex items-end justify-center overflow-auto px-4">
                  <div className="w-full max-w-6xl">
                    <DragDropQuestion
                      key={dragDropResetKey}
                      items={currentQuestion.dragItems}
                      correctOrder={currentQuestion.correctOrder}
                      onCorrect={() => {
                        setScore((prev) => prev + 1);
                        setFeedbackState("correct");
                      }}
                      onIncorrect={() => {
                        setRetryCount((prev) => prev + 1);
                        setFeedbackState("incorrect");
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : currentQuestion.questionType === "matching" &&
              currentQuestion.matchingLeftItems &&
              currentQuestion.matchingRightItems &&
              currentQuestion.matchingCorrectPairs ? (
              // Matching Desktop UI
              <div className="absolute inset-0 flex flex-col z-10 p-6 pt-16 pb-12">
                <div className="flex-grow flex items-center justify-center overflow-auto px-4">
                  <div className="w-full max-w-5xl bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <MatchingQuestion
                      key={dragDropResetKey}
                      leftItems={currentQuestion.matchingLeftItems}
                      rightItems={currentQuestion.matchingRightItems}
                      correctPairs={currentQuestion.matchingCorrectPairs}
                      onCorrect={() => {
                        setScore((prev) => prev + 1);
                        setFeedbackState("correct");
                      }}
                      onIncorrect={() => {
                        setRetryCount((prev) => prev + 1);
                        setFeedbackState("incorrect");
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : currentQuestion.questionType === "multiselect" &&
              currentQuestion.dragItems &&
              currentQuestion.correctOrder ? (
              // MultiSelect Desktop UI
              <div className="absolute inset-0 flex flex-col z-10 p-6 pt-16 pb-12">
                <div className="flex-grow flex items-center justify-center overflow-auto px-4">
                  <div className="w-full max-w-6xl bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <MultiSelectQuestion
                      key={dragDropResetKey}
                      items={currentQuestion.dragItems}
                      correctItems={currentQuestion.correctOrder}
                      onCorrect={() => {
                        setScore((prev) => prev + 1);
                        setFeedbackState("correct");
                      }}
                      onIncorrect={() => {
                        setRetryCount((prev) => prev + 1);
                        setFeedbackState("incorrect");
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Standard Desktop UI
              <>
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
                            group relative w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col
                            transform transition-all duration-300 border-4
                            ${!option.imageUrl ? "aspect-video" : ""}
                            ${
                              isDisabled
                                ? "bg-slate-200 border-slate-300 opacity-50 cursor-not-allowed grayscale"
                                : "bg-white border-transparent hover:scale-105 cursor-pointer shadow-blue-500/10 hover:shadow-blue-500/30"
                            }
                            ${
                              selectedOptionId === option.id
                                ? "border-blue-500 ring-4 ring-blue-500/20"
                                : "hover:border-blue-200"
                            }
                          `}
                        >
                          {/* Option ID Badge */}
                          <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-black shadow-lg z-20 ring-2 ring-white/30">
                            {option.id.toUpperCase()}
                          </div>

                          {/* Image Section (Top) */}
                          {option.imageUrl && (
                            <div className="relative aspect-video w-full bg-slate-50 overflow-hidden flex-shrink-0">
                              <Image
                                src={option.imageUrl}
                                alt={option.text}
                                fill
                                className={`object-cover transition-transform duration-500 ${
                                  !isDisabled && "group-hover:scale-110"
                                }`}
                                sizes="(max-width: 1280px) 25vw, 300px"
                              />
                              {isDisabled && (
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 backdrop-blur-[2px]">
                                  <XCircle
                                    className="text-white w-16 h-16 opacity-90 drop-shadow-2xl"
                                    strokeWidth={1.5}
                                  />
                                </div>
                              )}
                            </div>
                          )}

                          {isDisabled && !option.imageUrl && (
                            <div className="absolute inset-0 bg-black/5 flex items-center justify-center z-10 backdrop-blur-[1px]">
                              <XCircle className="text-slate-300 w-16 h-16 opacity-30" />
                            </div>
                          )}

                          {/* Text Section (Bottom) */}
                          <div
                            className={`p-6 flex-grow flex items-center justify-center text-center ${
                              isDisabled ? "bg-slate-100" : "bg-white"
                            }`}
                          >
                            <span
                              className={`text-lg font-black leading-tight tracking-tight ${
                                isDisabled ? "text-slate-400" : "text-slate-900"
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
