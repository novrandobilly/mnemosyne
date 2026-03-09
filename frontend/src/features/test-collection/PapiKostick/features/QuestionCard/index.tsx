import { IntiDinamisText } from "@/components/IntiDinamisText";
import { Controller } from "react-hook-form";
import { usePapiKostickContext } from "../../context/FormContext";
import type { PapiAnswer } from "../../context/FormContext";
import { OptionButton } from "./features/OptionButton";

export interface QuestionCardProps {
  questionId: number;
  questionNumber: number;
  textA: string;
  textB: string;
}

export const QuestionCard = ({
  questionId,
  questionNumber,
  textA,
  textB,
}: QuestionCardProps) => {
  const { methods } = usePapiKostickContext();
  const { control } = methods;

  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <IntiDinamisText
        as="span"
        size="12"
        weight="semibold"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 sm:h-8 sm:w-8 sm:text-sm"
      >
        {questionNumber}
      </IntiDinamisText>

      <Controller
        name={`q_${questionId}`}
        control={control}
        render={({ field: { onChange, value } }) => {
          const selectAnswer = (answer: PapiAnswer) => onChange(answer);
          return (
            <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
              <OptionButton
                label="A"
                text={textA}
                isSelected={value === "a"}
                onSelect={() => selectAnswer("a")}
              />
              <OptionButton
                label="B"
                text={textB}
                isSelected={value === "b"}
                onSelect={() => selectAnswer("b")}
              />
            </div>
          );
        }}
      />
    </div>
  );
};
