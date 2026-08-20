import { EAS5_SOLUTION_KEY } from "./solution";

export interface Eas5ScoringResult {
  score: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnanswered: number;
}

export const scoreEas5 = (answers: Record<number, number>): Eas5ScoringResult => {
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalUnanswered = 0;

  Object.entries(EAS5_SOLUTION_KEY).forEach(([idStr, correctAnswer]) => {
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
