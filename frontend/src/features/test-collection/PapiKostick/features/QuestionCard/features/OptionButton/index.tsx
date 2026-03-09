import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";

export interface OptionButtonProps {
  label: "A" | "B";
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const OptionButton = ({
  label,
  text,
  isSelected,
  onSelect,
}: OptionButtonProps) => (
  <IntiDinamisButton
    onClick={onSelect}
    variant="secondary"
    size="sm"
    wrapChildrenWithText={false}
    className={cn(
      "min-w-0 flex flex-1 items-start justify-start gap-2.5 rounded-lg border p-2.5 text-left transition-colors duration-150 active:scale-[0.99] sm:gap-3 sm:rounded-xl sm:p-3",
      isSelected
        ? "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800"
        : "border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-300 hover:bg-neutral-100",
    )}
  >
    <IntiDinamisText
      as="span"
      size="10"
      weight="bold"
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full sm:h-6 sm:w-6 sm:text-xs",
        isSelected
          ? "border border-white/60 bg-white/15 text-white"
          : "border border-neutral-300 bg-white text-neutral-700",
      )}
    >
      {label}
    </IntiDinamisText>
    <IntiDinamisText
      as="span"
      size="14"
      className="leading-5 sm:text-sm sm:leading-relaxed"
    >
      {text}
    </IntiDinamisText>
  </IntiDinamisButton>
);
