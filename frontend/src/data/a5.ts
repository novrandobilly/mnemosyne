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
  correctAnswer: string;
}

export const a5Data: A5Item[] = [
  // --- Antonym pairs (top row), empty = bottomRight ---
  {
    id: 1,
    grid: {
      topLeft: "Panas",
      topRight: "Dingin",
      bottomLeft: "Terang",
      bottomRight: null,
    },
    options: ["Cerah", "Gelap", "Suram", "Redup", "Kabur"],
    correctAnswer: "Gelap",
  },
  {
    id: 2,
    grid: {
      topLeft: "Besar",
      topRight: "Kecil",
      bottomLeft: "Tinggi",
      bottomRight: null,
    },
    options: ["Luas", "Panjang", "Rendah", "Sempit", "Jauh"],
    correctAnswer: "Rendah",
  },
  {
    id: 3,
    grid: {
      topLeft: "Cepat",
      topRight: "Lambat",
      bottomLeft: "Kuat",
      bottomRight: null,
    },
    options: ["Lemah", "Sehat", "Lelah", "Muda", "Rajin"],
    correctAnswer: "Lemah",
  },
  {
    id: 4,
    grid: {
      topLeft: "Maju",
      topRight: "Mundur",
      bottomLeft: "Naik",
      bottomRight: null,
    },
    options: ["Jatuh", "Terbang", "Turun", "Meluncur", "Tinggi"],
    correctAnswer: "Turun",
  },
  {
    id: 5,
    grid: {
      topLeft: "Rajin",
      topRight: "Malas",
      bottomLeft: "Hemat",
      bottomRight: null,
    },
    options: ["Boros", "Miskin", "Kikir", "Kaya", "Pelit"],
    correctAnswer: "Boros",
  },
  {
    id: 6,
    grid: {
      topLeft: "Keras",
      topRight: "Lembut",
      bottomLeft: "Kasar",
      bottomRight: null,
    },
    options: ["Bersih", "Halus", "Permai", "Indah", "Rapi"],
    correctAnswer: "Halus",
  },
  {
    id: 7,
    grid: {
      topLeft: "Siang",
      topRight: "Malam",
      bottomLeft: "Musim Panas",
      bottomRight: null,
    },
    options: [
      "Musim Semi",
      "Musim Gugur",
      "Musim Dingin",
      "Musim Hujan",
      "Badai",
    ],
    correctAnswer: "Musim Dingin",
  },
  {
    id: 8,
    grid: {
      topLeft: "Menang",
      topRight: "Kalah",
      bottomLeft: "Benar",
      bottomRight: null,
    },
    options: ["Tepat", "Bohong", "Salah", "Keliru", "Gagal"],
    correctAnswer: "Salah",
  },
  {
    id: 9,
    grid: {
      topLeft: "Masuk",
      topRight: "Keluar",
      bottomLeft: "Datang",
      bottomRight: null,
    },
    options: ["Tiba", "Hadir", "Pergi", "Singgah", "Berkunjung"],
    correctAnswer: "Pergi",
  },
  {
    id: 10,
    grid: {
      topLeft: "Kaya",
      topRight: "Miskin",
      bottomLeft: "Pintar",
      bottomRight: null,
    },
    options: ["Bijak", "Bodoh", "Dungu", "Cerdik", "Pandai"],
    correctAnswer: "Bodoh",
  },
  // --- Synonym pairs (top row), empty = bottomRight ---
  {
    id: 11,
    grid: {
      topLeft: "Senang",
      topRight: "Gembira",
      bottomLeft: "Sedih",
      bottomRight: null,
    },
    options: ["Menangis", "Susah", "Pilu", "Murung", "Duka"],
    correctAnswer: "Duka",
  },
  {
    id: 12,
    grid: {
      topLeft: "Melihat",
      topRight: "Memandang",
      bottomLeft: "Mendengar",
      bottomRight: null,
    },
    options: ["Mendengarkan", "Merasakan", "Menyentuh", "Membau", "Mencium"],
    correctAnswer: "Mendengarkan",
  },
  {
    id: 13,
    grid: {
      topLeft: "Rumah",
      topRight: "Hunian",
      bottomLeft: "Mobil",
      bottomRight: null,
    },
    options: ["Jalan", "Bensin", "Kendaraan", "Roda", "Motor"],
    correctAnswer: "Kendaraan",
  },
  {
    id: 14,
    grid: {
      topLeft: "Berani",
      topRight: "Gagah",
      bottomLeft: "Bijak",
      bottomRight: null,
    },
    options: ["Tua", "Arif", "Sabar", "Tenang", "Cerdas"],
    correctAnswer: "Arif",
  },
  {
    id: 15,
    grid: {
      topLeft: "Mulai",
      topRight: "Memulai",
      bottomLeft: "Akhir",
      bottomRight: null,
    },
    options: ["Berhenti", "Mengakhiri", "Selesai", "Tamat", "Habis"],
    correctAnswer: "Mengakhiri",
  },
  // --- Empty = topRight ---
  {
    id: 16,
    grid: {
      topLeft: "Tebal",
      topRight: null,
      bottomLeft: "Panjang",
      bottomRight: "Pendek",
    },
    options: ["Besar", "Tinggi", "Tipis", "Gemuk", "Pipih"],
    correctAnswer: "Tipis",
  },
  {
    id: 17,
    grid: {
      topLeft: "Putih",
      topRight: null,
      bottomLeft: "Siang",
      bottomRight: "Malam",
    },
    options: ["Abu", "Merah", "Gelap", "Hitam", "Biru"],
    correctAnswer: "Hitam",
  },
  {
    id: 18,
    grid: {
      topLeft: "Sempit",
      topRight: null,
      bottomLeft: "Rendah",
      bottomRight: "Tinggi",
    },
    options: ["Lebar", "Jauh", "Panjang", "Besar", "Luas"],
    correctAnswer: "Lebar",
  },
  {
    id: 19,
    grid: {
      topLeft: "Tua",
      topRight: null,
      bottomLeft: "Kuno",
      bottomRight: "Modern",
    },
    options: ["Dewasa", "Remaja", "Muda", "Kecil", "Belia"],
    correctAnswer: "Muda",
  },
  {
    id: 20,
    grid: {
      topLeft: "Jujur",
      topRight: null,
      bottomLeft: "Terbuka",
      bottomRight: "Tertutup",
    },
    options: ["Baik", "Bohong", "Licik", "Curang", "Jahat"],
    correctAnswer: "Bohong",
  },
  // --- Empty = bottomLeft ---
  {
    id: 21,
    grid: {
      topLeft: "Api",
      topRight: "Air",
      bottomLeft: null,
      bottomRight: "Bulan",
    },
    options: ["Langit", "Awan", "Bintang", "Matahari", "Planet"],
    correctAnswer: "Matahari",
  },
  {
    id: 22,
    grid: {
      topLeft: "Guru",
      topRight: "Murid",
      bottomLeft: null,
      bottomRight: "Pasien",
    },
    options: ["Perawat", "Apoteker", "Dokter", "Bidan", "Ahli"],
    correctAnswer: "Dokter",
  },
  {
    id: 23,
    grid: {
      topLeft: "Burung",
      topRight: "Terbang",
      bottomLeft: null,
      bottomRight: "Berenang",
    },
    options: ["Lumba-lumba", "Ikan", "Kepiting", "Paus", "Katak"],
    correctAnswer: "Ikan",
  },
  {
    id: 24,
    grid: {
      topLeft: "Pensil",
      topRight: "Menulis",
      bottomLeft: null,
      bottomRight: "Memotong",
    },
    options: ["Gunting", "Pisau", "Cutter", "Gergaji", "Pahat"],
    correctAnswer: "Gunting",
  },
  {
    id: 25,
    grid: {
      topLeft: "Singa",
      topRight: "Mengaum",
      bottomLeft: null,
      bottomRight: "Mendesis",
    },
    options: ["Buaya", "Ular", "Kadal", "Cicak", "Komodo"],
    correctAnswer: "Ular",
  },
  // --- Empty = topLeft ---
  {
    id: 26,
    grid: {
      topLeft: null,
      topRight: "Kering",
      bottomLeft: "Panas",
      bottomRight: "Dingin",
    },
    options: ["Gersang", "Lembab", "Basah", "Berair", "Becek"],
    correctAnswer: "Basah",
  },
  {
    id: 27,
    grid: {
      topLeft: null,
      topRight: "Pergi",
      bottomLeft: "Membeli",
      bottomRight: "Menjual",
    },
    options: ["Pulang", "Datang", "Keluar", "Berlari", "Masuk"],
    correctAnswer: "Datang",
  },
  {
    id: 28,
    grid: {
      topLeft: null,
      topRight: "Gelap",
      bottomLeft: "Senyum",
      bottomRight: "Cemberut",
    },
    options: ["Suram", "Cerah", "Redup", "Terang", "Bersinar"],
    correctAnswer: "Terang",
  },
  {
    id: 29,
    grid: {
      topLeft: null,
      topRight: "Hancur",
      bottomLeft: "Senang",
      bottomRight: "Sedih",
    },
    options: ["Utuh", "Rusak", "Retak", "Pecah", "Patah"],
    correctAnswer: "Utuh",
  },
  {
    id: 30,
    grid: {
      topLeft: null,
      topRight: "Keras",
      bottomLeft: "Cepat",
      bottomRight: "Lambat",
    },
    options: ["Lembut", "Halus", "Pelan", "Merdu", "Serak"],
    correctAnswer: "Lembut",
  },
];
