import { type A5Item } from "@/data/a5";
import { useA5Context } from "../../context/A5Context";
import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";

const OPTION_LABELS = ["A", "B", "C", "D", "E"] as const;

interface CellProps {
  value: string | null;
}

function GridCell({ value }: CellProps) {
  const isEmpty = value === null;
  return (
    <div
      className={cn(
        "flex h-12 w-24 items-center justify-center border border-neutral-300 px-2 text-center",
        isEmpty
          ? "border-dashed border-neutral-400 bg-neutral-100"
          : "bg-white",
      )}
    >
      {isEmpty ? (
        <span className="text-xl font-light text-neutral-400">?</span>
      ) : (
        <IntiDinamisText size="14" weight="medium" className="text-neutral-800">
          {value}
        </IntiDinamisText>
      )}
    </div>
  );
}

interface Props {
  item: A5Item;
}

export function A5QuestionRow({ item }: Props) {
  const { answers, selectAnswer, isTimeUp } = useA5Context();
  const selected = answers[item.id];

  return (
    <div className="flex items-center gap-5 border-b border-neutral-100 py-4 last:border-none">
      {/* ID Badge */}
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
        {item.id}
      </span>

      {/* 2×2 Grid */}
      <div className="shrink-0">
        <div className="grid grid-cols-2 border-l border-t border-neutral-300">
          <div className="border-b border-r border-neutral-300">
            <GridCell value={item.grid.topLeft} />
          </div>
          <div className="border-b border-r border-neutral-300">
            <GridCell value={item.grid.topRight} />
          </div>
          <div className="border-b border-r border-neutral-300">
            <GridCell value={item.grid.bottomLeft} />
          </div>
          <div className="border-b border-r border-neutral-300">
            <GridCell value={item.grid.bottomRight} />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-3 gap-2">
        {item.options.map((option, idx) => {
          const label = OPTION_LABELS[idx];
          const isSelected = selected === option;
          return (
            <button
              key={label}
              disabled={isTimeUp}
              onClick={() => selectAnswer(item.id, option)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm transition-colors",
                isSelected
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50",
                isTimeUp && "cursor-not-allowed opacity-60",
              )}
            >
              <span className="text-xs font-semibold opacity-60">{label}</span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
