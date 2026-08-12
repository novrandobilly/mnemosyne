import { useState } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import example2Img from "@/assets/tests/eas5/example-2.png";

interface ExampleRow {
  block: "A" | "B" | "C" | "D" | "E";
  correctAnswer: number;
}

const EXAMPLE_2_ROWS: ExampleRow[] = [
  { block: "A", correctAnswer: 4 },
  { block: "B", correctAnswer: 5 },
  { block: "C", correctAnswer: 5 },
  { block: "D", correctAnswer: 3 },
  { block: "E", correctAnswer: 3 },
];

export const EAS5Example2 = () => {
  const [interactiveAnswers, setInteractiveAnswers] = useState<
    Record<string, number | null>
  >({
    A: null,
    B: null,
    C: null,
    D: null,
    E: null,
  });

  const handleSelectAnswer = (block: string, value: number) => {
    setInteractiveAnswers((prev) => {
      const current = prev[block];
      return { ...prev, [block]: current === value ? null : value };
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 pt-6 lg:grid-cols-[280px_1fr]">
      <div className="flex items-center justify-center overflow-hidden rounded-xl border border-neutral-200 h-64 bg-neutral-50 p-4">
        <img
          src={example2Img}
          alt="Example Pile 2"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="space-y-4">
        <div>
          <IntiDinamisText
            size="14"
            weight="semibold"
            className="text-neutral-700"
          >
            Latihan Mandiri (Example 2):
          </IntiDinamisText>
          <IntiDinamisText size="12" className="text-neutral-400 mt-1">
            Cobalah menjawab soal-soal di bawah ini berdasarkan tumpukan balok
            di sebelah kiri.
          </IntiDinamisText>
        </div>

        <div className="space-y-3">
          {EXAMPLE_2_ROWS.map((row, idx) => {
            const selected = interactiveAnswers[row.block];
            const isAnswered = selected !== null;
            const isCorrect = isAnswered && selected === row.correctAnswer;

            return (
              <div
                key={idx}
                className={cn(
                  "flex flex-wrap items-center justify-between gap-4 rounded-xl border p-3 bg-white shadow-sm transition-all duration-300",
                  isAnswered
                    ? isCorrect
                      ? "border-emerald-200 bg-emerald-50/10"
                      : "border-rose-200 bg-rose-50/10"
                    : "border-neutral-200",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold text-white font-mono">
                    {row.block}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                      const isSelected = selected === num;
                      return (
                        <button
                          key={num}
                          type="button"
                          onClick={() => handleSelectAnswer(row.block, num)}
                          className={cn(
                            "h-8 w-8 rounded-lg text-xs font-semibold border transition-colors cursor-pointer",
                            isSelected
                              ? "bg-neutral-900 text-white border-neutral-900"
                              : "bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50",
                          )}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive feedback */}
                {isAnswered && (
                  <div className="w-16 text-right pr-2">
                    {isCorrect ? (
                      <span className="text-xs font-semibold text-emerald-600">
                        Benar
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-rose-600">
                        Salah
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
