import { MainWrapper } from "@/components/MainWrapper";
import { useDrConfirmModal } from "../../hooks/useDrConfirmModal";
import { DrInstructionsPanel } from "./features/DrInstructionsPanel";
import { DrExample } from "./features/DrExample";
import { DrStartButton } from "./features/DrStartButton";

export const DrIntroduction = () => {
  const { handleConfirmStart } = useDrConfirmModal();

  return (
    <MainWrapper pageTitle="Petunjuk DR">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <DrInstructionsPanel />
        <DrExample />
        <DrStartButton onClick={handleConfirmStart} />
      </div>
    </MainWrapper>
  );
};
export default DrIntroduction;
