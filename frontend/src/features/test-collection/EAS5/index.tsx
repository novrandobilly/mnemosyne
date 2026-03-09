import { MainWrapper } from "@/components/MainWrapper";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { cn } from "@/lib/tailwind-merge";
import { eas5Data } from "@/data/eas5";
import { Eas5Provider, useEas5Context } from "./context/Eas5Context";
import { EAS5QuestionRow } from "./features/EAS5QuestionRow";

const Eas5TestInner = () => {
  const {
    currentPileId,
    currentPile,
    answeredCount,
    totalQuestions,
    secondsLeft,
    isTimeUp,
    goToPile,
    formatTime,
  } = useEas5Context();

  return (
    <MainWrapper pageTitle="EAS5">
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
              />
            ))}
          </div>
        </section>
      </div>
    </MainWrapper>
  );
};

export const Eas5Test = () => (
  <Eas5Provider>
    <Eas5TestInner />
  </Eas5Provider>
);
