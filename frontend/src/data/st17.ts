export type St17Answer = "A" | "B" | "C" | "D" | "E";

export interface St17Question {
  id: number;
  optionImageUrls: [string, string, string, string];
}

export interface St17Phase {
  phase: number;
  referenceImageUrl: string;
  questions: St17Question[];
}

const OPTION_KEYS = ["A", "B", "C", "D"] as const;

function makeQuestion(id: number): St17Question {
  const optionImageUrls = OPTION_KEYS.map(
    (k) => `https://placehold.co/150x150?text=Q${id}+${k}`,
  ) as [string, string, string, string];
  return { id, optionImageUrls };
}

function makeQuestions(start: number, end: number): St17Question[] {
  return Array.from({ length: end - start + 1 }, (_, i) =>
    makeQuestion(start + i),
  );
}

export const ST17_NONE_OPTION_LABEL = "E";
export const ST17_NONE_OPTION_TEXT =
  "Tidak ada kubus yang terbuat dari pola di samping.";

export const st17Data: St17Phase[] = [
  {
    phase: 1,
    referenceImageUrl: "https://placehold.co/400x400?text=Ref+Phase+1",
    questions: makeQuestions(1, 14),
  },
  {
    phase: 2,
    referenceImageUrl: "https://placehold.co/400x400?text=Ref+Phase+2",
    questions: makeQuestions(15, 28),
  },
  {
    phase: 3,
    referenceImageUrl: "https://placehold.co/400x400?text=Ref+Phase+3",
    questions: makeQuestions(29, 40),
  },
];

export const ST17_TOTAL_QUESTIONS = st17Data.reduce(
  (acc, p) => acc + p.questions.length,
  0,
);
