export interface DrItem {
  id: number;
  /** 5-element sequence; the null slot is the missing "black box" */
  sequence: (string | null)[];
  /** 5 option images labeled A–E */
  options: [string, string, string, string, string];
  correctAnswer: "A" | "B" | "C" | "D" | "E";
}

const LABELS = ["A", "B", "C", "D", "E"] as const;

function makeItem(
  id: number,
  missingIdx: number,
  correctAnswer: "A" | "B" | "C" | "D" | "E",
): DrItem {
  const sequence = [1, 2, 3, 4, 5].map((x, i) =>
    i === missingIdx
      ? null
      : `https://placehold.co/100x100?text=Q${id}+Seq+${x}`,
  ) as (string | null)[];

  const options = LABELS.map(
    (l) => `https://placehold.co/100x100?text=Q${id}+Opt+${l}`,
  ) as [string, string, string, string, string];

  return { id, sequence, options, correctAnswer };
}

export const drData: DrItem[] = [
  makeItem(1, 4, "B"),
  makeItem(2, 2, "A"),
  makeItem(3, 0, "C"),
  makeItem(4, 3, "E"),
  makeItem(5, 1, "D"),
  makeItem(6, 4, "A"),
  makeItem(7, 2, "C"),
  makeItem(8, 0, "B"),
  makeItem(9, 3, "E"),
  makeItem(10, 1, "D"),
  makeItem(11, 4, "C"),
  makeItem(12, 2, "A"),
  makeItem(13, 0, "E"),
  makeItem(14, 3, "B"),
  makeItem(15, 1, "D"),
  makeItem(16, 4, "A"),
  makeItem(17, 2, "C"),
  makeItem(18, 0, "B"),
  makeItem(19, 3, "E"),
  makeItem(20, 1, "A"),
  makeItem(21, 4, "D"),
  makeItem(22, 2, "B"),
  makeItem(23, 0, "C"),
  makeItem(24, 3, "A"),
  makeItem(25, 1, "E"),
  makeItem(26, 4, "B"),
  makeItem(27, 2, "D"),
  makeItem(28, 0, "A"),
  makeItem(29, 3, "C"),
  makeItem(30, 1, "E"),
  makeItem(31, 4, "D"),
  makeItem(32, 2, "A"),
  makeItem(33, 0, "B"),
  makeItem(34, 3, "C"),
  makeItem(35, 1, "E"),
  makeItem(36, 4, "A"),
  makeItem(37, 2, "D"),
  makeItem(38, 0, "B"),
  makeItem(39, 3, "C"),
  makeItem(40, 1, "E"),
];
