import { Page, View, Text } from "@react-pdf/renderer";
import type { TestResult } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import { SCORE_ITEM_CONFIG } from "@/features/main/ParticipantDetails/constants/scoreItems";
import { pdfStyles, PDF_COLORS } from "./styles";
import type { ReportParticipant } from "../types";

const MAX_COMPETENCE_SCORE = 100;

interface CompetenceModuleProps {
  testResults: TestResult[];
  participant: ReportParticipant;
}

export const CompetenceModule = ({
  testResults,
  participant,
}: CompetenceModuleProps) => {
  const fullName = `${participant.first_name} ${participant.last_name}`;

  const scoreRows = SCORE_ITEM_CONFIG.map(({ id, label }) => {
    const result = testResults.find((r) => r.test_type === id);
    const score =
      result?.data?.score != null ? Number(result.data.score) : null;
    return { id, label, score };
  });

  const completedScores = scoreRows
    .filter((r) => r.score !== null)
    .map((r) => r.score as number);

  const averageScore = completedScores.length
    ? (
        completedScores.reduce((sum, v) => sum + v, 0) / completedScores.length
      ).toFixed(1)
    : "—";

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
          <Text style={pdfStyles.sectionHeaderTitle}>
            COMPETENCE TEST (EAS / DA)
          </Text>
          <Text style={pdfStyles.sectionHeaderSub}>{fullName}</Text>
        </View>
      </View>

      {/* Table header */}
      <View style={pdfStyles.tableHeaderRow}>
        <Text style={[pdfStyles.tableHeaderCell, { width: 60 }]}>Test</Text>
        <Text style={[pdfStyles.tableHeaderCell, { width: 50 }]}>Score</Text>
        <Text style={[pdfStyles.tableHeaderCell, { flex: 1 }]}>Visual</Text>
        <Text style={[pdfStyles.tableHeaderCell, { width: 70 }]}>Status</Text>
      </View>

      {/* Score rows */}
      {scoreRows.map(({ id, label, score }, idx) => {
        const barWidth =
          score !== null ? (score / MAX_COMPETENCE_SCORE) * 100 : 0;
        const isDone = score !== null;
        return (
          <View
            key={id}
            style={[
              pdfStyles.tableRow,
              idx % 2 === 1 ? pdfStyles.tableRowAlt : {},
            ]}
          >
            <Text
              style={[
                pdfStyles.tableCell,
                { width: 60, fontFamily: "Helvetica-Bold" },
              ]}
            >
              {label}
            </Text>
            <Text
              style={[
                pdfStyles.tableCell,
                {
                  width: 50,
                  fontFamily: isDone ? "Helvetica-Bold" : "Helvetica",
                  color: isDone ? PDF_COLORS.black : PDF_COLORS.light,
                },
              ]}
            >
              {score !== null ? String(score) : "—"}
            </Text>
            <View style={[pdfStyles.barContainer, { flex: 1 }]}>
              {isDone && (
                <View style={[pdfStyles.barFill, { width: `${barWidth}%` }]} />
              )}
            </View>
            <Text
              style={[
                pdfStyles.tableCell,
                {
                  width: 70,
                  color: isDone ? "#059669" : PDF_COLORS.light,
                  fontFamily: isDone ? "Helvetica-Bold" : "Helvetica",
                },
              ]}
            >
              {isDone ? "Completed" : "Not Done"}
            </Text>
          </View>
        );
      })}

      {/* Average row */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: PDF_COLORS.bg,
          borderTopWidth: 2,
          borderColor: PDF_COLORS.border,
          paddingVertical: 6,
          paddingHorizontal: 8,
          marginTop: 2,
        }}
      >
        <Text
          style={[
            pdfStyles.tableHeaderCell,
            { width: 60, fontSize: 9, color: PDF_COLORS.black },
          ]}
        >
          Average
        </Text>
        <Text
          style={[
            pdfStyles.tableCell,
            { width: 50, fontFamily: "Helvetica-Bold", fontSize: 11 },
          ]}
        >
          {averageScore}
        </Text>
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
