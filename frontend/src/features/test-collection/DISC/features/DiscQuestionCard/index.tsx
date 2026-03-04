import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import thumbUpIcon from "@/assets/icons/thumb-up.svg";
import thumbDownIcon from "@/assets/icons/thumb-down.svg";
import type { DiscAnswer } from "../../hooks/useDisc";
import type { DiscQuestion } from "@/data/disc";

interface DiscQuestionCardProps {
  question: DiscQuestion;
  answer: DiscAnswer | undefined;
  onSelectMost: (questionId: number, optionIndex: number) => void;
  onSelectLeast: (questionId: number, optionIndex: number) => void;
}

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

export const DiscQuestionCard = ({
  question,
  answer,
  onSelectMost,
  onSelectLeast,
}: DiscQuestionCardProps) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      {/* Question number */}
      <IntiDinamisText
        as="span"
        size="12"
        weight="semibold"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 sm:h-8 sm:w-8 sm:text-sm"
      >
        {question.id}
      </IntiDinamisText>

      {/* Options */}
      <div className="flex flex-1 flex-col gap-2">
        {question.options.map((option, index) => {
          const isMost = answer?.most === index;
          const isLeast = answer?.least === index;

          return (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5"
            >
              {/* Option label badge */}
              <IntiDinamisText
                as="span"
                size="10"
                weight="bold"
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600"
              >
                {OPTION_LABELS[index]}
              </IntiDinamisText>

              {/* Option text */}
              <IntiDinamisText
                as="span"
                size="14"
                className="flex-1 leading-5 text-neutral-800"
              >
                {option.text}
              </IntiDinamisText>

              {/* Most / Least selector buttons */}
              <div className="flex shrink-0 gap-1.5">
                <IntiDinamisButton
                  onClick={() => onSelectMost(question.id, index)}
                  variant="secondary"
                  size="xs"
                  wrapChildrenWithText={false}
                  className={cn(
                    "min-w-0 border-0 px-2 py-0.5",
                    isMost
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : "bg-neutral-200 text-neutral-500 hover:bg-neutral-300",
                  )}
                >
                  <img
                    src={thumbUpIcon}
                    alt=""
                    aria-hidden
                    className={cn(
                      "h-3 w-3",
                      isMost ? "brightness-0 invert" : "opacity-60",
                    )}
                  />
                  <IntiDinamisText as="span" size="12" weight="semibold">
                    Paling
                  </IntiDinamisText>
                </IntiDinamisButton>
                <IntiDinamisButton
                  onClick={() => onSelectLeast(question.id, index)}
                  variant="secondary"
                  size="xs"
                  wrapChildrenWithText={false}
                  className={cn(
                    "min-w-0 border-0 px-2 py-0.5",
                    isLeast
                      ? "bg-rose-500 text-white hover:bg-rose-600"
                      : "bg-neutral-200 text-neutral-500 hover:bg-neutral-300",
                  )}
                >
                  <img
                    src={thumbDownIcon}
                    alt=""
                    aria-hidden
                    className={cn(
                      "h-3 w-3",
                      isLeast ? "brightness-0 invert" : "opacity-60",
                    )}
                  />
                  <IntiDinamisText as="span" size="12" weight="semibold">
                    Kurang
                  </IntiDinamisText>
                </IntiDinamisButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
