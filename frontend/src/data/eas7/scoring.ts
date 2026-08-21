import { EAS7_SOLUTION_KEY } from "./solution";
import { type Eas7Answer } from "./index";

export interface Eas7ScoringResult {
  score: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnanswered: number;
}

export const scoreEas7 = (answers: Record<number, Eas7Answer>): Eas7ScoringResult => {
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalUnanswered = 0;

  Object.entries(EAS7_SOLUTION_KEY).forEach(([idStr, correctAnswer]) => {
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
