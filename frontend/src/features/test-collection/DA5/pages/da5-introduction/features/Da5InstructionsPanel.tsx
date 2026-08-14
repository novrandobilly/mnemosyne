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
        Pada tes ini Anda akan melihat sebuah gambar stimulus/soal utama yang
        ditampilkan di bagian atas, serta 5 pilihan jawaban (A, B, C, D, dan E) di bagian bawah.
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Tugas Anda adalah memilih salah satu gambar dari pilihan A, B, C, D, atau E
        yang paling sesuai atau identik dengan pola gambar stimulus tersebut.
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
