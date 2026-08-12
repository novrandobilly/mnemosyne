import { useState } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";

interface ExampleRow {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const EXAMPLE_2_ROWS: ExampleRow[] = [
  {
    id: 2,
    question: "20  18  16  14  12  10  8  ?",
    options: ["7", "6", "5", "4", "3"],
    correctAnswer: "6",
  },
  {
    id: 3,
    question: "20  20  19  19  18  18  17  ?",
    options: ["17", "16", "15", "14", "13"],
    correctAnswer: "17",
  },
  {
    id: 4,
    question: "4  6  5  7  6  8  7  ?",
    options: ["6", "7", "8", "9", "10"],
    correctAnswer: "9",
  },
  {
    id: 5,
    question: "2  4  6  8  11  13  15  ?",
    options: ["14", "15", "16", "17", "18"],
    correctAnswer: "18",
  },
];

export const EAS6Example2 = () => {
  const [interactiveAnswers, setInteractiveAnswers] = useState<
    Record<number, string | null>
  >({
    2: null,
    3: null,
    4: null,
    5: null,
  });

  const handleSelectAnswer = (id: number, value: string) => {
    setInteractiveAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="space-y-4 py-4">
      <div>
        <IntiDinamisText
          size="14"
          weight="semibold"
          className="text-neutral-700"
        >
          Latihan Mandiri (Contoh 2 - 5):
        </IntiDinamisText>
        <IntiDinamisText size="12" className="text-neutral-400 mt-1">
          Cobalah menjawab soal-soal di bawah ini berdasarkan pola deretan angka.
        </IntiDinamisText>
      </div>

      <div className="flex flex-col gap-3">
        {EXAMPLE_2_ROWS.map((row) => {
          const selected = interactiveAnswers[row.id];
          const isAnswered = selected !== null;
          const isCorrect = isAnswered && selected === row.correctAnswer;

          return (
            <div
              key={row.id}
              className={cn(
                "flex flex-col gap-4 rounded-xl border p-4 bg-white shadow-sm transition-all duration-300 md:flex-row md:items-center md:justify-between",
                isAnswered
                  ? isCorrect
                    ? "border-emerald-200 bg-emerald-50/10"
                    : "border-rose-200 bg-rose-50/10"
                  : "border-neutral-200",
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
                  {row.id}
                </span>
                <div className="grid grid-cols-8 gap-x-1 sm:gap-x-2 font-mono text-sm font-semibold text-neutral-900">
                  {row.question.trim().split(/\s+/).map((item, idx) => (
                    <div key={idx} className="w-8 text-center sm:w-10">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 justify-between md:justify-end">
                <div className="flex flex-nowrap gap-2 overflow-x-auto md:overflow-x-visible">
                  {row.options.map((option) => {
                    const isSelected = selected === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelectAnswer(row.id, option)}
                        className={cn(
                          "flex min-w-12 sm:min-w-14 items-center justify-center rounded-xl border px-3 py-1.5 transition-all duration-150 cursor-pointer",
                          isSelected
                            ? "border-neutral-900 bg-neutral-900 text-white font-semibold"
                            : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50",
                        )}
                      >
                        <span className="font-mono text-sm font-semibold">{option}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="w-14 text-right pr-1 shrink-0">
                  {isAnswered && (
                    isCorrect ? (
                      <span className="text-xs font-semibold text-emerald-600">
                        Benar
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-rose-600">
                        Salah
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
