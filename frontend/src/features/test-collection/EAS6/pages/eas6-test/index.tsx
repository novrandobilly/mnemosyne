import { MainWrapper } from "@/components/MainWrapper";
import { Eas6Provider, useEas6Context } from "../../context/Eas6Context";
import { EAS6Header } from "./features/EAS6Header";
import { EAS6TimeUpBanner } from "./features/EAS6TimeUpBanner";
import { EAS6QuestionList } from "./features/EAS6QuestionList";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useEas6FinishConfirmModal } from "../../hooks/useEas6FinishConfirmModal";

const Eas6TestInner = () => {
  const { handleFinish, isSubmitting, answeredCount, totalQuestions } =
    useEas6Context();
  const { handleConfirmFinish } = useEas6FinishConfirmModal();

  return (
    <MainWrapper pageTitle="EAS6">
      <div className="mx-auto flex max-w-4xl w-full flex-col gap-6">
        <EAS6Header />
        <EAS6TimeUpBanner />
        <EAS6QuestionList />

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
    </MainWrapper>
  );
};

export const Eas6Test = () => (
  <Eas6Provider>
    <Eas6TestInner />
  </Eas6Provider>
);
