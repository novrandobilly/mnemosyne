import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import { useEas4Context } from "../../context/Eas4Context";

export const EAS4Header = () => {
  const { answeredCount, totalQuestions, secondsLeft, isTimeUp, formatTime } =
    useEas4Context();

  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const isLowTime = secondsLeft <= 60 && !isTimeUp;

  return (
    <div className="sticky top-0 z-10 mb-2 rounded-2xl border border-neutral-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm">
      {/* Row 1: Timer + Keyboard hint */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <IntiDinamisText
            size="12"
            className="uppercase tracking-[0.15em] text-neutral-400"
          >
            Waktu
          </IntiDinamisText>
          <IntiDinamisText
            size="20"
            weight="bold"
            className={cn(
              "tabular-nums",
              isTimeUp
                ? "text-rose-600"
                : isLowTime
                  ? "text-amber-500"
                  : "text-neutral-900",
            )}
          >
            {formatTime(secondsLeft)}
          </IntiDinamisText>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex h-5 items-center rounded border border-neutral-200 bg-neutral-50 px-1.5 font-mono text-[11px] text-neutral-500">
            B
          </span>
          <IntiDinamisText size="10" className="text-neutral-400">
            Berbeda
          </IntiDinamisText>
          <span className="inline-flex h-5 items-center rounded border border-neutral-200 bg-neutral-50 px-1.5 font-mono text-[11px] text-neutral-500">
            S
          </span>
          <IntiDinamisText size="10" className="text-neutral-400">
            Sama
          </IntiDinamisText>
        </div>
      </div>

      {/* Row 2: Progress bar */}
      <div className="mt-3 flex flex-col gap-1">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-neutral-900 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <IntiDinamisText size="10" className="text-right text-neutral-400">
          {answeredCount}/{totalQuestions}
        </IntiDinamisText>
      </div>
    </div>
  );
};
