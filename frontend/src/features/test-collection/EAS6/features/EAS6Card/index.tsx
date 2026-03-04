import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";

const OPTION_LABELS = ["A", "B", "C", "D", "E"] as const;

interface EAS6CardProps {
  id: number;
  question: string;
  options: [string, string, string, string, string];
  selectedAnswer: string | undefined;
  onSelectAnswer: (id: number, option: string) => void;
}

export const EAS6Card = ({
  id,
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
}: EAS6CardProps) => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
          {id}
        </span>
        <IntiDinamisText
          as="p"
          size="20"
          weight="semibold"
          className="font-mono leading-snug tracking-wide text-neutral-900"
        >
          {question}
        </IntiDinamisText>
      </div>

      <div className="flex flex-wrap gap-3">
        {options.map((option, index) => {
          const label = OPTION_LABELS[index];
          const isSelected = selectedAnswer === option;

          return (
            <button
              key={label}
              type="button"
              onClick={() => onSelectAnswer(id, option)}
              className={cn(
                "flex min-w-20 items-center gap-2 rounded-xl border-2 px-4 py-2.5 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
                isSelected
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50",
              )}
            >
              <span
                className={cn(
                  "text-xs font-bold",
                  isSelected ? "text-white/60" : "text-neutral-400",
                )}
              >
                {label}
              </span>
              <span className="font-mono text-sm font-semibold">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
