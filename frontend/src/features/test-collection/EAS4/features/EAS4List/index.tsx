import { EAS4Row } from "../EAS4Row";
import { useEas4Context } from "../../context/Eas4Context";
import { useEas4FinishConfirmModal } from "../../hooks/useEas4FinishConfirmModal";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { eas4Data } from "@/data/eas4";

export const EAS4List = () => {
  const { handleFinish, isSubmitting, answeredCount, totalQuestions } =
    useEas4Context();
  const { handleConfirmFinish } = useEas4FinishConfirmModal();

  const handleFinishClick = () => {
    handleConfirmFinish(handleFinish, answeredCount, totalQuestions);
  };

  return (
    <div className="flex w-full flex-col max-w-sm items-center gap-6">
      <div className="flex w-full flex-col rounded-lg border border-neutral-200 bg-white shadow-sm">
        {eas4Data.map((item) => (
          <EAS4Row
            key={item.id}
            id={item.id}
            leftValue={item.leftValue}
            rightValue={item.rightValue}
          />
        ))}
      </div>

      <IntiDinamisButton
        variant="primary"
        className="w-full max-w-xs mb-8"
        onClick={handleFinishClick}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Mengirim..." : "Selesai"}
      </IntiDinamisButton>
    </div>
  );
};
