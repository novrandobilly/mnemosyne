export interface Da5Item {
  id: number;
  stimulusImageUrl: string;
  optionImageUrls: [string, string, string, string, string];
}

const LABELS = ["A", "B", "C", "D", "E"] as const;

function makeItem(id: number): Da5Item {
  const stimulusImageUrl = `https://placehold.co/400x400?text=Q${id}+Stimulus`;
  const optionImageUrls = LABELS.map(
    (l) => `https://placehold.co/160x160?text=Q${id}+${l}`,
  ) as [string, string, string, string, string];

  return { id, stimulusImageUrl, optionImageUrls };
}

export const da5Data: Da5Item[] = [
  makeItem(1),
  makeItem(2),
  makeItem(3),
  makeItem(4),
  makeItem(5),
  makeItem(6),
  makeItem(7),
  makeItem(8),
  makeItem(9),
  makeItem(10),
  makeItem(11),
  makeItem(12),
  makeItem(13),
  makeItem(14),
  makeItem(15),
  makeItem(16),
  makeItem(17),
  makeItem(18),
  makeItem(19),
  makeItem(20),
  makeItem(21),
  makeItem(22),
  makeItem(23),
  makeItem(24),
  makeItem(25),
  makeItem(26),
  makeItem(27),
  makeItem(28),
  makeItem(29),
  makeItem(30),
  makeItem(31),
  makeItem(32),
  makeItem(33),
  makeItem(34),
  makeItem(35),
  makeItem(36),
  makeItem(37),
  makeItem(38),
  makeItem(39),
  makeItem(40),
  makeItem(41),
  makeItem(42),
  makeItem(43),
  makeItem(44),
  makeItem(45),
  makeItem(46),
  makeItem(47),
  makeItem(48),
  makeItem(49),
  makeItem(50),
];

export const DA5_REFERENCE_IMAGE_URL =
  "https://placehold.co/600x800?text=Reference+Rules+Doc";
