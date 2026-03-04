export type Eas5TargetBlock = "A" | "B" | "C" | "D" | "E";

export interface Eas5Question {
  id: number;
  targetBlock: Eas5TargetBlock;
}

export interface Eas5Pile {
  pileId: number;
  imageUrl: string;
  questions: Eas5Question[];
}

const TARGET_BLOCKS: Eas5TargetBlock[] = ["A", "B", "C", "D", "E"];

export const eas5Data: Eas5Pile[] = Array.from(
  { length: 10 },
  (_, pileIndex) => {
    const pileId = pileIndex + 1;
    const startQuestionId = pileIndex * 5 + 1;

    const questions = Array.from({ length: 5 }, (_, questionOffset) => ({
      id: startQuestionId + questionOffset,
      targetBlock: TARGET_BLOCKS[questionOffset],
    }));

    return {
      pileId,
      imageUrl: `https://placehold.co/400x400?text=EAS5+Pile+${pileId}`,
      questions,
    };
  },
);
