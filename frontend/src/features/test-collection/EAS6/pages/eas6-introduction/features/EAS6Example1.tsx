import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";

export const EAS6Example1 = () => {
  const exampleRow = {
    id: 1,
    question: "1,  4,  7,  10,  13,  16,  19,  ?",
    options: ["20", "21", "22", "23", "24"],
    preSelected: "22",
  };

  return (
    <div className="space-y-4 py-4">
      <IntiDinamisText size="14" weight="semibold" className="text-neutral-700">
        Contoh 1 (Pre-filled):
      </IntiDinamisText>

      <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
              {exampleRow.id}
            </span>
            <IntiDinamisText
              as="p"
              size="20"
              weight="semibold"
              className="font-mono tracking-wide text-neutral-900"
            >
              {exampleRow.question}
            </IntiDinamisText>
          </div>

          <div className="flex flex-wrap gap-2">
            {exampleRow.options.map((option) => {
              const isSelected = exampleRow.preSelected === option;
              return (
                <button
                  key={option}
                  disabled
                  className={cn(
                    "flex min-w-14 items-center justify-center rounded-xl border px-3 py-1.5 transition-all duration-150 cursor-default relative overflow-hidden",
                    isSelected
                      ? "border-neutral-900 bg-neutral-900 text-white font-bold"
                      : "border-neutral-200 bg-neutral-50 text-neutral-400",
                  )}
                >
                  <span className="font-mono text-sm">{option}</span>
                  {/* Decorative diagonal strike-through like a handwritten cross-out */}
                  {isSelected && (
                    <div className="absolute inset-0 border-t-2 border-neutral-400 rotate-12 scale-x-125 origin-center opacity-30" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
