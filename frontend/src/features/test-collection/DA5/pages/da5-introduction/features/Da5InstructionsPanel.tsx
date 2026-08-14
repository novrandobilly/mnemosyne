import { IntiDinamisText } from "@/components/IntiDinamisText";

export const Da5InstructionsPanel = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
      <IntiDinamisText
        as="h2"
        size="16"
        weight="bold"
        className="text-neutral-900 uppercase tracking-wide"
      >
        PETUNJUK :
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Dalam tes ini anda akan menghadapi sejumlah tanda yang terletak dalam
        kotak. Tanda-tanda tersebut dirubah mengikuti aturan-aturan tertentu
        yang dinyatakan dengan tanda-tanda didalam lingkaran atau wajik. Daftar
        aturan perubahan tanda tersebut terdapat dalam lembar perintah.
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        PERHATIKANLAH 10 MACAM PERINTAH TERSEBUT DIHALAMAN SEBELAH KIRI
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Setiap soal terdiri dari satu atau lebih tanda-tanda. Kerjakanlah selalu
        mulai dari tanda yang paling atas dan ikutilah perintah-perintah yang
        ada. Kemudian pilih salah satu dari lima pilihan jawaban yang tersedia
        disebelah kanan dari setiap soal.
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
  );
};
