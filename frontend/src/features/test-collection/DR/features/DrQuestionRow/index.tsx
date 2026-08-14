import { type DrItem, type DrAnswer } from "@/data/dr";
import { useDrContext } from "../../context/DrContext";
import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";

const OPTION_LABELS: DrAnswer[] = ["A", "B", "C", "D", "E"];

interface Props {
  item: DrItem;
}

export function DrQuestionRow({ item }: Props) {
  const { answers, selectAnswer, isTimeUp } = useDrContext();
  const selected = answers[item.id];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm space-y-4">
      {/* Header: Question Number & Instruction */}
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
          {item.id}
        </span>
        <IntiDinamisText size="12" className="text-neutral-400">
          Tentukan gambar yang tepat untuk melengkapi deretan pola
        </IntiDinamisText>
      </div>

      {/* Side-by-side flex/grid row: Problem on Left, Options + Buttons on Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left: Problem Pattern */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Soal
          </span>
          <div className="w-full aspect-[5/1] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-1.5 flex items-center justify-center">
            <img
              src={item.problemImageUrl}
              alt={`Soal DR ${item.id} pola`}
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right: Options Strip & Selection Buttons */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Pilihan
          </span>
          <div className="space-y-2">
            <div className="w-full aspect-[5/1] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-1.5 flex items-center justify-center">
              <img
                src={item.optionsImageUrl}
                alt={`Pilihan jawaban DR ${item.id}`}
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 5 evenly distributed option buttons aligning with the 5 option slots */}
            <div className="grid grid-cols-5 gap-1.5">
              {OPTION_LABELS.map((label) => {
                const isSelected = selected === label;
                return (
                  <button
                    key={label}
                    disabled={isTimeUp}
                    onClick={() => selectAnswer(item.id, label)}
                    className={cn(
                      "flex cursor-pointer items-center justify-center rounded-lg border-2 py-1.5 text-xs font-semibold transition-all duration-200",
                      isSelected
                        ? "border-emerald-400 bg-emerald-50 text-emerald-700 shadow-sm"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50",
                      isTimeUp && "cursor-not-allowed opacity-60",
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
