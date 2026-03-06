import { MainWrapper } from "@/components/MainWrapper";
import { NavigationControls } from "./features/NavigationControls";
import { ProgressBar } from "./features/ProgressBar";
import { QuestionList } from "./features/QuestionList";
import { UnansweredAlert } from "./features/UnansweredAlert";
import { usePapiKostick } from "./hooks/usePapiKostick";

export const PapiKostickTest = () => {
  const {
    currentPage,
    totalPages,
    currentPageQuestions,
    answers,
    progress,
    answeredCount,
    totalQuestions,
    isFirstPage,
    isLastPage,
    isCompleted,
    unansweredIds,
    selectAnswer,
    goNext,
    goPrev,
    goToPage,
  } = usePapiKostick();

  const handleSubmit = () => {
    // TODO: wire up submission logic (e.g. save to PocketBase)
    console.log("Submitted answers:", answers);
  };

  return (
    <MainWrapper pageTitle="Papi Kostick Test">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:gap-6">
        <ProgressBar
          progress={progress}
          answeredCount={answeredCount}
          totalCount={totalQuestions}
        />

        <QuestionList
          currentPage={currentPage}
          questions={currentPageQuestions}
          answers={answers}
          onSelectAnswer={selectAnswer}
        />

        {isLastPage && (
          <UnansweredAlert
            unansweredIds={unansweredIds}
            onJumpToPage={goToPage}
          />
        )}

        <NavigationControls
          currentPage={currentPage}
          totalPages={totalPages}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          isCompleted={isCompleted}
          onPrev={goPrev}
          onNext={goNext}
          onGoToPage={goToPage}
          onSubmit={handleSubmit}
        />
      </div>
    </MainWrapper>
  );
};
