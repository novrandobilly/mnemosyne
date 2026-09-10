import type { TestResult } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import { scoreEas4 } from "@/data/eas4/scoring";
import { scoreEas5 } from "@/data/eas5/scoring";
import { scoreEas6 } from "@/data/eas6/scoring";
import { scoreEas7 } from "@/data/eas7/scoring";
import { scoreEas10 } from "@/data/eas10/scoring";
import { scoreDa5 } from "@/data/da5/scoring";
import { scoreSt7 } from "@/data/st7/scoring";
import { scoreDr } from "@/data/dr/scoring";
import { scoreA5 } from "@/data/a5/scoring";

export const COMPETENCE_MAX_SCORES: Record<string, number> = {
  eas4: 150,
  eas5: 45,
  eas6: 20,
  eas7: 30,
  eas10: 30,
  a5: 30,
  dr: 40,
  da5: 50,
  st7: 40,
};

export interface CompetenceScoreResult {
  score: number | null;
  isCompleted: boolean;
  maxScore: number;
}

export function getCompetenceTestScore(
  testType: string,
  result?: TestResult | null,
): CompetenceScoreResult {
  const maxScore = COMPETENCE_MAX_SCORES[testType] ?? 100;
  const isCompleted = result?.status === "completed";

  if (!isCompleted || !result) {
    return {
      score: null,
      isCompleted: false,
      maxScore,
    };
  }

  // If score is explicitly pre-calculated in data
  if (result.data?.score != null && !Number.isNaN(Number(result.data.score))) {
    return {
      score: Number(result.data.score),
      isCompleted: true,
      maxScore,
    };
  }

  // Otherwise calculate dynamically from raw answers
  if (!result.data) {
    return {
      score: null,
      isCompleted: true,
      maxScore,
    };
  }

  const rawAnswers = result.data.raw_answers || result.data;
  let calculatedScore: number | null = null;

  try {
    switch (testType) {
      case "eas4":
        calculatedScore = scoreEas4(rawAnswers).score;
        break;
      case "eas5":
        calculatedScore = scoreEas5(rawAnswers).score;
        break;
      case "eas6":
        calculatedScore = scoreEas6(rawAnswers).score;
        break;
      case "eas7":
        calculatedScore = scoreEas7(rawAnswers).score;
        break;
      case "eas10":
        calculatedScore = scoreEas10(rawAnswers).score;
        break;
      case "da5":
        calculatedScore = scoreDa5(rawAnswers).score;
        break;
      case "st7":
        calculatedScore = scoreSt7(rawAnswers).score;
        break;
      case "dr":
        calculatedScore = scoreDr(rawAnswers).score;
        break;
      case "a5":
        calculatedScore = scoreA5(rawAnswers).score;
        break;
      default:
        calculatedScore = null;
    }
  } catch (error) {
    console.error(`Error calculating score for ${testType}:`, error);
    calculatedScore = null;
  }

  return {
    score: calculatedScore,
    isCompleted: true,
    maxScore,
  };
}
