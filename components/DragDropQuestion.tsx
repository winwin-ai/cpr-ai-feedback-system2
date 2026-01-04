"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, RotateCcw, X } from "lucide-react";

interface DragItem {
  id: string;
  label: string;
  imageUrl?: string;
}

interface DragDropQuestionProps {
  items: DragItem[];
  correctOrder: string[]; // Array of item ids in correct order (e.g., ["A", "C", "B"])
  onCorrect: () => void;
  onIncorrect: (retryCount: number) => void; // Pass retry count to parent
}

export const DragDropQuestion: React.FC<DragDropQuestionProps> = ({
  items,
  correctOrder,
  onCorrect,
  onIncorrect,
}) => {
  // Track which items have been placed in drop zone
  const [droppedItems, setDroppedItems] = useState<(DragItem | null)[]>(
    Array(correctOrder.length).fill(null)
  );
  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [localRetryCount, setLocalRetryCount] = useState(0);

  // Check if any item has an image
  const hasImages = items.some((item) => item.imageUrl);

  // Get IDs of items already in drop zone
  const usedItemIds = droppedItems
    .filter((item) => item !== null)
    .map((item) => item!.id);

  // Handle drag start from source
  const handleDragStart = (item: DragItem) => {
    if (isChecked) return;
    setDraggedItem(item);
  };

  // Handle drag start from drop zone (to reorder or remove)
  const handleDropZoneDragStart = (item: DragItem, slotIndex: number) => {
    if (isChecked) return;
    setDraggedItem(item);
    // Remove from current slot
    const newDropped = [...droppedItems];
    newDropped[slotIndex] = null;
    setDroppedItems(newDropped);
  };

  const handleDragOver = (e: React.DragEvent, slotIndex: number) => {
    e.preventDefault();
    setDragOverSlot(slotIndex);
  };

  const handleDragLeave = () => {
    setDragOverSlot(null);
  };

  const handleDrop = (slotIndex: number) => {
    if (!draggedItem || isChecked) {
      setDragOverSlot(null);
      return;
    }

    const newDropped = [...droppedItems];

    // If slot already has an item, swap or replace
    if (newDropped[slotIndex] !== null) {
      // Find if dragged item was from another slot
      const fromSlot = droppedItems.findIndex(
        (item) => item?.id === draggedItem.id
      );
      if (fromSlot !== -1) {
        // Swap items
        newDropped[fromSlot] = newDropped[slotIndex];
      }
    }

    newDropped[slotIndex] = draggedItem;
    setDroppedItems(newDropped);
    setDraggedItem(null);
    setDragOverSlot(null);
    setIsChecked(false);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverSlot(null);
  };

  // Remove item from drop zone
  const handleRemoveItem = (slotIndex: number) => {
    if (isChecked) return;
    const newDropped = [...droppedItems];
    newDropped[slotIndex] = null;
    setDroppedItems(newDropped);
    setIsChecked(false);
  };

  // Click to place item
  const handleSourceItemClick = (item: DragItem) => {
    if (isChecked || usedItemIds.includes(item.id)) return;

    // Find first empty slot and place item there
    const emptySlotIndex = droppedItems.findIndex((slot) => slot === null);
    if (emptySlotIndex !== -1) {
      const newDropped = [...droppedItems];
      newDropped[emptySlotIndex] = item;
      setDroppedItems(newDropped);
      setIsChecked(false);
    }
  };

  const handleConfirm = () => {
    // Check if all slots are filled
    if (droppedItems.some((item) => item === null)) {
      return;
    }

    const currentOrder = droppedItems.map((item) => item!.id);
    const correct = correctOrder.every(
      (id, index) => currentOrder[index] === id
    );
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
    setDroppedItems(Array(correctOrder.length).fill(null));
    setIsChecked(false);
    setIsCorrect(false);
    setDraggedItem(null);
  };

  const allSlotsFilled = droppedItems.every((item) => item !== null);

  // Text-only layout (no images)
  if (!hasImages) {
    return (
      <div className="w-full flex flex-col gap-3 sm:gap-6">
        {/* Source Items - Text only grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full max-w-2xl mx-auto">
          {items.map((item) => {
            const isUsed = usedItemIds.includes(item.id);
            const isBeingDragged = draggedItem?.id === item.id;

            return (
              <div
                key={item.id}
                draggable={!isChecked && !isUsed}
                onDragStart={() => handleDragStart(item)}
                onDragEnd={handleDragEnd}
                onClick={() => handleSourceItemClick(item)}
                className={`
                  relative flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 sm:border-3 transition-all duration-300
                  ${
                    isUsed
                      ? "opacity-40 cursor-not-allowed border-slate-700 bg-slate-900/50"
                      : ""
                  }
                  ${isBeingDragged ? "opacity-50 scale-95 border-blue-500" : ""}
                  ${
                    !isUsed && !isBeingDragged && !isChecked
                      ? "cursor-grab active:cursor-grabbing hover:border-blue-400 sm:hover:scale-[1.02] border-slate-600 bg-slate-800/50 hover:bg-slate-700/50"
                      : ""
                  }
                  ${
                    isChecked
                      ? "cursor-default border-slate-700 bg-slate-800/30"
                      : ""
                  }
                `}
              >
                {/* Option ID Badge */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm sm:text-lg font-bold shadow-md flex-shrink-0">
                  {item.id}
                </div>

                {/* Label */}
                <span
                  className={`text-sm sm:text-base font-medium leading-tight flex-grow ${
                    isUsed ? "text-slate-500" : "text-white"
                  }`}
                >
                  {item.label.replace(/^[A-E]\.\s*/, "")}
                </span>

                {isUsed && (
                  <Check className="text-green-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* Arrow indicator */}
        <div className="flex justify-center text-slate-500">
          <svg
            className="w-6 h-6 sm:w-10 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        {/* Drop Zone - Text only */}
        <div className="bg-slate-900/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 w-full max-w-2xl mx-auto">
          <div className="text-xs sm:text-sm text-slate-400 mb-2 sm:mb-3 text-center font-medium">
            순서대로 배치 ({correctOrder.length}개 선택)
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            {droppedItems.map((item, index) => (
              <div
                key={index}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={handleDragLeave}
                onDrop={() => handleDrop(index)}
                className={`
                  relative flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 sm:border-3 transition-all duration-300 min-h-[52px] sm:min-h-[64px]
                  ${
                    dragOverSlot === index
                      ? "border-blue-500 bg-blue-500/20 scale-[1.02]"
                      : "border-dashed border-slate-600"
                  }
                  ${
                    item === null
                      ? "bg-slate-800/30"
                      : "bg-slate-700/50 border-solid border-slate-500"
                  }
                  ${
                    isChecked && isCorrect
                      ? "border-green-500 bg-green-500/10"
                      : ""
                  }
                  ${
                    isChecked && !isCorrect
                      ? "border-red-500 bg-red-500/10"
                      : ""
                  }
                `}
              >
                {/* Slot Number */}
                <div
                  className={`
                    w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-lg font-bold shadow-md flex-shrink-0
                    ${isChecked && isCorrect ? "bg-green-500 text-white" : ""}
                    ${isChecked && !isCorrect ? "bg-red-500 text-white" : ""}
                    ${!isChecked ? "bg-orange-500 text-white" : ""}
                  `}
                >
                  {index + 1}
                </div>

                {item ? (
                  <>
                    {/* Draggable placed item */}
                    <div
                      draggable={!isChecked}
                      onDragStart={() => handleDropZoneDragStart(item, index)}
                      onDragEnd={handleDragEnd}
                      className={`flex-grow ${!isChecked ? "cursor-grab" : ""}`}
                    >
                      <span className="text-white text-sm sm:text-base font-medium">
                        {item.id}. {item.label.replace(/^[A-E]\.\s*/, "")}
                      </span>
                    </div>
                    {/* Remove button */}
                    {!isChecked && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveItem(index);
                        }}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 flex-shrink-0"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    )}
                  </>
                ) : (
                  <span className="text-slate-500 text-sm sm:text-base">
                    빈 칸
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-6 mt-2 max-w-2xl mx-auto w-full">
          <button
            onClick={handleReset}
            disabled={isChecked && isCorrect}
            className={`
              flex-1 py-3 sm:py-5 px-4 sm:px-8 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-xl flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300
              ${
                isChecked && isCorrect
                  ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                  : "bg-slate-700 text-white hover:bg-slate-600 hover:scale-105"
              }
            `}
          >
            <RotateCcw className="w-4 h-4 sm:w-6 sm:h-6" />
            초기화
          </button>

          <button
            onClick={handleConfirm}
            disabled={(isChecked && isCorrect) || !allSlotsFilled}
            className={`
              flex-1 py-3 sm:py-5 px-4 sm:px-8 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-xl flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300
              ${
                isChecked && isCorrect
                  ? "bg-green-600 text-white cursor-not-allowed"
                  : !allSlotsFilled
                  ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              }
            `}
          >
            <Check className="w-4 h-4 sm:w-6 sm:h-6" />
            {isChecked && isCorrect ? "정답입니다!" : "확인"}
          </button>
        </div>
      </div>
    );
  }

  // Original layout with images
  return (
    <div className="w-full flex flex-col gap-1.5 sm:gap-2">
      {/* Source Items - 중단 (가로 배치, 데스크톱 스타일) */}
      <div
        className={`grid gap-1 sm:gap-3 w-[95%] mx-auto ${
          items.length === 5 ? "grid-cols-5" : "grid-cols-4"
        }`}
      >
        {items.map((item) => {
          const isUsed = usedItemIds.includes(item.id);
          const isBeingDragged = draggedItem?.id === item.id;

          return (
            <div
              key={item.id}
              draggable={!isChecked && !isUsed}
              onDragStart={() => handleDragStart(item)}
              onDragEnd={handleDragEnd}
              onClick={() => handleSourceItemClick(item)}
              className={`
                group relative flex flex-col rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 transition-all duration-300 shadow-lg sm:shadow-2xl
                ${
                  isUsed
                    ? "opacity-40 cursor-not-allowed border-slate-700 bg-slate-900/50 grayscale"
                    : ""
                }
                ${isBeingDragged ? "opacity-50 scale-95 border-blue-500" : ""}
                ${
                  !isUsed && !isBeingDragged && !isChecked
                    ? "cursor-grab active:cursor-grabbing hover:border-blue-400 sm:hover:scale-105 border-slate-600 sm:border-transparent bg-white shadow-blue-500/10 sm:hover:shadow-blue-500/30"
                    : ""
                }
                ${
                  isChecked
                    ? "cursor-default border-slate-700 bg-slate-800/30"
                    : ""
                }
              `}
            >
              {/* Option ID Badge */}
              <div className="absolute top-1 left-1 sm:top-3 sm:left-3 w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs sm:text-lg font-bold sm:font-black shadow-md sm:shadow-lg z-20 ring-1 sm:ring-2 ring-white/30">
                {item.id}
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 sm:bg-slate-50 overflow-hidden">
                <Image
                  src={item.imageUrl!}
                  alt={item.label}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    !isUsed && !isChecked ? "sm:group-hover:scale-110" : ""
                  }`}
                  sizes="25vw"
                  unoptimized
                />
                {isUsed && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                    <Check className="text-white w-8 h-8 sm:w-16 sm:h-16 drop-shadow-lg" />
                  </div>
                )}
              </div>
              {/* Label */}
              <div
                className={`p-1.5 sm:p-3 text-center flex-grow flex items-center justify-center ${
                  isUsed ? "bg-slate-800" : "bg-white"
                }`}
              >
                <span
                  className={`text-[10px] sm:text-sm font-semibold sm:font-bold leading-tight ${
                    isUsed
                      ? "text-slate-400"
                      : "text-slate-700 sm:text-slate-900"
                  }`}
                >
                  {item.label.replace(/^[A-E]\.\s*/, "")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {/* Arrow indicator */}
      <div className="flex justify-center text-slate-500">
        <svg
          className="w-5 h-5 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      {/* Drop Zone - 하단 (중단과 같은 크기) */}
      <div className="bg-slate-900/30 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 w-[70%] mx-auto">
        <div className="text-[10px] sm:text-xs text-slate-400 mb-1 text-center font-medium">
          순서대로 배치 ({correctOrder.length}개 선택)
        </div>
        <div
          className={`grid gap-1 sm:gap-2 w-full ${
            correctOrder.length === 4 ? "grid-cols-4" : "grid-cols-3"
          }`}
        >
          {droppedItems.map((item, index) => (
            <div
              key={index}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={handleDragLeave}
              onDrop={() => handleDrop(index)}
              className={`
                relative flex flex-col rounded-xl sm:rounded-2xl border-2 sm:border-4 transition-all duration-300 overflow-hidden
                ${
                  dragOverSlot === index
                    ? "border-blue-500 bg-blue-500/20 scale-105"
                    : "border-dashed border-slate-600"
                }
                ${
                  item === null
                    ? "bg-slate-800/30"
                    : "bg-slate-700/50 border-solid border-slate-500"
                }
                ${
                  isChecked && isCorrect
                    ? "border-green-500 bg-green-500/10"
                    : ""
                }
                ${isChecked && !isCorrect ? "border-red-500 bg-red-500/10" : ""}
              `}
            >
              {/* Slot Number */}
              <div
                className={`
                  absolute top-1 left-1 sm:top-3 sm:left-3 w-5 h-5 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-lg font-bold sm:font-black z-10 shadow-lg
                  ${isChecked && isCorrect ? "bg-green-500 text-white" : ""}
                  ${isChecked && !isCorrect ? "bg-red-500 text-white" : ""}
                  ${!isChecked ? "bg-orange-500 text-white" : ""}
                `}
              >
                {index + 1}
              </div>

              {item ? (
                <>
                  {/* Draggable placed item */}
                  <div
                    draggable={!isChecked}
                    onDragStart={() => handleDropZoneDragStart(item, index)}
                    onDragEnd={handleDragEnd}
                    className={`flex flex-col ${
                      !isChecked ? "cursor-grab" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full bg-slate-700 overflow-hidden">
                      <Image
                        src={item.imageUrl!}
                        alt={item.label}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="p-1.5 sm:p-2 text-center bg-slate-800">
                      <span className="text-white text-[10px] sm:text-sm font-bold">
                        {item.id}. {item.label.replace(/^[A-E]\.\s*/, "")}
                      </span>
                    </div>
                  </div>
                  {/* Remove button */}
                  {!isChecked && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveItem(index);
                      }}
                      className="absolute top-1 right-1 sm:top-2 sm:right-2 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 z-20 shadow-lg"
                    >
                      <X className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  )}
                </>
              ) : (
                <div className="aspect-[4/3] flex items-center justify-center">
                  <span className="text-slate-500 text-xs sm:text-base">
                    빈 칸
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 sm:gap-4 mt-0.5 max-w-2xl mx-auto w-full">
        <button
          onClick={handleReset}
          disabled={isChecked && isCorrect}
          className={`
            flex-1 py-2 sm:py-3.5 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300
            ${
              isChecked && isCorrect
                ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                : "bg-slate-700 text-white hover:bg-slate-600 hover:scale-101"
            }
          `}
        >
          <RotateCcw className="w-4 h-4 sm:w-6 sm:h-6" />
          초기화
        </button>

        <button
          onClick={handleConfirm}
          disabled={(isChecked && isCorrect) || !allSlotsFilled}
          className={`
            flex-1 py-2 sm:py-3.5 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300
            ${
              isChecked && isCorrect
                ? "bg-green-600 text-white cursor-not-allowed"
                : !allSlotsFilled
                ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-101 shadow-lg hover:shadow-blue-500/30"
            }
          `}
        >
          <Check className="w-4 h-4 sm:w-6 sm:h-6" />
          {isChecked && isCorrect ? "정답입니다!" : "확인"}
        </button>
      </div>
    </div>
  );
};
