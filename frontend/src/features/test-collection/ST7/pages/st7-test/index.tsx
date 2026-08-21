import { MainWrapper } from "@/components/MainWrapper";
import { st7Data } from "@/data/st7";
import { St7Header } from "../../features/St7Header";
import { St7TimeUpBanner } from "../../features/St7TimeUpBanner";
import { St7PhaseSection } from "../../features/St7PhaseSection";

import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useSt7FinishConfirmModal } from "../../hooks/useSt7FinishConfirmModal";
import { St7Provider, useSt7Context } from "../../context/St7Context";

function St7TestInner() {
  const { handleFinish, isSubmitting, answeredCount, totalQuestions } =
    useSt7Context();
  const { handleConfirmFinish } = useSt7FinishConfirmModal();

  return (
    <div className="flex flex-col gap-6">
      <St7Header />
      <St7TimeUpBanner />
      {st7Data.map((phase) => (
        <St7PhaseSection key={phase.phase} phase={phase} />
      ))}

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

export function St7Test() {
  return (
    <MainWrapper pageTitle="ST7">
      <St7Provider>
        <St7TestInner />
      </St7Provider>
    </MainWrapper>
  );
}
