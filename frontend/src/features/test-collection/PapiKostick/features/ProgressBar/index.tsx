import { IntiDinamisText } from "@/components/IntiDinamisText";

import { usePapiKostickContext } from "../../context/FormContext";

export const ProgressBar = () => {
  const { progress, answeredCount, totalQuestions } = usePapiKostickContext();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <IntiDinamisText size="14" className="text-neutral-500">
          Progress
        </IntiDinamisText>
        <IntiDinamisText size="14" weight="medium" className="text-neutral-900">
          {answeredCount} / {totalQuestions} dijawab
        </IntiDinamisText>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
        <div
          className="h-full rounded-full bg-neutral-900 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
