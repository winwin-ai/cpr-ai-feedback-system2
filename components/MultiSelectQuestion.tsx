"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, RotateCcw, X } from "lucide-react";

interface SelectItem {
  id: string;
  label: string;
  imageUrl?: string;
}

interface MultiSelectQuestionProps {
  items: SelectItem[];
  correctItems: string[]; // Array of correct item ids
  onCorrect: () => void;
  onIncorrect: (retryCount: number) => void;
}

export const MultiSelectQuestion: React.FC<MultiSelectQuestionProps> = ({
  items,
  correctItems,
  onCorrect,
  onIncorrect,
}) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [localRetryCount, setLocalRetryCount] = useState(0);
  const [itemResults, setItemResults] = useState<Map<string, 'correct' | 'incorrect' | 'missed'>>(new Map());

  const handleItemClick = (itemId: string) => {
    if (isChecked) return;

    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleConfirm = () => {
    if (selectedItems.size === 0) return;

    const correctSet = new Set(correctItems);
    const results = new Map<string, 'correct' | 'incorrect' | 'missed'>();

    // Check each item
    items.forEach((item) => {
      const isSelected = selectedItems.has(item.id);
      const shouldBeSelected = correctSet.has(item.id);

      if (isSelected && shouldBeSelected) {
        results.set(item.id, 'correct');
      } else if (isSelected && !shouldBeSelected) {
        results.set(item.id, 'incorrect');
      } else if (!isSelected && shouldBeSelected) {
        results.set(item.id, 'missed');
      }
    });

    setItemResults(results);

    // Check if all correct items are selected and no incorrect items
    const allCorrectSelected = correctItems.every((id) => selectedItems.has(id));
    const noIncorrectSelected = Array.from(selectedItems).every((id) => correctSet.has(id));
    const correct = allCorrectSelected && noIncorrectSelected;

    setIsCorrect(correct);
    setIsChecked(true);

    if (correct) {
      onCorrect();
    } else {
      const newRetryCount = localRetryCount + 1;
      setLocalRetryCount(newRetryCount);
      onIncorrect(newRetryCount);
    }
  };

  const handleReset = () => {
    setSelectedItems(new Set());
    setIsChecked(false);
    setIsCorrect(false);
    setItemResults(new Map());
  };

  const selectedCount = selectedItems.size;
  const requiredCount = correctItems.length;

  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4">
      {/* Instructions */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full">
          <span className="text-slate-300 text-xs sm:text-sm">
            필요한 물품을 선택하세요
          </span>
          <span className={`font-bold text-sm sm:text-base ${selectedCount === requiredCount ? 'text-green-400' : selectedCount > requiredCount ? 'text-red-400' : 'text-blue-400'}`}>
            {selectedCount} / {requiredCount}개
          </span>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 w-full max-w-5xl mx-auto">
        {items.map((item) => {
          const isSelected = selectedItems.has(item.id);
          const result = itemResults.get(item.id);

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              disabled={isChecked && isCorrect}
              className={`
                group relative flex flex-col rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-3 transition-all duration-300
                ${isChecked && result === 'correct' ? 'border-green-500 bg-green-500/10 ring-2 ring-green-500/30' : ''}
                ${isChecked && result === 'incorrect' ? 'border-red-500 bg-red-500/10 ring-2 ring-red-500/30' : ''}
                ${isChecked && result === 'missed' ? 'border-yellow-500 bg-yellow-500/10 ring-2 ring-yellow-500/30' : ''}
                ${!isChecked && isSelected ? 'border-blue-500 bg-blue-500/20 ring-2 ring-blue-500/30 scale-[1.02]' : ''}
                ${!isChecked && !isSelected ? 'border-slate-600 bg-slate-800/50 hover:border-slate-400 hover:bg-slate-700/50' : ''}
                ${isChecked && isCorrect ? 'cursor-default' : 'cursor-pointer'}
              `}
            >
              {/* Selection Indicator */}
              <div className={`
                absolute top-1 right-1 sm:top-2 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center z-20 transition-all duration-200
                ${isChecked && result === 'correct' ? 'bg-green-500' : ''}
                ${isChecked && result === 'incorrect' ? 'bg-red-500' : ''}
                ${isChecked && result === 'missed' ? 'bg-yellow-500' : ''}
                ${!isChecked && isSelected ? 'bg-blue-500' : ''}
                ${!isChecked && !isSelected ? 'bg-slate-600 opacity-50' : ''}
              `}>
                {isChecked && result === 'correct' && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                {isChecked && result === 'incorrect' && <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                {isChecked && result === 'missed' && <span className="text-white text-xs font-bold">!</span>}
                {!isChecked && isSelected && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
              </div>

              {/* Image */}
              {item.imageUrl && (
                <div className="relative aspect-square w-full bg-slate-700 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.label}
                    fill
                    className={`object-cover transition-all duration-300 ${!isChecked && !isSelected ? 'group-hover:scale-105' : ''} ${isChecked && result === 'incorrect' ? 'grayscale opacity-50' : ''}`}
                    sizes="(max-width: 640px) 33vw, 20vw"
                    unoptimized
                  />
                </div>
              )}

              {/* Label */}
              <div className={`
                p-1.5 sm:p-2 text-center flex-grow flex items-center justify-center min-h-[40px] sm:min-h-[48px]
                ${isChecked && result === 'correct' ? 'bg-green-900/50' : ''}
                ${isChecked && result === 'incorrect' ? 'bg-red-900/50' : ''}
                ${isChecked && result === 'missed' ? 'bg-yellow-900/50' : ''}
                ${!isChecked && isSelected ? 'bg-blue-900/50' : ''}
                ${!isChecked && !isSelected ? 'bg-slate-800' : ''}
              `}>
                <span className={`
                  text-[10px] sm:text-xs font-semibold leading-tight
                  ${isChecked && result === 'correct' ? 'text-green-300' : ''}
                  ${isChecked && result === 'incorrect' ? 'text-red-300' : ''}
                  ${isChecked && result === 'missed' ? 'text-yellow-300' : ''}
                  ${!isChecked && isSelected ? 'text-blue-300' : ''}
                  ${!isChecked && !isSelected ? 'text-slate-300' : ''}
                `}>
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Result Legend (after check) */}
      {isChecked && !isCorrect && (
        <div className="flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500" />
            <span className="text-green-400">정답</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500" />
            <span className="text-red-400">오답</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500" />
            <span className="text-yellow-400">누락</span>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3 sm:gap-4 mt-2 max-w-md mx-auto w-full">
        <button
          onClick={handleReset}
          disabled={isChecked && isCorrect}
          className={`
            flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300
            ${isChecked && isCorrect
              ? "bg-slate-700 text-slate-500 cursor-not-allowed"
              : "bg-slate-700 text-white hover:bg-slate-600 hover:scale-105"
            }
          `}
        >
          <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
          초기화
        </button>

        <button
          onClick={handleConfirm}
          disabled={(isChecked && isCorrect) || selectedCount === 0}
          className={`
            flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300
            ${isChecked && isCorrect
              ? "bg-green-600 text-white cursor-not-allowed"
              : selectedCount === 0
              ? "bg-slate-600 text-slate-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
            }
          `}
        >
          <Check className="w-4 h-4 sm:w-5 sm:h-5" />
          {isChecked && isCorrect ? "정답입니다!" : "확인"}
        </button>
      </div>
    </div>
  );
};
