import { useState } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import { type DrAnswer } from "@/data/dr";

interface ExampleQuestion {
  id: number;
  correctAnswer: DrAnswer;
  problemPlaceholderText: string;
  optionsPlaceholderText: string;
}

const EXAMPLE_QUESTIONS: ExampleQuestion[] = [
  {
    id: 1,
    correctAnswer: "A",
    problemPlaceholderText: "Pola Soal 1",
    optionsPlaceholderText: "Pilihan 1 (A B C D E)",
  },
  {
    id: 2,
    correctAnswer: "C",
    problemPlaceholderText: "Pola Soal 2",
    optionsPlaceholderText: "Pilihan 2 (A B C D E)",
  },
  {
    id: 3,
    correctAnswer: "E",
    problemPlaceholderText: "Pola Soal 3",
    optionsPlaceholderText: "Pilihan 3 (A B C D E)",
  },
];

const OPTION_LABELS: DrAnswer[] = ["A", "B", "C", "D", "E"];

interface QuestionRowProps {
  question: ExampleQuestion;
  selected: DrAnswer | null;
  onSelect: (answer: DrAnswer) => void;
}

const QuestionRow = ({ question, selected, onSelect }: QuestionRowProps) => {
  const isAnswered = selected !== null;
  const isCorrect = selected === question.correctAnswer;

  return (
    <div className="border-b border-neutral-100 py-5 last:border-none space-y-4">
      {/* Header: Question number & Instruction & Inline Feedback */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
          {question.id}
        </span>
        <IntiDinamisText size="12" className="text-neutral-400">
          Tentukan gambar yang tepat untuk melengkapi deretan pola
        </IntiDinamisText>

        {isAnswered && (
          <span
            className={cn(
              "text-xs font-semibold ml-1",
              isCorrect ? "text-emerald-600" : "text-rose-600"
            )}
          >
            {isCorrect ? "✓ Benar" : "✗ Salah"}
          </span>
        )}
      </div>

      {/* Side-by-side flex/grid row: Problem on Left, Options + Buttons on Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* 1. Problem Pattern Strip Placeholder */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Soal
          </span>
          <div className="w-full aspect-[5/1] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-2 flex items-center justify-center">
            <div className="flex items-center gap-2 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <IntiDinamisText size="10" className="text-neutral-400">
                {question.problemPlaceholderText}
              </IntiDinamisText>
            </div>
          </div>
        </div>

        {/* 2. Options Strip Placeholder & 5 Choice Buttons */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Pilihan
          </span>
          <div className="space-y-2">
            <div className="w-full aspect-[5/1] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-2 flex items-center justify-center">
              <div className="flex items-center gap-2 text-neutral-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
                  {question.optionsPlaceholderText}
                </IntiDinamisText>
              </div>
            </div>

            {/* 5 evenly distributed buttons aligned under the 5 choices */}
            <div className="grid grid-cols-5 gap-1.5">
              {OPTION_LABELS.map((label) => {
                const isSelected = selected === label;
                const isCorrectOption = label === question.correctAnswer;

                let borderCls =
                  "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50";

                if (isSelected) {
                  borderCls = isCorrectOption
                    ? "border-emerald-400 bg-emerald-50 text-emerald-700 shadow-sm"
                    : "border-rose-400 bg-rose-50 text-rose-700 shadow-sm";
                }

                return (
                  <button
                    key={label}
                    onClick={() => onSelect(label)}
                    className={cn(
                      "flex cursor-pointer items-center justify-center rounded-lg border-2 py-1.5 text-xs font-semibold transition-all duration-200",
                      borderCls
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DrExample = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, DrAnswer | null>
  >({ 1: null, 2: null, 3: null });

  const handleSelect = (questionId: number, answer: DrAnswer) => {
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
