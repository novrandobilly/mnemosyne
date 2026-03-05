import { da5Data } from "@/data/da5";
import { useDa5Context } from "../../context/Da5Context";
import { cn } from "@/lib/tailwind-merge";

export function Da5QuestionNav() {
  const { answers, currentIndex, goToIndex } = useDa5Context();

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
        Navigasi Soal
      </p>
      <div className="grid grid-cols-10 gap-1.5">
        {da5Data.map((item, idx) => {
          const isAnswered = answers[item.id] !== undefined;
          const isCurrent = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => goToIndex(idx)}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-colors",
                isCurrent
                  ? "bg-neutral-900 text-white"
                  : isAnswered
                    ? "border border-emerald-300 bg-emerald-50 text-emerald-700"
                    : "border border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50",
              )}
            >
              {item.id}
            </button>
          );
        })}
      </div>
    </div>
  );
}
