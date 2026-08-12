import { MainWrapper } from "@/components/MainWrapper";
import { useEas7ConfirmModal } from "../../hooks/useEas7ConfirmModal";
import { EAS7InstructionsPanel } from "./features/EAS7InstructionsPanel";
import { EAS7Example1 } from "./features/EAS7Example1";
import { EAS7StartButton } from "./features/EAS7StartButton";

export const Eas7Introduction = () => {
  const { handleConfirmStart } = useEas7ConfirmModal();

  return (
    <MainWrapper pageTitle="Petunjuk EAS7">
      <div className="mx-auto max-w-2xl space-y-6">
        <EAS7InstructionsPanel />
        <EAS7Example1 />
        <EAS7StartButton onClick={handleConfirmStart} />
      </div>
    </MainWrapper>
  );
};
