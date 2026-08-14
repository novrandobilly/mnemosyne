import { IntiDinamisText } from "@/components/IntiDinamisText";

export const St7InstructionsPanel = () => {
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
        Pada tes ini Anda akan dihadapkan dengan sebuah pola lipatan kertas
        (jaring-jaring kubus) yang ditampilkan di sebelah kiri layar.
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Tugas Anda adalah menentukan kubus mana (pilihan A, B, C, atau D) yang
        dapat dibentuk dari pola lipatan tersebut. Jika tidak ada satupun
        pilihan yang cocok, pilih jawaban <strong>E</strong>.
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Perhatikan posisi, warna, dan arah setiap sisi pada pola dengan cermat
        sebelum menentukan jawaban Anda.
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
