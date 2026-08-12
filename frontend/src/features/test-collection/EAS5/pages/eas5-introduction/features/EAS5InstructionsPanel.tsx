import { IntiDinamisText } from "@/components/IntiDinamisText";

export const EAS5InstructionsPanel = () => {
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
        Anda akan dihadapkan pada serangkaian gambar berupa tumpukan balok yang
        besarnya sama persis satu sama lainnya. Pada beberapa balok diberi huruf
        A, B, C, D, dan E.
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Tugas Anda adalah menentukan berapa jumlah balok yang menempel baik satu
        sisi penuh atau sebagian dari salah satu sisinya pada masing-masing
        balok yang diberi huruf. Untuk balok yang hanya bersinggungan sudutnya
        tidak dianggap menempel.
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
