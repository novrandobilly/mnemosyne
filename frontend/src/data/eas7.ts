export type Eas7Answer = "True" | "False" | "Unknown";

export interface Eas7Question {
  id: number;
  statement: string;
  correctAnswer: Eas7Answer;
}

export interface Eas7Group {
  groupId: number;
  premises: string[];
  questions: Eas7Question[];
}

export const eas7Data: Eas7Group[] = [
  {
    groupId: 1,
    premises: [
      "Semua karyawan yang berprestasi mendapatkan bonus tahunan.",
      "Andi adalah karyawan yang berprestasi.",
      "Semua penerima bonus tahunan diundang ke acara gala dinner.",
      "Budi tidak mendapatkan bonus tahunan.",
    ],
    questions: [
      {
        id: 1,
        statement: "Andi diundang ke acara gala dinner.",
        correctAnswer: "True",
      },
      {
        id: 2,
        statement: "Budi adalah karyawan yang berprestasi.",
        correctAnswer: "False",
      },
      {
        id: 3,
        statement: "Semua karyawan diundang ke gala dinner.",
        correctAnswer: "False",
      },
      {
        id: 4,
        statement: "Budi tidak diundang ke acara gala dinner.",
        correctAnswer: "True",
      },
      {
        id: 5,
        statement: "Andi mendapatkan bonus tahunan.",
        correctAnswer: "True",
      },
    ],
  },
  {
    groupId: 2,
    premises: [
      "Semua buah yang matang rasanya manis.",
      "Mangga yang ada di keranjang ini sudah matang.",
      "Beberapa buah yang manis mengandung banyak vitamin C.",
      "Jeruk nipis rasanya asam meskipun sudah matang.",
    ],
    questions: [
      {
        id: 6,
        statement: "Mangga di keranjang ini rasanya manis.",
        correctAnswer: "True",
      },
      {
        id: 7,
        statement: "Semua buah manis mengandung banyak vitamin C.",
        correctAnswer: "False",
      },
      {
        id: 8,
        statement: "Jeruk nipis yang matang rasanya manis.",
        correctAnswer: "False",
      },
      {
        id: 9,
        statement: "Mangga di keranjang ini mengandung banyak vitamin C.",
        correctAnswer: "Unknown",
      },
      {
        id: 10,
        statement: "Ada buah manis yang tidak mengandung banyak vitamin C.",
        correctAnswer: "Unknown",
      },
    ],
  },
  {
    groupId: 3,
    premises: [
      "Setiap siswa yang lulus ujian akan naik kelas.",
      "Siswa yang naik kelas mendapatkan sertifikat kelulusan.",
      "Dina lulus ujian.",
      "Evan tidak naik kelas.",
      "Semua penerima sertifikat kelulusan diizinkan mendaftar ke sekolah favorit.",
    ],
    questions: [
      {
        id: 11,
        statement: "Dina mendapatkan sertifikat kelulusan.",
        correctAnswer: "True",
      },
      {
        id: 12,
        statement: "Evan lulus ujian.",
        correctAnswer: "False",
      },
      {
        id: 13,
        statement: "Dina diizinkan mendaftar ke sekolah favorit.",
        correctAnswer: "True",
      },
      {
        id: 14,
        statement: "Evan mendapatkan sertifikat kelulusan.",
        correctAnswer: "False",
      },
      {
        id: 15,
        statement: "Semua siswa mendaftar ke sekolah favorit.",
        correctAnswer: "False",
      },
    ],
  },
  {
    groupId: 4,
    premises: [
      "Semua dokter di klinik ini berpengalaman lebih dari 5 tahun.",
      "Dr. Farhan bekerja di klinik ini.",
      "Beberapa dokter yang berpengalaman juga mengajar di universitas.",
      "Tidak ada dokter di klinik ini yang bekerja di rumah sakit swasta.",
    ],
    questions: [
      {
        id: 16,
        statement: "Dr. Farhan berpengalaman lebih dari 5 tahun.",
        correctAnswer: "True",
      },
      {
        id: 17,
        statement: "Dr. Farhan mengajar di universitas.",
        correctAnswer: "Unknown",
      },
      {
        id: 18,
        statement: "Dr. Farhan bekerja di rumah sakit swasta.",
        correctAnswer: "False",
      },
      {
        id: 19,
        statement: "Semua dokter berpengalaman mengajar di universitas.",
        correctAnswer: "False",
      },
      {
        id: 20,
        statement: "Ada dokter berpengalaman yang tidak bekerja di klinik ini.",
        correctAnswer: "Unknown",
      },
    ],
  },
  {
    groupId: 5,
    premises: [
      "Semua produk yang lolos uji kualitas diberi label hijau.",
      "Produk berlabel hijau boleh dijual ke pasar internasional.",
      "Produk X tidak lolos uji kualitas.",
      "Produk Y lolos uji kualitas.",
    ],
    questions: [
      {
        id: 21,
        statement: "Produk Y boleh dijual ke pasar internasional.",
        correctAnswer: "True",
      },
      {
        id: 22,
        statement: "Produk X diberi label hijau.",
        correctAnswer: "False",
      },
      {
        id: 23,
        statement: "Produk X boleh dijual ke pasar internasional.",
        correctAnswer: "False",
      },
      {
        id: 24,
        statement: "Produk Y diberi label hijau.",
        correctAnswer: "True",
      },
      {
        id: 25,
        statement:
          "Semua produk yang dijual ke pasar internasional lolos uji kualitas.",
        correctAnswer: "Unknown",
      },
    ],
  },
  {
    groupId: 6,
    premises: [
      "Semua anggota tim inti mendapat akses ke ruang server.",
      "Hanya karyawan dengan izin keamanan level A yang boleh memasuki ruang server.",
      "Gina adalah anggota tim inti.",
      "Hendra bukan anggota tim inti.",
      "Semua karyawan dengan izin keamanan level A wajib mengikuti pelatihan siber.",
    ],
    questions: [
      {
        id: 26,
        statement: "Gina memiliki izin keamanan level A.",
        correctAnswer: "True",
      },
      {
        id: 27,
        statement: "Hendra memiliki akses ke ruang server.",
        correctAnswer: "Unknown",
      },
      {
        id: 28,
        statement: "Gina wajib mengikuti pelatihan siber.",
        correctAnswer: "True",
      },
      {
        id: 29,
        statement: "Hendra tidak memiliki izin keamanan level A.",
        correctAnswer: "Unknown",
      },
      {
        id: 30,
        statement:
          "Semua karyawan yang ikut pelatihan siber adalah anggota tim inti.",
        correctAnswer: "False",
      },
    ],
  },
];
