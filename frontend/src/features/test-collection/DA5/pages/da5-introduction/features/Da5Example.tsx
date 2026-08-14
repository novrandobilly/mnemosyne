import { useState } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";

type OptionLabel = "A" | "B" | "C" | "D" | "E";

interface ExampleQuestion {
  id: number;
  correctAnswer: OptionLabel;
  stimulusPlaceholder: string;
}

const EXAMPLE_QUESTIONS: ExampleQuestion[] = [
  { id: 1, correctAnswer: "B", stimulusPlaceholder: "Stimulus Contoh 1" },
  { id: 2, correctAnswer: "D", stimulusPlaceholder: "Stimulus Contoh 2" },
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

      {/* Stimulus placeholder */}
      <div className="flex justify-center">
        <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <div className="flex flex-col items-center gap-2 text-neutral-400 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <IntiDinamisText size="10" className="text-neutral-400">
              {question.stimulusPlaceholder}
            </IntiDinamisText>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-5 gap-3 max-w-xl mx-auto">
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
                "flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 p-2 transition-all duration-200",
                borderCls,
              )}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-neutral-100">
                <IntiDinamisText size="10" className="text-neutral-400 font-mono">
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
  );
};

export const Da5Example = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, OptionLabel | null>
  >({ 1: null, 2: null });

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
