import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import { useSt17Context } from "../../context/St17Context";

export function St17Header() {
  const { answeredCount, totalQuestions, secondsLeft, formatTime } =
    useSt17Context();

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
