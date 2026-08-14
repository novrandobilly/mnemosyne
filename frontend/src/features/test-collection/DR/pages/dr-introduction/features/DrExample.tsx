import { useState } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import { type DrAnswer } from "@/data/dr";

// Example Image Assets
import drExQ1 from "@/assets/tests/dr/examples/dr_ex_q1.jpg";
import drExOpt1 from "@/assets/tests/dr/examples/dr_ex_opt1.jpg";
import drExQ2 from "@/assets/tests/dr/examples/dr_ex_q2.jpg";
import drExOpt2 from "@/assets/tests/dr/examples/dr_ex_opt2.jpg";
import drExQ3 from "@/assets/tests/dr/examples/dr_ex_q3.jpg";
import drExOpt3 from "@/assets/tests/dr/examples/dr_ex_opt3.jpg";

interface ExampleQuestion {
  id: number;
  correctAnswer: DrAnswer;
  problemImageUrl: string;
  optionsImageUrl: string;
}

const EXAMPLE_QUESTIONS: ExampleQuestion[] = [
  {
    id: 1,
    correctAnswer: "A",
    problemImageUrl: drExQ1,
    optionsImageUrl: drExOpt1,
  },
  {
    id: 2,
    correctAnswer: "C",
    problemImageUrl: drExQ2,
    optionsImageUrl: drExOpt2,
  },
  {
    id: 3,
    correctAnswer: "E",
    problemImageUrl: drExQ3,
    optionsImageUrl: drExOpt3,
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
              isCorrect ? "text-emerald-600" : "text-rose-600",
            )}
          >
            {isCorrect ? "✓ Benar" : "✗ Salah"}
          </span>
        )}
      </div>

      {/* Side-by-side flex/grid row: Problem on Left, Options + Buttons on Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* 1. Problem Pattern Strip */}
        <div className="space-y-1.5 flex flex-col items-start">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Soal
          </span>
          <div className="w-full overflow-hidden bg-transparent">
            <img
              src={question.problemImageUrl}
              alt={`Pola Contoh ${question.id}`}
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* 2. Options Strip & 5 Choice Buttons */}
        <div className="space-y-1.5 flex flex-col items-start">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Pilihan
          </span>
          <div className="w-full space-y-2">
            <div className="w-full overflow-hidden bg-transparent">
              <img
                src={question.optionsImageUrl}
                alt={`Pilihan Jawaban Contoh ${question.id}`}
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 5 evenly distributed buttons strictly matching image width */}
            <div className="grid grid-cols-5 gap-1 w-full px-0.5">
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
                      borderCls,
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
