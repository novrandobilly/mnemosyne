import {
  type St17Question,
  type St17Answer,
  ST17_NONE_OPTION_TEXT,
  ST17_NONE_OPTION_LABEL,
} from "@/data/st17";
import { useSt17Context } from "../../context/St17Context";
import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";

const IMAGE_LABELS = ["A", "B", "C", "D"] as const;

interface Props {
  question: St17Question;
}

export function St17QuestionRow({ question }: Props) {
  const { answers, selectAnswer, isTimeUp } = useSt17Context();
  const selected = answers[question.id];

  const handleSelect = (option: St17Answer) => {
    if (!isTimeUp) selectAnswer(question.id, option);
  };

  const selectedCls = "border-emerald-400 bg-emerald-50 shadow-sm";
  const unselectedCls =
    "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50";
  const disabledCls = "cursor-not-allowed opacity-60";
  const imgSelectedCls = "ring-2 ring-emerald-400 bg-emerald-50";
  const imgUnselectedCls = "hover:bg-neutral-50";

  return (
    <div className="border-b border-neutral-100 py-5 last:border-none">
      {/* Question number */}
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
          {question.id}
        </span>
        <IntiDinamisText size="12" className="text-neutral-400">
          Pilih kubus yang dapat dilipat dari pola di samping
        </IntiDinamisText>
      </div>

      {/* All 5 options in one row */}
      <div className="grid grid-cols-5 gap-2">
        {/* A–D image options */}
        {question.optionImageUrls.map((url, idx) => {
          const label = IMAGE_LABELS[idx] as St17Answer;
          const isSelected = selected === label;
          return (
            <button
              key={label}
              disabled={isTimeUp}
              onClick={() => handleSelect(label)}
              className={cn(
                "flex cursor-pointer flex-col items-center gap-1.5 rounded-xl p-2 transition-all",
                isSelected ? imgSelectedCls : imgUnselectedCls,
                isTimeUp && disabledCls,
              )}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={url}
                  alt={`Q${question.id} pilihan ${label}`}
                  className="h-20 w-20 object-cover"
                />
              </div>
              <span
                className={cn(
                  "text-xs font-semibold",
                  isSelected ? "text-emerald-700" : "text-neutral-500",
                )}
              >
                {label}
              </span>
            </button>
          );
        })}

        {/* E — text option */}
        {(() => {
          const isSelected = selected === ST17_NONE_OPTION_LABEL;
          return (
            <button
              disabled={isTimeUp}
              onClick={() => handleSelect(ST17_NONE_OPTION_LABEL as St17Answer)}
              className={cn(
                "flex cursor-pointer flex-col items-center justify-between gap-2 rounded-xl border-2 p-2 transition-all",
                isSelected ? selectedCls : unselectedCls,
                isTimeUp && disabledCls,
              )}
            >
              <div className="flex flex-1 items-center justify-center px-1 text-center">
                <IntiDinamisText
                  size="10"
                  className={
                    isSelected ? "text-emerald-700" : "text-neutral-500"
                  }
                >
                  {ST17_NONE_OPTION_TEXT}
                </IntiDinamisText>
              </div>
              <span
                className={cn(
                  "text-xs font-semibold",
                  isSelected ? "text-emerald-700" : "text-neutral-500",
                )}
              >
                E
              </span>
            </button>
          );
        })()}
      </div>
    </div>
  );
}
