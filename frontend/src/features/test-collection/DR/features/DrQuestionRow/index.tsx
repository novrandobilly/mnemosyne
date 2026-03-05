import { type DrItem } from "@/data/dr";
import { useDrContext } from "../../context/DrContext";
import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";

const OPTION_LABELS = ["A", "B", "C", "D", "E"] as const;

interface SequenceCellProps {
  src: string | null;
}

function SequenceCell({ src }: SequenceCellProps) {
  const isEmpty = src === null;
  return (
    <div
      className={cn(
        "flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border",
        isEmpty
          ? "border-dashed border-neutral-400 bg-neutral-900"
          : "border-neutral-200 bg-white",
      )}
    >
      {isEmpty ? (
        <span className="text-2xl font-light text-white">?</span>
      ) : (
        <img src={src} alt="sequence" className="h-full w-full object-cover" />
      )}
    </div>
  );
}

interface OptionCellProps {
  src: string;
  label: string;
  isSelected: boolean;
  disabled: boolean;
  onClick: () => void;
}

function OptionCell({
  src,
  label,
  isSelected,
  disabled,
  onClick,
}: OptionCellProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 rounded-lg border p-1 transition-colors",
        isSelected
          ? "border-neutral-900 bg-neutral-900 ring-2 ring-neutral-900 ring-offset-1"
          : "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50",
        disabled && "cursor-not-allowed opacity-60",
      )}
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center overflow-hidden rounded",
          isSelected && "opacity-90",
        )}
      >
        <img
          src={src}
          alt={`option ${label}`}
          className="h-full w-full object-cover"
        />
      </div>
      <IntiDinamisText
        size="12"
        weight="semibold"
        className={isSelected ? "text-white" : "text-neutral-500"}
      >
        {label}
      </IntiDinamisText>
    </button>
  );
}

interface Props {
  item: DrItem;
}

export function DrQuestionRow({ item }: Props) {
  const { answers, selectAnswer, isTimeUp } = useDrContext();
  const selected = answers[item.id];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
          {item.id}
        </span>
        <IntiDinamisText size="12" className="text-neutral-400">
          Pilih gambar yang melengkapi pola urutan
        </IntiDinamisText>
      </div>

      {/* Sequence */}
      <div className="mb-4 flex items-center gap-2">
        {item.sequence.map((src, idx) => (
          <SequenceCell key={idx} src={src} />
        ))}
      </div>

      {/* Divider */}
      <div className="mb-4 border-t border-dashed border-neutral-200" />

      {/* Options */}
      <div className="flex items-center gap-2">
        {item.options.map((src, idx) => {
          const label = OPTION_LABELS[idx];
          return (
            <OptionCell
              key={label}
              src={src}
              label={label}
              isSelected={selected === label}
              disabled={isTimeUp}
              onClick={() => selectAnswer(item.id, label)}
            />
          );
        })}
      </div>
    </div>
  );
}
