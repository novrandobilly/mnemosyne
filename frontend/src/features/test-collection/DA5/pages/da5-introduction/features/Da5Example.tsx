import { useState } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";

// Import DA5 Example assets
import da5ExQ1 from "@/assets/tests/da5/examples/da5_ex_q1.png";
import da5ExQ1A from "@/assets/tests/da5/examples/da5_ex_q1_a.png";
import da5ExQ1B from "@/assets/tests/da5/examples/da5_ex_q1_b.png";
import da5ExQ1C from "@/assets/tests/da5/examples/da5_ex_q1_c.png";
import da5ExQ1D from "@/assets/tests/da5/examples/da5_ex_q1_d.png";
import da5ExQ1E from "@/assets/tests/da5/examples/da5_ex_q1_e.png";

import da5ExQ2 from "@/assets/tests/da5/examples/da5_ex_q2.png";
import da5ExQ2A from "@/assets/tests/da5/examples/da5_ex_q2_a.png";
import da5ExQ2B from "@/assets/tests/da5/examples/da5_ex_q2_b.png";
import da5ExQ2C from "@/assets/tests/da5/examples/da5_ex_q2_c.png";
import da5ExQ2D from "@/assets/tests/da5/examples/da5_ex_q2_d.png";
import da5ExQ2E from "@/assets/tests/da5/examples/da5_ex_q2_e.png";

import da5ExQ3 from "@/assets/tests/da5/examples/da5_ex_q3.png";
import da5ExQ3A from "@/assets/tests/da5/examples/da5_ex_q3_a.png";
import da5ExQ3B from "@/assets/tests/da5/examples/da5_ex_q3_b.png";
import da5ExQ3C from "@/assets/tests/da5/examples/da5_ex_q3_c.png";
import da5ExQ3D from "@/assets/tests/da5/examples/da5_ex_q3_d.png";
import da5ExQ3E from "@/assets/tests/da5/examples/da5_ex_q3_e.png";

type OptionLabel = "A" | "B" | "C" | "D" | "E";

interface ExampleQuestion {
  id: number;
  correctAnswer: OptionLabel;
  stimulusUrl: string;
  optionsUrls: [string, string, string, string, string];
}

const EXAMPLE_QUESTIONS: ExampleQuestion[] = [
  {
    id: 1,
    correctAnswer: "A",
    stimulusUrl: da5ExQ1,
    optionsUrls: [da5ExQ1A, da5ExQ1B, da5ExQ1C, da5ExQ1D, da5ExQ1E],
  },
  {
    id: 2,
    correctAnswer: "D",
    stimulusUrl: da5ExQ2,
    optionsUrls: [da5ExQ2A, da5ExQ2B, da5ExQ2C, da5ExQ2D, da5ExQ2E],
  },
  {
    id: 3,
    correctAnswer: "B",
    stimulusUrl: da5ExQ3,
    optionsUrls: [da5ExQ3A, da5ExQ3B, da5ExQ3C, da5ExQ3D, da5ExQ3E],
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

      {/* Side-by-side Layout: Stimulus on Left (w-1/3 approx), 5 Options on Right (w-2/3 approx) */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] gap-20 items-start">
        {/* Stimulus Box */}
        <div className="space-y-1.5 flex flex-col items-start w-full">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Soal
          </span>
          <div className="w-full flex items-center justify-start">
            <img
              src={question.stimulusUrl}
              alt={`Stimulus Contoh ${question.id}`}
              className="w-full max-w-55 h-auto object-contain block"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* 5 Options Grid */}
        <div className="space-y-1.5 flex flex-col items-start w-full">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Pilihan
          </span>
          <div className="grid grid-cols-5 gap-2 w-full items-start">
            {OPTION_LABELS.map((label, idx) => {
              const isSelected = selected === label;
              const isCorrectOption = label === question.correctAnswer;
              const optionUrl = question.optionsUrls[idx];

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
                    "flex cursor-pointer flex-col items-center justify-between gap-1.5 rounded-xl border-2 p-1.5 transition-all duration-200 w-full h-full",
                    borderCls,
                  )}
                >
                  <div className="w-full flex items-center justify-center flex-1">
                    <img
                      src={optionUrl}
                      alt={`Pilihan ${label}`}
                      className="w-full h-auto object-contain block"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-semibold shrink-0 mt-0.5",
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
