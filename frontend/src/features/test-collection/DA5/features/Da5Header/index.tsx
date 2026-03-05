import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import { useDa5Context } from "../../context/Da5Context";

export function Da5Header() {
  const {
    answeredCount,
    totalQuestions,
    secondsLeft,
    formatTime,
    toggleRules,
  } = useDa5Context();

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

      <button
        onClick={toggleRules}
        className="cursor-pointer rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-100"
      >
        Lihat Aturan
      </button>

      <div className="flex flex-col items-end gap-0.5">
        <IntiDinamisText
          size="12"
          className="uppercase tracking-[0.2em] text-neutral-400"
        >
          Timer
        </IntiDinamisText>
        <IntiDinamisText
          size="24"
          weight="bold"
          className={cn(
            "font-mono tabular-nums",
            secondsLeft <= 60 ? "text-red-500" : "text-neutral-800",
          )}
        >
          {formatTime(secondsLeft)}
        </IntiDinamisText>
      </div>
    </div>
  );
}
