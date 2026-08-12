import { MainWrapper } from "@/components/MainWrapper";
import { useEas10ConfirmModal } from "../../hooks/useEas10ConfirmModal";
import { EAS10InstructionsPanel } from "./features/EAS10InstructionsPanel";
import { EAS10Example1 } from "./features/EAS10Example1";
import { EAS10StartButton } from "./features/EAS10StartButton";

export const Eas10Introduction = () => {
  const { handleConfirmStart } = useEas10ConfirmModal();

  return (
    <MainWrapper pageTitle="Petunjuk EAS10">
      <div className="mx-auto max-w-xl space-y-6">
        <EAS10InstructionsPanel />
        <EAS10Example1 />
        <EAS10StartButton onClick={handleConfirmStart} />
      </div>
    </MainWrapper>
  );
};
