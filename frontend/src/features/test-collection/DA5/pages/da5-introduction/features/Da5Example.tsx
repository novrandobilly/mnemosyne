import { useState } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";

type OptionLabel = "A" | "B" | "C" | "D" | "E";

interface ExampleQuestion {
  id: number;
  correctAnswer: OptionLabel;
}

const EXAMPLE_QUESTIONS: ExampleQuestion[] = [
  { id: 1, correctAnswer: "A" },
  { id: 2, correctAnswer: "D" },
  { id: 3, correctAnswer: "B" },
];

const OPTION_LABELS: OptionLabel[] = ["A", "B", "C", "D", "E"];

interface QuestionRowProps {
  question: ExampleQuestion;
  selected: OptionLabel | null;
  onSelect: (answer: OptionLabel) => void;
}

const QuestionRow = ({ question, selected, onSelect }: QuestionRowProps) => {
  const isAnswered = selected !== null;
  const isCorrect = selected === question.correctAnswer;

  return (
    <div className="border-b border-neutral-100 py-6 last:border-none space-y-4">
      {/* Header: Question number & Instruction & Inline Feedback */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
          {question.id}
        </span>
        <IntiDinamisText size="12" className="text-neutral-400">
          Pilih gambar yang paling sesuai dengan pola stimulus
        </IntiDinamisText>

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

      {/* Side-by-side or Stacked Layout: Stimulus on Top/Left, 5 Options on Bottom/Right */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-48">
        {/* Stimulus Box */}
        <div className="flex flex-col items-start gap-1.5 shrink-0">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Soal
          </span>
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-2">
            <div className="flex flex-col items-center gap-1 text-neutral-400 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <IntiDinamisText size="10" className="text-neutral-400">
                Stimulus {question.id}
              </IntiDinamisText>
            </div>
          </div>
        </div>

        {/* 5 Options Grid */}
        <div className="flex flex-col flex-1 w-full space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Pilihan
          </span>
          <div className="grid grid-cols-5 gap-2 w-full">
            {OPTION_LABELS.map((label) => {
              const isSelected = selected === label;
              const isCorrectOption = label === question.correctAnswer;

              let borderCls =
                "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50";

              if (isSelected) {
                borderCls = isCorrectOption
                  ? "border-emerald-400 bg-emerald-50 shadow-sm"
                  : "border-rose-400 bg-rose-50 shadow-sm";
              }

              return (
                <button
                  key={label}
                  onClick={() => onSelect(label)}
                  className={cn(
                    "flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border-2 p-2 transition-all duration-200",
                    borderCls,
                  )}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-neutral-100">
                    <IntiDinamisText
                      size="10"
                      className="text-neutral-400 font-mono"
                    >
                      Opt {label}
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
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Da5Example = () => {
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
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-6">
      <IntiDinamisText
        as="h3"
        size="14"
        weight="bold"
        className="text-neutral-900 uppercase tracking-wide"
      >
        CONTOH :
      </IntiDinamisText>

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
