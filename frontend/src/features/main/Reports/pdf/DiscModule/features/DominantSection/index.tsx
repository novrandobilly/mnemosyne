import { View, Text } from "@react-pdf/renderer";
import type {
  DiscScores,
  DiscCategory,
} from "@/features/main/DISCResult/types";
import { PDF_COLORS } from "../../../styles";

interface DominantSectionProps {
  scores: DiscScores;
}

const MAIN_DIMS: DiscCategory[] = ["D", "I", "S", "C"];
const DIM_LABELS: Record<DiscCategory, string> = {
  D: "Dominance",
  I: "Influence",
  S: "Steadiness",
  C: "Conscientiousness",
  Star: "★",
};
const ROWS = ["MOST", "LEAST", "CHANGE"] as const;
const ROW_LABELS: Record<(typeof ROWS)[number], string> = {
  MOST: "MOST (Natural)",
  LEAST: "LEAST (Adapted)",
  CHANGE: "CHANGE (Stress)",
};

export const DominantSection = ({ scores }: DominantSectionProps) => (
  <View
    style={{
      marginBottom: 14,
      backgroundColor: PDF_COLORS.bg,
      borderRadius: 4,
      padding: 12,
    }}
  >
    <Text
      style={{
        fontSize: 7,
        fontFamily: "Helvetica-Bold",
        color: PDF_COLORS.muted,
        letterSpacing: 1.5,
        marginBottom: 8,
      }}
    >
      DOMINANT DIMENSION PER PROFILE
    </Text>
    {ROWS.map((key) => {
      const row = scores[key];
      const dominant = MAIN_DIMS.reduce((best, dim) =>
        (row[dim] ?? 0) > (row[best] ?? 0) ? dim : best,
      );
      return (
        <Text
          key={key}
          style={{ fontSize: 9, color: PDF_COLORS.black, marginBottom: 4 }}
        >
          {ROW_LABELS[key]}: {DIM_LABELS[dominant]} ({dominant}) — score{" "}
          {row[dominant] ?? 0}
        </Text>
      );
    })}
  </View>
);
