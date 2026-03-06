import type { PapiScoreKey } from "../../types";

function tier(score: number, low: string, mid: string, high: string): string {
  if (score <= 3) return low;
  if (score <= 6) return mid;
  return high;
}

export interface FactorInfo {
  name: string;
  shortName: string;
  interpret: (score: number) => string;
}

export const FACTOR_INFO: Record<PapiScoreKey, FactorInfo> = {
  N: {
    name: "Kebutuhan Berprestasi",
    shortName: "Need to Achieve",
    interpret: (s) =>
      tier(
        s,
        "Individu tidak terlalu terdorong oleh keinginan mencapai prestasi tertinggi. Cenderung bekerja sesuai standar yang ada tanpa ambisi khusus untuk melampaui target yang ditetapkan.",
        "Individu memiliki ambisi dan kebutuhan berprestasi yang cukup seimbang. Mampu termotivasi oleh pencapaian namun proporsional dalam menetapkan dan mengejar target.",
        "Individu sangat terdorong oleh kebutuhan untuk mencapai hasil terbaik. Menetapkan standar tinggi untuk diri sendiri dan secara konsisten berupaya melampaui target yang ada.",
      ),
  },
  G: {
    name: "Peran Pekerja Keras",
    shortName: "Hard Intense Worker",
    interpret: (s) =>
      tier(
        s,
        "Tidak menampilkan peran sebagai pekerja keras. Cenderung bekerja dengan ritme santai dan tidak merasa perlu untuk bekerja secara intensif sepanjang waktu.",
        "Menampilkan semangat kerja yang cukup dengan ritme yang stabil. Mampu bekerja keras bila situasi menuntut, namun tidak secara konsisten intensif.",
        "Sangat menampilkan peran sebagai pekerja keras yang intensif. Selalu berupaya memberikan upaya maksimal dalam setiap pekerjaan dan tidak mudah menyerah.",
      ),
  },
  A: {
    name: "Kebutuhan Menguasai",
    shortName: "Need for Control",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu membutuhkan kontrol atas situasi atau orang lain. Lebih nyaman dalam posisi yang tidak mengharuskan pengambilan keputusan secara dominan.",
        "Memiliki kebutuhan kontrol yang seimbang — mampu memimpin ketika diperlukan namun tidak cenderung mendominasi dalam setiap situasi.",
        "Memiliki kebutuhan kuat untuk menguasai situasi dan memimpin orang lain. Sangat nyaman dalam posisi yang memberikan wewenang dan kendali yang signifikan.",
      ),
  },
  L: {
    name: "Peran Pemimpin",
    shortName: "Leadership Role",
    interpret: (s) =>
      tier(
        s,
        "Tidak cenderung mengambil peran kepemimpinan. Lebih nyaman beroperasi sebagai anggota tim atau pendukung yang membantu tujuan kelompok.",
        "Menunjukkan potensi kepemimpinan yang cukup. Dapat mengambil peran pemimpin ketika situasi menuntut atau ketika diminta secara eksplisit.",
        "Sangat aktif mengambil peran kepemimpinan. Secara natural menempatkan diri sebagai pemimpin dalam berbagai situasi kelompok dan menikmati tanggung jawab mengarahkan tim.",
      ),
  },
  P: {
    name: "Kebutuhan Diakui Atasan",
    shortName: "Need for Supervisory Approval",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu membutuhkan pengakuan atau persetujuan dari atasan. Mampu bekerja secara mandiri tanpa bergantung pada apresiasi dari hierarki organisasi.",
        "Memiliki kebutuhan pengakuan dari atasan yang wajar. Menghargai umpan balik positif namun tidak menjadikannya sebagai sumber utama motivasi.",
        "Sangat membutuhkan pengakuan, persetujuan, dan apresiasi dari atasan. Motivasi kerja sangat dipengaruhi oleh respons positif hierarki atas kinerjanya.",
      ),
  },
  I: {
    name: "Peran Pengatur",
    shortName: "Organizing Role",
    interpret: (s) =>
      tier(
        s,
        "Tidak cenderung mengatur atau mengarahkan pekerjaan orang lain. Lebih nyaman dalam peran pelaksana daripada sebagai pengelola atau koordinator.",
        "Memiliki kemampuan dan keinginan yang cukup untuk mengorganisir pekerjaan. Dapat mengatur orang lain dengan efektif ketika situasi membutuhkannya.",
        "Sangat aktif mengorganisir dan mengarahkan pekerjaan orang lain. Senang merencanakan, mendelegasikan, dan memastikan semua berjalan terstruktur dengan baik.",
      ),
  },
  T: {
    name: "Tipe Aktivitas",
    shortName: "Activity Type",
    interpret: (s) =>
      tier(
        s,
        "Cenderung memiliki gaya berpikir praktis dan konkret. Lebih suka bekerja dengan hal-hal nyata yang dapat langsung diterapkan dan menghasilkan output yang terukur.",
        "Memiliki keseimbangan antara gaya berpikir praktis dan konseptual. Mampu beroperasi secara efektif di kedua ranah sesuai dengan konteks dan kebutuhan.",
        "Cenderung memiliki gaya berpikir abstrak dan konseptual. Tertarik pada ide-ide besar, analisis mendalam, dan pendekatan teoritis dalam pemecahan masalah.",
      ),
  },
  V: {
    name: "Semangat Kerja",
    shortName: "Vigor",
    interpret: (s) =>
      tier(
        s,
        "Memiliki tingkat energi dan vitalitas yang relatif rendah dalam bekerja. Cenderung bekerja dengan tempo yang lebih tenang dan tidak menyukai kondisi kerja yang terlalu intens.",
        "Menunjukkan semangat dan energi kerja yang cukup memadai. Mampu menjalankan tugas sehari-hari dengan semangat yang stabil dan konsisten.",
        "Memiliki energi dan semangat kerja yang sangat tinggi. Mampu mempertahankan intensitas kerja dalam jangka panjang dengan vitalitas yang konsisten dan penuh daya.",
      ),
  },
  S: {
    name: "Aktivitas Sosial",
    shortName: "Social Activity",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu aktif dalam kegiatan sosial. Lebih memilih bekerja secara mandiri atau dalam lingkaran sosial yang terbatas dan terpilih.",
        "Memiliki tingkat aktivitas sosial yang seimbang. Menikmati interaksi sosial namun juga nyaman bekerja sendiri dalam porsi waktu yang cukup.",
        "Sangat aktif dan antusias dalam bergaul dan bersosialisasi. Menikmati pertemuan kelompok, membangun jaringan luas, dan berinteraksi dengan banyak orang secara penuh semangat.",
      ),
  },
  R: {
    name: "Kedekatan Hubungan",
    shortName: "Interpersonal Relations",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu membutuhkan atau mencari hubungan interpersonal yang intim. Cenderung menjaga jarak profesional yang nyaman dalam relasi kerja.",
        "Menghargai hubungan yang hangat namun menjaga keseimbangan antara kedekatan emosional dan profesionalisme dalam lingkungan kerja.",
        "Sangat menghargai dan aktif membangun hubungan interpersonal yang dekat dan intim. Menanamkan investasi emosional yang tinggi dalam relasi personal di lingkungan kerja.",
      ),
  },
  D: {
    name: "Luasnya Pergaulan",
    shortName: "Social Extension",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu menginginkan keterlibatan luas dalam kelompok atau komunitas. Lebih memilih lingkaran sosial yang kecil namun bermakna dan terpercaya.",
        "Memiliki keinginan yang cukup untuk bergabung dan berpartisipasi dalam kelompok. Mau terlibat bila ada kepentingan atau relevansi yang jelas.",
        "Sangat ingin menjadi bagian dari banyak kelompok dan komunitas. Aktif memperluas jaringan dan terlibat dalam berbagai kegiatan sosial dengan antusiasme yang tinggi.",
      ),
  },
  C: {
    name: "Pengendalian Emosi",
    shortName: "Emotional Control",
    interpret: (s) =>
      tier(
        s,
        "Memiliki kendali emosi yang relatif lemah. Cenderung mengekspresikan emosi secara lebih terbuka dan reaktif terhadap tekanan, kritik, atau situasi yang tidak menyenangkan.",
        "Menunjukkan pengendalian emosi yang cukup baik dalam situasi normal. Kadang dapat bereaksi secara emosional dalam situasi yang penuh tekanan atau konflik.",
        "Memiliki pengendalian emosi yang sangat kuat. Mampu tetap tenang, rasional, dan stabil bahkan dalam situasi-situasi yang penuh tekanan tinggi dan konfliktual.",
      ),
  },
  E: {
    name: "Ketabahan",
    shortName: "Tenacity",
    interpret: (s) =>
      tier(
        s,
        "Kecenderungan untuk berpindah dari satu tugas ke tugas lain sebelum menyelesaikannya. Kurang tekun dalam menghadapi pekerjaan yang panjang, berulang, atau monoton.",
        "Menunjukkan ketekunan yang cukup dalam menyelesaikan pekerjaan. Mampu bertahan dalam tugas yang panjang bila terdapat motivasi yang memadai.",
        "Sangat tekun dan ulet dalam menyelesaikan pekerjaan hingga tuntas. Tidak mudah menyerah dan konsisten mempertahankan fokus pada tugas-tugas jangka panjang.",
      ),
  },
  X: {
    name: "Kebutuhan Afiliasi",
    shortName: "Need for Affiliation",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu membutuhkan kedekatan emosional dengan rekan kerja. Lebih nyaman menjaga hubungan pada tingkat profesional yang terstruktur dan tidak terlalu personal.",
        "Menghargai kedekatan namun tidak sangat bergantung pada afiliasi emosional. Menikmati hubungan baik tanpa ketergantungan afektif yang berlebihan.",
        "Memiliki kebutuhan kuat akan kedekatan dan afiliasi dengan orang-orang di sekitarnya. Menganggap hubungan personal yang hangat sebagai bagian penting dari kepuasan kerja.",
      ),
  },
  B: {
    name: "Kebutuhan Agresi",
    shortName: "Need to be Forceful",
    interpret: (s) =>
      tier(
        s,
        "Tidak cenderung konfrontatif. Menghindari perdebatan langsung dan lebih memilih pendekatan kooperatif dalam menyelesaikan semua perbedaan pendapat.",
        "Mampu bersikap tegas ketika diperlukan namun tidak secara berlebihan. Menyeimbangkan antara ketegasan pendirian dan pemeliharaan keharmonisan relasi.",
        "Memiliki kecenderungan tinggi untuk bersikap tegas, asertif, dan konfrontatif bila dianggap perlu. Tidak segan menyuarakan pendapat keras atau menantang pandangan orang lain.",
      ),
  },
  O: {
    name: "Kebutuhan Keteraturan",
    shortName: "Need for Orderliness",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu membutuhkan keteraturan dan struktur dalam bekerja. Lebih fleksibel dan nyaman dengan kondisi yang tidak pasti, ambigu, atau berubah-ubah.",
        "Menghargai keteraturan namun dapat beradaptasi dengan kondisi yang kurang terstruktur bila situasi menuntut.",
        "Sangat membutuhkan keteraturan, sistematika, dan prosedur yang jelas dalam bekerja. Bekerja paling efektif dalam lingkungan yang terstruktur dengan baik dan terprediksi.",
      ),
  },
  Z: {
    name: "Kebutuhan Perubahan",
    shortName: "Need for Change",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu membutuhkan variasi dan perubahan. Nyaman dengan rutinitas dan stabilitas dalam pekerjaan sehari-hari serta tidak mudah terganggu oleh monotoni.",
        "Menghargai perubahan secukupnya. Dapat beradaptasi dengan perubahan namun juga menikmati stabilitas dan konsistensi dalam batas-batas tertentu.",
        "Sangat membutuhkan variasi, perubahan, dan stimulasi baru dalam pekerjaan. Mudah bosan dengan rutinitas dan selalu mencari cara-cara serta tantangan-tantangan baru.",
      ),
  },
  K: {
    name: "Peran Pengikut",
    shortName: "Need for Rules & Supervision",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu terikat pada aturan dan prosedur yang ada. Cenderung fleksibel dan lebih suka menyesuaikan pendekatan berdasarkan situasi yang sedang dihadapi.",
        "Mampu mengikuti aturan dan prosedur dengan cukup baik sambil tetap mempertahankan fleksibilitas yang diperlukan dalam situasi tertentu.",
        "Sangat menghargai dan patuh pada aturan, prosedur, dan otoritas. Merasa nyaman dan bekerja paling efektif dalam struktur yang jelas dengan arahan yang terperinci.",
      ),
  },
  F: {
    name: "Kebutuhan Dukungan Atasan",
    shortName: "Need for Support from Superiors",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu membutuhkan bimbingan atau dukungan dari atasan. Sangat mandiri dalam mengambil keputusan dan mengeksekusi pekerjaan tanpa campur tangan hierarki.",
        "Menghargai dukungan dari atasan namun mampu bekerja secara mandiri ketika diperlukan. Keseimbangan yang cukup baik antara otonomi dan ketergantungan hierarkis.",
        "Sangat membutuhkan bimbingan, dukungan, dan arahan yang jelas dari atasan. Bekerja paling efektif ketika mendapat panduan yang terstruktur dari figur otoritas.",
      ),
  },
  W: {
    name: "Kebutuhan Diperhatikan",
    shortName: "Need for Recognition",
    interpret: (s) =>
      tier(
        s,
        "Tidak terlalu membutuhkan perhatian atau pengakuan dari orang lain. Lebih termotivasi secara internal dan tidak bergantung pada validasi eksternal untuk bekerja optimal.",
        "Menghargai pengakuan dari orang lain namun tidak bergantung padanya. Mampu bekerja efektif tanpa validasi eksternal yang berlebihan dari lingkungan sekitar.",
        "Sangat membutuhkan perhatian, pengakuan, dan apresiasi dari orang-orang di sekitarnya. Motivasi kerja sangat dipengaruhi oleh respons positif yang diterima dari lingkungan sosial.",
      ),
  },
};

// ─── VS Comparison Blocks ────────────────────────────────────────

export interface VsBlock {
  left: PapiScoreKey;
  right: PapiScoreKey;
  interpret: (leftScore: number, rightScore: number) => string;
}

// ─── Categories ──────────────────────────────────────────────────

export interface CategoryData {
  en: string;
  id: string;
  factors: PapiScoreKey[];
  vsBlocks: VsBlock[];
}

export const CATEGORIES: CategoryData[] = [
  {
    en: "Work Direction",
    id: "Arah Kerja",
    factors: ["N", "G", "A"],
    vsBlocks: [
      {
        left: "N",
        right: "W",
        interpret: (ls, rs) => {
          const diff = ls - rs;
          if (diff >= 3)
            return "N dominan: Individu lebih terdorong oleh motivasi intrinsik untuk berprestasi dibanding kebutuhan pengakuan dari luar. Orientasi kerja bersifat mandiri dan fokus pada hasil.";
          if (diff <= -3)
            return "W dominan: Individu lebih membutuhkan pengakuan dan perhatian dari lingkungan dibanding dorongan berprestasi. Motivasi eksternal berperan lebih besar dalam mendorong kinerjanya.";
          return "N & W seimbang: Individu memiliki keseimbangan yang baik antara motivasi berprestasi secara intrinsik dan kebutuhan mendapat pengakuan dari lingkungan sekitar.";
        },
      },
    ],
  },
  {
    en: "Leadership",
    id: "Kepemimpinan",
    factors: ["L", "P", "I"],
    vsBlocks: [
      {
        left: "L",
        right: "K",
        interpret: (ls, rs) => {
          const diff = ls - rs;
          if (diff >= 3)
            return "L dominan: Individu secara aktif menempatkan diri sebagai pemimpin dan menginisiasi arah. Dorongan memimpin jauh lebih kuat dibandingkan kecenderungan mengikuti arahan.";
          if (diff <= -3)
            return "K dominan: Individu lebih nyaman berada dalam posisi pengikut yang mengikuti arahan atasan. Lebih senang melaksanakan daripada menginisiasi dan menentukan arah.";
          return "L & K seimbang: Individu mampu beradaptasi antara peran memimpin dan mengikuti sesuai dengan tuntutan situasi yang dihadapi.";
        },
      },
    ],
  },
  {
    en: "Activity",
    id: "Aktivitas",
    factors: ["T", "V"],
    vsBlocks: [
      {
        left: "V",
        right: "T",
        interpret: (ls, rs) => {
          const diff = ls - rs;
          if (diff >= 3)
            return "V dominan: Individu memiliki energi fisik yang tinggi namun gaya berpikirnya lebih praktikal. Bekerja paling efektif pada tugas-tugas operasional yang bergerak cepat.";
          if (diff <= -3)
            return "T dominan: Gaya berpikir konseptual lebih menonjol dari semangat fisik. Individu lebih energik dalam eksplorasi ide dan analisis daripada aktivitas intensif.";
          return "V & T seimbang: Individu menunjukkan keseimbangan yang baik antara semangat fisik dalam bekerja dan gaya berpikir yang dimilikinya.";
        },
      },
    ],
  },
  {
    en: "Social Nature",
    id: "Sifat Sosial",
    factors: ["S", "R", "D"],
    vsBlocks: [
      {
        left: "S",
        right: "R",
        interpret: (ls, rs) => {
          const diff = ls - rs;
          if (diff >= 3)
            return "S dominan: Individu lebih berorientasi pada aktivitas sosial yang luas dan berjejaring dibanding membangun kedekatan mendalam dengan individu tertentu.";
          if (diff <= -3)
            return "R dominan: Individu lebih mengutamakan kualitas kedekatan hubungan dibanding kuantitas jaringan. Lebih memilih sedikit relasi yang intim dan bermakna.";
          return "S & R seimbang: Individu memiliki orientasi sosial yang seimbang antara keluasan jaringan dan kedalaman hubungan personal.";
        },
      },
    ],
  },
  {
    en: "Work Style",
    id: "Gaya Kerja",
    factors: ["C", "E", "Z"],
    vsBlocks: [
      {
        left: "E",
        right: "Z",
        interpret: (ls, rs) => {
          const diff = ls - rs;
          if (diff >= 3)
            return "E dominan: Individu sangat tekun menyelesaikan tugas yang ada dibanding mencari perubahan. Konsistensi dan penyelesaian lebih penting dari mengeksplorasi hal baru.";
          if (diff <= -3)
            return "Z dominan: Kebutuhan perubahan dan variasi lebih kuat dari ketabahan. Individu cenderung berpindah ke tantangan baru sebelum menyelesaikan yang lama secara tuntas.";
          return "E & Z seimbang: Individu cukup mampu menyeimbangkan antara ketekunan menyelesaikan tugas dan kebutuhan akan variasi serta perubahan.";
        },
      },
    ],
  },
  {
    en: "Temperament",
    id: "Temperamen",
    factors: ["X", "B", "O"],
    vsBlocks: [
      {
        left: "X",
        right: "B",
        interpret: (ls, rs) => {
          const diff = ls - rs;
          if (diff >= 3)
            return "X dominan: Orientasi afiliasi lebih kuat dari agresi. Individu mengedepankan keharmonisan dan kedekatan hubungan, serta cenderung menghindari konfrontasi langsung.";
          if (diff <= -3)
            return "B dominan: Kecenderungan untuk bersikap tegas dan konfrontatif lebih menonjol dibanding kebutuhan afiliasi. Individu tidak segan mempertahankan posisi dengan cara asertif.";
          return "X & B seimbang: Individu mampu bersikap tegas ketika diperlukan namun tetap menjaga kedekatan dan keharmonisan hubungan interpersonal.";
        },
      },
    ],
  },
  {
    en: "Followership",
    id: "Peran Pengikut",
    factors: ["K", "F", "W"],
    vsBlocks: [
      {
        left: "F",
        right: "W",
        interpret: (ls, rs) => {
          const diff = ls - rs;
          if (diff >= 3)
            return "F dominan: Kebutuhan mendapat bimbingan dari atasan lebih menonjol dari kebutuhan pengakuan publik. Individu lebih fokus pada memperoleh arahan yang jelas daripada menjadi pusat perhatian.";
          if (diff <= -3)
            return "W dominan: Kebutuhan diperhatikan dan diakui lebih kuat dari kebutuhan bimbingan atasan. Individu lebih termotivasi oleh apresiasi dari lingkungan luas.";
          return "F & W seimbang: Individu memiliki keseimbangan yang baik antara kebutuhan mendapat bimbingan dari atasan dan kebutuhan mendapat pengakuan dari lingkungan secara umum.";
        },
      },
    ],
  },
];
