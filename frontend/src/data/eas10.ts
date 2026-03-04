export type Eas10Answer = "Benar" | "Salah" | "Unknown";

export interface Eas10Item {
  id: number;
  expression: string;
  conclusion: string;
  correctAnswer: Eas10Answer;
}

export const eas10Data: Eas10Item[] = [
  // ── Benar ────────────────────────────────────────────────────
  { id: 1,  expression: "A > B = C",  conclusion: "A > C",  correctAnswer: "Benar"   },
  { id: 2,  expression: "A < B = C",  conclusion: "A < C",  correctAnswer: "Benar"   },
  { id: 3,  expression: "A = B > C",  conclusion: "A > C",  correctAnswer: "Benar"   },
  { id: 4,  expression: "A = B < C",  conclusion: "A < C",  correctAnswer: "Benar"   },
  { id: 5,  expression: "A = B = C",  conclusion: "A = C",  correctAnswer: "Benar"   },
  { id: 6,  expression: "A > B > C",  conclusion: "A > C",  correctAnswer: "Benar"   },
  { id: 7,  expression: "A < B < C",  conclusion: "A < C",  correctAnswer: "Benar"   },
  { id: 8,  expression: "A ≥ B = C",  conclusion: "A ≥ C",  correctAnswer: "Benar"   },
  { id: 9,  expression: "A ≤ B = C",  conclusion: "A ≤ C",  correctAnswer: "Benar"   },
  { id: 10, expression: "A ≥ B ≥ C",  conclusion: "A ≥ C",  correctAnswer: "Benar"   },
  { id: 11, expression: "A ≤ B ≤ C",  conclusion: "A ≤ C",  correctAnswer: "Benar"   },
  { id: 12, expression: "A = B ≠ C",  conclusion: "A ≠ C",  correctAnswer: "Benar"   },
  { id: 13, expression: "A ≥ B > C",  conclusion: "A > C",  correctAnswer: "Benar"   },
  { id: 14, expression: "A > B ≥ C",  conclusion: "A > C",  correctAnswer: "Benar"   },

  // ── Salah ────────────────────────────────────────────────────
  { id: 15, expression: "A > B = C",  conclusion: "A = C",  correctAnswer: "Salah"   },
  { id: 16, expression: "A < B = C",  conclusion: "A > C",  correctAnswer: "Salah"   },
  { id: 17, expression: "A = B > C",  conclusion: "A < C",  correctAnswer: "Salah"   },
  { id: 18, expression: "A ≥ B ≥ C",  conclusion: "A < C",  correctAnswer: "Salah"   },
  { id: 19, expression: "A ≤ B ≤ C",  conclusion: "A > C",  correctAnswer: "Salah"   },
  { id: 20, expression: "A > B > C",  conclusion: "A = C",  correctAnswer: "Salah"   },
  { id: 21, expression: "A = B = C",  conclusion: "A ≠ C",  correctAnswer: "Salah"   },
  { id: 22, expression: "A > B = C",  conclusion: "A < C",  correctAnswer: "Salah"   },

  // ── Unknown ──────────────────────────────────────────────────
  { id: 23, expression: "A > B < C",  conclusion: "A > C",  correctAnswer: "Unknown" },
  { id: 24, expression: "A < B > C",  conclusion: "A < C",  correctAnswer: "Unknown" },
  { id: 25, expression: "A > B < C",  conclusion: "A = C",  correctAnswer: "Unknown" },
  { id: 26, expression: "A < B > C",  conclusion: "A = C",  correctAnswer: "Unknown" },
  { id: 27, expression: "A = B ≠ C",  conclusion: "A > C",  correctAnswer: "Unknown" },
  { id: 28, expression: "A ≠ B = C",  conclusion: "A > C",  correctAnswer: "Unknown" },
  { id: 29, expression: "A > B ≠ C",  conclusion: "A ≠ C",  correctAnswer: "Unknown" },
  { id: 30, expression: "A ≤ B ≥ C",  conclusion: "A = C",  correctAnswer: "Unknown" },
];
