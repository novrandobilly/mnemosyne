import IntiDinamisButton from "@/components/IntiDinamisButton";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";

const ANSWER_CHOICES = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export interface EAS5QuestionRowProps {
  questionId: number;
  targetBlock: string;
  selectedAnswer: number | undefined;
  onSelectAnswer: (questionId: number, answer: number) => void;
}

export const EAS5QuestionRow = ({
  questionId,
  targetBlock,
  selectedAnswer,
  onSelectAnswer,
}: EAS5QuestionRowProps) => {
  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <IntiDinamisText
          as="h3"
          size="14"
          weight="semibold"
          className="text-neutral-900"
        >
          Soal {questionId}
        </IntiDinamisText>
        <IntiDinamisText
          as="span"
          size="12"
          weight="medium"
          className="rounded-md bg-neutral-200 px-2 py-1 text-neutral-700"
        >
          Target Block {targetBlock}
        </IntiDinamisText>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
        {ANSWER_CHOICES.map((choice) => (
          <IntiDinamisButton
            key={choice}
            variant="secondary"
            size="icon"
            onClick={() => onSelectAnswer(questionId, choice)}
            className={cn(
              "h-9 w-9 rounded-lg border sm:h-10 sm:w-10",
              selectedAnswer === choice
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100",
            )}
          >
            {choice}
          </IntiDinamisButton>
        ))}
      </div>
    </div>
  );
};
