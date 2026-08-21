import { MainWrapper } from "@/components/MainWrapper";
import { DrHeader } from "./features/DrHeader";
import { DrTimeUpBanner } from "./features/DrTimeUpBanner";
import { DrList } from "./features/DrList";

import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useDrFinishConfirmModal } from "../../hooks/useDrFinishConfirmModal";
import { DrProvider, useDrContext } from "../../context/DrContext";

function DrTestInner() {
  const { handleFinish, isSubmitting, answeredCount, totalQuestions } =
    useDrContext();
  const { handleConfirmFinish } = useDrFinishConfirmModal();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <DrHeader />
      <DrTimeUpBanner />
      <DrList />

      <div className="flex justify-end mt-4 mb-8">
        <IntiDinamisButton
          variant="primary"
          onClick={() =>
            handleConfirmFinish(handleFinish, answeredCount, totalQuestions)
          }
          disabled={isSubmitting}
        >
          {isSubmitting ? "Mengirim..." : "Selesai"}
        </IntiDinamisButton>
      </div>
    </div>
  );
}

export function DrTest() {
  return (
    <MainWrapper pageTitle="DR">
      <DrProvider>
        <DrTestInner />
      </DrProvider>
    </MainWrapper>
  );
}
export default DrTest;
