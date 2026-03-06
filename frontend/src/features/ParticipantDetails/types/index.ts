export type ResultLink = {
  id: string;
  label: string;
  status: "Completed" | "In Progress" | "Not Started";
  date: string;
};

export type ScoreItem = {
  id: string;
  label: string;
  score: string;
  status: "Completed" | "In Progress" | "Not Started";
};
