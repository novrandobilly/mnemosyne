export type Eas10Answer = "benar" | "salah" | "belum-pasti";

export interface Eas10Item {
  id: number;
  expression: string;
  conclusion: string;
}

export const eas10Data: Eas10Item[] = [
  { id: 1,  expression: "A > B = C",  conclusion: "A = C"  },
  { id: 2,  expression: "A > B > C",  conclusion: "A > C"  },
  { id: 3,  expression: "A < B < C",  conclusion: "A > C"  },
  { id: 4,  expression: "A ≤ B = C",  conclusion: "A ≤ C"  },
  { id: 5,  expression: "A > B < C",  conclusion: "A < C"  },
  { id: 6,  expression: "A ≠ B = C",  conclusion: "A = C"  },
  { id: 7,  expression: "A < B = C",  conclusion: "A = C"  },
  { id: 8,  expression: "A < B > C",  conclusion: "A > C"  },
  { id: 9,  expression: "A ≤ B ≤ C",  conclusion: "A ≤ C"  },
  { id: 10, expression: "A ≠ B ≤ C",  conclusion: "A ≤ C"  },
  { id: 11, expression: "A ≥ B > C",  conclusion: "A > C"  },
  { id: 12, expression: "A > B ≠ C",  conclusion: "A ≠ C"  },
  { id: 13, expression: "A = B < C",  conclusion: "A ≤ C"  },
  { id: 14, expression: "A > B ≥ C",  conclusion: "A < C"  },
  { id: 15, expression: "A < B ≤ C",  conclusion: "A < C"  },
  { id: 16, expression: "A ≥ B ≠ C",  conclusion: "A ≠ C"  },
  { id: 17, expression: "A ≤ B < C",  conclusion: "A < C"  },
  { id: 18, expression: "A > B ≥ C",  conclusion: "A > C"  },
  { id: 19, expression: "A ≤ B < C",  conclusion: "A ≥ C"  },
  { id: 20, expression: "A > B ≥ C",  conclusion: "A ≤ C"  },
  { id: 21, expression: "A ≥ B ≥ C",  conclusion: "A < C"  },
  { id: 22, expression: "A > B ≥ C",  conclusion: "A ≥ C"  },
  { id: 23, expression: "A ≤ B ≤ C",  conclusion: "A > C"  },
  { id: 24, expression: "A < B ≤ C",  conclusion: "A ≥ C"  },
  { id: 25, expression: "A ≤ B ≥ C",  conclusion: "A < C"  },
  { id: 26, expression: "A > B ≤ C",  conclusion: "A > C"  },
  { id: 27, expression: "A ≤ B ≥ C",  conclusion: "A ≠ C"  },
  { id: 28, expression: "A ≤ B < C",  conclusion: "A ≠ C"  },
  { id: 29, expression: "A ≥ B < C",  conclusion: "A ≥ C"  },
  { id: 30, expression: "A < B ≥ C",  conclusion: "A ≥ C"  },
];
