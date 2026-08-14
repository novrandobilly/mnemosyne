import { MainWrapper } from "@/components/MainWrapper";
import { useDa5ConfirmModal } from "../../hooks/useDa5ConfirmModal";
import { Da5InstructionsPanel } from "./features/Da5InstructionsPanel";
import { Da5Example } from "./features/Da5Example";
import { Da5StartButton } from "./features/Da5StartButton";

export const Da5Introduction = () => {
  const { handleConfirmStart } = useDa5ConfirmModal();

  return (
    <MainWrapper pageTitle="Petunjuk DA5">
      <div className="mx-auto max-w-4xl space-y-6">
        <Da5InstructionsPanel />
        <Da5Example />
        <Da5StartButton onClick={handleConfirmStart} />
      </div>
    </MainWrapper>
  );
};
export default Da5Introduction;
