import React, { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";

export interface MatchingItem {
  id: string;
  text: string;
  imageUrl?: string;
}

export interface MatchingPair {
  leftId: string;
  rightId: string;
}

interface MatchingQuestionProps {
  leftItems: MatchingItem[];
  rightItems: MatchingItem[];
  correctPairs: MatchingPair[];
  onCorrect: () => void;
  onIncorrect: (retryCount: number) => void;
}

export const MatchingQuestion: React.FC<MatchingQuestionProps> = ({
  leftItems,
  rightItems,
  correctPairs,
  onCorrect,
  onIncorrect,
}) => {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<MatchingPair[]>([]);
  const [wrongPairs, setWrongPairs] = useState<Set<string>>(new Set());
  const [retryCount, setRetryCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // 이미 매칭된 아이템인지 확인
  const isLeftMatched = (id: string) => matches.some((m) => m.leftId === id);
  const isRightMatched = (id: string) => matches.some((m) => m.rightId === id);

  // 왼쪽 아이템 선택
  const handleLeftClick = (id: string) => {
    if (isComplete || isLeftMatched(id)) return;
    setSelectedLeft(selectedLeft === id ? null : id);
  };

  // 오른쪽 아이템 선택 (매칭 시도)
  const handleRightClick = (rightId: string) => {
    if (isComplete || !selectedLeft || isRightMatched(rightId)) return;

    const pairKey = `${selectedLeft}-${rightId}`;

    // 올바른 매칭인지 확인
    const isCorrectPair = correctPairs.some(
      (p) => p.leftId === selectedLeft && p.rightId === rightId
    );

    if (isCorrectPair) {
      const newMatches = [...matches, { leftId: selectedLeft, rightId }];
      setMatches(newMatches);
      setSelectedLeft(null);

      // 모든 매칭 완료 확인
      if (newMatches.length === correctPairs.length) {
        setIsComplete(true);
        onCorrect();
      }
    } else {
      // 틀린 매칭
      setWrongPairs((prev) => new Set(prev).add(pairKey));
      const newRetryCount = retryCount + 1;
      setRetryCount(newRetryCount);
      setSelectedLeft(null);

      if (newRetryCount >= 2) {
        setIsComplete(true);
        onIncorrect(newRetryCount);
      } else {
        // 잠시 후 잘못된 표시 제거
        setTimeout(() => {
          setWrongPairs((prev) => {
            const newSet = new Set(prev);
            newSet.delete(pairKey);
            return newSet;
          });
        }, 1000);
        onIncorrect(newRetryCount);
      }
    }
  };

  // 매칭된 아이템의 연결선 색상
  const getMatchColor = (index: number) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-orange-500",
      "bg-pink-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* 안내 문구 */}
      <div className="text-center mb-6">
        <p className="text-slate-300 text-sm sm:text-base">
          왼쪽 항목을 선택한 후, 오른쪽에서 올바른 짝을 선택하세요
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-xs text-slate-500">
            매칭 완료: {matches.length} / {correctPairs.length}
          </span>
        </div>
      </div>

      {/* 매칭 영역 */}
      <div className="flex justify-between items-start gap-4 sm:gap-8">
        {/* 왼쪽 항목들 */}
        <div className="flex-1 space-y-3">
          <div className="text-center mb-4">
            <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">
              환자 자세
            </span>
          </div>
          {leftItems.map((item, index) => {
            const isMatched = isLeftMatched(item.id);
            const isSelected = selectedLeft === item.id;
            const matchIndex = matches.findIndex((m) => m.leftId === item.id);

            return (
              <button
                key={item.id}
                onClick={() => handleLeftClick(item.id)}
                disabled={isMatched || isComplete}
                className={`
                  w-full p-4 rounded-xl border-2 transition-all duration-300
                  flex items-center gap-3 text-left
                  ${
                    isMatched
                      ? `${getMatchColor(matchIndex)} border-transparent text-white opacity-80`
                      : isSelected
                      ? "bg-blue-600 border-blue-400 text-white ring-2 ring-blue-400/50 scale-[1.02]"
                      : "bg-slate-800/80 border-slate-600 text-white hover:border-blue-400 hover:bg-slate-700"
                  }
                  ${isComplete && !isMatched ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                `}
              >
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm shrink-0">
                  {item.id}
                </span>
                <span className="font-medium text-sm sm:text-base flex-1">
                  {item.text}
                </span>
                {isMatched && (
                  <Check className="w-5 h-5 shrink-0" />
                )}
                {isSelected && !isMatched && (
                  <ArrowRight className="w-5 h-5 shrink-0 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* 중앙 연결선 표시 영역 */}
        <div className="hidden sm:flex flex-col items-center justify-center py-8">
          <div className="w-px h-full bg-slate-600 relative">
            {matches.map((match, index) => (
              <div
                key={`${match.leftId}-${match.rightId}`}
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${getMatchColor(index)} animate-pulse`}
                style={{ top: `${(index + 1) * 25}%` }}
              />
            ))}
          </div>
        </div>

        {/* 오른쪽 항목들 */}
        <div className="flex-1 space-y-3">
          <div className="text-center mb-4">
            <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
              방법
            </span>
          </div>
          {rightItems.map((item, index) => {
            const isMatched = isRightMatched(item.id);
            const matchIndex = matches.findIndex((m) => m.rightId === item.id);
            const isWrong = selectedLeft && wrongPairs.has(`${selectedLeft}-${item.id}`);

            return (
              <button
                key={item.id}
                onClick={() => handleRightClick(item.id)}
                disabled={isMatched || !selectedLeft || isComplete}
                className={`
                  w-full p-4 rounded-xl border-2 transition-all duration-300
                  flex items-center gap-3 text-left
                  ${
                    isMatched
                      ? `${getMatchColor(matchIndex)} border-transparent text-white opacity-80`
                      : isWrong
                      ? "bg-red-600 border-red-400 text-white animate-shake"
                      : selectedLeft && !isMatched
                      ? "bg-slate-700 border-green-400 text-white hover:bg-green-600 hover:border-green-400 cursor-pointer"
                      : "bg-slate-800/80 border-slate-600 text-white"
                  }
                  ${(!selectedLeft || isComplete) && !isMatched ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm shrink-0">
                  {item.id}
                </span>
                <span className="font-medium text-sm sm:text-base flex-1">
                  {item.text}
                </span>
                {isMatched && (
                  <Check className="w-5 h-5 shrink-0" />
                )}
                {isWrong && (
                  <X className="w-5 h-5 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 진행 상태 표시 */}
      <div className="mt-6 flex justify-center gap-2">
        {correctPairs.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index < matches.length
                ? getMatchColor(index)
                : "bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
