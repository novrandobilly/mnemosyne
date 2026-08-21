import { useState } from "react";
import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { Eas7Answer } from "@/data/eas7";

interface StaticRow {
  id: number;
  statement: string;
  selected: Eas7Answer;
}

interface InteractiveRow {
  id: number;
  statement: string;
  correctAnswer: Eas7Answer;
}

const PREMISES = [
  "Ella adalah seorang janda.",
  "Yeni bekerja pada perusahaan B",
  "Ella hanya mempunyai anak tunggal wanita",
  "Perusahaan A menghasilkan busi",
  "Perusahaan A tidak mempekerjakan wanita",
];

const STATIC_ROWS: StaticRow[] = [
  { id: 1, statement: "Ella adalah seorang Wanita.", selected: "benar" },
  { id: 2, statement: "Anak laki-laki Ella sakit.", selected: "salah" },
];

const INTERACTIVE_ROWS: InteractiveRow[] = [
  { id: 3, statement: "Ella bekerja pada perusahaan C", correctAnswer: "belum-pasti" },
  { id: 4, statement: "Ella belum pernah menikah", correctAnswer: "salah" },
  { id: 5, statement: "Ella memeriksa busi", correctAnswer: "belum-pasti" },
  { id: 6, statement: "Yeni adalah adik kandung Ella", correctAnswer: "belum-pasti" },
  { id: 7, statement: "Perusahaan Yeni menghasilkan busi", correctAnswer: "belum-pasti" },
];

const CHOICES: { value: Eas7Answer; label: string; title: string }[] = [
  { value: "benar", label: "B", title: "Benar" },
  { value: "salah", label: "S", title: "Salah" },
  { value: "belum-pasti", label: "?", title: "Belum Pasti" },
];

export const EAS7Example1 = () => {
  const [answers, setAnswers] = useState<Record<number, Eas7Answer | null>>({
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
  });

  const handleSelect = (id: number, value: Eas7Answer) => {
    setAnswers((prev) => {
      const current = prev[id];
      return { ...prev, [id]: current === value ? null : value };
    });
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-6">
      <div>
        <IntiDinamisText
          size="16"
          weight="bold"
          className="text-neutral-900 uppercase tracking-wider mb-4"
        >
          CONTOH:
        </IntiDinamisText>

        {/* Premises Box */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 mb-6">
          <IntiDinamisText
            size="12"
            weight="semibold"
            className="mb-3 uppercase tracking-[0.15em] text-neutral-400"
          >
            Pernyataan
          </IntiDinamisText>
          <ul className="flex flex-col gap-2">
            {PREMISES.map((premise, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                <IntiDinamisText
                  size="14"
                  className="leading-relaxed text-neutral-800"
                >
                  {premise}
                </IntiDinamisText>
              </li>
            ))}
          </ul>
        </div>

        {/* Conclusions Header */}
        <IntiDinamisText
          size="12"
          weight="semibold"
          className="mb-3 uppercase tracking-[0.15em] text-neutral-400"
        >
          Kesimpulan
        </IntiDinamisText>

        <div className="flex flex-col gap-4">
          {/* Static Rows (1 and 2) */}
          {STATIC_ROWS.map((row) => (
            <div
              key={row.id}
              className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4 sm:flex-row sm:items-center sm:gap-4"
            >
              <div className="flex items-start gap-2.5 sm:flex-1">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
                  {row.id}
                </span>
                <IntiDinamisText
                  size="14"
                  className="leading-relaxed text-neutral-800"
                >
                  {row.statement}
                </IntiDinamisText>
              </div>

              <div className="flex shrink-0 gap-2">
                {CHOICES.map(({ value, label, title }) => {
                  const isPreSelected = row.selected === value;
                  return (
                    <div
                      key={value}
                      title={title}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg border-2 text-sm font-bold select-none",
                        isPreSelected
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-200 bg-white text-neutral-400",
                      )}
                    >
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Interactive practice rows (3 to 7) */}
          {INTERACTIVE_ROWS.map((row) => {
            const selected = answers[row.id];
            const isAnswered = selected !== null;
            const isCorrect = selected === row.correctAnswer;

            return (
              <div
                key={row.id}
                className={cn(
                  "flex flex-col gap-3 rounded-xl border p-4 bg-white transition-all duration-300 sm:flex-row sm:items-center sm:gap-4",
                  isAnswered
                    ? isCorrect
                      ? "border-emerald-200 bg-emerald-50/10"
                      : "border-rose-200 bg-rose-50/10"
                    : "border-neutral-200",
                )}
              >
                <div className="flex items-start gap-2.5 sm:flex-1">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-500">
                    {row.id}
                  </span>
                  <IntiDinamisText
                    size="14"
                    className="leading-relaxed text-neutral-800"
                  >
                    {row.statement}
                  </IntiDinamisText>
                </div>

                <div className="flex items-center gap-4 justify-between sm:justify-end">
                  {/* Left of the options: Feedback Text */}
                  <div className="w-14 text-left pl-1 shrink-0">
                    {isAnswered && (
                      isCorrect ? (
                        <span className="text-xs font-semibold text-emerald-600">
                          Benar
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-rose-600">
                          Salah
                        </span>
                      )
                    )}
                  </div>

                  <div className="flex shrink-0 gap-2">
                    {CHOICES.map(({ value, label, title }) => {
                      const isSelected = selected === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          title={title}
                          onClick={() => handleSelect(row.id, value)}
                          className={cn(
                            "flex h-9 w-9 items-center justify-center rounded-lg border-2 text-sm font-bold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer",
                            isSelected
                              ? "border-neutral-900 bg-neutral-900 text-white"
                              : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50",
                          )}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
