export type ResultLink = {
  value: string;
  slug: string;
  label: string;
};

export type ScoreItem = {
  id: string;
  label: string;
  score: string;
  status: "Completed" | "Not Done";
};
