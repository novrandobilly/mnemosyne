import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { Eas7Answer } from "@/data/eas7";

const CHOICES: { value: Eas7Answer; label: string; title: string }[] = [
  { value: "True", label: "B", title: "Benar" },
  { value: "False", label: "S", title: "Salah" },
  { value: "Unknown", label: "?", title: "Tidak Tahu" },
];

interface EAS7QuestionRowProps {
  questionId: number;
  statement: string;
  selectedAnswer: Eas7Answer | undefined;
  onSelectAnswer: (questionId: number, answer: Eas7Answer) => void;
}

export const EAS7QuestionRow = ({
  questionId,
  statement,
  selectedAnswer,
  onSelectAnswer,
}: EAS7QuestionRowProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4 sm:flex-row sm:items-center sm:gap-4">
      <div className="flex items-start gap-2.5 sm:flex-1">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
          {questionId}
        </span>
        <IntiDinamisText size="14" className="leading-relaxed text-neutral-800">
          {statement}
        </IntiDinamisText>
      </div>

      <div className="flex shrink-0 gap-2">
        {CHOICES.map(({ value, label, title }) => {
          const isSelected = selectedAnswer === value;
          return (
            <button
              key={value}
              type="button"
              title={title}
              onClick={() => onSelectAnswer(questionId, value)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg border-2 text-sm font-bold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
                isSelected
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50",
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
