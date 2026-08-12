import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainWrapper } from "@/components/MainWrapper";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useModal } from "@/context/ModalContext";
import { cn } from "@/lib/tailwind-merge";
import example1Img from "@/assets/tests/eas5/example-1.png";
import example2Img from "@/assets/tests/eas5/example-2.png";

interface ExampleRow {
  block: "A" | "B" | "C" | "D" | "E";
  correctAnswer: number;
  preSelected?: number | null;
}

const EXAMPLE_1_ROWS: ExampleRow[] = [
  { block: "A", correctAnswer: 2, preSelected: 2 },
  { block: "B", correctAnswer: 3, preSelected: 3 },
  { block: "C", correctAnswer: 3, preSelected: 3 },
  { block: "D", correctAnswer: 4, preSelected: 4 },
  { block: "E", correctAnswer: 4, preSelected: 4 },
];

const EXAMPLE_2_ROWS: ExampleRow[] = [
  { block: "A", correctAnswer: 3 },
  { block: "B", correctAnswer: 1 },
  { block: "C", correctAnswer: 5 },
  { block: "D", correctAnswer: 2 },
  { block: "E", correctAnswer: 6 },
];

export const Eas5Introduction = () => {
  const navigate = useNavigate();
  const { showModal, closeModal } = useModal();

  // Track answers for Example 2 interactive rows
  const [interactiveAnswers, setInteractiveAnswers] = useState<
    Record<string, number | null>
  >({
    A: null,
    B: null,
    C: null,
    D: null,
    E: null,
  });

  const handleSelectAnswer = (block: string, value: number) => {
    setInteractiveAnswers((prev) => ({ ...prev, [block]: value }));
  };

  const handleStart = () => {
    sessionStorage.removeItem("eas5_progress");
    sessionStorage.removeItem("eas5_seconds_left");
    navigate("/psikotes/eas5/test-start");
    closeModal();
  };

  const handleConfirmStart = () => {
    showModal({
      content: (
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm space-y-4">
          <IntiDinamisText
            size="12"
            className="uppercase tracking-[0.3em] text-neutral-500"
          >
            Konfirmasi Mulai Tes
          </IntiDinamisText>
          <IntiDinamisText
            as="h2"
            size="20"
            weight="semibold"
            className="text-neutral-900"
          >
            Mulai Tes EAS5?
          </IntiDinamisText>
          <IntiDinamisText
            size="14"
            className="text-neutral-600 leading-relaxed"
          >
            Anda akan memulai tes{" "}
            <span className="font-semibold text-neutral-900">
              EAS5 - Space Visualization
            </span>
            . Waktu pengerjaan adalah{" "}
            <span className="font-semibold text-neutral-900">5 menit</span>.
            Setelah tes dimulai, timer tidak dapat dihentikan atau dijeda.
          </IntiDinamisText>
          <div className="flex justify-end gap-3 pt-2">
            <IntiDinamisButton variant="secondary" onClick={closeModal}>
              Batal
            </IntiDinamisButton>
            <IntiDinamisButton variant="primary" onClick={handleStart}>
              Mulai Sekarang
            </IntiDinamisButton>
          </div>
        </div>
      ),
    });
  };

  return (
    <MainWrapper pageTitle="Petunjuk EAS5">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Instructions Panel */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
          <IntiDinamisText
            as="h2"
            size="16"
            weight="bold"
            className="text-neutral-900 uppercase tracking-wide"
          >
            PETUNJUK :
          </IntiDinamisText>
          <IntiDinamisText
            size="14"
            className="text-neutral-700 leading-relaxed"
          >
            Anda akan dihadapkan pada serangkaian gambar berupa tumpukan balok
            yang besarnya sama persis satu sama lainnya. Pada beberapa balok
            diberi huruf A, B, C, D, dan E.
          </IntiDinamisText>
          <IntiDinamisText
            size="14"
            className="text-neutral-700 leading-relaxed"
          >
            Tugas Anda adalah menentukan berapa jumlah balok yang menempel baik
            satu sisi penuh atau sebagian dari salah satu sisinya pada
            masing-masing balok yang diberi huruf. Untuk balok yang hanya
            bersinggungan sudutnya tidak dianggap menempel.
          </IntiDinamisText>

          <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100">
            <IntiDinamisText
              size="14"
              weight="semibold"
              className="text-neutral-900"
            >
              Jangan membalik kertas ini sebelum ada perintah untuk memulai.
            </IntiDinamisText>
          </div>
        </div>

        {/* Examples Section */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-6">
          <IntiDinamisText
            as="h3"
            size="14"
            weight="bold"
            className="text-neutral-900 uppercase tracking-wide"
          >
            CONTOH :
          </IntiDinamisText>

          <div className="space-y-8 divide-y divide-neutral-100">
            {/* Example 1 */}
            <div className="grid grid-cols-1 gap-6 pt-2 lg:grid-cols-[280px_1fr]">
              <div className="flex items-center justify-center overflow-hidden rounded-xl border border-neutral-200 h-64 bg-neutral-50 p-4">
                <img
                  src={example1Img}
                  alt="Example Pile 1"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <IntiDinamisText
                  size="14"
                  weight="semibold"
                  className="text-neutral-700"
                >
                  Example 1 (Pre-filled):
                </IntiDinamisText>

                <div className="space-y-3">
                  {EXAMPLE_1_ROWS.map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold text-white font-mono">
                        {row.block}
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5">
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                          const isSelected = row.preSelected === num;
                          return (
                            <button
                              key={num}
                              disabled
                              className={cn(
                                "h-8 w-8 rounded-lg text-xs font-semibold border transition-colors cursor-default",
                                isSelected
                                  ? "bg-neutral-900 text-white border-neutral-900"
                                  : "bg-neutral-50 text-neutral-400 border-neutral-100",
                              )}
                            >
                              {num}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="grid grid-cols-1 gap-6 pt-6 lg:grid-cols-[280px_1fr]">
              <div className="flex items-center justify-center overflow-hidden rounded-xl border border-neutral-200 h-64 bg-neutral-50 p-4">
                <img
                  src={example2Img}
                  alt="Example Pile 2"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <IntiDinamisText
                    size="14"
                    weight="semibold"
                    className="text-neutral-700"
                  >
                    Latihan Mandiri (Example 2):
                  </IntiDinamisText>
                  <IntiDinamisText size="12" className="text-neutral-400 mt-1">
                    Cobalah menjawab soal-soal di bawah ini berdasarkan tumpukan
                    balok di sebelah kiri.
                  </IntiDinamisText>
                </div>

                <div className="space-y-3">
                  {EXAMPLE_2_ROWS.map((row, idx) => {
                    const selected = interactiveAnswers[row.block];
                    const isAnswered = selected !== null;
                    const isCorrect =
                      isAnswered && selected === row.correctAnswer;

                    return (
                      <div
                        key={idx}
                        className={cn(
                          "flex flex-wrap items-center justify-between gap-4 rounded-xl border p-3 bg-white shadow-sm transition-all duration-300",
                          isAnswered
                            ? isCorrect
                              ? "border-emerald-200 bg-emerald-50/10"
                              : "border-rose-200 bg-rose-50/10"
                            : "border-neutral-200",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold text-white font-mono">
                            {row.block}
                          </div>

                          <div className="flex flex-wrap items-center gap-1.5">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                              const isSelected = selected === num;
                              return (
                                <button
                                  key={num}
                                  type="button"
                                  onClick={() =>
                                    handleSelectAnswer(row.block, num)
                                  }
                                  className={cn(
                                    "h-8 w-8 rounded-lg text-xs font-semibold border transition-colors cursor-pointer",
                                    isSelected
                                      ? "bg-neutral-900 text-white border-neutral-900"
                                      : "bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50",
                                  )}
                                >
                                  {num}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Interactive feedback */}
                        {isAnswered && (
                          <div className="w-16 text-right pr-2">
                            {isCorrect ? (
                              <span className="text-xs font-semibold text-emerald-600">
                                Benar
                              </span>
                            ) : (
                              <span className="text-xs font-semibold text-rose-600">
                                Salah
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start button */}
        <div className="flex flex-col items-center pt-2">
          <IntiDinamisButton
            variant="primary"
            className="w-full sm:w-64 py-3 text-sm font-semibold rounded-full shadow-md"
            onClick={handleConfirmStart}
          >
            Mulai Tes
          </IntiDinamisButton>
        </div>
      </div>
    </MainWrapper>
  );
};
