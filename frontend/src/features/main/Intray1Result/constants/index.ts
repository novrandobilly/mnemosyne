import type { WorksheetRow } from "@/components/IntrayWorksheetTable";

export interface Intray1Data {
  kk1Rows: WorksheetRow[];
  kk2Rows: WorksheetRow[];
}

export const DUMMY_INTRAY1_DATA: Intray1Data = {
  kk1Rows: [
    {
      id: "r1",
      topikPermasalahan: "Laporan keuangan Q3 belum diserahkan ke direksi",
      tingkatKepentingan: "Sangat Penting",
      tindakanSolusi:
        "Menghubungi Pak Budi dari Finance untuk memastikan laporan selesai hari ini dan diteruskan ke direksi sebelum jam 17.00",
      noMemo: "M-04",
    },
    {
      id: "r2",
      topikPermasalahan: "Permintaan cuti mendadak dari 3 anggota tim produksi",
      tingkatKepentingan: "Penting",
      tindakanSolusi:
        "Setujui cuti 1 orang, tunda 2 orang hingga jadwal produksi bulanan selesai. Sampaikan alasan secara tertulis.",
      noMemo: "M-07",
    },
    {
      id: "r3",
      topikPermasalahan:
        "Vendor pengiriman menginformasikan keterlambatan 3 hari",
      tingkatKepentingan: "Sangat Penting",
      tindakanSolusi:
        "Koordinasi dengan tim logistik untuk mencari vendor alternatif. Kirim notifikasi ke klien terdampak hari ini.",
      noMemo: "M-11",
    },
    {
      id: "r4",
      topikPermasalahan: "Sistem absensi digital tidak berfungsi sejak pagi",
      tingkatKepentingan: "Kurang Penting",
      tindakanSolusi:
        "Gunakan absensi manual sementara. Minta IT untuk memperbaiki sebelum akhir hari kerja.",
      noMemo: "M-02",
    },
    {
      id: "r5",
      topikPermasalahan: "Undangan rapat mendadak dari HQ besok pagi jam 08.00",
      tingkatKepentingan: "Penting",
      tindakanSolusi:
        "Konfirmasi kehadiran. Siapkan ringkasan performa divisi Q3 sebagai bahan presentasi.",
      noMemo: "M-09",
    },
  ],
  kk2Rows: [
    {
      id: "k1",
      topikPermasalahan: "Laporan keuangan Q3 belum diserahkan ke direksi",
      tingkatKepentingan: "Sangat Penting",
      tindakanSolusi:
        "Prioritas utama karena berdampak langsung pada keputusan strategis direksi. Eskalasi segera ke Finance.",
      noMemo: "M-04",
    },
    {
      id: "k2",
      topikPermasalahan: "Keterlambatan vendor pengiriman 3 hari",
      tingkatKepentingan: "Sangat Penting",
      tindakanSolusi:
        "Cari vendor pengganti dan kirim pemberitahuan ke klien untuk menjaga kepercayaan dan mencegah pinalti kontrak.",
      noMemo: "M-11",
    },
    {
      id: "k3",
      topikPermasalahan: "Rapat mendadak HQ besok jam 08.00",
      tingkatKepentingan: "Penting",
      tindakanSolusi:
        "Persiapkan materi ringkasan Q3 malam ini agar siap presentasi tanpa mengganggu operasional harian besok.",
      noMemo: "M-09",
    },
  ],
};
