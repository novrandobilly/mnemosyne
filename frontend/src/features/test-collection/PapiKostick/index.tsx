import { MainWrapper } from "@/components/MainWrapper";
import { NavigationControls } from "./features/NavigationControls";
import { ProgressBar } from "./features/ProgressBar";
import { QuestionList } from "./features/QuestionList";
import { UnansweredAlert } from "./features/UnansweredAlert";
import {
  PapiKostickProvider,
  usePapiKostickContext,
} from "./context/FormContext";

const PapiKostickTestInner = () => {
  const { isLastPage } = usePapiKostickContext();

  return (
    <MainWrapper pageTitle="Papi Kostick Test">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:gap-6">
        <ProgressBar />
        <QuestionList />
        {isLastPage && <UnansweredAlert />}
        <NavigationControls />
      </div>
    </MainWrapper>
  );
};

export const PapiKostickTest = () => (
  <PapiKostickProvider>
    <PapiKostickTestInner />
  </PapiKostickProvider>
);
