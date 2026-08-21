import { useState } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import { ST7_NONE_OPTION_TEXT } from "@/data/st7/index";

// Import example reference and option assets
import st7ExRef from "@/assets/tests/st7/examples/st7_ex_ref.jpg";
import st7ExQ1A from "@/assets/tests/st7/examples/st7_ex_q1_a.jpg";
import st7ExQ1B from "@/assets/tests/st7/examples/st7_ex_q1_b.jpg";
import st7ExQ1C from "@/assets/tests/st7/examples/st7_ex_q1_c.jpg";
import st7ExQ1D from "@/assets/tests/st7/examples/st7_ex_q1_d.jpg";
import st7ExQ2A from "@/assets/tests/st7/examples/st7_ex_q2_a.jpg";
import st7ExQ2B from "@/assets/tests/st7/examples/st7_ex_q2_b.jpg";
import st7ExQ2C from "@/assets/tests/st7/examples/st7_ex_q2_c.jpg";
import st7ExQ2D from "@/assets/tests/st7/examples/st7_ex_q2_d.jpg";
import st7ExQ3A from "@/assets/tests/st7/examples/st7_ex_q3_a.jpg";
import st7ExQ3B from "@/assets/tests/st7/examples/st7_ex_q3_b.jpg";
import st7ExQ3C from "@/assets/tests/st7/examples/st7_ex_q3_c.jpg";
import st7ExQ3D from "@/assets/tests/st7/examples/st7_ex_q3_d.jpg";

type OptionLabel = "A" | "B" | "C" | "D" | "E";

interface ExampleQuestion {
  id: number;
  correctAnswer: OptionLabel;
  optionUrls: [string, string, string, string];
}

const EXAMPLE_QUESTIONS: ExampleQuestion[] = [
  {
    id: 1,
    correctAnswer: "C",
    optionUrls: [st7ExQ1A, st7ExQ1B, st7ExQ1C, st7ExQ1D],
  },
  {
    id: 2,
    correctAnswer: "A",
    optionUrls: [st7ExQ2A, st7ExQ2B, st7ExQ2C, st7ExQ2D],
  },
  {
    id: 3,
    correctAnswer: "E",
    optionUrls: [st7ExQ3A, st7ExQ3B, st7ExQ3C, st7ExQ3D],
  },
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
        {OPTION_LABELS.map((label, idx) => {
          const isSelected = selected === label;
          const isE = label === "E";
          const isCorrectOption = label === question.correctAnswer;

          if (isE) {
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

          const optionUrl = question.optionUrls[idx];

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
              <div className="overflow-hidden">
                <img
                  src={optionUrl}
                  alt={`Contoh Q${question.id} pilihan ${label}`}
                  className="h-28 w-28 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
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
      {/* Sticky reference */}
      <div className="lg:self-start lg:sticky lg:top-24">
        <IntiDinamisText
          size="12"
          className="mb-2 uppercase tracking-[0.15em] text-neutral-400"
        >
          Pola Contoh
        </IntiDinamisText>
        <div className="overflow-hidden rounded-xl border border-neutral-200 p-2 bg-white">
          <img
            src={st7ExRef}
            alt="Pola lipatan contoh"
            className="w-full object-cover"
          />
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
