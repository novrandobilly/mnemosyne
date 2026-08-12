import { MainWrapper } from "@/components/MainWrapper";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { useEas6ConfirmModal } from "../../hooks/useEas6ConfirmModal";
import { EAS6InstructionsPanel } from "./features/EAS6InstructionsPanel";
import { EAS6Example1 } from "./features/EAS6Example1";
import { EAS6Example2 } from "./features/EAS6Example2";
import { EAS6StartButton } from "./features/EAS6StartButton";

export const Eas6Introduction = () => {
  const { handleConfirmStart } = useEas6ConfirmModal();

  return (
    <MainWrapper pageTitle="Petunjuk EAS6">
      <div className="mx-auto max-w-4xl space-y-6">
        <EAS6InstructionsPanel />

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

          <div className="space-y-8 divide-y divide-neutral-100">
            <EAS6Example1 />
            <EAS6Example2 />
          </div>
        </div>

        <EAS6StartButton onClick={handleConfirmStart} />
      </div>
    </MainWrapper>
  );
};
