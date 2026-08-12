import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainWrapper } from "@/components/MainWrapper";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useModal } from "@/context/ModalContext";
import { cn } from "@/lib/tailwind-merge";

interface ExampleItem {
  left: string;
  right: string;
  isMatch: boolean;
  preSelected?: "B" | "S" | null;
}

const EXAMPLE_ITEMS: ExampleItem[] = [
  { left: "792", right: "792", isMatch: true, preSelected: "S" },
  { left: "6123", right: "6132", isMatch: false, preSelected: "B" },
  { left: "$898", right: "$898", isMatch: true, preSelected: "S" },
  { left: "72.10AK", right: "72,10Ak", isMatch: false, preSelected: "B" },
  { left: "33333SE", right: "333333SE", isMatch: false },
  { left: "117!Re", right: "117!Re", isMatch: true },
  { left: "La.42", right: "La,24", isMatch: false },
  { left: "6696si", right: "6696si", isMatch: true },
  { left: "76%.32", right: "76%.23", isMatch: false },
];

export const Eas4Introduction = () => {
  const navigate = useNavigate();
  const { showModal, closeModal } = useModal();

  // Track answers for the interactive practice items (indices 4 to 8)
  const [answers, setAnswers] = useState<Record<number, "B" | "S" | null>>({
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  });

  const handleSelect = (index: number, choice: "B" | "S") => {
    if (index < 4) return;
    setAnswers((prev) => {
      const current = prev[index];
      return { ...prev, [index]: current === choice ? null : choice };
    });
  };

  const handleStart = () => {
    sessionStorage.removeItem("eas4_progress");
    sessionStorage.removeItem("eas4_seconds_left");
    navigate("/psikotes/eas4/test-start");
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
            Mulai Tes EAS4?
          </IntiDinamisText>
          {/* <IntiDinamisText size="14" className="text-neutral-600 leading-relaxed">
            Anda akan memulai tes <span className="font-semibold text-neutral-900">EAS4 - Visual Speed & Accuracy</span>. 
            Waktu pengerjaan adalah <span className="font-semibold text-neutral-900">5 menit</span>. 
            Setelah tes dimulai, timer tidak dapat dihentikan atau dijeda.
          </IntiDinamisText> */}
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
    <MainWrapper pageTitle="Petunjuk EAS4">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Instruction Section */}
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
            Anda akan dihadapkan pada serangkaian kombinasi angka, huruf, dan
            tanda baca tertentu. Tugas Anda adalah menentukan apakah kombinasi
            disebelah kiri sama persis dengan kombinasi di sebelah kanannya.
          </IntiDinamisText>

          <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100">
            <IntiDinamisText
              size="14"
              weight="semibold"
              className="text-neutral-900"
            >
              Jangan memulai tes ini sebelum ada perintah untuk memulai.
            </IntiDinamisText>
          </div>

          <div className="space-y-1.5 pt-2">
            <IntiDinamisText size="14" className="text-neutral-700">
              <span className="font-bold text-rose-600">B</span> &nbsp;=&nbsp;
              Berbeda
            </IntiDinamisText>
            <IntiDinamisText size="14" className="text-neutral-700">
              <span className="font-bold text-emerald-600">S</span>{" "}
              &nbsp;=&nbsp; Sama
            </IntiDinamisText>
          </div>
        </div>

        {/* Examples Section */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
          <IntiDinamisText
            as="h3"
            size="14"
            weight="bold"
            className="text-neutral-900 uppercase tracking-wide"
          >
            CONTOH :
          </IntiDinamisText>

          <div className="space-y-3">
            {EXAMPLE_ITEMS.map((item, index) => {
              const selectedValue =
                index < 4 ? item.preSelected : answers[index];
              const isDiff = selectedValue === "B";
              const isSame = selectedValue === "S";

              const isAnswered =
                selectedValue !== null && selectedValue !== undefined;
              const isCorrect =
                isAnswered &&
                ((selectedValue === "S" && item.isMatch) ||
                  (selectedValue === "B" && !item.isMatch));

              return (
                <div
                  key={index}
                  className={cn(
                    "flex flex-wrap items-center justify-between gap-4 rounded-xl border p-4 bg-white shadow-sm transition-all duration-300",
                    isAnswered
                      ? isCorrect
                        ? "border-emerald-200 bg-emerald-50/10"
                        : "border-rose-200 bg-rose-50/10"
                      : "border-neutral-200",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-400 w-5">
                      #{index + 1}
                    </span>
                    <span className="font-mono text-sm font-semibold tracking-wider text-neutral-800">
                      {item.left}
                    </span>
                    <span className="text-neutral-300">|</span>
                    <span className="font-mono text-sm font-semibold tracking-wider text-neutral-800">
                      {item.right}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        disabled={index < 4}
                        onClick={() => handleSelect(index, "B")}
                        className={cn(
                          "h-7 w-12 rounded-md text-xs font-semibold transition-colors border",
                          isDiff
                            ? "bg-rose-600 text-white border-rose-600"
                            : "bg-neutral-100 text-neutral-600 border-transparent hover:bg-neutral-200",
                          index < 4
                            ? "cursor-default opacity-85"
                            : "cursor-pointer",
                        )}
                        aria-label="Different"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        disabled={index < 4}
                        onClick={() => handleSelect(index, "S")}
                        className={cn(
                          "h-7 w-12 rounded-md text-xs font-semibold transition-colors border",
                          isSame
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-neutral-100 text-neutral-600 border-transparent hover:bg-neutral-200",
                          index < 4
                            ? "cursor-default opacity-85"
                            : "cursor-pointer",
                        )}
                        aria-label="Same"
                      >
                        S
                      </button>
                    </div>

                    {/* Interactive feedback label */}
                    {index >= 4 && isAnswered && (
                      <div className="w-16 pl-2">
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
                    {index >= 4 && !isAnswered && <div className="w-16 pl-2" />}
                    {index < 4 && <div className="w-16 pl-2" />}
                  </div>
                </div>
              );
            })}
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
