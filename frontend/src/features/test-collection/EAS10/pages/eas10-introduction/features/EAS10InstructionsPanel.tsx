import { IntiDinamisText } from "@/components/IntiDinamisText";

const SYMBOLS = [
  { char: "=", meaning: "SAMA DENGAN" },
  { char: ">", meaning: "LEBIH BESAR DARI" },
  { char: "<", meaning: "LEBIH KECIL DARI" },
  { char: "≠", meaning: "TIDAK SAMA DENGAN" },
  { char: "≤", meaning: "LEBIH KECIL ATAU SAMA DENGAN" },
  { char: "≥", meaning: "LEBIH BESAR ATAU SAMA DENGAN" },
];

export const EAS10InstructionsPanel = () => {
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
        Anda akan dihadapkan pada serangkaian pernyataan yang menggunakan tanda
        matematis berikut ini:
      </IntiDinamisText>

      {/* Symbols Table */}
      <div className="mx-auto max-w-lg bg-neutral-50/50 p-4">
        <div className="flex flex-col gap-2.5 font-mono text-sm">
          {SYMBOLS.map(({ char, meaning }) => (
            <div key={char} className="flex items-center">
              <span className="w-12 text-center text-lg font-bold text-neutral-800 shrink-0">
                {char}
              </span>
              <span className="text-neutral-400 text-xs shrink-0 mr-3">
                berarti
              </span>
              <span className="font-sans font-semibold text-neutral-700 uppercase tracking-wide">
                {meaning}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-100 pt-4">
        <IntiDinamisText
          size="14"
          className="text-neutral-500 italic leading-relaxed"
        >
          Jangan membalik kertas ini sebelum ada perintah untuk memulai.
        </IntiDinamisText>
        <IntiDinamisText
          size="14"
          className="text-neutral-500 italic leading-relaxed mt-1"
        >
          Berilah coretan miring satu kali pada pilihan jawaban Anda.
        </IntiDinamisText>
      </div>
    </div>
  );
};
