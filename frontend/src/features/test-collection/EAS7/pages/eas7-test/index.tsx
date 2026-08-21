import { MainWrapper } from "@/components/MainWrapper";
import { Eas7Provider, useEas7Context } from "../../context/Eas7Context";
import { EAS7Header } from "./features/EAS7Header";
import { EAS7TimeUpBanner } from "./features/EAS7TimeUpBanner";
import { EAS7GroupNav } from "./features/EAS7GroupNav";
import { EAS7Premises } from "./features/EAS7Premises";
import { EAS7QuestionList } from "./features/EAS7QuestionList";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useEas7FinishConfirmModal } from "../../hooks/useEas7FinishConfirmModal";

const Eas7TestInner = () => {
  const { handleFinish, isSubmitting, answeredCount, totalQuestions } =
    useEas7Context();
  const { handleConfirmFinish } = useEas7FinishConfirmModal();

  return (
    <MainWrapper pageTitle="EAS7">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <EAS7Header />
        <EAS7TimeUpBanner />
        <EAS7GroupNav />
        <EAS7Premises />
        <EAS7QuestionList />

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

export const Eas7Test = () => (
  <Eas7Provider>
    <Eas7TestInner />
  </Eas7Provider>
);
