/**
 * DISC Score Grid — rows: D | I | S | C | ★, columns: MOST | LEAST | CHANGE
 * (Same orientation as DiscScoringGrid in the UI)
 */
import { View, Text } from "@react-pdf/renderer";
import type {
  DiscScores,
  DiscCategory,
} from "@/features/main/DISCResult/types";
import { PDF_COLORS, pdfStyles } from "../../../styles";

interface ScoreGridSectionProps {
  scores: DiscScores;
}

const CATEGORIES: DiscCategory[] = ["D", "I", "S", "C", "Star"];
const CAT_LABELS: Record<DiscCategory, string> = {
  D: "Dominance (D)",
  I: "Influence (I)",
  S: "Steadiness (S)",
  C: "Conscientiousness (C)",
  Star: "★ (Star)",
};
const METRICS = ["MOST", "LEAST", "CHANGE"] as const;

export const ScoreGridSection = ({ scores }: ScoreGridSectionProps) => (
  <View style={{ marginBottom: 14 }}>
    <Text
      style={{
        fontSize: 7,
        fontFamily: "Helvetica-Bold",
        color: PDF_COLORS.muted,
        letterSpacing: 1.5,
        marginBottom: 6,
      }}
    >
      SCORE GRID
    </Text>

    {/* Header row */}
    <View style={pdfStyles.tableHeaderRow}>
      <Text style={[pdfStyles.tableHeaderCell, { flex: 2 }]}>Category</Text>
      {METRICS.map((m) => (
        <Text
          key={m}
          style={[pdfStyles.tableHeaderCell, { flex: 1, textAlign: "center" }]}
        >
          {m}
        </Text>
      ))}
    </View>

    {/* Data rows */}
    {CATEGORIES.map((cat, idx) => (
      <View
        key={cat}
        style={[pdfStyles.tableRow, idx % 2 === 1 ? pdfStyles.tableRowAlt : {}]}
      >
        <Text
          style={[
            pdfStyles.tableCell,
            { flex: 2, fontFamily: "Helvetica-Bold" },
          ]}
        >
          {CAT_LABELS[cat]}
        </Text>
        {METRICS.map((m) => (
          <Text
            key={m}
            style={[pdfStyles.tableCell, { flex: 1, textAlign: "center" }]}
          >
            {scores[m][cat] ?? 0}
          </Text>
        ))}
      </View>
    ))}
  </View>
);
