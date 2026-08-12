import { IntiDinamisText } from "@/components/IntiDinamisText";

export const EAS7InstructionsPanel = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
      <IntiDinamisText
        size="16"
        weight="bold"
        className="text-neutral-900 uppercase tracking-wider"
      >
        PETUNJUK:
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-600 leading-relaxed">
        Anda akan dihadapkan pada serangkaian pernyataan. Anda diminta untuk memahami
        pernyataan tersebut dan mempelajari hubungan satu sama lainnya.
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-600 leading-relaxed">
        Tugas Anda pada setiap soal adalah menentukan apakah KESIMPULAN yang ada{" "}
        <strong className="text-neutral-900">BENAR (B)</strong>,{" "}
        <strong className="text-neutral-900">SALAH (S)</strong> atau{" "}
        <strong className="text-neutral-900">BELUM PASTI (?)</strong>.
      </IntiDinamisText>
      <div className="border-t border-neutral-100 pt-4">
        <IntiDinamisText size="14" className="text-neutral-500 italic leading-relaxed">
          Jangan membalik kertas ini sebelum ada perintah untuk memulai.
        </IntiDinamisText>
        <IntiDinamisText size="14" className="text-neutral-500 italic leading-relaxed mt-1">
          Berilah coretan miring satu kali pada pilihan jawaban Anda.
        </IntiDinamisText>
      </div>
    </div>
  );
};
