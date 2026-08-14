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
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-6">
      {/* Header: Question number & Instruction */}
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-600">
          {item.id}
        </span>
        <IntiDinamisText size="14" className="text-neutral-500">
          Pilih gambar yang paling sesuai dengan pola stimulus
        </IntiDinamisText>
      </div>

      {/* Side-by-side Layout matching Intro: Stimulus on Left, 5 Options on Right */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] gap-12 items-start">
        {/* Stimulus Box */}
        <div className="space-y-1.5 flex flex-col items-start w-full">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Soal
          </span>
          <div className="w-full flex items-center justify-start">
            <img
              src={item.stimulusImageUrl}
              alt={`Stimulus soal ${item.id}`}
              className="w-full max-w-55 h-auto object-contain block"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* 5 Options Grid */}
        <div className="space-y-1.5 flex flex-col items-start w-full">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Pilihan
          </span>
          <div className="grid grid-cols-5 gap-2 w-full items-start">
            {item.optionImageUrls.map((url, idx) => {
              const label = OPTION_LABELS[idx];
              const isSelected = selected === label;

              return (
                <button
                  key={label}
                  disabled={isTimeUp}
                  onClick={() => selectAnswer(item.id, label)}
                  className={cn(
                    "flex cursor-pointer flex-col items-center justify-between gap-1.5 rounded-xl border-2 p-1.5 transition-all duration-200 w-full h-full",
                    isSelected
                      ? "border-emerald-400 bg-emerald-50 shadow-sm"
                      : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50",
                    isTimeUp && "cursor-not-allowed opacity-60",
                  )}
                >
                  <div className="w-full flex items-center justify-center flex-1">
                    <img
                      src={url}
                      alt={`Pilihan ${label}`}
                      className="w-full h-auto object-contain block"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-semibold shrink-0 mt-0.5",
                      isSelected ? "text-emerald-700" : "text-neutral-500",
                    )}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Prev / Next Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
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
