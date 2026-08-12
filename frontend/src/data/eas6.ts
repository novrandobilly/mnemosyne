export interface Eas6Item {
  id: number;
  question: string;
  options: [string, string, string, string, string];
  answer: string;
}

// Mapped from the commented database entries at the bottom of the file
const problems: Omit<Eas6Item, "id">[] = [
  {
    question: "3  3  6  6  9  9  12  ?",
    options: ["15", "14", "13", "12", "11"],
    answer: "12",
  },
  {
    question: "98  87  76  65  54  43  32  ?",
    options: ["23", "21", "19", "11", "7"],
    answer: "21",
  },
  {
    question: "29  92  28  82  27  72  26  ?",
    options: ["52", "62", "26", "25", "17"],
    answer: "62",
  },
  {
    question: "1/2  1  2  4  8  16  32  ?",
    options: ["44", "58", "60", "62", "64"],
    answer: "64",
  },
  {
    question: "98  89  78  87  76  67  56  ?",
    options: ["45", "54", "65", "74", "76"],
    answer: "65",
  },
  {
    question: "1  3  6  10  15  21  28  ?",
    options: ["31", "33", "36", "39", "41"],
    answer: "36",
  },
  {
    question: "81  27  9  3  1  1/3  1/9  ?",
    options: ["1/12", "1/18", "1/21", "1/27", "1/30"],
    answer: "1/27",
  },
  {
    question: "40  32  25  19  14  10  7  ?",
    options: ["1", "2", "3", "4", "5"],
    answer: "5",
  },
  {
    question: "80  40  44  22  26  13  17  ?",
    options: ["21", "8,5", "6", "4,5", "4"],
    answer: "8,5",
  },
  {
    question: "4  8  5  9  6  10  7  ?",
    options: ["13", "9", "12", "11", "10"],
    answer: "11",
  },
  {
    question: "10  5  11  6  12  7  13  ?",
    options: ["11", "10", "9", "8", "7"],
    answer: "8",
  },
  {
    question: "20  22  19  23  18  24  17  ?",
    options: ["22", "23", "24", "25", "26"],
    answer: "25",
  },
  {
    question: "10  8  10  12  10  12  14  ?",
    options: ["18", "16", "15", "14", "12"],
    answer: "12",
  },
  {
    question: "56  28  31  32  16  19  20  ?",
    options: ["6", "16", "12", "14", "10"],
    answer: "10",
  },
  {
    question: "1  4  10  22  46  94  190  ?",
    options: ["382", "360", "350", "255", "198"],
    answer: "382",
  },
  {
    question: "5  4  3  6  9  8  7  ?",
    options: ["11", "12", "13", "14", "15"],
    answer: "14",
  },
  {
    question: "2  3  4  16  4  5  6  ?",
    options: ["16", "20", "24", "26", "27"],
    answer: "24",
  },
  {
    question: "2  7  12  6  4  9  14  ?",
    options: ["7", "9", "11", "13", "15"],
    answer: "7",
  },
  {
    question: "6  8  10  5  3  5  7  ?",
    options: ["6", "5", "4", "3", "2"],
    answer: "2",
  },
  {
    question: "3  5  2  4  8  10  7  ?",
    options: ["12", "14", "16", "18", "20"],
    answer: "14",
  },
];

export const eas6Data: Eas6Item[] = problems.map((p, i) => ({
  id: i + 1,
  ...p,
  question: p.question.replace(/,/g, ""),
}));
