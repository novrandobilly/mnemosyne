import type { DiscCategory, DiscDimension } from "@/features/main/DISCResult/types";

export const DISC_CATEGORIES: DiscCategory[] = ["D", "I", "S", "C", "Star"];

export const DISC_DIMENSION_NAMES: Record<DiscDimension, string> = {
  D: "Dominance",
  I: "Influence",
  S: "Steadiness",
  C: "Compliance",
};
