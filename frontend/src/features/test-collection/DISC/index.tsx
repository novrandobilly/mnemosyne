import { MainWrapper } from "@/components/MainWrapper";
import { DiscNavigationControls } from "./features/DiscNavigationControls";
import { DiscProgressBar } from "./features/DiscProgressBar";
import { DiscQuestionList } from "./features/DiscQuestionList";
import { DiscUnansweredAlert } from "./features/DiscUnansweredAlert";
import { useDisc } from "./hooks/useDisc";

export const DiscTest = () => {
  const {
    currentPage,
    totalPages,
    currentPageQuestions,
    answers,
    progress,
    completedCount,
    totalQuestions,
    isFirstPage,
    isLastPage,
    isCompleted,
    incompleteIds,
    selectMost,
    selectLeast,
    goNext,
    goPrev,
    goToPage,
  } = useDisc();

  const handleSubmit = () => {
    // TODO: wire up submission logic (e.g. save to PocketBase)
    console.log("Submitted DISC answers:", answers);
  };

  return (
    <MainWrapper pageTitle="DISC Test">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:gap-6">
        <DiscProgressBar
          progress={progress}
          completedCount={completedCount}
          totalCount={totalQuestions}
        />

        <DiscQuestionList
          currentPage={currentPage}
          questions={currentPageQuestions}
          answers={answers}
          onSelectMost={selectMost}
          onSelectLeast={selectLeast}
        />

        {isLastPage && (
          <DiscUnansweredAlert
            incompleteIds={incompleteIds}
            onJumpToPage={goToPage}
          />
        )}

        <DiscNavigationControls
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
