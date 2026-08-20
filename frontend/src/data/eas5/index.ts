import eas5_1_5 from "@/assets/tests/eas5/eas5_1-5.png";
import eas5_6_10 from "@/assets/tests/eas5/eas5_6-10.png";
import eas5_11_15 from "@/assets/tests/eas5/eas5_11-15.png";
import eas5_16_20 from "@/assets/tests/eas5/eas5_16-20.png";
import eas5_21_25 from "@/assets/tests/eas5/eas5_21-25.png";
import eas5_26_30 from "@/assets/tests/eas5/eas5_26-30.png";
import eas5_31_35 from "@/assets/tests/eas5/eas5_31-35.png";
import eas5_36_40 from "@/assets/tests/eas5/eas5_36-40.png";
import eas5_41_45 from "@/assets/tests/eas5/eas5_41-45.png";
import eas5_46_50 from "@/assets/tests/eas5/eas5_46-50.png";

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

const eas5Images = [
  eas5_1_5,
  eas5_6_10,
  eas5_11_15,
  eas5_16_20,
  eas5_21_25,
  eas5_26_30,
  eas5_31_35,
  eas5_36_40,
  eas5_41_45,
  eas5_46_50,
];

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
      imageUrl: eas5Images[pileIndex],
      questions,
    };
  },
);
