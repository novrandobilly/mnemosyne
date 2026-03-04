export type DiscDimension = "D" | "I" | "S" | "C";

export interface DiscOption {
  text: string;
  dimension: DiscDimension;
}

export interface DiscQuestion {
  id: number;
  options: [DiscOption, DiscOption, DiscOption, DiscOption];
}

export const DISC_QUESTIONS: DiscQuestion[] = [
  {
    id: 1,
    options: [
      { text: "Berani mengambil risiko", dimension: "D" },
      { text: "Mudah bergaul dengan siapa saja", dimension: "I" },
      { text: "Sabar dalam menghadapi situasi", dimension: "S" },
      { text: "Teliti dan berhati-hati", dimension: "C" },
    ],
  },
  {
    id: 2,
    options: [
      { text: "Mau memimpin dan mengarahkan orang lain", dimension: "D" },
      { text: "Penuh semangat dan antusias", dimension: "I" },
      { text: "Dapat diandalkan dan stabil", dimension: "S" },
      { text: "Kritis dan analitis", dimension: "C" },
    ],
  },
  {
    id: 3,
    options: [
      { text: "Tegas dalam mengambil keputusan", dimension: "D" },
      { text: "Optimis dan selalu positif", dimension: "I" },
      { text: "Tenang dan tidak mudah terpancing emosi", dimension: "S" },
      { text: "Perfeksionis dan suka keteraturan", dimension: "C" },
    ],
  },
  {
    id: 4,
    options: [
      { text: "Kompetitif dan berorientasi hasil", dimension: "D" },
      { text: "Ekspresif dan suka berbicara", dimension: "I" },
      { text: "Setia dan berkomitmen pada tim", dimension: "S" },
      { text: "Terstruktur dan metodis", dimension: "C" },
    ],
  },
  {
    id: 5,
    options: [
      { text: "Langsung dan to the point", dimension: "D" },
      { text: "Ramah dan hangat kepada semua orang", dimension: "I" },
      { text: "Menghindari konflik dan menjaga keharmonisan", dimension: "S" },
      { text: "Selalu berpegang pada aturan", dimension: "C" },
    ],
  },
  {
    id: 6,
    options: [
      { text: "Mandiri dan tidak suka diatur", dimension: "D" },
      { text: "Suka menjadi pusat perhatian", dimension: "I" },
      { text: "Suka membantu dan mendukung orang lain", dimension: "S" },
      { text: "Mengutamakan akurasi daripada kecepatan", dimension: "C" },
    ],
  },
  {
    id: 7,
    options: [
      { text: "Penuh inisiatif dan giat bertindak", dimension: "D" },
      { text: "Mudah mempengaruhi pendapat orang lain", dimension: "I" },
      { text: "Tidak suka perubahan mendadak", dimension: "S" },
      { text: "Suka menganalisis sebelum bertindak", dimension: "C" },
    ],
  },
  {
    id: 8,
    options: [
      { text: "Suka tantangan dan hal baru yang sulit", dimension: "D" },
      { text: "Inspiratif dan memotivasi orang sekitar", dimension: "I" },
      { text: "Prosedural dan konsisten", dimension: "S" },
      { text: "Hati-hati dan menghindari kesalahan", dimension: "C" },
    ],
  },
  {
    id: 9,
    options: [
      { text: "Dominan dan suka mengontrol situasi", dimension: "D" },
      { text: "Periang dan suka bercanda", dimension: "I" },
      { text: "Penurut dan kooperatif", dimension: "S" },
      { text: "Sistematis dalam menyelesaikan pekerjaan", dimension: "C" },
    ],
  },
  {
    id: 10,
    options: [
      { text: "Cepat bertindak tanpa banyak pertimbangan", dimension: "D" },
      { text: "Pandai bergaul dan membangun relasi", dimension: "I" },
      { text: "Sabar menunggu dan tidak terburu-buru", dimension: "S" },
      { text: "Suka bekerja dengan data dan fakta", dimension: "C" },
    ],
  },
  {
    id: 11,
    options: [
      { text: "Berani menyampaikan pendapat dengan tegas", dimension: "D" },
      { text: "Antusias dan mudah bersemangat", dimension: "I" },
      { text: "Stabil dan tidak mudah berubah pikiran", dimension: "S" },
      {
        text: "Selalu memverifikasi informasi sebelum percaya",
        dimension: "C",
      },
    ],
  },
  {
    id: 12,
    options: [
      { text: "Suka mengambil alih kepemimpinan", dimension: "D" },
      { text: "Penuh kreativitas dan ide baru", dimension: "I" },
      { text: "Tekun dan tidak mudah menyerah", dimension: "S" },
      { text: "Terorganisir dan rapi dalam bekerja", dimension: "C" },
    ],
  },
  {
    id: 13,
    options: [
      { text: "Fokus pada tujuan dan hasil akhir", dimension: "D" },
      { text: "Mudah percaya dan terbuka kepada orang baru", dimension: "I" },
      { text: "Mengutamakan kestabilan dan ketenangan", dimension: "S" },
      { text: "Kritis terhadap kualitas pekerjaan sendiri", dimension: "C" },
    ],
  },
  {
    id: 14,
    options: [
      { text: "Berani menghadapi orang yang tidak setuju", dimension: "D" },
      { text: "Suka berbagi cerita dan pengalaman", dimension: "I" },
      {
        text: "Dapat diandalkan untuk menyelesaikan tugas rutin",
        dimension: "S",
      },
      { text: "Mengedepankan logika daripada perasaan", dimension: "C" },
    ],
  },
  {
    id: 15,
    options: [
      {
        text: "Percaya diri dan yakin dengan keputusan sendiri",
        dimension: "D",
      },
      { text: "Menyenangkan dan disukai banyak orang", dimension: "I" },
      { text: "Setia dan tidak suka berpindah-pindah", dimension: "S" },
      { text: "Sangat memperhatikan detail kecil", dimension: "C" },
    ],
  },
  {
    id: 16,
    options: [
      { text: "Suka berdebat untuk mempertahankan pendapat", dimension: "D" },
      { text: "Mudah beradaptasi di lingkungan sosial baru", dimension: "I" },
      { text: "Lebih suka bekerja di belakang layar", dimension: "S" },
      {
        text: "Skeptis terhadap hal yang tidak memiliki bukti",
        dimension: "C",
      },
    ],
  },
  {
    id: 17,
    options: [
      {
        text: "Menuntut standar tinggi dari diri sendiri dan orang lain",
        dimension: "D",
      },
      { text: "Dramatis dan ekspresif dalam bercerita", dimension: "I" },
      {
        text: "Toleran dan menerima perbedaan dengan lapang dada",
        dimension: "S",
      },
      {
        text: "Berfokus pada proses yang benar bukan hanya hasil",
        dimension: "C",
      },
    ],
  },
  {
    id: 18,
    options: [
      { text: "Tidak takut membuat keputusan besar", dimension: "D" },
      { text: "Suka merayakan keberhasilan bersama tim", dimension: "I" },
      { text: "Nyaman dengan rutinitas yang terprediksi", dimension: "S" },
      { text: "Selalu menyiapkan rencana cadangan", dimension: "C" },
    ],
  },
  {
    id: 19,
    options: [
      { text: "Ambisius dan ingin terus berkembang", dimension: "D" },
      { text: "Suka bertemu dan mengenal orang baru", dimension: "I" },
      { text: "Menjaga kedamaian dan menghindari konfrontasi", dimension: "S" },
      { text: "Berhati-hati sebelum membuat komitmen", dimension: "C" },
    ],
  },
  {
    id: 20,
    options: [
      { text: "Berorientasi pada kemenangan", dimension: "D" },
      {
        text: "Mudah mengekspresikan perasaan kepada orang lain",
        dimension: "I",
      },
      {
        text: "Mengutamakan kepentingan tim di atas diri sendiri",
        dimension: "S",
      },
      {
        text: "Suka bekerja dengan standar dan protokol yang jelas",
        dimension: "C",
      },
    ],
  },
  {
    id: 21,
    options: [
      { text: "Menyukai posisi yang memberikan otoritas", dimension: "D" },
      { text: "Pandai meyakinkan orang lain", dimension: "I" },
      { text: "Bekerja dengan ritme yang konsisten", dimension: "S" },
      { text: "Menghargai objektivitas dan fakta", dimension: "C" },
    ],
  },
  {
    id: 22,
    options: [
      { text: "Tidak suka prosedur yang berbelit-belit", dimension: "D" },
      { text: "Aktif terlibat dalam kegiatan sosial", dimension: "I" },
      { text: "Tidak terburu-buru dan selalu berpikir matang", dimension: "S" },
      { text: "Teratur dan disiplin dalam mengelola waktu", dimension: "C" },
    ],
  },
  {
    id: 23,
    options: [
      { text: "Otoriter dan tegas dalam memimpin", dimension: "D" },
      { text: "Mudah menyemangati orang lain", dimension: "I" },
      { text: "Menghargai kesetiaan dan dedikasi", dimension: "S" },
      { text: "Selalu ingin memahami mengapa sesuatu terjadi", dimension: "C" },
    ],
  },
  {
    id: 24,
    options: [
      { text: "Suka perubahan dan pembaruan yang cepat", dimension: "D" },
      { text: "Humoris dan mudah membuat orang tertawa", dimension: "I" },
      { text: "Menyelesaikan apa yang sudah dimulai", dimension: "S" },
      { text: "Teliti dalam membaca instruksi dan panduan", dimension: "C" },
    ],
  },
  {
    id: 25,
    options: [
      { text: "Cepat merespons dan tidak suka menunggu", dimension: "D" },
      { text: "Memiliki banyak kenalan dan teman dekat", dimension: "I" },
      { text: "Suportif dan peduli pada kebutuhan orang lain", dimension: "S" },
      { text: "Memprioritaskan kualitas daripada kuantitas", dimension: "C" },
    ],
  },
  {
    id: 26,
    options: [
      {
        text: "Tidak ragu mengambil tindakan ekstrem jika perlu",
        dimension: "D",
      },
      { text: "Suka berbagi opini dan ide secara terbuka", dimension: "I" },
      { text: "Menghindari perubahan yang tidak perlu", dimension: "S" },
      { text: "Bertanya banyak hal sebelum memulai pekerjaan", dimension: "C" },
    ],
  },
  {
    id: 27,
    options: [
      { text: "Berterusterang dan tidak suka basa-basi", dimension: "D" },
      { text: "Mudah bergairah terhadap proyek atau ide baru", dimension: "I" },
      { text: "Setia pada kelompok dan tidak mudah berpindah", dimension: "S" },
      { text: "Mengikuti prosedur dengan ketat", dimension: "C" },
    ],
  },
  {
    id: 28,
    options: [
      { text: "Termotivasi oleh kompetisi dan tantangan", dimension: "D" },
      {
        text: "Mudah bergembira dan menularkan energi positif",
        dimension: "I",
      },
      {
        text: "Penyabar dan tidak mudah terganggu oleh tekanan",
        dimension: "S",
      },
      {
        text: "Menjaga konsistensi dan standar kerja yang tinggi",
        dimension: "C",
      },
    ],
  },
];
