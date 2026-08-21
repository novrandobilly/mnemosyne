export type Eas7Answer = "benar" | "salah" | "belum-pasti";

export interface Eas7Question {
  id: number;
  statement: string;
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
      "Tuan J tidak merokok",
      "Tuan K dan teman-temannya merokok",
      "Tuan K bukan penerbang",
      "Tuan K mempunyai teman seorang penerbang",
    ],
    questions: [
      {
        id: 1,
        statement: "Nyonya J tidak merokok",
      },
      {
        id: 2,
        statement: "Nyonya J seorang perokok",
      },
      {
        id: 3,
        statement: "Semua penerbang merokok",
      },
      {
        id: 4,
        statement: "Beberapa penerbang merokok",
      },
      {
        id: 5,
        statement: "Nyonya J adalah seorang penerbang",
      },
    ],
  },
  {
    groupId: 2,
    premises: [
      "Semua yang tinggal di daerah pertanian adalah keluarga Ny Bani",
      "Tina tidak mempunyai anak",
      "Sulaiman adalah saudara laki-laki Ny Bani",
      "Badu tinggal di daerah pertanian",
      "Ny Bani punya anak yang bekerja di Angkatan Laut",
    ],
    questions: [
      {
        id: 6,
        statement: "Tina tinggal di daerah pertanian",
      },
      {
        id: 7,
        statement: "Badu adalah keluarga Ny Bani",
      },
      {
        id: 8,
        statement: "Sulaiman tinggal di daerah pertanian",
      },
      {
        id: 9,
        statement: "Tina tidak tinggal di daerah pertanian",
      },
      {
        id: 10,
        statement: "Ny Bani tinggal di daerah pertanian",
      },
    ],
  },
  {
    groupId: 3,
    premises: [
      "Semua rumah di jalan Kenanga dikontrakkan",
      "Hasan mengontrakkan rumahnya",
      "Erida tidak mempunyai rumah",
      "Ali tinggal di jalan Kenanga",
      "Semua rumah di jalan Kenanga Bagus",
    ],
    questions: [
      {
        id: 11,
        statement: "Ali tinggal di sebuah rumah yang bagus",
      },
      {
        id: 12,
        statement: "Erida tinggal di sebuah rumah pertanian",
      },
      {
        id: 13,
        statement: "Hasan tinggal di jalan Kenanga",
      },
      {
        id: 14,
        statement: "Ali adalah seorang musikus yang baik",
      },
      {
        id: 15,
        statement: "Ali menyewakan rumahnya",
      },
    ],
  },
  {
    groupId: 4,
    premises: [
      "Semua kapal di sungai M adalah kapal layar",
      "Beberapa kapal milik Andi ada di danau B",
      "Denni mempunyai kapal motor",
      "Semua kapal milik Dodi ada di sungai M",
      "Sebagian besar kapal milik Andi adalah kapal motor",
    ],
    questions: [
      {
        id: 16,
        statement: "Beberapa kapal milik Andi ada di sungai M",
      },
      {
        id: 17,
        statement: "Andi tidak mempunyai kapal di sungai M",
      },
      {
        id: 18,
        statement: "Dodi tidak mempunyai kapal layar",
      },
      {
        id: 19,
        statement: "Denni tidak mempunyai kapal motor di sungai M",
      },
      {
        id: 20,
        statement: "Dodi tidak mempunyai kapal motor",
      },
    ],
  },
  {
    groupId: 5,
    premises: [
      "Sekolah lebih besar dibandingkan gereja",
      "Gereja lebih kecil dibandingkan stasiun kereta api",
      "Stasiun kereta api lebih besar dibandingkan kantor pos",
      "Gereja sama besar dengan gedung olah raga",
    ],
    questions: [
      {
        id: 21,
        statement: "Gedung olah raga lebih besar dibandingkan gedung sekolah",
      },
      {
        id: 22,
        statement: "Sekolah dan kantor pos sama besarnya",
      },
      {
        id: 23,
        statement: "Sekolah lebih kecil dibandingkan dengan stasiun kereta api",
      },
      {
        id: 24,
        statement: "Gedung olah raga lebih besar dibandingkan dengan kantor pos",
      },
      {
        id: 25,
        statement: "Kantor pos lebih kecil dibandingkan gedung olah raga",
      },
    ],
  },
  {
    groupId: 6,
    premises: [
      "Neni lebih tua dari Tono",
      "Iwan tidak lebih muda dari Hendra",
      "Tono lebih muda dari Erna",
      "Erna tidak lebih tua dari Hendra",
    ],
    questions: [
      {
        id: 26,
        statement: "Erna tidak lebih tua dari Neni",
      },
      {
        id: 27,
        statement: "Tono tidak lebih muda dari Iwan",
      },
      {
        id: 28,
        statement: "Hendra tidak sama umurnya dengan Neni",
      },
      {
        id: 29,
        statement: "Tono tidak lebih tua dari Hendra",
      },
      {
        id: 30,
        statement: "Erna lebih muda dari Hendra",
      },
    ],
  },
];
