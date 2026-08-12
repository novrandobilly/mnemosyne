import { useState } from "react";
import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { Eas10Answer } from "@/data/eas10";

interface StaticRow {
  id: number;
  expression: string;
  conclusion: string;
  selected: Eas10Answer;
}

interface InteractiveRow {
  id: number;
  expression: string;
  conclusion: string;
  correctAnswer: Eas10Answer;
}

const STATIC_ROWS: StaticRow[] = [
  { id: 1, expression: "X = Y = Z", conclusion: "X = Z", selected: "Benar" },
];

const INTERACTIVE_ROWS: InteractiveRow[] = [
  { id: 2, expression: "X > Y > Z", conclusion: "X = Z", correctAnswer: "Salah" },
  { id: 3, expression: "X ≠ Y ≠ Z", conclusion: "X ≤ Z", correctAnswer: "Unknown" },
  { id: 4, expression: "X < Y < Z", conclusion: "X < Z", correctAnswer: "Benar" },
  { id: 5, expression: "X = Y > Z", conclusion: "X = Z", correctAnswer: "Salah" },
  { id: 6, expression: "X ≠ Y ≠ Z", conclusion: "X > Z", correctAnswer: "Unknown" },
];

const CHOICES: { value: Eas10Answer; label: string; title: string }[] = [
  { value: "Benar", label: "B", title: "Benar" },
  { value: "Salah", label: "S", title: "Salah" },
  { value: "Unknown", label: "?", title: "Tidak Tahu" },
];

export const EAS10Example1 = () => {
  const [answers, setAnswers] = useState<Record<number, Eas10Answer | null>>({
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  });

  const handleSelect = (id: number, value: Eas10Answer) => {
    setAnswers((prev) => {
      const current = prev[id];
      return { ...prev, [id]: current === value ? null : value };
    });
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-6">
      <div>
        <IntiDinamisText
          size="16"
          weight="bold"
          className="text-neutral-900 uppercase tracking-wider mb-4"
        >
          CONTOH:
        </IntiDinamisText>

        <div className="flex flex-col gap-4">
          {/* Static Rows */}
          {STATIC_ROWS.map((row) => (
            <div
              key={row.id}
              className="flex items-center gap-3 border-b border-neutral-100 pb-3 last:border-b-0"
            >
              <span className="w-6 shrink-0 text-right text-xs font-semibold tabular-nums text-neutral-400">
                {row.id}
              </span>

              <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2 gap-y-0.5 font-mono text-sm text-neutral-800">
                <span className="whitespace-nowrap text-sm">{row.expression}</span>
                <span className="text-sm font-semibold tracking-wide text-neutral-400 font-sans">
                  maka
                </span>
                <span className="whitespace-nowrap font-semibold text-sm">
                  {row.conclusion}
                </span>
              </div>

              {/* Static buttons aligned with pl-14 to match the w-14 feedback spacer */}
              <div className="flex shrink-0 gap-1.5 pl-14">
                {CHOICES.map(({ value, label, title }) => {
                  const isPreSelected = row.selected === value;
                  return (
                    <div
                      key={value}
                      title={title}
                      className={cn(
                        "flex h-8 w-10 items-center justify-center rounded-lg border-2 text-xs font-bold select-none",
                        isPreSelected
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-200 bg-white text-neutral-400",
                      )}
                    >
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Interactive practice rows */}
          {INTERACTIVE_ROWS.map((row) => {
            const selected = answers[row.id];
            const isAnswered = selected !== null;
            const isCorrect = selected === row.correctAnswer;

            return (
              <div
                key={row.id}
                className={cn(
                  "flex items-center gap-3 border-b border-neutral-100 pb-3 transition-all duration-300 last:border-b-0",
                  isAnswered
                    ? isCorrect
                      ? "bg-emerald-50/10"
                      : "bg-rose-50/10"
                    : "",
                )}
              >
                <span className="w-6 shrink-0 text-right text-xs font-semibold tabular-nums text-neutral-400">
                  {row.id}
                </span>

                <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2 gap-y-0.5 font-mono text-sm text-neutral-800">
                  <span className="whitespace-nowrap text-sm">{row.expression}</span>
                  <span className="text-sm font-semibold tracking-wide text-neutral-400 font-sans">
                    maka
                  </span>
                  <span className="whitespace-nowrap font-semibold text-sm">
                    {row.conclusion}
                  </span>
                </div>

                <div className="flex items-center gap-4 justify-between sm:justify-end shrink-0">
                  {/* Left of the options: Feedback Text */}
                  <div className="w-14 text-left pl-1 shrink-0">
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

                  <div className="flex shrink-0 gap-1.5">
                    {CHOICES.map(({ value, label, title }) => {
                      const isSelected = selected === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          title={title}
                          onClick={() => handleSelect(row.id, value)}
                          className={cn(
                            "flex h-8 w-10 items-center justify-center rounded-lg border-2 text-xs font-bold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer",
                            isSelected
                              ? "border-neutral-900 bg-neutral-900 text-white"
                              : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400 hover:bg-neutral-50",
                          )}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
