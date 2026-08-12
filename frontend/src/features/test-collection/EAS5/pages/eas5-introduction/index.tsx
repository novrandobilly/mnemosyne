import { MainWrapper } from "@/components/MainWrapper";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { useEas5ConfirmModal } from "../../hooks/useEas5ConfirmModal";
import { EAS5InstructionsPanel } from "./features/EAS5InstructionsPanel";
import { EAS5Example1 } from "./features/EAS5Example1";
import { EAS5Example2 } from "./features/EAS5Example2";
import { EAS5StartButton } from "./features/EAS5StartButton";

export const Eas5Introduction = () => {
  const { handleConfirmStart } = useEas5ConfirmModal();

  return (
    <MainWrapper pageTitle="Petunjuk EAS5">
      <div className="mx-auto max-w-4xl space-y-6">
        <EAS5InstructionsPanel />

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
            <EAS5Example1 />
            <EAS5Example2 />
          </div>
        </div>

        <EAS5StartButton onClick={handleConfirmStart} />
      </div>
    </MainWrapper>
  );
};
