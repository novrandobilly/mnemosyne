import type { DiscCategory, DiscResult, RawAnswer } from "@/features/main/DISCResult/types";
import { DISC_QUESTIONS } from "./index";

/**
 * Calculates DISC processed results (MOST, LEAST, CHANGE) from raw answers.
 * Supports both array of answer objects and Record with keys like "q_1" or numeric IDs.
 */
export const scoreDisc = (
  rawAnswers: Record<string | number, any> | any[] | undefined | null,
): DiscResult => {
  const mostCounts: Record<DiscCategory, number> = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
    Star: 0,
  };
  const leastCounts: Record<DiscCategory, number> = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
    Star: 0,
  };
  const rawList: RawAnswer[] = [];

  if (!rawAnswers) {
    return {
      rawAnswers: [],
      processedResults: {
        most: mostCounts,
        least: leastCounts,
        change: { D: 0, I: 0, S: 0, C: 0, Star: 0 },
        totals: { most: 0, least: 0 },
      },
      metadata: {
        test_name: "DISC",
        total_questions: DISC_QUESTIONS.length,
        scored_by: "system",
      },
    };
  }

  DISC_QUESTIONS.forEach((q) => {
    let ans: any = null;
    if (Array.isArray(rawAnswers)) {
      ans = rawAnswers.find((r: any) => r.questionId === q.id);
    } else if (typeof rawAnswers === "object") {
      ans =
        rawAnswers[`q_${q.id}`] ??
        rawAnswers[q.id] ??
        rawAnswers[String(q.id)];
    }

    let mostDim: DiscCategory = "Star";
    let leastDim: DiscCategory = "Star";

    if (ans) {
      if (typeof ans.most === "number" && q.options[ans.most]) {
        mostDim = q.options[ans.most].dimension;
      } else if (
        typeof ans.most === "string" &&
        ["D", "I", "S", "C", "Star"].includes(ans.most)
      ) {
        mostDim = ans.most as DiscCategory;
      }

      if (typeof ans.least === "number" && q.options[ans.least]) {
        leastDim = q.options[ans.least].dimension;
      } else if (
        typeof ans.least === "string" &&
        ["D", "I", "S", "C", "Star"].includes(ans.least)
      ) {
        leastDim = ans.least as DiscCategory;
      }
    }

    mostCounts[mostDim] = (mostCounts[mostDim] || 0) + 1;
    leastCounts[leastDim] = (leastCounts[leastDim] || 0) + 1;

    rawList.push({
      questionId: q.id,
      most: mostDim,
      least: leastDim,
    });
  });

  const changeCounts: Record<DiscCategory, number> = {
    D: mostCounts.D - leastCounts.D,
    I: mostCounts.I - leastCounts.I,
    S: mostCounts.S - leastCounts.S,
    C: mostCounts.C - leastCounts.C,
    Star: mostCounts.Star - leastCounts.Star,
  };

  const totalMost = Object.values(mostCounts).reduce((a, b) => a + b, 0);
  const totalLeast = Object.values(leastCounts).reduce((a, b) => a + b, 0);

  return {
    rawAnswers: rawList,
    processedResults: {
      most: mostCounts,
      least: leastCounts,
      change: changeCounts,
      totals: {
        most: totalMost,
        least: totalLeast,
      },
    },
    metadata: {
      test_name: "DISC",
      total_questions: DISC_QUESTIONS.length,
      scored_by: "system",
    },
  };
};
