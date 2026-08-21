import { type DrItem, type DrAnswer } from "@/data/dr/index";
import { useDrContext } from "../../../../context/DrContext";
import { cn } from "@/lib/tailwind-merge";

const OPTION_LABELS: DrAnswer[] = ["A", "B", "C", "D", "E"];

interface Props {
  item: DrItem;
}

export function DrQuestionRow({ item }: Props) {
  const { answers, selectAnswer, isTimeUp } = useDrContext();
  const selected = answers[item.id];

  return (
    <div>
      <div className="flex items-start gap-4">
        {/* Question Number */}
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
          {item.id}
        </span>

        {/* Side-by-side: Problem on Left, Options + Buttons on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1 items-start">
          {/* Left: Problem Pattern */}
          <div className="w-full overflow-hidden bg-transparent">
            <img
              src={item.problemImageUrl}
              alt={`Soal DR ${item.id}`}
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right: Options Strip & Selection Buttons */}
          <div className="w-full space-y-1.5">
            <div className="w-full overflow-hidden bg-transparent">
              <img
                src={item.optionsImageUrl}
                alt={`Pilihan DR ${item.id}`}
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 5 evenly distributed option buttons aligning with the 5 option slots */}
            <div className="grid grid-cols-5 gap-1 w-full px-0.5">
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
