import { useDrContext } from "../../context/DrContext";
import { IntiDinamisText } from "@/components/IntiDinamisText";

export function DrHeader() {
  const { timeDisplay, answeredCount, totalQuestions } = useDrContext();

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between rounded-2xl border border-neutral-200 bg-white/90 px-6 py-4 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col gap-0.5">
        <IntiDinamisText
          size="12"
          className="uppercase tracking-[0.2em] text-neutral-400"
        >
          Progress
        </IntiDinamisText>
        <IntiDinamisText
          size="16"
          weight="semibold"
          className="text-neutral-800"
        >
          {answeredCount}{" "}
          <span className="font-normal text-neutral-400">
            / {totalQuestions}
          </span>
        </IntiDinamisText>
      </div>

      <div className="flex flex-col items-end gap-0.5">
        <IntiDinamisText
          size="12"
          className="uppercase tracking-[0.2em] text-neutral-400"
        >
          Sisa Waktu
        </IntiDinamisText>
        <span className="font-mono text-lg font-semibold text-neutral-800">
          {timeDisplay}
        </span>
      </div>
    </div>
  );
}
