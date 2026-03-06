export type DiscCategory = "D" | "I" | "S" | "C" | "Star";

export interface DiscRowScores {
  D: number;
  I: number;
  S: number;
  C: number;
  Star: number;
}

export interface DiscScores {
  MOST: DiscRowScores;
  LEAST: DiscRowScores;
  CHANGE: DiscRowScores;
}
