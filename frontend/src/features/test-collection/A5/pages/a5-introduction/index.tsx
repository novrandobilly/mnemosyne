import { MainWrapper } from "@/components/MainWrapper";
import { useA5ConfirmModal } from "../../hooks/useA5ConfirmModal";
import { A5InstructionsPanel } from "./features/A5InstructionsPanel";
import { A5Example } from "./features/A5Example";
import { A5StartButton } from "./features/A5StartButton";

export const A5Introduction = () => {
  const { handleConfirmStart } = useA5ConfirmModal();

  return (
    <MainWrapper pageTitle="Petunjuk A5">
      <div className="mx-auto max-w-4xl w-full space-y-6">
        <A5InstructionsPanel />
        <A5Example />
        <A5StartButton onClick={handleConfirmStart} />
      </div>
    </MainWrapper>
  );
};
export default A5Introduction;
