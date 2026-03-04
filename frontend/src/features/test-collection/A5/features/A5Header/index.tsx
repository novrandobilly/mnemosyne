import { useA5Context } from "../../context/A5Context";
import { IntiDinamisText } from "@/components/IntiDinamisText";

export function A5Header() {
  const { timeDisplay, answeredCount, totalQuestions } = useA5Context();

  return (
    <div className="max-w-4xl sticky top-0 z-10 border-b border-neutral-200 bg-white px-4 py-3 shadow-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <IntiDinamisText
          size="14"
          weight="semibold"
          className="text-neutral-700"
        >
          A5 — Verbal Analogi
        </IntiDinamisText>
        <div className="flex items-center gap-4">
          <IntiDinamisText size="14" className="text-neutral-500">
            {answeredCount}/{totalQuestions} dijawab
          </IntiDinamisText>
          <span className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-sm font-medium text-neutral-800">
            {timeDisplay}
          </span>
        </div>
      </div>
    </div>
  );
}
