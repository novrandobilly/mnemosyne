import { cn } from "@/lib/tailwind-merge";
import type { Eas10Answer } from "@/data/eas10";

const CHOICES: { value: Eas10Answer; label: string; title: string }[] = [
  { value: "Benar", label: "B", title: "Benar" },
  { value: "Salah", label: "S", title: "Salah" },
  { value: "Unknown", label: "?", title: "Tidak Tahu" },
];

interface EAS10RowProps {
  id: number;
  expression: string;
  conclusion: string;
  selectedAnswer: Eas10Answer | undefined;
  onSelectAnswer: (id: number, answer: Eas10Answer) => void;
}

export const EAS10Row = ({
  id,
  expression,
  conclusion,
  selectedAnswer,
  onSelectAnswer,
}: EAS10RowProps) => {
  return (
    <div className="flex items-center gap-3 border-b border-neutral-100 py-3 last:border-b-0">
      {/* Row number */}
      <span className="w-6 shrink-0 text-right text-xs font-semibold tabular-nums text-neutral-400">
        {id}
      </span>

      {/* Symbolic content */}
      <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2 gap-y-0.5 font-mono text-sm text-neutral-800">
        <span className="whitespace-nowrap text-sm">{expression}</span>
        <span className="text-sm font-semibold tracking-wide text-neutral-400">
          maka
        </span>
        <span className="whitespace-nowrap font-semibold text-sm">
          {conclusion}
        </span>
      </div>

      {/* Answer buttons */}
      <div className="flex shrink-0 gap-1.5">
        {CHOICES.map(({ value, label, title }) => {
          const isSelected = selectedAnswer === value;
          return (
            <button
              key={value}
              type="button"
              title={title}
              onClick={() => onSelectAnswer(id, value)}
              className={cn(
                "flex h-8 w-10 items-center justify-center rounded-lg border-2 text-xs font-bold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
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
  );
};
