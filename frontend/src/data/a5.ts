export interface A5Grid {
  topLeft: string | null;
  topRight: string | null;
  bottomLeft: string | null;
  bottomRight: string | null;
}

export interface A5Item {
  id: number;
  grid: A5Grid;
  options: [string, string, string, string, string];
}

export const a5Data: A5Item[] = [
  {
    id: 1,
    grid: {
      topLeft: "menyangkal",
      topRight: null,
      bottomLeft: "mempercayakan",
      bottomRight: "menolak",
    },
    options: [
      "membingungkan ",
      "memiliki",
      "hubungan ",
      "meyakinkan",
      "melimpahkan",
    ],
  },
  {
    id: 2,
    grid: {
      topLeft: "janggal",
      topRight: "aneh",
      bottomLeft: "ganti",
      bottomRight: null,
    },
    options: ["ambil", "milik", "tukar", "bawa", "kejar"],
  },
  {
    id: 3,
    grid: {
      topLeft: "kategori ",
      topRight: null,
      bottomLeft: "opini",
      bottomRight: "pandangan",
    },
    options: ["kelas ", "karena", "cepat ", "ujian", "didik"],
  },
  {
    id: 4,
    grid: {
      topLeft: "menemukan ",
      topRight: "hilang",
      bottomLeft: "menciptakan",
      bottomRight: null,
    },
    options: ["menutupi ", "melukai", "rusak", "rawat", "simpan"],
  },
  {
    id: 5,
    grid: {
      topLeft: "melengkapi",
      topRight: "seluruh",
      bottomLeft: null,
      bottomRight: "membatasi",
    },
    options: ["menyiapkan", "semua", "sebagian", "tetap", "batas-batas"],
  },
  {
    id: 6,
    grid: {
      topLeft: "berani",
      topRight: null,
      bottomLeft: "pandai",
      bottomRight: "bodoh",
    },
    options: ["bahagia ", "pintar", "takut", "cepat", "keras"],
  },
  {
    id: 7,
    grid: {
      topLeft: "pengganti",
      topRight: "rangkaian",
      bottomLeft: null,
      bottomRight: "urutan",
    },
    options: ["penukar", "seri", "tetap", "pakai", "langsung"],
  },
  {
    id: 8,
    grid: {
      topLeft: "aman",
      topRight: "bahaya",
      bottomLeft: null,
      bottomRight: "marah",
    },
    options: ["lambat", "segan", "tekun", "isi", "bebas"],
  },
  {
    id: 9,
    grid: {
      topLeft: "memastikan",
      topRight: null,
      bottomLeft: "menyelesaikan",
      bottomRight: "menyerahkan",
    },
    options: [
      "memperbaiki",
      "menguji",
      "keras kepala",
      "memeriksa",
      "mengakhiri",
    ],
  },
  {
    id: 10,
    grid: {
      topLeft: null,
      topRight: "mencela",
      bottomLeft: "menggunakan",
      bottomRight: "melepas",
    },
    options: ["menempatkan", "memakai", "memeriksa", "memuji", "menghina"],
  },
  {
    id: 11,
    grid: {
      topLeft: "bermakna ",
      topRight: "sepele",
      bottomLeft: "tenang",
      bottomRight: null,
    },
    options: ["bebas", "bergolak", "sabar", "diam", "berang"],
  },
  {
    id: 12,
    grid: {
      topLeft: "bertahan",
      topRight: "menurun",
      bottomLeft: null,
      bottomRight: "mengecil",
    },
    options: [
      "menderita",
      "menetapkan",
      "melindungi",
      "berkurang",
      "mengakhiri",
    ],
  },
  {
    id: 13,
    grid: {
      topLeft: null,
      topRight: "menjalankan",
      bottomLeft: "dugaan",
      bottomRight: "mempercayai",
    },
    options: ["melengkapi", "fungsi", "mengandalakan", "membuat", "menarik"],
  },
  {
    id: 14,
    grid: {
      topLeft: "penghasilan",
      topRight: "menyelipkan",
      bottomLeft: "mengurangi",
      bottomRight: null,
    },
    options: ["ekonomi", "pemasukan", "pengeluaran", "rekening", "konsep"],
  },
  {
    id: 15,
    grid: {
      topLeft: "berhubungan",
      topRight: "cocok",
      bottomLeft: "berkaitan",
      bottomRight: null,
    },
    options: ["bertentangan", "aneh", "jelas", "berlebiahan", "sesuai"],
  },
  {
    id: 16,
    grid: {
      topLeft: "mengabaikan",
      topRight: null,
      bottomLeft: "memastikan",
      bottomRight: "memperhatikan",
    },
    options: ["menolak", "menanggapi", "menyangkal", "mensahkan", "menyunting"],
  },
  {
    id: 17,
    grid: {
      topLeft: null,
      topRight: "percaya",
      bottomLeft: "pendirian",
      bottomRight: "keutuhan",
    },
    options: ["kejujuran", "semangat", "keburukan", "pengetahuan", "keamanan"],
  },
  {
    id: 18,
    grid: {
      topLeft: "syarat",
      topRight: "standard",
      bottomLeft: null,
      bottomRight: "kriteria",
    },
    options: ["keputusan", "kondisi", "gemilang", "ukuran", "lambang"],
  },
  {
    id: 19,
    grid: {
      topLeft: "selesai",
      topRight: null,
      bottomLeft: "memakai",
      bottomRight: "berhenti",
    },
    options: [
      "mengakhiri",
      "melepaskan",
      "melanjutkan",
      "menggunakan",
      "memulai",
    ],
  },
  {
    id: 20,
    grid: {
      topLeft: null,
      topRight: "memberi",
      bottomLeft: "setuju",
      bottomRight: "membantah",
    },
    options: ["percaya", "persetujuan", "menyaring", "berlangsung", "menolak"],
  },
  {
    id: 21,
    grid: {
      topLeft: "makna ganda",
      topRight: "memperluas",
      bottomLeft: "memadatkan",
      bottomRight: null,
    },
    options: [
      "mengencerkan",
      "menegaskan",
      "mengharuskan",
      "samar-samar",
      "mengijinkan",
    ],
  },
  {
    id: 22,
    grid: {
      topLeft: "memfitnah",
      topRight: "memaksa",
      bottomLeft: "menekan",
      bottomRight: null,
    },
    options: ["memohon", "merendah", "menuntut", "mencela", "menunjukan"],
  },
  {
    id: 23,
    grid: {
      topLeft: "penuh perhatian",
      topRight: null,
      bottomLeft: "waspada",
      bottomRight: "tidak pasti",
    },
    options: ["luas", "berubah-ubah", "tetap", "luwes", "berat"],
  },
  {
    id: 24,
    grid: {
      topLeft: "terpendam",
      topRight: null,
      bottomLeft: "menyenangkan",
      bottomRight: "menguntungkan",
    },
    options: ["terbuka", "tahan lama", "tampak", "tersembunyi", "mungkin"],
  },
  {
    id: 25,
    grid: {
      topLeft: "suka rela",
      topRight: null,
      bottomLeft: "memperlancar",
      bottomRight: "terpaksa",
    },
    options: ["menunda", "menurut", "mempercepat", "menolak", "mempengaruhi"],
  },
  {
    id: 26,
    grid: {
      topLeft: "penuh",
      topRight: "binasa",
      bottomLeft: null,
      bottomRight: "kosong",
    },
    options: ["berisi", "hampa", "hancur", "bertahan", "selamat"],
  },
  {
    id: 27,
    grid: {
      topLeft: "menilai",
      topRight: "membentak",
      bottomLeft: null,
      bottomRight: "menghargai",
    },
    options: ["menutupi", "menaksir", "memarahi", "mengusir", "menghalangi"],
  },
  {
    id: 28,
    grid: {
      topLeft: "sebangun",
      topRight: "meyakinkan",
      bottomLeft: null,
      bottomRight: "mempercayai",
    },
    options: ["efektif", "sesuai", "tidak layak", "perasaan", "marah"],
  },
  {
    id: 29,
    grid: {
      topLeft: "tegas",
      topRight: "jelas",
      bottomLeft: "sabar",
      bottomRight: null,
    },
    options: ["marah", "baik budi", "tenang", "kasar", "takut"],
  },
  {
    id: 30,
    grid: {
      topLeft: "tekun",
      topRight: "jahat",
      bottomLeft: "rajin",
      bottomRight: null,
    },
    options: ["bandel", "merusak", "picik", "ulet", "sombong"],
  },
];
