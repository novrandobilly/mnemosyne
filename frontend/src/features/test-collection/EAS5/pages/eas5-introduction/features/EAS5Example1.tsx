import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import example1Img from "@/assets/tests/eas5/example-1.png";

interface ExampleRow {
  block: "A" | "B" | "C" | "D" | "E";
  correctAnswer: number;
  preSelected?: number | null;
}

const EXAMPLE_1_ROWS: ExampleRow[] = [
  { block: "A", correctAnswer: 2, preSelected: 2 },
  { block: "B", correctAnswer: 3, preSelected: 3 },
  { block: "C", correctAnswer: 4, preSelected: 4 },
  { block: "D", correctAnswer: 4, preSelected: 4 },
  { block: "E", correctAnswer: 4, preSelected: 4 },
];

export const EAS5Example1 = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-2 lg:grid-cols-[280px_1fr]">
      <div className="flex items-center justify-center overflow-hidden rounded-xl border border-neutral-200 h-64 bg-neutral-50 p-4">
        <img
          src={example1Img}
          alt="Example Pile 1"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="space-y-4">
        <IntiDinamisText
          size="14"
          weight="semibold"
          className="text-neutral-700"
        >
          Example 1 (Pre-filled):
        </IntiDinamisText>

        <div className="space-y-3">
          {EXAMPLE_1_ROWS.map((row, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold text-white font-mono">
                {row.block}
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                  const isSelected = row.preSelected === num;
                  return (
                    <button
                      key={num}
                      disabled
                      className={cn(
                        "h-8 w-8 rounded-lg text-xs font-semibold border transition-colors cursor-default",
                        isSelected
                          ? "bg-neutral-900 text-white border-neutral-900"
                          : "bg-neutral-50 text-neutral-400 border-neutral-100",
                      )}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
