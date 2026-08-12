import { IntiDinamisText } from "@/components/IntiDinamisText";

export const EAS6InstructionsPanel = () => {
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
        Anda akan dihadapkan pada deretan angka. Pada setiap soal, deret angka
        tersebut memiliki pola perubahan tertentu yang berbeda-beda.
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Tugas Anda adalah menentukan angka terakhir pada setiap deret angka.
        Jika perlu, Anda dapat membuat coretan pada bagian persoalan untuk
        menemukan pola perubahannya.
      </IntiDinamisText>

      <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100 space-y-2">
        <IntiDinamisText
          size="14"
          weight="semibold"
          className="text-neutral-900"
        >
          Jangan membalik kertas ini sebelum ada perintah untuk memulai.
        </IntiDinamisText>
        <IntiDinamisText size="14" className="text-neutral-600 leading-relaxed">
          Berilah coretan miring satu kali pada pilihan jawaban Anda.
        </IntiDinamisText>
      </div>
    </div>
  );
};
