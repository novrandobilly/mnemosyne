export interface DiscResult {
  rawAnswers: RawAnswer[];
  processedResults: ProcessedResults;
  metadata: Metadata;
}

export interface RawAnswer {
  questionId: number;
  most: string;
  least: string;
}

export interface ProcessedResults {
  most: Most;
  least: Least;
  change: Change;
  totals: Totals;
}

export interface Most {
  D: number;
  I: number;
  S: number;
  C: number;
  Star: number;
}

export interface Least {
  D: number;
  I: number;
  S: number;
  C: number;
  Star: number;
}

export interface Change {
  D: number;
  I: number;
  S: number;
  C: number;
  Star: number;
}

export interface Totals {
  most: number;
  least: number;
}

export interface Metadata {
  test_name: string;
  total_questions: number;
  scored_by: string;
}

export type DiscCategory = "D" | "I" | "S" | "C" | "Star";

export interface DiscScores {
  MOST: Record<DiscCategory, number>;
  LEAST: Record<DiscCategory, number>;
  CHANGE: Record<DiscCategory, number>;
}
