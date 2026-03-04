import { useEffect, useRef } from "react";
import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";

export interface EAS4RowProps {
  id: number;
  leftValue: string;
  rightValue: string;
  selectedAnswer: boolean | undefined;
  isFocused: boolean;
  onSelect: (id: number, isSame: boolean) => void;
  onFocus: (id: number) => void;
}

export const EAS4Row = ({
  id,
  leftValue,
  rightValue,
  selectedAnswer,
  isFocused,
  onSelect,
  onFocus,
}: EAS4RowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFocused) {
      rowRef.current?.scrollIntoView({ block: "nearest", behavior: "instant" });
    }
  }, [isFocused]);

  const isAnswered = selectedAnswer !== undefined;
  const isSame = selectedAnswer === true;
  const isDiff = selectedAnswer === false;

  return (
    <div
      ref={rowRef}
      onClick={() => onFocus(id)}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-1.5 transition-colors",
        isFocused
          ? "bg-neutral-100 ring-1 ring-neutral-300"
          : "hover:bg-neutral-50",
      )}
    >
      {/* Row number */}
      <IntiDinamisText
        size="12"
        className="w-8 text-right tabular-nums text-neutral-400 pr-1"
      >
        {id}
      </IntiDinamisText>

      {/* Left value */}
      <IntiDinamisText
        size="14"
        className="min-w-0 flex-1 break-all font-mono text-neutral-800"
      >
        {leftValue}
      </IntiDinamisText>

      {/* Right value */}
      <IntiDinamisText
        size="14"
        className="min-w-0 flex-1 break-all font-mono text-neutral-800"
      >
        {rightValue}
      </IntiDinamisText>

      {/* Action buttons */}
      <div className="flex shrink-0 items-start gap-1.5 pt-0.5">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(id, false);
          }}
          className={cn(
            "h-7 w-7 rounded-md text-xs font-semibold transition-colors",
            isDiff
              ? "bg-rose-600 text-white"
              : isAnswered
                ? "bg-neutral-100 text-neutral-400 hover:bg-neutral-200"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
          )}
          aria-label="Different"
          aria-pressed={isDiff}
        >
          B
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(id, true);
          }}
          className={cn(
            "h-7 w-7 rounded-md text-xs font-semibold transition-colors",
            isSame
              ? "bg-emerald-600 text-white"
              : isAnswered
                ? "bg-neutral-100 text-neutral-400 hover:bg-neutral-200"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
          )}
          aria-label="Same"
          aria-pressed={isSame}
        >
          S
        </button>
      </div>
    </div>
  );
};
