import IntiDinamisButton from "@/components/IntiDinamisButton";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { useToggleAllTests } from "@/features/AssessmentPanel/hooks/useToggleAllTests";
import type { FC } from "react";

export const BulkActions: FC = () => {
  const { mutate: toggleAllTests } = useToggleAllTests();

  return (
    <div className="flex flex-col flex-1 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <IntiDinamisText className="text-xs uppercase tracking-[0.25em] text-neutral-500">
        Bulk Actions
      </IntiDinamisText>
      <div className="mt-2 flex flex-col gap-2">
        <IntiDinamisButton onClick={() => toggleAllTests(true)}>
          Enable All
        </IntiDinamisButton>
        <IntiDinamisButton
          variant="secondary"
          onClick={() => toggleAllTests(false)}
        >
          Disable All
        </IntiDinamisButton>
      </div>
    </div>
  );
};
