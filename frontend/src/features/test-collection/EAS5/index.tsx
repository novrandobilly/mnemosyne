import AdminWrapper from "@/components/MainWrapper/features/admin-wrapper";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { cn } from "@/lib/tailwind-merge";
import { eas5Data } from "@/data/eas5";
import { useEas5 } from "./hooks/useEas5";

const ANSWER_CHOICES = [1, 2, 3, 4, 5, 6, 7, 8] as const;

interface EAS5QuestionRowProps {
  questionId: number;
  targetBlock: string;
  selectedAnswer: number | undefined;
  onSelectAnswer: (questionId: number, answer: number) => void;
}

const EAS5QuestionRow = ({
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

export const Eas5Test = () => {
  const {
    currentPileId,
    currentPile,
    answers,
    answeredCount,
    totalQuestions,
    secondsLeft,
    isTimeUp,
    selectAnswer,
    goToPile,
    formatTime,
  } = useEas5();

  return (
    <AdminWrapper pageTitle="EAS5">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[360px_1fr]">
        <aside className="self-start lg:sticky lg:top-6">
          <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <IntiDinamisText
                size="12"
                className="uppercase tracking-[0.2em] text-neutral-500"
              >
                Timer
              </IntiDinamisText>
              <IntiDinamisText
                size="16"
                weight="bold"
                className={cn(isTimeUp ? "text-rose-600" : "text-neutral-900")}
              >
                {formatTime(secondsLeft)}
              </IntiDinamisText>
            </div>

            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <img
                src={currentPile.imageUrl}
                alt={`EAS5 pile ${currentPile.pileId}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <IntiDinamisText size="14" className="text-neutral-600">
                Pile {currentPile.pileId} / {eas5Data.length}
              </IntiDinamisText>
              <IntiDinamisText
                size="14"
                weight="medium"
                className="text-neutral-900"
              >
                {answeredCount}/{totalQuestions} terjawab
              </IntiDinamisText>
            </div>
          </div>
        </aside>

        <section className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {eas5Data.map((pile) => (
              <IntiDinamisButton
                key={pile.pileId}
                variant="secondary"
                size="icon"
                onClick={() => goToPile(pile.pileId)}
                className={cn(
                  currentPileId === pile.pileId
                    ? "bg-neutral-900 text-white"
                    : "border-transparent bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
                )}
              >
                {pile.pileId}
              </IntiDinamisButton>
            ))}
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            {currentPile.questions.map((question) => (
              <EAS5QuestionRow
                key={question.id}
                questionId={question.id}
                targetBlock={question.targetBlock}
                selectedAnswer={answers[question.id]}
                onSelectAnswer={selectAnswer}
              />
            ))}
          </div>
        </section>
      </div>
    </AdminWrapper>
  );
};
