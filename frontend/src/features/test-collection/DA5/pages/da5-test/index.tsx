import { MainWrapper } from "@/components/MainWrapper";
import { Da5Header } from "../../features/Da5Header";
import { Da5TimeUpBanner } from "../../features/Da5TimeUpBanner";
import { Da5QuestionView } from "../../features/Da5QuestionView";
import { Da5RulesDrawer } from "../../features/Da5RulesDrawer";

import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useDa5FinishConfirmModal } from "../../hooks/useDa5FinishConfirmModal";
import { Da5Provider, useDa5Context } from "../../context/Da5Context";

function Da5TestInner() {
  const {
    handleFinish,
    isSubmitting,
    answeredCount,
    totalQuestions,
    currentIndex,
  } = useDa5Context();
  const { handleConfirmFinish } = useDa5FinishConfirmModal();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <Da5Header />
      <Da5TimeUpBanner />
      {/* Rules / Guide accordion positioned directly above QuestionView */}
      <Da5RulesDrawer />
      <Da5QuestionView />

      <div className="flex justify-end mt-4 mb-8">
        {currentIndex === totalQuestions - 1 && (
          <IntiDinamisButton
            variant="primary"
            onClick={() =>
              handleConfirmFinish(handleFinish, answeredCount, totalQuestions)
            }
            disabled={isSubmitting}
          >
            {isSubmitting ? "Mengirim..." : "Selesai"}
          </IntiDinamisButton>
        )}
      </div>
    </div>
  );
}

export function Da5Test() {
  return (
    <MainWrapper pageTitle="DA5">
      <Da5Provider>
        <Da5TestInner />
      </Da5Provider>
    </MainWrapper>
  );
}
export default Da5Test;
