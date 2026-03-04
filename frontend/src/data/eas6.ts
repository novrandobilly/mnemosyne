export interface Eas6Item {
  id: number;
  question: string;
  options: [string, string, string, string, string];
  answer: string;
}

// Each question shows 7 numbers; the user must find the 8th.
const problems: Omit<Eas6Item, "id">[] = [
  {
    // +3 each step
    question: "2,  5,  8,  11,  14,  17,  20,  ?",
    options: ["21", "22", "23", "24", "25"],
    answer: "23",
  },
  {
    // ×2 each step
    question: "3,  6,  12,  24,  48,  96,  192,  ?",
    options: ["256", "288", "320", "384", "400"],
    answer: "384",
  },
  {
    // Fibonacci (each = sum of previous two)
    question: "0,  1,  1,  2,  3,  5,  8,  ?",
    options: ["11", "12", "13", "14", "15"],
    answer: "13",
  },
  {
    // Perfect squares
    question: "1,  4,  9,  16,  25,  36,  49,  ?",
    options: ["56", "60", "64", "72", "81"],
    answer: "64",
  },
  {
    // -5 each step
    question: "50,  45,  40,  35,  30,  25,  20,  ?",
    options: ["10", "12", "14", "15", "16"],
    answer: "15",
  },
  {
    // ÷2 each step
    question: "256,  128,  64,  32,  16,  8,  4,  ?",
    options: ["0", "1", "2", "3", "4"],
    answer: "2",
  },
  {
    // +7 each step
    question: "5,  12,  19,  26,  33,  40,  47,  ?",
    options: ["48", "51", "54", "56", "60"],
    answer: "54",
  },
  {
    // Odd numbers
    question: "1,  3,  5,  7,  9,  11,  13,  ?",
    options: ["14", "15", "16", "17", "18"],
    answer: "15",
  },
  {
    // Differences increase by 2: +1,+2,+3,+4,+5,+6,+7
    question: "2,  3,  5,  8,  12,  17,  23,  ?",
    options: ["28", "29", "30", "31", "32"],
    answer: "30",
  },
  {
    // Powers of 2
    question: "1,  2,  4,  8,  16,  32,  64,  ?",
    options: ["96", "108", "128", "144", "256"],
    answer: "128",
  },
  {
    // n×(n+1): 1×2, 2×3, 3×4 ...
    question: "2,  6,  12,  20,  30,  42,  56,  ?",
    options: ["63", "66", "70", "72", "80"],
    answer: "72",
  },
  {
    // Alternating ×2 then +1: 1,2,3,6,7,14,15
    question: "1,  2,  3,  6,  7,  14,  15,  ?",
    options: ["16", "21", "28", "30", "32"],
    answer: "30",
  },
  {
    // ÷3 each step
    question: "2187,  729,  243,  81,  27,  9,  3,  ?",
    options: ["0", "1", "2", "3", "6"],
    answer: "1",
  },
  {
    // Alternating +5 then -2
    question: "3,  8,  6,  11,  9,  14,  12,  ?",
    options: ["14", "15", "16", "17", "18"],
    answer: "17",
  },
  {
    // n² + 1
    question: "2,  5,  10,  17,  26,  37,  50,  ?",
    options: ["61", "63", "65", "67", "70"],
    answer: "65",
  },
  {
    // Triangular numbers
    question: "1,  3,  6,  10,  15,  21,  28,  ?",
    options: ["32", "34", "36", "38", "40"],
    answer: "36",
  },
  {
    // ×3 each step
    question: "2,  6,  18,  54,  162,  486,  1458,  ?",
    options: ["3000", "3600", "4374", "4800", "5000"],
    answer: "4374",
  },
  {
    // Perfect cubes
    question: "1,  8,  27,  64,  125,  216,  343,  ?",
    options: ["400", "448", "512", "600", "729"],
    answer: "512",
  },
  {
    // Alternating -10 and +5
    question: "80,  70,  75,  65,  70,  60,  65,  ?",
    options: ["55", "57", "60", "62", "70"],
    answer: "55",
  },
  {
    // Prime numbers
    question: "2,  3,  5,  7,  11,  13,  17,  ?",
    options: ["18", "19", "20", "21", "23"],
    answer: "19",
  },
];

export const eas6Data: Eas6Item[] = problems.map((p, i) => ({
  id: i + 1,
  ...p,
}));
