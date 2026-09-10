import type { PapiResults } from "@/features/main/PKResult/types";
import { PAPI_SOLUTION_KEY } from "./solution";

export const INITIAL_PAPI_SCORES: PapiResults = {
  N: 0,
  G: 0,
  A: 0,
  L: 0,
  P: 0,
  I: 0,
  T: 0,
  V: 0,
  S: 0,
  R: 0,
  D: 0,
  C: 0,
  E: 0,
  X: 0,
  B: 0,
  O: 0,
  Z: 0,
  K: 0,
  F: 0,
  W: 0,
};

/**
 * Calculates the 20 PAPI Kostick aspect scores from raw answers.
 * Supports both keys like "q_1" and numeric keys like 1.
 */
export const scorePapiKostick = (
  rawAnswers: Record<string | number, any> | undefined | null,
): PapiResults => {
  const scores: PapiResults = { ...INITIAL_PAPI_SCORES };
  if (!rawAnswers || typeof rawAnswers !== "object") {
    return scores;
  }

  for (let id = 1; id <= 90; id++) {
    const pair = PAPI_SOLUTION_KEY[id];
    if (!pair) continue;

    // Support both "q_1" and "1" or numeric 1
    const chosen: string | undefined =
      rawAnswers[`q_${id}`] ?? rawAnswers[id] ?? rawAnswers[String(id)];

    if (chosen === "a" || chosen === "A") {
      scores[pair.a] = (scores[pair.a] || 0) + 1;
    } else if (chosen === "b" || chosen === "B") {
      scores[pair.b] = (scores[pair.b] || 0) + 1;
    }
  }

  return scores;
};
