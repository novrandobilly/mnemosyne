export interface Eas4Item {
  id: number;
  leftValue: string;
  rightValue: string;
  isMatch: boolean;
}

type Eas4Pair = Omit<Eas4Item, "id">;

const pairs: Eas4Pair[] = [
  // --- Numbers ---
  { leftValue: "8 4 2 7 1 3 9", rightValue: "8 4 2 7 1 3 9", isMatch: true },
  { leftValue: "5 1 9 3 6 0 2", rightValue: "5 1 9 3 6 0 2", isMatch: true },
  { leftValue: "3 7 0 4 8 2 5", rightValue: "3 7 0 4 8 2 5", isMatch: true },
  { leftValue: "6 2 8 1 5 7 4", rightValue: "6 2 8 1 5 7 4", isMatch: true },
  { leftValue: "9 3 5 6 0 4 1", rightValue: "9 3 5 6 0 4 1", isMatch: true },
  { leftValue: "7 6 1 9 4 3 8", rightValue: "7 6 1 9 4 3 8", isMatch: true },
  { leftValue: "0 5 3 2 7 9 6", rightValue: "0 5 3 2 7 9 6", isMatch: true },
  { leftValue: "2 8 6 0 1 5 3", rightValue: "2 8 6 0 1 5 3", isMatch: true },
  { leftValue: "4 9 7 5 3 1 0", rightValue: "4 9 7 5 3 1 0", isMatch: true },
  { leftValue: "1 0 4 8 2 6 7", rightValue: "1 0 4 8 2 6 7", isMatch: true },

  { leftValue: "5 2 8 3 6 1 4", rightValue: "5 2 8 3 6 1 9", isMatch: false },
  { leftValue: "9 7 1 5 0 4 2", rightValue: "9 7 1 5 0 6 2", isMatch: false },
  { leftValue: "3 6 4 9 7 2 0", rightValue: "3 6 4 9 7 2 8", isMatch: false },
  { leftValue: "8 0 2 6 4 3 5", rightValue: "8 0 2 6 4 8 5", isMatch: false },
  { leftValue: "1 4 9 7 5 8 3", rightValue: "1 4 9 7 5 0 3", isMatch: false },
  { leftValue: "7 3 5 0 2 9 6", rightValue: "7 3 5 0 1 9 6", isMatch: false },
  { leftValue: "4 1 6 2 8 5 9", rightValue: "4 1 0 2 8 5 9", isMatch: false },
  { leftValue: "6 5 0 4 1 7 8", rightValue: "6 5 0 4 3 7 8", isMatch: false },
  { leftValue: "2 9 3 8 6 0 7", rightValue: "2 9 3 5 6 0 7", isMatch: false },
  { leftValue: "0 8 7 1 3 2 4", rightValue: "0 8 7 1 9 2 4", isMatch: false },

  // --- Codes ---
  { leftValue: "MX-4871-B", rightValue: "MX-4871-B", isMatch: true },
  { leftValue: "TK-2953-A", rightValue: "TK-2953-A", isMatch: true },
  { leftValue: "PQ-6038-D", rightValue: "PQ-6038-D", isMatch: true },
  { leftValue: "LR-8147-C", rightValue: "LR-8147-C", isMatch: true },
  { leftValue: "ZV-5290-E", rightValue: "ZV-5290-E", isMatch: true },
  { leftValue: "BN-3764-F", rightValue: "BN-3764-F", isMatch: true },
  { leftValue: "GH-1025-K", rightValue: "GH-1025-K", isMatch: true },
  { leftValue: "WS-9483-M", rightValue: "WS-9483-M", isMatch: true },
  { leftValue: "JF-7612-P", rightValue: "JF-7612-P", isMatch: true },
  { leftValue: "CE-0359-R", rightValue: "CE-0359-R", isMatch: true },

  { leftValue: "MX-4871-B", rightValue: "MX-4871-D", isMatch: false },
  { leftValue: "TK-2953-A", rightValue: "TK-2963-A", isMatch: false },
  { leftValue: "PQ-6038-D", rightValue: "PQ-6038-G", isMatch: false },
  { leftValue: "LR-8147-C", rightValue: "LR-8149-C", isMatch: false },
  { leftValue: "ZV-5290-E", rightValue: "ZV-5290-F", isMatch: false },
  { leftValue: "BN-3764-F", rightValue: "BM-3764-F", isMatch: false },
  { leftValue: "GH-1025-K", rightValue: "GH-1025-L", isMatch: false },
  { leftValue: "WS-9483-M", rightValue: "WS-9843-M", isMatch: false },
  { leftValue: "JF-7612-P", rightValue: "JF-7162-P", isMatch: false },
  { leftValue: "CE-0359-R", rightValue: "CE-0395-R", isMatch: false },

  // --- Names ---
  { leftValue: "Ahmad Fauzi", rightValue: "Ahmad Fauzi", isMatch: true },
  { leftValue: "Siti Rahayu", rightValue: "Siti Rahayu", isMatch: true },
  { leftValue: "Budi Santoso", rightValue: "Budi Santoso", isMatch: true },
  { leftValue: "Dewi Lestari", rightValue: "Dewi Lestari", isMatch: true },
  { leftValue: "Eko Prasetyo", rightValue: "Eko Prasetyo", isMatch: true },
  {
    leftValue: "Fitri Handayani",
    rightValue: "Fitri Handayani",
    isMatch: true,
  },
  { leftValue: "Gunawan Wibowo", rightValue: "Gunawan Wibowo", isMatch: true },
  { leftValue: "Hendra Kusuma", rightValue: "Hendra Kusuma", isMatch: true },
  { leftValue: "Indra Setiawan", rightValue: "Indra Setiawan", isMatch: true },
  { leftValue: "Joko Widodo", rightValue: "Joko Widodo", isMatch: true },

  { leftValue: "Ahmad Fauzi", rightValue: "Ahmad Fauzi", isMatch: true },
  { leftValue: "Kartini Putri", rightValue: "Kartini Putri", isMatch: true },
  { leftValue: "Lina Marlina", rightValue: "Lina Marlina", isMatch: true },
  { leftValue: "Muhamad Rizki", rightValue: "Muhamad Rizki", isMatch: true },
  { leftValue: "Nadia Angraini", rightValue: "Nadia Angraini", isMatch: true },

  { leftValue: "Ahmad Fauzi", rightValue: "Ahmad Fauji", isMatch: false },
  { leftValue: "Siti Rahayu", rightValue: "Siti Rahaju", isMatch: false },
  { leftValue: "Budi Santoso", rightValue: "Budi Santosa", isMatch: false },
  { leftValue: "Dewi Lestari", rightValue: "Devi Lestari", isMatch: false },
  { leftValue: "Eko Prasetyo", rightValue: "Eko Prasatyo", isMatch: false },
  {
    leftValue: "Fitri Handayani",
    rightValue: "Fitri Handajani",
    isMatch: false,
  },
  { leftValue: "Gunawan Wibowo", rightValue: "Gunawan Wibawa", isMatch: false },
  { leftValue: "Hendra Kusuma", rightValue: "Hendra Kusomo", isMatch: false },
  { leftValue: "Indra Setiawan", rightValue: "Indra Setiawan", isMatch: true },
  { leftValue: "Kartini Putri", rightValue: "Kartina Putri", isMatch: false },

  // --- Financial codes ---
  { leftValue: "INV-2024-00481", rightValue: "INV-2024-00481", isMatch: true },
  { leftValue: "INV-2024-00512", rightValue: "INV-2024-00512", isMatch: true },
  { leftValue: "INV-2024-00673", rightValue: "INV-2024-00673", isMatch: true },
  { leftValue: "INV-2024-00744", rightValue: "INV-2024-00744", isMatch: true },
  { leftValue: "INV-2024-00895", rightValue: "INV-2024-00895", isMatch: true },
  { leftValue: "INV-2024-01036", rightValue: "INV-2024-01036", isMatch: true },
  { leftValue: "INV-2024-01127", rightValue: "INV-2024-01127", isMatch: true },
  { leftValue: "INV-2024-01258", rightValue: "INV-2024-01258", isMatch: true },

  { leftValue: "INV-2024-00481", rightValue: "INV-2024-00418", isMatch: false },
  { leftValue: "INV-2024-00512", rightValue: "INV-2024-00521", isMatch: false },
  { leftValue: "INV-2024-00673", rightValue: "INV-2024-00637", isMatch: false },
  { leftValue: "INV-2024-00744", rightValue: "INV-2024-00774", isMatch: false },
  { leftValue: "INV-2024-00895", rightValue: "INV-2024-00895", isMatch: true },
  { leftValue: "INV-2024-01036", rightValue: "INV-2025-01036", isMatch: false },
  { leftValue: "INV-2024-01127", rightValue: "INV-2024-01172", isMatch: false },
  { leftValue: "INV-2024-01258", rightValue: "INV-2024-01285", isMatch: false },

  // --- Mixed short strings ---
  { leftValue: "J8X2-9K", rightValue: "J8X2-9K", isMatch: true },
  { leftValue: "R4T6-3M", rightValue: "R4T6-3M", isMatch: true },
  { leftValue: "W9B1-5N", rightValue: "W9B1-5N", isMatch: true },
  { leftValue: "H3F7-2P", rightValue: "H3F7-2P", isMatch: true },
  { leftValue: "L6D0-8Q", rightValue: "L6D0-8Q", isMatch: true },
  { leftValue: "Z2G4-7S", rightValue: "Z2G4-7S", isMatch: true },
  { leftValue: "V5C8-1T", rightValue: "V5C8-1T", isMatch: true },
  { leftValue: "N7A3-4U", rightValue: "N7A3-4U", isMatch: true },
  { leftValue: "Y1K9-6V", rightValue: "Y1K9-6V", isMatch: true },
  { leftValue: "Q4M5-0W", rightValue: "Q4M5-0W", isMatch: true },

  { leftValue: "J8X2-9K", rightValue: "J8X2-9J", isMatch: false },
  { leftValue: "R4T6-3M", rightValue: "R4T6-3N", isMatch: false },
  { leftValue: "W9B1-5N", rightValue: "W9B1-5M", isMatch: false },
  { leftValue: "H3F7-2P", rightValue: "H3F7-2Q", isMatch: false },
  { leftValue: "L6D0-8Q", rightValue: "L6D0-8R", isMatch: false },
  { leftValue: "Z2G4-7S", rightValue: "Z2G4-7T", isMatch: false },
  { leftValue: "V5C8-1T", rightValue: "V5C8-1U", isMatch: false },
  { leftValue: "N7A3-4U", rightValue: "N7A3-4V", isMatch: false },
  { leftValue: "Y1K9-6V", rightValue: "Y1K9-6W", isMatch: false },
  { leftValue: "Q4M5-0W", rightValue: "Q4M5-0X", isMatch: false },

  // --- Long numeric strings ---
  { leftValue: "74829105638", rightValue: "74829105638", isMatch: true },
  { leftValue: "31650847290", rightValue: "31650847290", isMatch: true },
  { leftValue: "09274563810", rightValue: "09274563810", isMatch: true },
  { leftValue: "56381029475", rightValue: "56381029475", isMatch: true },
  { leftValue: "82047195364", rightValue: "82047195364", isMatch: true },
  { leftValue: "19368402751", rightValue: "19368402751", isMatch: true },
  { leftValue: "47531986204", rightValue: "47531986204", isMatch: true },
  { leftValue: "63904752180", rightValue: "63904752180", isMatch: true },
  { leftValue: "20815473692", rightValue: "20815473692", isMatch: true },
  { leftValue: "95247038164", rightValue: "95247038164", isMatch: true },

  { leftValue: "74829105638", rightValue: "74829105683", isMatch: false },
  { leftValue: "31650847290", rightValue: "31650847920", isMatch: false },
  { leftValue: "09274563810", rightValue: "09274568310", isMatch: false },
  { leftValue: "56381029475", rightValue: "56381029457", isMatch: false },
  { leftValue: "82047195364", rightValue: "82047195346", isMatch: false },
  { leftValue: "19368402751", rightValue: "19368402715", isMatch: false },
  { leftValue: "47531986204", rightValue: "47531986240", isMatch: false },
  { leftValue: "63904752180", rightValue: "63904752108", isMatch: false },
  { leftValue: "20815473692", rightValue: "20815473962", isMatch: false },
  { leftValue: "95247038164", rightValue: "95247038146", isMatch: false },

  // --- Mixed second batch ---
  { leftValue: "KP-5519-028", rightValue: "KP-5519-028", isMatch: true },
  { leftValue: "DL-8830-114", rightValue: "DL-8830-114", isMatch: true },
  { leftValue: "RM-2247-305", rightValue: "RM-2247-305", isMatch: true },
  { leftValue: "XT-6673-491", rightValue: "XT-6673-491", isMatch: true },
  { leftValue: "FN-9941-582", rightValue: "FN-9941-582", isMatch: true },
  { leftValue: "OH-3358-677", rightValue: "OH-3358-677", isMatch: true },
  { leftValue: "SU-7764-863", rightValue: "SU-7764-863", isMatch: true },
  { leftValue: "AV-1172-959", rightValue: "AV-1172-959", isMatch: true },
  { leftValue: "EW-4485-041", rightValue: "EW-4485-041", isMatch: true },
  { leftValue: "IY-8893-136", rightValue: "IY-8893-136", isMatch: true },

  { leftValue: "KP-5519-028", rightValue: "KP-5591-028", isMatch: false },
  { leftValue: "DL-8830-114", rightValue: "DL-8830-141", isMatch: false },
  { leftValue: "RM-2247-305", rightValue: "RM-2274-305", isMatch: false },
  { leftValue: "XT-6673-491", rightValue: "XT-6637-491", isMatch: false },
  { leftValue: "FN-9941-582", rightValue: "FN-9941-528", isMatch: false },
  { leftValue: "OH-3358-677", rightValue: "OH-3385-677", isMatch: false },
  { leftValue: "SU-7764-863", rightValue: "SU-7764-638", isMatch: false },
  { leftValue: "AV-1172-959", rightValue: "AV-1712-959", isMatch: false },
  { leftValue: "EW-4485-041", rightValue: "EW-4485-410", isMatch: false },
  { leftValue: "IY-8893-136", rightValue: "IY-8893-163", isMatch: false },

  // --- Extra pairs to reach 150 ---
  { leftValue: "4 8 3 1 9 7 5", rightValue: "4 8 3 1 9 7 5", isMatch: true },
  { leftValue: "7 2 5 9 4 0 6", rightValue: "7 2 5 9 4 0 8", isMatch: false },
  { leftValue: "PZ-0037-H", rightValue: "PZ-0037-H", isMatch: true },
  { leftValue: "CY-7720-W", rightValue: "CY-7720-V", isMatch: false },
  { leftValue: "Rizal Mahendra", rightValue: "Rizal Mahendra", isMatch: true },
  { leftValue: "Olivia Sari", rightValue: "Olivia Sari", isMatch: true },
  { leftValue: "Faisal Akbar", rightValue: "Faisal Akber", isMatch: false },
  { leftValue: "INV-2024-01399", rightValue: "INV-2024-01399", isMatch: true },
  { leftValue: "INV-2024-01461", rightValue: "INV-2024-01416", isMatch: false },
];

// Shuffle with seeded order for reproducibility
const shuffled = [...pairs].sort((a, b) => {
  const hash = (s: string) =>
    [...s].reduce((acc, c) => acc * 31 + c.charCodeAt(0), 0);
  return hash(a.leftValue + a.rightValue) - hash(b.leftValue + b.rightValue);
});

export const eas4Data: Eas4Item[] = shuffled
  .slice(0, 150)
  .map((pair, index) => ({ id: index + 1, ...pair }));
