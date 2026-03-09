import { Page, View, Text } from "@react-pdf/renderer";
import type {
  DiscScores,
  DiscCategory,
} from "@/features/main/DISCResult/types";
import { pdfStyles, PDF_COLORS } from "./styles";
import type { ReportParticipant } from "../types";

const DISC_DIMS: DiscCategory[] = ["D", "I", "S", "C", "Star"];
const DIM_LABELS: Record<DiscCategory, string> = {
  D: "Dominance",
  I: "Influence",
  S: "Steadiness",
  C: "Conscientiousness",
  Star: "★",
};

const ROW_CONFIGS: Array<{ key: keyof DiscScores; label: string }> = [
  { key: "MOST", label: "MOST (Natural)" },
  { key: "LEAST", label: "LEAST (Adapted)" },
  { key: "CHANGE", label: "CHANGE (Stress)" },
];

const MAX_DISC = 28; // typical DISC max per dimension

interface DiscModuleProps {
  scores: DiscScores;
  participant: ReportParticipant;
}

export const DiscModule = ({ scores, participant }: DiscModuleProps) => {
  const fullName = `${participant.first_name} ${participant.last_name}`;

  return (
    <Page size="A4" style={pdfStyles.page}>
      {/* Accent bar */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          backgroundColor: PDF_COLORS.accent,
        }}
      />

      {/* Section header */}
      <View style={pdfStyles.sectionHeader}>
        <View style={pdfStyles.sectionHeaderLeft}>
          <Text style={pdfStyles.sectionHeaderTitle}>DISC</Text>
          <Text style={pdfStyles.sectionHeaderSub}>{fullName}</Text>
        </View>
      </View>

      {/* Column headers */}
      <View style={pdfStyles.tableHeaderRow}>
        <Text style={[pdfStyles.tableHeaderCell, { flex: 1.4 }]}>Profile</Text>
        {DISC_DIMS.map((dim) => (
          <Text
            key={dim}
            style={[
              pdfStyles.tableHeaderCell,
              { flex: 1, textAlign: "center" },
            ]}
          >
            {DIM_LABELS[dim]}
          </Text>
        ))}
      </View>

      {/* Score rows */}
      {ROW_CONFIGS.map(({ key, label }, idx) => {
        const row = scores[key];
        return (
          <View
            key={key}
            style={[
              pdfStyles.tableRow,
              idx % 2 === 1 ? pdfStyles.tableRowAlt : {},
            ]}
          >
            <Text
              style={[
                pdfStyles.tableCell,
                { flex: 1.4, fontFamily: "Helvetica-Bold" },
              ]}
            >
              {label}
            </Text>
            {DISC_DIMS.map((dim) => {
              const score = row[dim] ?? 0;
              return (
                <View
                  key={dim}
                  style={{ flex: 1, alignItems: "center", gap: 3 }}
                >
                  <Text
                    style={[
                      pdfStyles.tableCell,
                      { fontFamily: "Helvetica-Bold", textAlign: "center" },
                    ]}
                  >
                    {score}
                  </Text>
                  <View style={[pdfStyles.barContainer, { width: 40 }]}>
                    <View
                      style={[
                        pdfStyles.barFill,
                        { width: `${(score / MAX_DISC) * 100}%` },
                      ]}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}

      {/* Dominant profile per row */}
      <View
        style={{
          marginTop: 20,
          backgroundColor: PDF_COLORS.bg,
          borderRadius: 4,
          padding: 12,
        }}
      >
        <Text
          style={{
            fontSize: 8,
            fontFamily: "Helvetica-Bold",
            color: PDF_COLORS.muted,
            letterSpacing: 1,
            marginBottom: 8,
          }}
        >
          DOMINANT DIMENSION PER PROFILE
        </Text>
        {ROW_CONFIGS.map(({ key, label }) => {
          const row = scores[key];
          const mainDims = ["D", "I", "S", "C"] as DiscCategory[];
          const dominant = mainDims.reduce((best, dim) =>
            (row[dim] ?? 0) > (row[best] ?? 0) ? dim : best,
          );
          return (
            <Text
              key={key}
              style={{ fontSize: 9, color: PDF_COLORS.black, marginBottom: 4 }}
            >
              {label}: {DIM_LABELS[dominant]} ({dominant}) — score{" "}
              {row[dominant] ?? 0}
            </Text>
          );
        })}
      </View>

      {/* Footer */}
      <View style={pdfStyles.footer} fixed>
        <Text style={pdfStyles.footerText}>
          MNEMOSYNE © 2026 — Confidential
        </Text>
        <Text
          style={pdfStyles.footerText}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} / ${totalPages}`
          }
        />
      </View>
    </Page>
  );
};
