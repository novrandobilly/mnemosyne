import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainWrapper } from "@/components/MainWrapper";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { cn } from "@/lib/tailwind-merge";

interface PracticeItem {
  left: string;
  right: string;
  isMatch: boolean;
}

const PRACTICE_QUESTIONS: PracticeItem[] = [
  { left: "100", right: "100", isMatch: true },
  { left: "38", right: "83", isMatch: false },
  { left: "68 E44", right: "68 E44", isMatch: true },
];

export const Eas4Introduction = () => {
  const navigate = useNavigate();
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, boolean | null>>({
    0: null,
    1: null,
    2: null,
  });

  const handlePracticeAnswer = (index: number, answer: boolean) => {
    setPracticeAnswers((prev) => ({ ...prev, [index]: answer }));
  };

  const allPracticeDone = Object.values(practiceAnswers).every((val) => val !== null);

  return (
    <MainWrapper pageTitle="EAS4 - Visual Speed & Accuracy">
      <div className="mx-auto max-w-3xl space-y-8">
        
        {/* Header Hero Section */}
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-100/50 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-sky-100/50 blur-[60px]" />
          
          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Instruksi Tes
            </div>
            
            <IntiDinamisText as="h1" size="24" weight="semibold" className="text-neutral-900 leading-tight">
              Visual Speed and Accuracy (EAS 4)
            </IntiDinamisText>
            
            <IntiDinamisText size="14" className="text-neutral-600 leading-relaxed max-w-2xl">
              Tes ini dirancang untuk mengukur kecepatan dan ketelitian visual Anda dalam mendeteksi kesamaan
              maupun perbedaan antara dua buah data. Anda akan disajikan pasangan data berupa angka, teks,
              dan simbol di kolom kiri dan kolom kanan.
            </IntiDinamisText>
          </div>
        </div>

        {/* Test Parameters Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>
            <IntiDinamisText size="12" className="text-neutral-400 uppercase tracking-wider font-semibold">Durasi Waktu</IntiDinamisText>
            <IntiDinamisText size="20" weight="bold" className="text-neutral-900 mt-1">5 Menit</IntiDinamisText>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
              </svg>
            </div>
            <IntiDinamisText size="12" className="text-neutral-400 uppercase tracking-wider font-semibold">Jumlah Soal</IntiDinamisText>
            <IntiDinamisText size="20" weight="bold" className="text-neutral-900 mt-1">150 Pasang Data</IntiDinamisText>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 0 1 2 2m0 4a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2m2 2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3m-3-4h.01M9 16h.01M9 12h.01M9 8h.01" />
              </svg>
            </div>
            <IntiDinamisText size="12" className="text-neutral-400 uppercase tracking-wider font-semibold">Shortcut Keyboard</IntiDinamisText>
            <IntiDinamisText size="20" weight="bold" className="text-neutral-900 mt-1">Tombol S & B</IntiDinamisText>
          </div>
        </div>

        {/* Instructions Steps */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
          <IntiDinamisText size="16" weight="semibold" className="text-neutral-900">
            Aturan & Cara Menjawab
          </IntiDinamisText>
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">1</span>
                <IntiDinamisText size="12" className="text-neutral-600">
                  Periksa data di sisi kiri dan sisi kanan dengan saksama.
                </IntiDinamisText>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">2</span>
                <IntiDinamisText size="12" className="text-neutral-600">
                  Tentukan apakah kedua data tersebut **SAMA PERSIS** atau **BERBEDA**.
                </IntiDinamisText>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">3</span>
                <IntiDinamisText size="12" className="text-neutral-600">
                  Pilih tombol **S** (Sama) atau tombol **B** (Berbeda) di layar.
                </IntiDinamisText>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">4</span>
                <IntiDinamisText size="12" className="text-neutral-600">
                  Anda juga dapat menggunakan keyboard: tekan tombol **S** untuk Sama, atau tombol **B** untuk Berbeda.
                </IntiDinamisText>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">5</span>
                <IntiDinamisText size="12" className="text-neutral-600">
                  Bila waktu habis (5 menit), tes akan otomatis terkirim. Usahakan menjawab secepat dan seteliti mungkin.
                </IntiDinamisText>
              </li>
            </ul>
          </div>
        </div>

        {/* Practice Section */}
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm space-y-4">
          <div>
            <IntiDinamisText size="16" weight="semibold" className="text-neutral-900">
              Latihan Mandiri
            </IntiDinamisText>
            <IntiDinamisText size="12" className="text-neutral-500 mt-1">
              Cobalah menjawab 3 soal contoh di bawah ini sebelum memulai tes yang sesungguhnya.
            </IntiDinamisText>
          </div>

          <div className="space-y-3">
            {PRACTICE_QUESTIONS.map((item, idx) => {
              const selected = practiceAnswers[idx];
              const isCorrect = selected === item.isMatch;
              
              return (
                <div 
                  key={idx} 
                  className={cn(
                    "flex flex-wrap items-center justify-between gap-4 rounded-xl border p-4 bg-white shadow-sm transition-all duration-300",
                    selected !== null 
                      ? (isCorrect ? "border-emerald-200 bg-emerald-50/20" : "border-rose-200 bg-rose-50/20")
                      : "border-neutral-200"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-400 w-5">#{idx + 1}</span>
                    <span className="font-mono text-sm font-semibold tracking-wider text-neutral-800">{item.left}</span>
                    <span className="text-neutral-300">|</span>
                    <span className="font-mono text-sm font-semibold tracking-wider text-neutral-800">{item.right}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handlePracticeAnswer(idx, false)}
                        className={cn(
                          "h-8 px-3 rounded-lg text-xs font-semibold transition-colors border",
                          selected === false
                            ? "bg-rose-600 text-white border-transparent"
                            : "bg-white text-neutral-600 hover:bg-neutral-50 border-neutral-200"
                        )}
                      >
                        B (Berbeda)
                      </button>
                      <button
                        type="button"
                        onClick={() => handlePracticeAnswer(idx, true)}
                        className={cn(
                          "h-8 px-3 rounded-lg text-xs font-semibold transition-colors border",
                          selected === true
                            ? "bg-emerald-600 text-white border-transparent"
                            : "bg-white text-neutral-600 hover:bg-neutral-50 border-neutral-200"
                        )}
                      >
                        S (Sama)
                      </button>
                    </div>

                    {/* Feedback Icon/Text */}
                    {selected !== null && (
                      <div className="flex items-center gap-1.5 pl-2">
                        {isCorrect ? (
                          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                            </svg>
                            Benar
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-rose-600 flex items-center gap-1">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                            </svg>
                            Salah
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Start Button */}
        <div className="flex flex-col items-center gap-3">
          <IntiDinamisButton
            variant="primary"
            className="w-full sm:w-64 py-3 text-sm font-semibold rounded-full shadow-md"
            onClick={() => navigate("/psikotes/eas4/test-start")}
          >
            Mulai Tes Sekarang
          </IntiDinamisButton>
          {!allPracticeDone && (
            <span className="text-[11px] text-neutral-400">
              * Disarankan untuk menyelesaikan semua latihan di atas sebelum mulai.
            </span>
          )}
        </div>
      </div>
    </MainWrapper>
  );
};
