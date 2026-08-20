import { IntiDinamisText } from "@/components/IntiDinamisText";

export const A5InstructionsPanel = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
      <IntiDinamisText
        as="h2"
        size="16"
        weight="bold"
        className="text-neutral-900 uppercase tracking-wide"
      >
        INTRUKSI :
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Pada tes ini pada tiap-tiap soal akan Anda temukan satu buah kotak persegi panjang yang dibagi menjadi 4 (empat) bagian. Pada tiga bagian diisi masing-masing dengan 1 (satu) kata. Sedangkan satu kotak tetap kosong.
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Dua dari kata yang ada tersebut berhubungan satu sama lain. Baik itu memiliki KESAMAAN ARTI maupun BERLAWANAN ARTI. Anda diminta untuk menemukan kedua kata tersebut, kemudian menentukan sifat hubungannya, apakah memiliki kesamaan arti atau berlawanan arti.
      </IntiDinamisText>
      <IntiDinamisText size="14" className="text-neutral-700 leading-relaxed">
        Selanjutnya Anda diminta untuk menentukan salah satu kata dari lima pilihan jawaban yang tersedia sebagai pasangan bagi kata yang ketiga. Dalam hal ini, sifat hubungan kedua kata tersebut harus sesuai dengan hubungan antara dua kata sebelumnya.
      </IntiDinamisText>

      <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100">
        <IntiDinamisText
          size="14"
          weight="semibold"
          className="text-neutral-900"
        >
          Jangan memuai tes sebelum Anda membaca dan memahami petunjuk serta contoh pengerjaan di bawah ini.
        </IntiDinamisText>
      </div>
    </div>
  );
};
