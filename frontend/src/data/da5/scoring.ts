import { DA5_SOLUTION_KEY } from "./solution";
import { type Da5Answer } from "./index";

export interface Da5ScoringResult {
  score: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnanswered: number;
}

export const scoreDa5 = (answers: Record<number, Da5Answer>): Da5ScoringResult => {
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalUnanswered = 0;

  Object.entries(DA5_SOLUTION_KEY).forEach(([idStr, correctAnswer]) => {
    const id = Number(idStr);
    const answer = answers[id];

    if (answer === undefined || answer === null) {
      totalUnanswered++;
    } else if (answer === correctAnswer) {
      totalCorrect++;
    } else {
      totalIncorrect++;
    }
  });

  return {
    score: totalCorrect,
    totalCorrect,
    totalIncorrect,
    totalUnanswered,
  };
};
