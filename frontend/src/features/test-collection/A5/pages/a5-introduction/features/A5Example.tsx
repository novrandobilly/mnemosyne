import { useState } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";

interface ExampleGrid {
  topLeft: string | null;
  topRight: string | null;
  bottomLeft: string | null;
  bottomRight: string | null;
}

interface ExampleItem {
  id: number;
  grid: ExampleGrid;
  options: [string, string, string, string, string];
  correctAnswer: string;
}

const EXAMPLE_QUESTIONS: ExampleItem[] = [
  {
    id: 1,
    grid: {
      topLeft: "CEPAT",
      topRight: "LAMBAT",
      bottomLeft: "BESAR",
      bottomRight: null,
    },
    options: ["LAJU", "KENCANG", "KECIL", "NAIK", "DERAS"],
    correctAnswer: "KECIL",
  },
  {
    id: 2,
    grid: {
      topLeft: "BAGUS",
      topRight: null,
      bottomLeft: "JELEK",
      bottomRight: "BERAT",
    },
    options: ["JAHAT", "BOBOT", "SEDIH", "RINGAN", "KERAS"],
    correctAnswer: "RINGAN",
  },
  {
    id: 3,
    grid: {
      topLeft: null,
      topRight: "PERIH",
      bottomLeft: "SAKIT",
      bottomRight: "KERJA",
    },
    options: ["PENYAKIT", "BURUH", "LEMBUR", "ISTIRAHAT", "BERMAIN"],
    correctAnswer: "LEMBUR",
  },
];

const OPTION_LABELS = ["A", "B", "C", "D", "E"] as const;

function GridCell({ value }: { value: string | null }) {
  const isEmpty = value === null;
  return (
    <div
      className={cn(
        "flex h-12 w-28 items-center justify-center border border-neutral-300 px-2 text-center",
        isEmpty
          ? "border-dashed border-neutral-400 bg-neutral-100"
          : "bg-white",
      )}
    >
      {isEmpty ? (
        <span className="text-xl font-light text-neutral-400">?</span>
      ) : (
        <IntiDinamisText size="14" weight="medium" className="text-neutral-800">
          {value}
        </IntiDinamisText>
      )}
    </div>
  );
}

interface QuestionRowProps {
  question: ExampleItem;
  selected: string | null;
  onSelect: (answer: string) => void;
}

const QuestionRow = ({ question, selected, onSelect }: QuestionRowProps) => {
  const isAnswered = selected !== null;
  const isCorrect = selected === question.correctAnswer;

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6 border-b border-neutral-100 py-6 last:border-none">
      {/* ID Badge & Grid Container */}
      <div className="flex items-center gap-4 shrink-0">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
          {question.id}
        </span>

        {/* 2×2 Grid */}
        <div className="shrink-0">
          <div className="grid grid-cols-2 border-l border-t border-neutral-300">
            <div className="border-b border-r border-neutral-300">
              <GridCell value={question.grid.topLeft} />
            </div>
            <div className="border-b border-r border-neutral-300">
              <GridCell value={question.grid.topRight} />
            </div>
            <div className="border-b border-r border-neutral-300">
              <GridCell value={question.grid.bottomLeft} />
            </div>
            <div className="border-b border-r border-neutral-300">
              <GridCell value={question.grid.bottomRight} />
            </div>
          </div>
        </div>
      </div>

      {/* Options & Feedback */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <IntiDinamisText size="12" className="text-neutral-400">
            Pilih pasangan kata yang paling sesuai untuk melengkapi analogi verbal
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

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {question.options.map((option, idx) => {
            const label = OPTION_LABELS[idx];
            const isSelected = selected === option;
            const isCorrectOption = option === question.correctAnswer;

            let borderCls =
              "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50";

            if (isSelected) {
              borderCls = isCorrectOption
                ? "border-emerald-400 bg-emerald-50 text-emerald-700 shadow-sm"
                : "border-rose-400 bg-rose-50 text-rose-700 shadow-sm";
            }

            return (
              <button
                key={label}
                onClick={() => onSelect(option)}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all duration-200",
                  borderCls,
                )}
              >
                <span className="text-xs font-semibold opacity-60">{label}</span>
                <span className="font-medium">{option}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const A5Example = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string | null>>({
    1: null,
    2: null,
    3: null,
  });

  const handleSelect = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === answer ? null : answer,
    }));
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
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
