/**
 * DISC Score Table — rows: MOST / LEAST / CHANGE, columns: D | I | S | C | ★ | Total
 * (Same orientation as DiscScoringTable in the UI)
 */
import { View, Text } from "@react-pdf/renderer";
import type {
  DiscScores,
  DiscCategory,
} from "@/features/main/DISCResult/types";
import { PDF_COLORS, pdfStyles } from "../../../styles";

interface ScoreTableSectionProps {
  scores: DiscScores;
}

const DIMS: DiscCategory[] = ["D", "I", "S", "C", "Star"];
const DIM_LABELS: Record<DiscCategory, string> = {
  D: "D",
  I: "I",
  S: "S",
  C: "C",
  Star: "★",
};
const ROWS = ["MOST", "LEAST", "CHANGE"] as const;
const ROW_LABELS: Record<(typeof ROWS)[number], string> = {
  MOST: "MOST (Natural)",
  LEAST: "LEAST (Adapted)",
  CHANGE: "CHANGE (Stress)",
};

export const ScoreTableSection = ({ scores }: ScoreTableSectionProps) => (
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
      SCORE TABLE
    </Text>

    {/* Header row */}
    <View style={pdfStyles.tableHeaderRow}>
      <Text style={[pdfStyles.tableHeaderCell, { flex: 1.6 }]}>Profile</Text>
      {DIMS.map((dim) => (
        <Text
          key={dim}
          style={[pdfStyles.tableHeaderCell, { flex: 1, textAlign: "center" }]}
        >
          {DIM_LABELS[dim]}
        </Text>
      ))}
      <Text
        style={[pdfStyles.tableHeaderCell, { flex: 0.8, textAlign: "center" }]}
      >
        Total
      </Text>
    </View>

    {/* Data rows */}
    {ROWS.map((row, idx) => {
      const data = scores[row];
      const total = DIMS.reduce((sum, d) => sum + (data[d] ?? 0), 0);
      return (
        <View
          key={row}
          style={[
            pdfStyles.tableRow,
            idx % 2 === 1 ? pdfStyles.tableRowAlt : {},
          ]}
        >
          <Text
            style={[
              pdfStyles.tableCell,
              { flex: 1.6, fontFamily: "Helvetica-Bold" },
            ]}
          >
            {ROW_LABELS[row]}
          </Text>
          {DIMS.map((dim) => (
            <Text
              key={dim}
              style={[pdfStyles.tableCell, { flex: 1, textAlign: "center" }]}
            >
              {data[dim] ?? 0}
            </Text>
          ))}
          <View
            style={{
              flex: 0.8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={[
                pdfStyles.tableCell,
                { fontFamily: "Helvetica-Bold", textAlign: "center" },
              ]}
            >
              {total}
            </Text>
            {row !== "CHANGE" && (
              <Text
                style={{
                  fontSize: 6,
                  color: PDF_COLORS.light,
                  textAlign: "center",
                }}
              >
                (must = 24)
              </Text>
            )}
          </View>
        </View>
      );
    })}
  </View>
);
