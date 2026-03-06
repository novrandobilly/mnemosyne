export type Intray1DocType = "cover" | "instructions" | "memo";

export interface Intray1Doc {
  id: string;
  type: Intray1DocType;
  title: string;
  content: string;
}

const SEP = "─".repeat(50);

function buildMemo(
  no: string,
  from: string,
  date: string,
  subject: string,
  body: string,
  senderName: string,
  senderTitle: string,
): string {
  return `${SEP}
MEMO INTERNAL — No. ${no}
${SEP}
Kepada   : Manajer Operasional (Yang Berwenang)
Dari     : ${from}
Tanggal  : ${date}
Perihal  : ${subject}
${SEP}

${body}

${SEP}
Hormat saya,

${senderName}
${senderTitle}
${SEP}`;
}

export const intray1Docs: Intray1Doc[] = [
  {
    id: "cover",
    type: "cover",
    title: "Surat Pengantar",
    content: `${SEP}
SURAT PENGANTAR
${SEP}

Jakarta, 13 Februari 2025

Kepada Yth.
Bapak/Ibu Peserta Asesmen
Di Tempat

Dengan hormat,

Selamat datang dalam simulasi tes In-Tray ini. Dalam tes ini, Anda berperan
sebagai Manajer Operasional PT. Nusantara Maju, sebuah perusahaan distribusi
produk konsumsi yang beroperasi secara nasional dengan lebih dari 500 karyawan.

Bapak Direktur Operasional Anda sedang dalam perjalanan dinas ke luar kota
selama 3 hari ke depan dan tidak dapat dihubungi secara langsung. Anda
menemukan tumpukan dokumen di meja kerja yang masuk dalam dua hari terakhir,
semuanya memerlukan perhatian dan tindak lanjut segera.

Tugas Anda adalah membaca, menganalisis, memprioritaskan, dan merencanakan
respons terhadap setiap dokumen tersebut. Semua keputusan sepenuhnya ada di
tangan Anda sebagai pejabat yang berwenang saat ini.

Hormat kami,

Tim Asesmen dan Pengembangan SDM
PT. Nusantara Maju
Gedung Nusantara, Jl. Sudirman Kav. 52
Jakarta Selatan 12190
${SEP}`,
  },
  {
    id: "instructions",
    type: "instructions",
    title: "Instruksi Tes",
    content: `${SEP}
INSTRUKSI PENGERJAAN TES IN-TRAY
${SEP}

1. LATAR BELAKANG
   Anda berperan sebagai Manajer Operasional PT. Nusantara Maju yang
   menggantikan Direktur Operasional selama 3 hari ke depan.

2. CARA PENGGUNAAN DOKUMEN
   Baca setiap dokumen pada panel referensi di sebelah kiri. Gunakan
   nomor memo sebagai referensi saat mengisi kertas kerja.

3. KERTAS KERJA 1 — ANALISIS PERMASALAHAN
   Identifikasi seluruh permasalahan dari dokumen. Untuk setiap isu isi:

   • Topik Permasalahan  : Ringkasan singkat isu utama
   • Tingkat Kepentingan : Tentukan urgensi
       — Sangat Penting  : Berdampak besar, harus ditangani hari ini
       — Penting         : Perlu ditangani dalam 1–2 hari ke depan
       — Kurang Penting  : Dapat ditunda atau didelegasikan
   • Tindakan / Solusi   : Langkah konkret yang akan Anda ambil
   • No. Memo            : Nomor referensi memo terkait

4. KERTAS KERJA 2 — PRIORITAS UTAMA
   Pilih 3 permasalahan paling kritis dan tuliskan rencana penanganan
   yang lebih komprehensif beserta pertimbangan strategisnya.

5. PENILAIAN
   Anda akan dinilai berdasarkan:
   — Kemampuan mengidentifikasi dan memprioritaskan masalah
   — Kualitas dan kelayakan solusi yang ditawarkan
   — Kejelasan dan struktur penulisan analisis

6. PETUNJUK TEKNIS
   — Klik "Buka Referensi" untuk membuka panel dokumen
   — Klik nama dokumen pada daftar untuk membacanya
   — Isi kertas kerja melalui tab yang tersedia
   — Klik "Submit Tes" bila sudah selesai

${SEP}`,
  },
  {
    id: "M-001",
    type: "memo",
    title: "M-001 — Keterlambatan Pengiriman",
    content: buildMemo(
      "M-001",
      "Hendra Kusuma, Kepala Gudang",
      "Senin, 10 Februari 2025",
      "Keterlambatan Pengiriman ke PT. Abadi Makmur",
      `Dengan hormat, kami ingin melaporkan bahwa pengiriman produk Delivery Order
No. DO-2025-047 untuk PT. Abadi Makmur mengalami keterlambatan 5 hari kerja
dari jadwal yang disepakati. Keterlambatan ini disebabkan kerusakan mendadak
forklift utama di gudang Cikarang pada Sabtu malam, 8 Februari 2025.

Klien tersebut telah menghubungi perusahaan sebanyak tiga kali dan mengancam
membatalkan kontrak senilai Rp 2,3 miliar jika barang tidak tiba sebelum akhir
pekan ini. Kontrak yang berlaku mencantumkan klausul penalti keterlambatan
sebesar 2% per hari dari nilai pengiriman.

Kami telah mengidentifikasi dua opsi: menggunakan jasa ekspedisi premium
(estimasi biaya 35% lebih tinggi dari tarif normal) atau pengiriman darurat
menggunakan armada internal. Mohon arahan dan keputusan sebelum pukul 14.00
WIB hari ini agar proses dapat segera dijalankan.`,
      "Hendra Kusuma",
      "Kepala Gudang — Cikarang",
    ),
  },
  {
    id: "M-002",
    type: "memo",
    title: "M-002 — Keluhan Pelanggan VIP",
    content: buildMemo(
      "M-002",
      "Santi Wulandari, Customer Relations Manager",
      "Senin, 10 Februari 2025",
      "Keluhan Serius Pelanggan Platinum — PT. Global Ritel Indonesia",
      `Bapak Budi Santoso, Direktur PT. Global Ritel Indonesia (pelanggan kategori
Platinum), menghubungi kami tiga kali hari ini terkait temuan 240 unit produk
rusak kemasan dalam pengiriman terakhir senilai Rp 890 juta. Beliau kecewa
dengan kualitas pengemasan dan menyatakan hal ini merupakan kejadian ketiga
dalam enam bulan terakhir.

Beliau mengindikasikan akan memindahkan bisnisnya ke kompetitor jika tidak ada
respons formal beserta rencana kompensasi sebelum besok pagi. Kontrak aktif
dengan beliau mencakup komitmen pembelian Rp 12 miliar per tahun.

Berdasarkan SLA yang berlaku, kami wajib memberikan respons resmi dalam 24
jam. Tim QC sudah memulai investigasi penyebab kerusakan namun hasil baru
dapat tersedia besok siang. Diperlukan keputusan mengenai mekanisme kompensasi
sementara yang dapat segera dikomunikasikan kepada klien.`,
      "Santi Wulandari",
      "Customer Relations Manager",
    ),
  },
  {
    id: "M-003",
    type: "memo",
    title: "M-003 — Permohonan Lembur Tim Produksi",
    content: buildMemo(
      "M-003",
      "Djoko Prasetyo, Supervisor Produksi",
      "Selasa, 11 Februari 2025",
      "Permohonan Persetujuan Lembur — Tim Produksi",
      `Untuk memenuhi target produksi bulan Februari yang saat ini masih kurang 15%
dari kuota yang ditetapkan, kami memohon persetujuan lembur untuk 28 tenaga
produksi selama 3 hari (Rabu–Jumat, 12–14 Februari 2025), masing-masing 3 jam
lembur per hari.

Estimasi biaya tambahan yang diperlukan adalah sebesar Rp 47.600.000 (empat
puluh tujuh juta enam ratus ribu rupiah), sudah termasuk uang makan lembur
sesuai dengan ketentuan yang berlaku.

Jika permohonan ini tidak disetujui, target bulanan tidak akan tercapai dan
akan berdampak langsung pada komponen bonus kinerja seluruh anggota tim
produksi. Kami mohon keputusan diberikan selambat-lambatnya pukul 16.00 WIB
hari ini agar jadwal dapat diinformasikan kepada karyawan tepat waktu.`,
      "Djoko Prasetyo",
      "Supervisor Produksi — Divisi Manufaktur",
    ),
  },
  {
    id: "M-004",
    type: "memo",
    title: "M-004 — Kegagalan Server ERP",
    content: buildMemo(
      "M-004",
      "Andi Wijaya, IT Manager",
      "Selasa, 11 Februari 2025",
      "Kegagalan Server ERP Utama — Dampak Operasional Kritis",
      `Server ERP utama perusahaan mengalami kegagalan hardware sejak pukul 07.30
WIB hari ini. Akibatnya, seluruh modul sistem — termasuk inventory management,
invoicing, dan pelaporan keuangan — tidak dapat beroperasi. Semua transaksi
sementara harus dilakukan secara manual.

Tim IT sedang melakukan diagnosis mendalam dan memperkirakan butuh 48–72 jam
untuk pemulihan penuh ke kondisi normal. Dampak langsung mencakup penghentian
pemrosesan 47 pesanan yang sedang dalam antrian dan ketidakmampuan mencetak
dokumen pengiriman.

Terdapat opsi sewa cloud server darurat dari vendor rekanan dengan biaya Rp 28
juta yang dapat mempersingkat downtime menjadi hanya 8–12 jam. Kami memerlukan
keputusan segera mengenai opsi ini sebelum pukul 11.00 WIB agar proses
migrasi darurat dapat dimulai hari ini juga.`,
      "Andi Wijaya",
      "IT Manager",
    ),
  },
  {
    id: "M-005",
    type: "memo",
    title: "M-005 — Pengadaan Peralatan Urgent",
    content: buildMemo(
      "M-005",
      "Rudi Hartono, Manajer Logistik",
      "Selasa, 11 Februari 2025",
      "Permohonan Pengadaan Darurat — Conveyor Belt Lini Produksi B",
      `Dua unit conveyor belt di lini produksi B menunjukkan tanda keausan kritis
berdasarkan inspeksi rutin yang dilakukan kemarin. Kepala Teknik telah
memberikan rekomendasi tertulis bahwa kedua unit tersebut harus diganti
sesegera mungkin untuk mencegah kegagalan total.

Vendor rekanan kami, PT. Mekanik Jaya Abadi, telah memberikan penawaran
harga untuk dua unit pengganti senilai Rp 185.000.000 dengan estimasi
pengiriman dan pemasangan 3 hari kerja sejak purchase order diterbitkan.

Jika penggantian tidak dilakukan dalam minggu ini, lini produksi B berisiko
berhenti total. Lini B berkontribusi sebesar 40% dari total output perusahaan.
Kehilangan kapasitas ini akan memperburuk backlog produksi yang sudah ada dan
berpotensi melanggar komitmen pengiriman kepada beberapa klien utama.`,
      "Rudi Hartono",
      "Manajer Logistik & Distribusi",
    ),
  },
  {
    id: "M-006",
    type: "memo",
    title: "M-006 — Renegosiasi Kontrak Vendor",
    content: buildMemo(
      "M-006",
      "Putri Handayani, Manajer Procurement",
      "Rabu, 12 Februari 2025",
      "Negosiasi Kontrak Pemasok Bahan Baku — PT. Bahan Prima Sejahtera",
      `PT. Bahan Prima Sejahtera selaku pemasok bahan baku utama mengajukan kenaikan
harga sebesar 18% efektif 1 Maret 2025. Kenaikan ini mereka justifikasi dengan
fluktuasi nilai tukar rupiah dan kenaikan harga komoditas di pasar global dalam
tiga bulan terakhir.

Jika kenaikan diterima tanpa negosiasi, biaya produksi bulanan perusahaan akan
meningkat sekitar Rp 420.000.000. Tiga vendor alternatif telah diidentifikasi
oleh tim procurement, namun masing-masing membutuhkan lead time 4–6 minggu
untuk proses onboarding dan uji kualitas bahan baku.

Jadwal negosiasi terakhir dengan pihak vendor dijadwalkan pada Jumat, 14
Februari 2025 pukul 10.00 WIB. Kami memerlukan arahan strategi negosiasi dan
batas toleransi kenaikan harga yang dapat disetujui, serta mengetahui apakah
manajemen ingin mulai memproses salah satu vendor alternatif sebagai langkah
antisipasi.`,
      "Putri Handayani",
      "Manajer Procurement",
    ),
  },
  {
    id: "M-007",
    type: "memo",
    title: "M-007 — Keluhan Internal Karyawan",
    content: buildMemo(
      "M-007",
      "Mega Puspita, HR Manager",
      "Rabu, 12 Februari 2025",
      "Keluhan Formal Karyawan — Sistem Shift Baru Divisi Distribusi",
      `Lima karyawan senior dari divisi distribusi telah mengajukan keluhan formal
tertulis kepada HRD terkait penerapan sistem shift baru yang diberlakukan sejak
1 Februari 2025. Mereka berargumen bahwa sistem baru tersebut bertentangan
dengan perjanjian kerja bersama (PKB) yang masih berlaku hingga Desember 2025.

Secara prosedural, HRD wajib menindaklanjuti keluhan formal ini dalam 7 hari
kerja sejak tanggal penerimaan surat. Jika tidak ada mediasi yang memuaskan,
para karyawan tersebut telah mengindikasikan kemungkinan eskalasi melalui
jalur serikat pekerja.

Terdapat potensi aksi unjuk rasa atau mogok kerja yang dapat mengganggu
operasional distribusi secara signifikan. Kami memerlukan panduan dari Manajer
Operasional mengenai apakah kebijakan shift baru ini perlu ditinjau ulang atau
apakah perlu segera dijadwalkan sesi mediasi dengan perwakilan karyawan.`,
      "Mega Puspita",
      "HR Manager",
    ),
  },
  {
    id: "M-008",
    type: "memo",
    title: "M-008 — Permintaan Anggaran Darurat",
    content: buildMemo(
      "M-008",
      "Fajar Nugroho, Finance Controller",
      "Rabu, 12 Februari 2025",
      "Permintaan Persetujuan Anggaran Darurat — Operasional Minggu Ini",
      `Terdapat kebutuhan dana darurat sebesar Rp 350.000.000 di luar anggaran
operasional yang telah disetujui untuk bulan Februari. Kebutuhan ini muncul
akibat kombinasi biaya lembur yang belum terduga, penalti keterlambatan
pengiriman, dan biaya perbaikan peralatan yang mendesak.

Jika persetujuan tidak didapatkan dalam 24 jam, kantor tidak akan dapat
membayar gaji tepat waktu untuk 142 karyawan harian yang jadwal pembayarannya
jatuh pada Kamis sore, 13 Februari 2025. Penundaan pembayaran gaji berpotensi
menimbulkan masalah moral dan kepercayaan karyawan secara luas.

Sesuai kebijakan internal, persetujuan anggaran darurat di atas Rp 200 juta
membutuhkan tanda tangan minimal dua pejabat setingkat Manajer Senior atau
Direktur. Mohon koordinasi dengan bagian keuangan dan konfirmasi mekanisme
persetujuan yang dapat segera dijalankan dalam kondisi ini.`,
      "Fajar Nugroho",
      "Finance Controller",
    ),
  },
  {
    id: "M-009",
    type: "memo",
    title: "M-009 — Peluang Klien Baru",
    content: buildMemo(
      "M-009",
      "Yusuf Hakim, Sales & Marketing Manager",
      "Rabu, 12 Februari 2025",
      "Peluang Kemitraan Strategis — PT. Supermarket Nusantara",
      `PT. Supermarket Nusantara, jaringan ritel modern dengan 87 gerai aktif di
seluruh Pulau Jawa dan Bali, telah menghubungi tim sales kami dan menyatakan
ketertarikan untuk menjajaki kerjasama distribusi eksklusif. Nilai estimasi
kontrak tahunan adalah Rp 45 miliar.

Pihak mereka meminta presentasi proposal lengkap tidak lebih dari Kamis, 13
Februari 2025 pukul 10.00 WIB di kantor mereka di Jakarta Barat. Tim sales
sudah mempersiapkan draft proposal namun membutuhkan persetujuan akhir dari
manajemen terkait pricing strategy dan kapasitas produksi yang dapat
dikonfirmasikan kepada calon klien.

Kesempatan ini sangat strategis mengingat nilai kontraknya melebihi gabungan
pendapatan dari lima klien medium kami saat ini. Namun perlu dikaji apakah
kapasitas operasional saat ini mampu menopang komitmen eksklusif tersebut
tanpa mengorbankan klien-klien yang sudah ada.`,
      "Yusuf Hakim",
      "Sales & Marketing Manager",
    ),
  },
  {
    id: "M-010",
    type: "memo",
    title: "M-010 — Insiden Keselamatan Kerja",
    content: buildMemo(
      "M-010",
      "Bambang Eko, Koordinator K3 (Keselamatan & Kesehatan Kerja)",
      "Kamis, 13 Februari 2025",
      "Laporan Insiden Keselamatan Kerja — Gudang B",
      `Terjadi insiden kecelakaan kerja di area packing Gudang B pada pukul 10.15
WIB hari ini. Seorang karyawan bernama Sdr. Agus Salim (ID: NSM-1847) mengalami
luka pada tangan kanan akibat terjepit mesin packing otomatis yang sedang dalam
kondisi beroperasi.

Karyawan yang bersangkutan telah dibawa ke klinik kerja sama dan membutuhkan
istirahat selama 3–5 hari kerja. Mesin yang terlibat sudah dihentikan
sementara untuk keperluan investigasi dan pengecekan keamanan oleh tim teknik.

Sesuai Peraturan Pemerintah No. 44 Tahun 2015 dan regulasi Kemnaker yang
berlaku, insiden dengan luka fisik ini wajib dilaporkan secara tertulis kepada
Dinas Ketenagakerjaan setempat dalam 2x24 jam. Diperlukan arahan apakah
perusahaan akan mengajukan klaim BPJS Ketenagakerjaan dan langkah pencegahan
apa yang perlu segera diambil untuk mencegah kejadian serupa.`,
      "Bambang Eko",
      "Koordinator K3 — Divisi Operasional",
    ),
  },
  {
    id: "M-011",
    type: "memo",
    title: "M-011 — Pengunduran Diri Karyawan Kunci",
    content: buildMemo(
      "M-011",
      "Mega Puspita, HR Manager",
      "Kamis, 13 Februari 2025",
      "Pengunduran Diri Karyawan Kunci — Kepala Divisi Distribusi",
      `Bapak Irfan Setiawan, Kepala Divisi Distribusi dengan pengalaman 11 tahun di
perusahaan, menyampaikan surat pengunduran diri formal dengan tanggal efektif
28 Februari 2025. Informasi yang kami terima mengindikasikan beliau akan
bergabung dengan kompetitor langsung perusahaan kami.

Bapak Irfan menguasai secara personal seluruh jaringan mitra distribusi utama
di Pulau Jawa, termasuk hubungan eksklusif dengan beberapa distributor daerah
yang tidak terdokumentasi secara formal. Kepergian beliau dalam waktu singkat
ini berpotensi mengganggu kelancaran operasional distribusi secara signifikan.

Perlu segera diputuskan: (1) apakah akan dilakukan counter-offer untuk
mempertahankan beliau, (2) bagaimana mempercepat proses transfer pengetahuan
dan dokumentasi jaringan distribusi selama sisa masa kerja, dan (3) apakah
akan membuka rekrutmen internal atau eksternal untuk penggantinya. Tim legal
juga perlu mengkaji klausul non-compete dalam kontrak kerja Bapak Irfan.`,
      "Mega Puspita",
      "HR Manager",
    ),
  },
  {
    id: "M-012",
    type: "memo",
    title: "M-012 — Inspeksi Mendadak BPOM",
    content: buildMemo(
      "M-012",
      "Lesti Andriani, Legal & Compliance Manager",
      "Kamis, 13 Februari 2025",
      "Notifikasi Inspeksi Mendadak — Badan Pengawas Obat dan Makanan (BPOM)",
      `Kami menerima surat pemberitahuan resmi dari BPOM bahwa akan dilakukan
inspeksi mendadak (unannounced inspection) ke fasilitas penyimpanan dan
distribusi produk kami pada Jumat, 14 Februari 2025 antara pukul 09.00 hingga
12.00 WIB.

Berdasarkan self-assessment internal yang dilakukan minggu lalu, terdapat tiga
titik penyimpanan yang saat ini belum memenuhi standar temperatur dan
kelembaban sesuai regulasi BPOM terbaru yang berlaku sejak Januari 2025. Dua
di antaranya merupakan area penyimpanan produk kategori sensitif.

Pelanggaran yang teridentifikasi saat inspeksi dapat mengakibatkan denda
administratif, penarikan produk dari pasaran, dan dalam kasus terburuk,
suspensi sebagian izin distribusi yang dapat melumpuhkan operasional. Kami
memerlukan keputusan segera mengenai langkah perbaikan darurat yang dapat
dilakukan sebelum pukul 08.00 WIB besok pagi.`,
      "Lesti Andriani",
      "Legal & Compliance Manager",
    ),
  },
  {
    id: "M-013",
    type: "memo",
    title: "M-013 — Permintaan Cuti Massal",
    content: buildMemo(
      "M-013",
      "Yusuf Hakim, Sales & Marketing Manager",
      "Kamis, 13 Februari 2025",
      "Permohonan Cuti Tahunan Bersamaan — Tim Sales",
      `Sebanyak 12 dari 18 staf penjualan mengajukan cuti tahunan secara bersamaan
pada tanggal 17–21 Februari 2025, bertepatan dengan periode long weekend Tahun
Baru Imlek. Mayoritas dari mereka sudah memesan tiket perjalanan dan melakukan
pembayaran di muka.

Jika seluruh permohonan disetujui, tim sales aktif hanya akan berjumlah 6
orang selama seminggu penuh. Kondisi ini diperkirakan akan menurunkan
pencapaian target penjualan bulan Februari sebesar 25–35% berdasarkan data
historis periode serupa.

Kebijakan perusahaan yang berlaku membolehkan cuti bersamaan maksimal 40% dari
total tim (7 orang), namun permohonan ini telah melampaui batas tersebut.
Penolakan penuh berpotensi menimbulkan ketidakpuasan karyawan mengingat tiket
sudah dibeli. Diperlukan keputusan mengenai jumlah yang dapat disetujui dan
mekanisme pembagian jadwal yang adil.`,
      "Yusuf Hakim",
      "Sales & Marketing Manager",
    ),
  },
  {
    id: "M-014",
    type: "memo",
    title: "M-014 — Penurunan Kualitas Produk",
    content: buildMemo(
      "M-014",
      "Tono Wibowo, Quality Control Manager",
      "Kamis, 13 Februari 2025",
      "Laporan Defect Rate Tinggi — Batch Produksi BGS-2025-031 s/d BGS-2025-040",
      `Hasil sampling produksi batch BGS-2025-031 hingga BGS-2025-040 menunjukkan
tingkat defect (cacat produk) rata-rata sebesar 4,8%, jauh di atas threshold
yang ditetapkan yaitu 1,5%. Investigasi awal mengindikasikan bahan baku dari
lot kiriman terakhir PT. Bahan Prima Sejahtera sebagai penyebab utama.

Produk dari batch-batch tersebut senilai estimasi Rp 1,8 miliar telah
terdistribusi ke 5 wilayah distribusi regional: Jakarta, Bandung, Surabaya,
Semarang, dan Medan. Sebagian produk sudah berada di rak-rak toko ritel klien.

Kami memerlukan keputusan segera mengenai apakah perlu dilakukan product recall
(penarikan produk) dari pasar. Recall akan melibatkan biaya logistik signifikan
dan potensi rugi citra, namun tidak melakukan recall membawa risiko keluhan
pelanggan massal dan potensi masalah regulasi. Investigasi lengkap dari
laboratorium internal dapat tersedia dalam 48 jam.`,
      "Tono Wibowo",
      "Quality Control Manager",
    ),
  },
  {
    id: "M-015",
    type: "memo",
    title: "M-015 — Rapat Darurat Direksi",
    content: buildMemo(
      "M-015",
      "Rina Astuti, Sekretaris Direktur Utama",
      "Kamis, 13 Februari 2025",
      "Undangan Rapat Darurat Dewan Direksi — Jumat 14 Februari 2025",
      `Bapak Direktur Utama mengundang seluruh Manajer Senior untuk hadir dalam
rapat darurat pada Jumat, 14 Februari 2025 pukul 08.00 WIB di Ruang Rapat
Eksekutif lantai 12. Agenda utama rapat mencakup: review kinerja Januari,
perkembangan negosiasi vendor strategis, dan pemaparan rencana ekspansi
distribusi ke Kalimantan yang akan diputuskan bulan ini.

Bapak Direktur Utama secara khusus meminta setiap peserta menyiapkan laporan
ringkas departemen masing-masing beserta daftar top 3 isu kritis yang
memerlukan keputusan di tingkat strategis dalam 30 hari ke depan.

Mohon konfirmasi kehadiran Bapak/Ibu kepada saya melalui email atau WhatsApp
sebelum pukul 17.00 WIB hari ini. Jika berhalangan hadir, harap menunjuk
pejabat pengganti yang berwenang mewakili departemen dan mempersiapkan materi
yang diminta.`,
      "Rina Astuti",
      "Sekretaris Direktur Utama",
    ),
  },
];
