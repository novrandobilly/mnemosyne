import { cn } from "@/lib/tailwind-merge";
import type { PapiAnswer } from "../../hooks/usePapiKostick";

interface OptionButtonProps {
  label: "A" | "B";
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

const OptionButton = ({
  label,
  text,
  isSelected,
  onSelect,
}: OptionButtonProps) => (
  <button
    onClick={onSelect}
    className={cn(
      "flex flex-1 items-start gap-2.5 rounded-lg border p-2.5 text-left transition-colors duration-150 active:scale-[0.99] cursor-pointer sm:gap-3 sm:rounded-xl sm:p-3",
      isSelected
        ? "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800"
        : "border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-300 hover:bg-neutral-100",
    )}
  >
    <span
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xxs font-bold sm:h-6 sm:w-6 sm:text-xs",
        isSelected
          ? "border border-white/60 bg-white/15 text-white"
          : "border border-neutral-300 bg-white text-neutral-700",
      )}
    >
      {label}
    </span>
    <span className="text-[13px] leading-5 sm:text-sm sm:leading-relaxed">
      {text}
    </span>
  </button>
);

export interface QuestionCardProps {
  questionId: number;
  questionNumber: number;
  textA: string;
  textB: string;
  selectedAnswer: PapiAnswer | undefined;
  onSelectAnswer: (questionId: number, answer: PapiAnswer) => void;
}

export const QuestionCard = ({
  questionId,
  questionNumber,
  textA,
  textB,
  selectedAnswer,
  onSelectAnswer,
}: QuestionCardProps) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-semibold text-neutral-700 sm:h-8 sm:w-8 sm:text-sm">
        {questionNumber}
      </span>

      <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
        <OptionButton
          label="A"
          text={textA}
          isSelected={selectedAnswer === "a"}
          onSelect={() => onSelectAnswer(questionId, "a")}
        />
        <OptionButton
          label="B"
          text={textB}
          isSelected={selectedAnswer === "b"}
          onSelect={() => onSelectAnswer(questionId, "b")}
        />
      </div>
    </div>
  );
};
