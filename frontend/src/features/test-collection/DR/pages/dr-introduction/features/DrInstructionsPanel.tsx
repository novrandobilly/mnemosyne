import { IntiDinamisText } from "@/components/IntiDinamisText";

export const DrInstructionsPanel = () => {
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
        Pada tes ini, Anda akan melihat serangkaian urutan gambar (diagram/pola)
        yang berurutan dari kiri ke kanan. Salah satu posisi dari urutan gambar
        tersebut dikosongkan (diwakili oleh kotak hitam kosong).
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Tugas Anda adalah menemukan gambar yang tepat (dari pilihan A, B, C, D, atau E)
        untuk mengisi bagian yang kosong tersebut sehingga membentuk pola urutan yang logis.
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
