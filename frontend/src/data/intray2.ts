export type Intray2DocType = "cover" | "instructions" | "memo";

export interface Intray2Doc {
  id: string;
  type: Intray2DocType;
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
Kepada   : Manajer Operasional Regional (Yang Berwenang)
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

export const intray2Docs: Intray2Doc[] = [
  {
    id: "cover",
    type: "cover",
    title: "Surat Pengantar",
    content: `${SEP}
SURAT PENGANTAR
${SEP}

Surabaya, 3 Maret 2025

Kepada Yth.
Bapak/Ibu Peserta Asesmen
Di Tempat

Dengan hormat,

Selamat datang dalam simulasi tes In-Tray ini. Dalam tes ini, Anda berperan
sebagai Manajer Operasional Regional PT. Bumi Farmasi, sebuah perusahaan
distribusi farmasi yang melayani lebih dari 400 apotek mitra, 35 rumah sakit,
dan 12 klinik di wilayah Jawa Timur dan Bali.

Bapak VP Operasional Anda sedang menghadiri seminar internasional di luar
negeri selama dua minggu dan sulit dihubungi karena perbedaan zona waktu yang
ekstrem. Anda menemukan tumpukan dokumen mendesak di meja kerja yang masuk
selama dua hari terakhir.

Tugas Anda adalah membaca, menganalisis, memprioritaskan, dan merencanakan
respons terhadap setiap dokumen tersebut. Seluruh keputusan operasional
sepenuhnya berada di tangan Anda sebagai pejabat yang berwenang saat ini.

Hormat kami,

Tim Asesmen dan Pengembangan SDM
PT. Bumi Farmasi
Gedung Pharma Tower, Jl. Ahmad Yani No. 47
Surabaya 60234
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
   Anda berperan sebagai Manajer Operasional Regional PT. Bumi Farmasi
   yang menjalankan penuh tanggung jawab VP Operasional selama dua minggu.

2. CARA PENGGUNAAN DOKUMEN
   Baca setiap dokumen pada panel referensi di sebelah kiri. Gunakan
   nomor memo sebagai referensi saat mengisi kertas kerja.

3. KERTAS KERJA — ANALISIS PERMASALAHAN
   Identifikasi seluruh permasalahan dari dokumen. Untuk setiap isu isi:

   • Topik Permasalahan  : Ringkasan singkat isu utama
   • Tingkat Kepentingan : Tentukan urgensi
       — Sangat Penting  : Berdampak besar, harus ditangani hari ini
       — Penting         : Perlu ditangani dalam 1–2 hari ke depan
       — Kurang Penting  : Dapat ditunda atau didelegasikan
   • Tindakan / Solusi   : Langkah konkret yang akan Anda ambil
   • No. Memo            : Nomor referensi memo terkait

4. PENILAIAN
   Anda akan dinilai berdasarkan:
   — Kemampuan mengidentifikasi dan memprioritaskan masalah
   — Kualitas dan kelayakan solusi yang ditawarkan
   — Kejelasan dan struktur penulisan analisis

5. PETUNJUK TEKNIS
   — Klik "Buka Referensi" untuk membuka panel dokumen
   — Klik nama dokumen pada daftar untuk membacanya
   — Isi kertas kerja yang tersedia
   — Klik "Submit Tes" bila sudah selesai

${SEP}`,
  },
  {
    id: "M-001",
    type: "memo",
    title: "M-001 — Kegagalan Cold Chain Storage",
    content: buildMemo(
      "M-001",
      "Hendri Santoso, Kepala Gudang",
      "Senin, 1 Maret 2025",
      "Kerusakan Unit Cold Chain Storage — Gudang Pusat Surabaya",
      `Kami melaporkan kerusakan mendadak pada dua unit cold chain storage utama di
gudang pusat Surabaya sejak pukul 22.00 WIB tadi malam. Temperatur dalam unit
tersebut telah melampaui batas aman (+8°C) dan saat ini berada di +14°C.

Kedua unit tersebut menyimpan persediaan produk farmasi sensitif suhu senilai
estimasi Rp 3,2 miliar, mencakup insulin, vaksin influenza, dan beberapa
produk biologis lainnya. Berdasarkan protokol farmasi, produk yang terpapar
suhu di luar rentang yang disyaratkan selama lebih dari 4 jam harus dievaluasi
ulang dan berpotensi tidak layak edar.

Teknisi rekanan sudah dihubungi namun estimasi kedatangan paling cepat pukul
08.00 WIB pagi ini. Terdapat 1 unit portable cold storage dari vendor lain
yang dapat disewa darurat (kapasitas 60% dari yang rusak) dengan lead time
3 jam. Diperlukan keputusan segera sebelum pukul 06.00 WIB.`,
      "Hendri Santoso",
      "Kepala Gudang — Pusat Surabaya",
    ),
  },
  {
    id: "M-002",
    type: "memo",
    title: "M-002 — Keluhan Apotek Mitra VIP",
    content: buildMemo(
      "M-002",
      "Ratna Dewi, Customer Relations Manager",
      "Senin, 1 Maret 2025",
      "Keluhan Serius — Apotek Kimia Maju (Klien Platinum)",
      `Bapak dr. Handoyo Saputra, pemilik jaringan Apotek Kimia Maju (9 cabang di
Surabaya dan Sidoarjo), menghubungi kami dan menyatakan bahwa pengiriman
terakhir mengandung 3 item dengan nomor batch yang telah kedaluwarsa. Total
produk yang terdampak adalah 180 unit dari dua jenis produk berbeda.

Beliau sangat kecewa karena kejadian serupa pernah terjadi enam bulan lalu
dan saat itu sudah dijanjikan tidak akan terulang. Nilai transaksi bulanan
Apotek Kimia Maju mencapai rata-rata Rp 680 juta. Beliau mengancam akan
memindahkan seluruh pengadaan ke distributor kompetitor jika tidak ada
respons resmi dan mekanisme kompensasi sebelum besok siang.

Tim QA sedang melakukan penelusuran batch namun hasil penuh baru tersedia
Rabu pagi. Perlu keputusan mengenai tindakan segera yang dapat dikomunikasikan
kepada klien sebagai bentuk itikad baik perusahaan.`,
      "Ratna Dewi",
      "Customer Relations Manager",
    ),
  },
  {
    id: "M-003",
    type: "memo",
    title: "M-003 — Permohonan Lembur Tim Gudang",
    content: buildMemo(
      "M-003",
      "Bambang Irawan, Supervisor Gudang",
      "Senin, 1 Maret 2025",
      "Permohonan Persetujuan Lembur — Tim Packing & Distribusi",
      `Dalam rangka memenuhi backlog pengiriman yang saat ini menumpuk akibat
libur panjang akhir pekan, kami memohon persetujuan lembur untuk 22 karyawan
bagian packing dan distribusi selama 4 hari (Selasa–Jumat, 4–7 Maret 2025),
masing-masing 2,5 jam lembur per hari.

Estimasi total biaya lembur yang dibutuhkan adalah sebesar Rp 38.500.000
(tiga puluh delapan juta lima ratus ribu rupiah) termasuk uang makan lembur.
Tanpa lembur ini, backlog diperkirakan baru dapat diselesaikan dalam 8–10
hari kerja, yang berisiko melanggar SLA pengiriman ke 47 apotek mitra.

Kami mohon keputusan dapat diberikan paling lambat pukul 15.00 WIB hari ini
agar jadwal lembur dapat diinformasikan kepada karyawan tepat waktu.`,
      "Bambang Irawan",
      "Supervisor Gudang & Distribusi",
    ),
  },
  {
    id: "M-004",
    type: "memo",
    title: "M-004 — Kerentanan Keamanan Sistem IT",
    content: buildMemo(
      "M-004",
      "Dimas Prasetyo, IT Manager",
      "Selasa, 2 Maret 2025",
      "Peringatan Kerentanan Keamanan Kritis — Sistem Manajemen Distribusi",
      `Kami menerima notifikasi dari vendor sistem DMS (Distribution Management
System) bahwa versi yang sedang kami gunakan memiliki celah keamanan kritis
(CVE-2025-1847, tingkat CVSS 9.1). Celah ini memungkinkan akses tidak sah ke
data transaksi, termasuk data resep elektronik dan rekam medis klien rumah sakit.

Patch keamanan sudah tersedia namun membutuhkan downtime sistem selama 6–8 jam
untuk proses pembaruan dan pengujian. Di luar periode pemeliharaan terjadwal,
ini berarti penghentian sementara operasional pemrosesan pesanan, penerbitan
faktur, dan pencetakan surat jalan.

Regulasi BPJS dan Permenkes terbaru mewajibkan pelaporan insiden keamanan
data kesehatan dalam 72 jam sejak ditemukan. Belum ada indikasi eksploitasi,
namun risiko terus meningkat setiap jam. Diperlukan keputusan segera mengenai
jadwal pelaksanaan patching darurat.`,
      "Dimas Prasetyo",
      "IT Manager",
    ),
  },
  {
    id: "M-005",
    type: "memo",
    title: "M-005 — Pengadaan Kendaraan Operasional Darurat",
    content: buildMemo(
      "M-005",
      "Agus Wibowo, Manajer Logistik",
      "Selasa, 2 Maret 2025",
      "Permohonan Pengadaan Darurat — Kendaraan Pengganti Cold Chain",
      `Dua dari lima kendaraan berpendingin (refrigerated van) yang menjadi tulang
punggung pengiriman produk cold chain ke klien rumah sakit dan klinik
mengalami kerusakan mesin secara bersamaan. Mekanik rekanan menyatakan kedua
unit membutuhkan overhaul besar dengan estimasi perbaikan 3–4 minggu.

Kondisi ini mengurangi kapasitas pengiriman cold chain sebesar 40%. Terdapat
24 pesanan dari 8 rumah sakit dan 5 klinik yang terjadwal untuk dikirim dalam
3 hari ke depan dan tidak dapat ditunda tanpa mengakibatkan gangguan layanan
medis di fasilitas tersebut.

Vendor penyewaan kendaraan berpendingin rekanan menawarkan 2 unit sewa jangka
pendek (3 bulan) dengan biaya Rp 18.500.000 per unit per bulan, atau opsi
pembelian unit bekas refurbished seharga Rp 210.000.000 per unit. Diperlukan
keputusan pengadaan sebelum pukul 12.00 WIB besok.`,
      "Agus Wibowo",
      "Manajer Logistik & Armada",
    ),
  },
  {
    id: "M-006",
    type: "memo",
    title: "M-006 — Renegosiasi Kontrak Distributor Utama",
    content: buildMemo(
      "M-006",
      "Sari Pertiwi, Manajer Procurement",
      "Selasa, 2 Maret 2025",
      "Negosiasi Kontrak Pasokan — PT. Pharindo Prima Utama",
      `PT. Pharindo Prima Utama, pemasok utama yang memasok 65% dari total SKU
produk generik kami, mengajukan revisi kontrak dengan kenaikan harga rata-rata
12% efektif 1 April 2025. Mereka mengacu pada kenaikan biaya bahan baku aktif
farmasi (API) di pasar internasional dan depresiasi rupiah 8% dalam 6 bulan.

Jika kenaikan diterima tanpa negosiasi, margin distribusi kami akan tergerus
rata-rata 4,2 poin persen. Tiga pemasok alternatif telah diidentifikasi namun
membutuhkan proses registrasi distributor di BPOM yang memakan waktu 8–12
minggu.

Sesi negosiasi akhir telah dijadwalkan pada Kamis, 6 Maret 2025 pukul 09.00
WIB. Kami memerlukan arahan strategi: batas toleransi kenaikan harga, klausul
yang dapat dijadikan tawar-menawar, dan apakah perlu memulai proses registrasi
pemasok alternatif sebagai langkah antisipasi paralel.`,
      "Sari Pertiwi",
      "Manajer Procurement",
    ),
  },
  {
    id: "M-007",
    type: "memo",
    title: "M-007 — Keluhan Internal Karyawan",
    content: buildMemo(
      "M-007",
      "Nurhayati, HR Manager",
      "Selasa, 2 Maret 2025",
      "Keluhan Formal Karyawan — Fasilitas dan Beban Kerja Divisi Pengiriman",
      `Tujuh karyawan pengemudi dan asisten pengemudi dari divisi pengiriman telah
mengajukan surat keluhan formal kolektif kepada HRD. Mereka memprotes
kenaikan rute harian dari rata-rata 8 titik menjadi 14 titik pengiriman per
hari sejak reorganisasi armada bulan lalu, tanpa penyesuaian kompensasi.

Mereka juga melaporkan bahwa fasilitas ruang istirahat di depo Waru dalam
kondisi tidak layak (AC rusak sejak 3 bulan lalu, tidak ada loker untuk
menyimpan perlengkapan pribadi). Secara prosedural, HRD wajib menindaklanjuti
keluhan formal dalam 7 hari kerja.

Terdapat indikasi beberapa karyawan telah menghubungi perwakilan serikat
pekerja transportasi regional. Jika tidak ditangani, risiko aksi mogok kerja
atau pengunduran diri massal dapat mengganggu operasional pengiriman secara
kritis mengingat industri ini mengalami kelangkaan tenaga pengemudi berpengalaman.`,
      "Nurhayati",
      "HR Manager",
    ),
  },
  {
    id: "M-008",
    type: "memo",
    title: "M-008 — Permintaan Anggaran Darurat",
    content: buildMemo(
      "M-008",
      "Irwan Fauzi, Finance Controller",
      "Rabu, 5 Maret 2025",
      "Permintaan Persetujuan Dana Darurat — Operasional Minggu Ini",
      `Terdapat kebutuhan dana darurat sebesar Rp 275.000.000 di luar anggaran
operasional Maret yang telah disetujui. Kebutuhan ini terdiri dari: biaya
sewa cold storage darurat (Rp 45 juta), biaya lembur tim gudang (Rp 38,5
juta), sewa kendaraan pendingin pengganti (Rp 37 juta untuk 2 bulan pertama),
dan biaya investigasi QA produk expired batch (Rp 22 juta), serta cadangan
kontingensi operasional tak terduga (Rp 132,5 juta).

Sesuai kebijakan internal, persetujuan anggaran darurat di atas Rp 150 juta
memerlukan persetujuan minimum dua pejabat setingkat Manajer Senior. Jika
proses tidak dimulai hari ini, beberapa vendor akan menghentikan layanan
mereka karena belum menerima komitmen pembayaran.

Kami memerlukan arahan segera mengenai mekanisme persetujuan darurat yang
dapat ditempuh, mengingat VP Operasional sedang tidak dapat dihubungi.`,
      "Irwan Fauzi",
      "Finance Controller",
    ),
  },
  {
    id: "M-009",
    type: "memo",
    title: "M-009 — Peluang Tender Rumah Sakit Pemerintah",
    content: buildMemo(
      "M-009",
      "Eko Nugroho, Sales & Business Development Manager",
      "Rabu, 5 Maret 2025",
      "Peluang Tender Pengadaan Obat — RSUD Dr. Soetomo Surabaya",
      `RSUD Dr. Soetomo Surabaya, salah satu rumah sakit terbesar di Indonesia
Timur, telah membuka tender terbuka untuk distribusi alat kesehatan dan obat
generik periode 2025–2027. Estimasi nilai kontrak selama 3 tahun adalah
Rp 28 miliar, ini adalah tender pemerintah terbesar yang pernah kami ikuti.

Dokumen tender mensyaratkan beberapa hal yang perlu dikonfirmasi: kapasitas
cold chain minimum 500 m³, sertifikasi CDOB (Cara Distribusi Obat yang Baik)
yang masih valid, dan pengalaman distribusi ke minimal 3 rumah sakit tipe A.

Batas pengumpulan dokumen penawaran adalah Jumat, 7 Maret 2025 pukul 16.00
WIB. Tim kami sudah mempersiapkan sebagian besar dokumen, namun beberapa
memerlukan pengesahan dan tanda tangan pejabat berwenang. Perlu keputusan
segera apakah kita akan mengikuti tender ini mengingat beberapa persyaratan
teknis perlu dikonfirmasi terhadap kondisi operasional kita saat ini.`,
      "Eko Nugroho",
      "Sales & Business Development Manager",
    ),
  },
  {
    id: "M-010",
    type: "memo",
    title: "M-010 — Insiden Pengiriman Obat Salah",
    content: buildMemo(
      "M-010",
      "Wulandari, Koordinator Quality Assurance",
      "Rabu, 5 Maret 2025",
      "Laporan Insiden Kritis — Kesalahan Pengiriman Produk Prescription",
      `Kami menerima laporan dari RS Lavalette Malang bahwa pengiriman tanggal
3 Maret mengandung kesalahan substitusi: 2 jenis obat prescription dengan
kemasan serupa namun kandungan aktif berbeda ditukar antara dua rumah sakit
penerima. RS Lavalette menerima produk yang seharusnya dikirim ke RSUD Kanjuruhan
dan sebaliknya.

Insiden ini termasuk kategori medication error distribusi. Kedua rumah sakit
sudah menghentikan penggunaan produk tersebut setelah menemukan ketidaksesuaian
sebelum diberikan kepada pasien, sehingga belum ada dampak langsung ke pasien.
Namun keduanya menuntut klarifikasi resmi dan laporan investigasi dalam 24 jam.

Berdasarkan regulasi Permenkes No. 72/2016, insiden ini wajib dilaporkan ke
Dinas Kesehatan Provinsi dalam 2x24 jam. Tim QA sedang memulai root cause
analysis. Diperlukan arahan mengenai langkah investigasi darurat, komunikasi
resmi ke kedua rumah sakit, dan mekanisme pelaporan ke instansi regulasi.`,
      "Wulandari",
      "Koordinator Quality Assurance",
    ),
  },
  {
    id: "M-011",
    type: "memo",
    title: "M-011 — Pengunduran Diri Kepala QA",
    content: buildMemo(
      "M-011",
      "Nurhayati, HR Manager",
      "Rabu, 5 Maret 2025",
      "Pengunduran Diri Karyawan Kunci — Kepala Quality Assurance",
      `Ibu Wulandari, Kepala Quality Assurance dengan 9 tahun pengalaman di
perusahaan, menyampaikan surat pengunduran diri efektif 31 Maret 2025.
Informasi yang kami terima mengindikasikan beliau akan bergabung dengan
principal farmasi internasional yang baru membuka kantor regional di Surabaya.

Kepergian beliau sangat kritis mengingat: (1) CDOB re-audit dijadwalkan pada
April 2025 dan beliau adalah penanggung jawab utama yang menguasai seluruh
prosedur dokumentasi, (2) sedang ada insiden QA aktif (lihat M-010) yang
membutuhkan kepemimpinan beliau, (3) penggantian Kepala QA membutuhkan
sertifikasi khusus yang prosesnya memakan waktu 3–6 bulan.

Perlu segera diputuskan apakah akan dilakukan counter-offer, bagaimana
memastikan kelangsungan fungsi QA selama transisi, dan apakah perlu
melibatkan konsultan QA eksternal untuk mendampingi re-audit CDOB.`,
      "Nurhayati",
      "HR Manager",
    ),
  },
  {
    id: "M-012",
    type: "memo",
    title: "M-012 — Notifikasi Inspeksi BPOM",
    content: buildMemo(
      "M-012",
      "Lestari Handayani, Legal & Compliance Manager",
      "Rabu, 5 Maret 2025",
      "Notifikasi Inspeksi Rutin BPOM — Fasilitas Distribusi Surabaya",
      `Kami menerima surat dari Badan Pengawas Obat dan Makanan (BPOM) bahwa
akan dilakukan inspeksi CDOB (Cara Distribusi Obat yang Baik) terjadwal
pada Kamis–Jumat, 6–7 Maret 2025.

Berdasarkan internal readiness assessment yang dilakukan pekan lalu, terdapat
4 temuan potensial yang perlu diselesaikan sebelum inspeksi: (1) dokumentasi
SOPs cold chain yang belum diperbarui sesuai edisi terbaru Pedoman CDOB 2024,
(2) rekam kalibrasi 3 termometer ruangan yang melewati tanggal kalibrasi ulang,
(3) area penyimpanan B2 yang belum memiliki tanda peringatan SEMS sesuai regulasi
terbaru, dan (4) log distribusi bulan Januari yang memiliki 3 entri minim detail.

Ketidakpatuhan yang teridentifikasi saat inspeksi dapat berujung pada
peringatan formal, kewajiban corrective action plan 30 hari, atau dalam
kasus berat, suspensi sebagian izin distribusi. Kami memerlukan persetujuan
untuk mengambil tindakan perbaikan darurat hari ini.`,
      "Lestari Handayani",
      "Legal & Compliance Manager",
    ),
  },
  {
    id: "M-013",
    type: "memo",
    title: "M-013 — Permintaan Cuti Tim Sales Bersamaan",
    content: buildMemo(
      "M-013",
      "Rizal Akbar, Sales Area Manager",
      "Kamis, 6 Maret 2025",
      "Permohonan Cuti Bersamaan — Tim Sales Representative",
      `Sebanyak 8 dari 14 sales representative mengajukan cuti tahunan bersamaan
pada 10–14 Maret 2025 bertepatan dengan agenda study tour karir yang
difasilitasi oleh asosiasi industri farmasi regional. Program ini dianggap
strategis untuk pengembangan kompetensi tim.

Jika seluruh permohonan disetujui, coverage kunjungan ke apotek mitra akan
turun signifikan. Berdasarkan analisis territory, 6 orang yang tersisa tidak
dapat menutup seluruh area kunjungan rutin yang mencakup lebih dari 120
apotek aktif dalam satu minggu.

Kebijakan perusahaan membolehkan cuti bersamaan maksimal 35% dari total tim
(5 orang). Menolak penuh berisiko menurunkan motivasi tim terutama karena
program ini memiliki nilai pengembangan yang diakui manajemen. Diperlukan
keputusan dengan solusi tengah yang mempertimbangkan kebutuhan operasional
dan kebutuhan pengembangan tim.`,
      "Rizal Akbar",
      "Sales Area Manager",
    ),
  },
  {
    id: "M-014",
    type: "memo",
    title: "M-014 — Produk Recall dari Prinsipal",
    content: buildMemo(
      "M-014",
      "Wulandari, Koordinator Quality Assurance",
      "Kamis, 6 Maret 2025",
      "Notifikasi Product Recall — Cefixime 100mg Batch CFX-2024-089",
      `Kami menerima notifikasi resmi dari PT. Farma Utama selaku prinsipal bahwa
produk Cefixime 100mg Kapsul batch CFX-2024-089 ditarik dari peredaran
karena hasil uji stabilitas menunjukkan penurunan kadar aktif di bawah batas
farmakope pada suhu penyimpanan normal.

Berdasarkan rekam distribusi kami, batch tersebut telah didistribusikan ke
37 apotek mitra dan 4 klinik di area Surabaya, Malang, dan Jember. Estimasi
total unit yang beredar di jaringan kami: 2.840 unit senilai Rp 156.000.000.

Prosedur BPOM mewajibkan recall selesai dan dilaporkan dalam 5 hari kerja
sejak notifikasi diterima. Tim kami belum pernah menangani recall sekala ini
sebelumnya. Diperlukan arahan mengenai prosedur koordinasi recall ke seluruh
mitra distributor, mekanisme pengembalian dan penghapusan stok, serta
komunikasi resmi ke klien yang terdampak.`,
      "Wulandari",
      "Koordinator Quality Assurance",
    ),
  },
  {
    id: "M-015",
    type: "memo",
    title: "M-015 — Undangan Rapat Koordinasi Regional",
    content: buildMemo(
      "M-015",
      "Sekretariat Direktur Operasional",
      "Kamis, 6 Maret 2025",
      "Undangan Rapat Koordinasi Regional Jawa Timur–Bali — Jumat 7 Maret 2025",
      `Direktur Operasional mengundang seluruh Manajer Operasional Regional untuk
hadir dalam rapat koordinasi triwulanan pada Jumat, 7 Maret 2025 pukul 08.30
WIB via video conference. Agenda meliputi: evaluasi KPI distribusi Q1 2025,
pemaparan strategi ekspansi ke wilayah NTB dan NTT, serta pembahasan dampak
regulasi BPOM terbaru terhadap prosedur distribusi cold chain.

Direktur secara khusus meminta setiap Manajer Regional menyiapkan executive
summary: pencapaian vs target Q1, top 3 risiko operasional aktif, dan satu
proposisi inisiatif efisiensi yang akan diimplementasikan di kuartal berikutnya.

Mohon konfirmasi kehadiran dan pengiriman bahan presentasi ke sekretariat
sebelum pukul 18.00 WIB hari ini. Format slide maksimal 5 halaman menggunakan
template standar perusahaan yang terlampir.`,
      "Sekretariat Direktur Operasional",
      "Kantor Pusat — Jakarta",
    ),
  },
];
