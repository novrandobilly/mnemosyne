import { MainWrapper } from "@/components/MainWrapper";
import { DiscNavigationControls } from "./features/DiscNavigationControls";
import { DiscProgressBar } from "./features/DiscProgressBar";
import { DiscQuestionList } from "./features/DiscQuestionList";
import { DiscUnansweredAlert } from "./features/DiscUnansweredAlert";
import { DiscProvider, useDiscContext } from "./context/DiscContext";

const DiscTestInner = () => {
  const { isLastPage } = useDiscContext();

  return (
    <MainWrapper pageTitle="DISC Test">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:gap-6">
        <DiscProgressBar />
        <DiscQuestionList />
        {isLastPage && <DiscUnansweredAlert />}
        <DiscNavigationControls />
      </div>
    </MainWrapper>
  );
};

export const DiscTest = () => (
  <DiscProvider>
    <DiscTestInner />
  </DiscProvider>
);
