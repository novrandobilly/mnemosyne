import { useState } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import { ST7_NONE_OPTION_TEXT } from "@/data/st7";

type OptionLabel = "A" | "B" | "C" | "D" | "E";

interface ExampleQuestion {
  id: number;
  correctAnswer: OptionLabel;
}

const EXAMPLE_QUESTIONS: ExampleQuestion[] = [
  { id: 1, correctAnswer: "A" },
  { id: 2, correctAnswer: "C" },
  { id: 3, correctAnswer: "E" },
];

const OPTION_LABELS: OptionLabel[] = ["A", "B", "C", "D", "E"];

const PlaceholderImage = ({ label }: { label: string }) => (
  <div className="flex h-16 w-16 items-center justify-center bg-neutral-100 rounded-sm">
    <IntiDinamisText size="10" className="text-neutral-400 font-mono">
      {label}
    </IntiDinamisText>
  </div>
);

interface QuestionRowProps {
  question: ExampleQuestion;
  selected: OptionLabel | null;
  onSelect: (answer: OptionLabel) => void;
}

const QuestionRow = ({ question, selected, onSelect }: QuestionRowProps) => {
  const isAnswered = selected !== null;
  const isCorrect = selected === question.correctAnswer;

  // Exact styles matched from St7QuestionRow
  const unselectedCls =
    "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200";

  const imgUnselectedCls = "hover:bg-neutral-50";

  return (
    <div className="border-b border-neutral-100 py-5 last:border-none">
      {/* Question number + instruction */}
      <div className="mb-3 flex items-center gap-2 flex-wrap">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
          {question.id}
        </span>
        <IntiDinamisText size="12" className="text-neutral-400">
          Pilih kubus yang dapat dilipat dari pola di samping
        </IntiDinamisText>

        {/* Inline feedback label */}
        {isAnswered && (
          <span
            className={cn(
              "text-xs font-semibold ml-1",
              isCorrect ? "text-emerald-600" : "text-rose-600",
            )}
          >
            {isCorrect ? "✓ Benar" : "✗ Salah"}
          </span>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-5 gap-2">
        {OPTION_LABELS.map((label) => {
          const isSelected = selected === label;
          const isE = label === "E";
          const isCorrectOption = label === question.correctAnswer;

          if (isE) {
            // Option E matches St7QuestionRow's border, padding, and layout structure
            let borderCls = unselectedCls;
            if (isSelected) {
              borderCls = isCorrectOption
                ? "border-emerald-400 bg-emerald-50 shadow-sm"
                : "border-rose-400 bg-rose-50 shadow-sm";
            } else {
              borderCls =
                "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200";
            }

            return (
              <button
                key={label}
                onClick={() => onSelect(label)}
                className={cn(
                  "flex cursor-pointer flex-col items-center justify-between gap-2 rounded-xl border-2 p-2 transition-all duration-200",
                  borderCls,
                )}
              >
                <div className="flex flex-1 items-center justify-center px-1 text-center">
                  <IntiDinamisText
                    size="10"
                    className={cn(
                      "leading-tight",
                      isSelected
                        ? isCorrectOption
                          ? "text-emerald-700"
                          : "text-rose-700"
                        : "text-neutral-500",
                    )}
                  >
                    {ST7_NONE_OPTION_TEXT}
                  </IntiDinamisText>
                </div>
                <span
                  className={cn(
                    "text-xs font-semibold",
                    isSelected
                      ? isCorrectOption
                        ? "text-emerald-700"
                        : "text-rose-700"
                      : "text-neutral-500",
                  )}
                >
                  E
                </span>
              </button>
            );
          }

          // Option A-D matches St7QuestionRow's borderless, padding-only structure
          let imgCls = imgUnselectedCls;
          if (isSelected) {
            imgCls = isCorrectOption
              ? "ring-2 ring-emerald-400 bg-emerald-50"
              : "ring-2 ring-rose-400 bg-rose-50";
          } else {
            imgCls =
              "hover:bg-neutral-50 hover:ring-2 hover:ring-neutral-200 transition-all duration-200";
          }

          return (
            <button
              key={label}
              onClick={() => onSelect(label)}
              className={cn(
                "flex cursor-pointer flex-col items-center gap-1.5 rounded-xl p-2 transition-all duration-200",
                imgCls,
              )}
            >
              <PlaceholderImage label={label} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const St7Example = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, OptionLabel | null>
  >({ 1: null, 2: null, 3: null });

  const handleSelect = (questionId: number, answer: OptionLabel) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === answer ? null : answer,
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
      {/* Sticky reference placeholder */}
      <div className="lg:self-start lg:sticky lg:top-24">
        <IntiDinamisText
          size="12"
          className="mb-2 uppercase tracking-[0.15em] text-neutral-400"
        >
          Pola Contoh
        </IntiDinamisText>
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-4 h-48 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-neutral-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <IntiDinamisText size="12" className="text-neutral-400 text-center">
            Gambar pola lipatan akan muncul di sini
          </IntiDinamisText>
        </div>
        <IntiDinamisText size="10" className="mt-2 text-neutral-400">
          Soal 1–3
        </IntiDinamisText>
      </div>

      {/* 3 interactive example questions */}
      <div className="divide-y divide-neutral-100">
        {EXAMPLE_QUESTIONS.map((q) => (
          <QuestionRow
            key={q.id}
            question={q}
            selected={selectedAnswers[q.id]}
            onSelect={(answer) => handleSelect(q.id, answer)}
          />
        ))}
      </div>
    </div>
  );
};
