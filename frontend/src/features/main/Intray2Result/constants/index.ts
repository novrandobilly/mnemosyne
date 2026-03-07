import type { WorksheetRow } from "@/components/IntrayWorksheetTable";

export interface Intray2Data {
  kkRows: WorksheetRow[];
}

export const DUMMY_INTRAY2_DATA: Intray2Data = {
  kkRows: [
    {
      id: "r1",
      topikPermasalahan: "Permintaan revisi proposal anggaran dari CFO",
      tingkatKepentingan: "Sangat Penting",
      tindakanSolusi:
        "Jadwalkan pertemuan dengan CFO hari ini untuk mengklarifikasi poin revisi. Selesaikan dokumen revisi sebelum akhir pekan.",
      noMemo: "M-03",
    },
    {
      id: "r2",
      topikPermasalahan:
        "Keluhan pelanggan utama soal keterlambatan pengiriman",
      tingkatKepentingan: "Sangat Penting",
      tindakanSolusi:
        "Hubungi pelanggan secara langsung untuk meminta maaf dan berikan estimasi waktu baru. Koordinasi dengan tim logistik.",
      noMemo: "M-08",
    },
    {
      id: "r3",
      topikPermasalahan:
        "Jadwal pelatihan karyawan baru bentrok dengan rapat tim",
      tingkatKepentingan: "Penting",
      tindakanSolusi:
        "Reschedule pelatihan ke sesi sore. Konfirmasi ke HR dan peserta pelatihan via email hari ini.",
      noMemo: "M-05",
    },
    {
      id: "r4",
      topikPermasalahan: "Server laporan internal down sejak dini hari",
      tingkatKepentingan: "Penting",
      tindakanSolusi:
        "Eskalasi ke tim IT agar diprioritaskan. Gunakan backup cloud sementara untuk kebutuhan laporan mendesak.",
      noMemo: "M-01",
    },
    {
      id: "r5",
      topikPermasalahan: "Permintaan izin presentasi dari vendor baru",
      tingkatKepentingan: "Kurang Penting",
      tindakanSolusi:
        "Jadwalkan di akhir minggu depan. Minta vendor kirim materi terlebih dahulu untuk direview sebelum pertemuan.",
      noMemo: "M-12",
    },
  ],
};
