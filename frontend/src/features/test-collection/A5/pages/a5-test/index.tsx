import { A5Header } from "../../features/A5Header";
import { A5TimeUpBanner } from "../../features/A5TimeUpBanner";
import { A5List } from "../../features/A5List";
import { MainWrapper } from "@/components/MainWrapper";

import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useA5FinishConfirmModal } from "../../hooks/useA5FinishConfirmModal";
import { A5Provider, useA5Context } from "../../context/A5Context";

function A5TestInner() {
  const { handleFinish, isSubmitting, answeredCount, totalQuestions } =
    useA5Context();
  const { handleConfirmFinish } = useA5FinishConfirmModal();

  return (
    <div className="flex flex-col max-w-4xl px-4 py-8 gap-6 w-full">
      <A5Header />
      <A5TimeUpBanner />
      <A5List />

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

export function A5Test() {
  return (
    <MainWrapper pageTitle="A5">
      <A5Provider>
        <div className="min-h-screen bg-neutral-50 flex justify-center">
          <A5TestInner />
        </div>
      </A5Provider>
    </MainWrapper>
  );
}

export default A5Test;
