export interface DrItem {
  id: number;
  /** Problem image containing the 5-rectangle pattern */
  problemImageUrl: string;
  /** Options image containing the 5 choice rectangles */
  optionsImageUrl: string;
  correctAnswer: "A" | "B" | "C" | "D" | "E";
}

export type DrAnswer = "A" | "B" | "C" | "D" | "E";

function makeItem(
  id: number,
  correctAnswer: DrAnswer,
): DrItem {
  return {
    id,
    problemImageUrl: `https://placehold.co/600x120?text=DR+Q${id}+Problem`,
    optionsImageUrl: `https://placehold.co/600x120?text=DR+Q${id}+Options`,
    correctAnswer,
  };
}

export const drData: DrItem[] = [
  makeItem(1, "B"),
  makeItem(2, "A"),
  makeItem(3, "C"),
  makeItem(4, "E"),
  makeItem(5, "D"),
  makeItem(6, "A"),
  makeItem(7, "C"),
  makeItem(8, "B"),
  makeItem(9, "E"),
  makeItem(10, "D"),
  makeItem(11, "C"),
  makeItem(12, "A"),
  makeItem(13, "E"),
  makeItem(14, "B"),
  makeItem(15, "D"),
  makeItem(16, "A"),
  makeItem(17, "C"),
  makeItem(18, "B"),
  makeItem(19, "E"),
  makeItem(20, "A"),
  makeItem(21, "D"),
  makeItem(22, "B"),
  makeItem(23, "C"),
  makeItem(24, "A"),
  makeItem(25, "E"),
  makeItem(26, "B"),
  makeItem(27, "D"),
  makeItem(28, "A"),
  makeItem(29, "C"),
  makeItem(30, "E"),
  makeItem(31, "B"),
  makeItem(32, "D"),
  makeItem(33, "A"),
  makeItem(34, "C"),
  makeItem(35, "E"),
  makeItem(36, "A"),
  makeItem(37, "D"),
  makeItem(38, "B"),
  makeItem(39, "E"),
  makeItem(40, "C"),
  makeItem(41, "D"),
  makeItem(42, "B"),
  makeItem(43, "A"),
  makeItem(44, "C"),
  makeItem(45, "E"),
  makeItem(46, "D"),
  makeItem(47, "A"),
  makeItem(48, "C"),
  makeItem(49, "B"),
  makeItem(50, "E"),
];

export const DR_TOTAL_QUESTIONS = drData.length;
