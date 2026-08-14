import { MainWrapper } from "@/components/MainWrapper";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { useSt7ConfirmModal } from "../../hooks/useSt7ConfirmModal";
import { St7InstructionsPanel } from "./features/St7InstructionsPanel";
import { St7Example } from "./features/St7Example";
import { St7StartButton } from "./features/St7StartButton";

export const St7Introduction = () => {
  const { handleConfirmStart } = useSt7ConfirmModal();

  return (
    <MainWrapper pageTitle="Petunjuk ST7">
      <div className="mx-auto max-w-7xl w-full space-y-6">
        <St7InstructionsPanel />

        {/* Examples Section */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-6">
          <IntiDinamisText
            as="h3"
            size="14"
            weight="bold"
            className="text-neutral-900 uppercase tracking-wide"
          >
            CONTOH :
          </IntiDinamisText>

          <St7Example />
        </div>

        <St7StartButton onClick={handleConfirmStart} />
      </div>
    </MainWrapper>
  );
};
