import { MainWrapper } from "@/components/MainWrapper";
import { Eas10Provider, useEas10Context } from "../../context/Eas10Context";
import { EAS10Header } from "./features/EAS10Header";
import { EAS10TimeUpBanner } from "./features/EAS10TimeUpBanner";
import { EAS10List } from "./features/EAS10List";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useEas10FinishConfirmModal } from "../../hooks/useEas10FinishConfirmModal";

const Eas10TestInner = () => {
  const { handleFinish, isSubmitting, answeredCount, totalQuestions } =
    useEas10Context();
  const { handleConfirmFinish } = useEas10FinishConfirmModal();

  return (
    <MainWrapper pageTitle="EAS10">
      <div className="w-full flex justify-center">
        <div className="flex max-w-xl flex-col gap-6 w-full">
          <EAS10Header />
          <EAS10TimeUpBanner />
          <EAS10List />

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
      </div>
    </MainWrapper>
  );
};

export const Eas10Test = () => (
  <Eas10Provider>
    <Eas10TestInner />
  </Eas10Provider>
);
