import { da5Data } from "@/data/da5";
import { useDa5Context } from "../../context/Da5Context";
import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";

const OPTION_LABELS = ["A", "B", "C", "D", "E"] as const;

export function Da5QuestionView() {
  const {
    answers,
    selectAnswer,
    isTimeUp,
    currentIndex,
    goNext,
    goPrev,
    totalQuestions,
  } = useDa5Context();

  const item = da5Data[currentIndex];
  const selected = answers[item.id];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      {/* Question number */}
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-600">
          {item.id}
        </span>
        <IntiDinamisText size="14" className="text-neutral-500">
          Pilih gambar yang paling sesuai dengan pola
        </IntiDinamisText>
      </div>

      {/* Stimulus image */}
      <div className="mb-6 flex justify-center">
        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <img
            src={item.stimulusImageUrl}
            alt={`Stimulus soal ${item.id}`}
            className="h-64 w-64 object-cover"
          />
        </div>
      </div>

      {/* Options grid */}
      <div className="mb-6 grid grid-cols-5 gap-3">
        {item.optionImageUrls.map((url, idx) => {
          const label = OPTION_LABELS[idx];
          const isSelected = selected === label;
          return (
            <button
              key={label}
              disabled={isTimeUp}
              onClick={() => selectAnswer(item.id, label)}
              className={cn(
                "flex flex-col items-center gap-2 rounded-xl border-2 p-2 transition-all",
                isSelected
                  ? "border-neutral-900 bg-neutral-900 shadow-lg"
                  : "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50",
                isTimeUp ? "cursor-not-allowed opacity-60" : "cursor-pointer",
              )}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={url}
                  alt={`Option ${label}`}
                  className="h-24 w-24 object-cover"
                />
              </div>
              <span
                className={cn(
                  "text-xs font-semibold",
                  isSelected ? "text-white" : "text-neutral-500",
                )}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={cn(
            "rounded-lg border px-5 py-2 text-sm font-medium transition-colors",
            currentIndex === 0
              ? "cursor-not-allowed border-neutral-100 bg-neutral-50 text-neutral-300"
              : "cursor-pointer border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50",
          )}
        >
          ← Sebelumnya
        </button>

        <IntiDinamisText size="12" className="text-neutral-400">
          {currentIndex + 1} / {totalQuestions}
        </IntiDinamisText>

        <button
          onClick={goNext}
          disabled={currentIndex === totalQuestions - 1}
          className={cn(
            "rounded-lg border px-5 py-2 text-sm font-medium transition-colors",
            currentIndex === totalQuestions - 1
              ? "cursor-not-allowed border-neutral-100 bg-neutral-50 text-neutral-300"
              : "cursor-pointer border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50",
          )}
        >
          Berikutnya →
        </button>
      </div>
    </div>
  );
}
