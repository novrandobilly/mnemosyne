export interface Da5Item {
  id: number;
  stimulusImageUrl: string;
  optionImageUrls: [string, string, string, string, string];
  correctAnswer: "A" | "B" | "C" | "D" | "E";
}

const LABELS = ["A", "B", "C", "D", "E"] as const;

function makeItem(
  id: number,
  correctAnswer: "A" | "B" | "C" | "D" | "E",
): Da5Item {
  const stimulusImageUrl = `https://placehold.co/400x400?text=Q${id}+Stimulus`;
  const optionImageUrls = LABELS.map(
    (l) => `https://placehold.co/160x160?text=Q${id}+${l}`,
  ) as [string, string, string, string, string];

  return { id, stimulusImageUrl, optionImageUrls, correctAnswer };
}

export const da5Data: Da5Item[] = [
  makeItem(1, "B"),
  makeItem(2, "A"),
  makeItem(3, "D"),
  makeItem(4, "C"),
  makeItem(5, "E"),
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
  makeItem(36, "B"),
  makeItem(37, "D"),
  makeItem(38, "A"),
  makeItem(39, "C"),
  makeItem(40, "E"),
  makeItem(41, "B"),
  makeItem(42, "D"),
  makeItem(43, "A"),
  makeItem(44, "C"),
  makeItem(45, "E"),
  makeItem(46, "B"),
  makeItem(47, "D"),
  makeItem(48, "A"),
  makeItem(49, "C"),
  makeItem(50, "E"),
];

export const DA5_REFERENCE_IMAGE_URL =
  "https://placehold.co/600x800?text=Reference+Rules+Doc";
