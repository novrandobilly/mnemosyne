import { EAS10_SOLUTION_KEY } from "./solution";
import { type Eas10Answer } from "./index";

export interface Eas10ScoringResult {
  score: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnanswered: number;
}

export const scoreEas10 = (answers: Record<number, Eas10Answer>): Eas10ScoringResult => {
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalUnanswered = 0;

  Object.entries(EAS10_SOLUTION_KEY).forEach(([idStr, correctAnswer]) => {
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
