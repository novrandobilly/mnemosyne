import { Page, View, Text } from "@react-pdf/renderer";
import type { PapiResults, PapiScoreKey } from "@/features/main/PKResult/types";
import { pdfStyles, PDF_COLORS } from "./styles";
import type { ReportParticipant } from "../types";

const MAX_SCORE = 9;

interface PapiGroup {
  group: string;
  factors: Array<{ key: PapiScoreKey; label: string }>;
}

const PAPI_GROUPS: PapiGroup[] = [
  {
    group: "Work Direction",
    factors: [
      { key: "N", label: "N — Need for Rules" },
      { key: "G", label: "G — Need to be Forceful" },
      { key: "A", label: "A — Need for Achievement" },
    ],
  },
  {
    group: "Leadership",
    factors: [
      { key: "L", label: "L — Need to Lead" },
      { key: "P", label: "P — Need for Recognition" },
      { key: "I", label: "I — Need for Attention" },
    ],
  },
  {
    group: "Activity",
    factors: [
      { key: "T", label: "T — Need for Change" },
      { key: "V", label: "V — Need for Variety" },
    ],
  },
  {
    group: "Social Nature",
    factors: [
      { key: "S", label: "S — Social Extension" },
      { key: "R", label: "R — Need for Control" },
      { key: "D", label: "D — Need to be Forceful" },
    ],
  },
  {
    group: "Work Style",
    factors: [
      { key: "C", label: "C — Need to be Liked" },
      { key: "E", label: "E — Ease in Decision Making" },
      { key: "Z", label: "Z — Need to Persist" },
    ],
  },
  {
    group: "Temperament",
    factors: [
      { key: "X", label: "X — Need for Freedom" },
      { key: "B", label: "B — Need to Belong" },
      { key: "O", label: "O — Need for Closeness" },
    ],
  },
  {
    group: "Followership",
    factors: [
      { key: "K", label: "K — Need to be Noticed" },
      { key: "F", label: "F — Need for Endurance" },
      { key: "W", label: "W — Work Pace" },
    ],
  },
];

interface PapiModuleProps {
  scores: PapiResults;
  participant: ReportParticipant;
}

export const PapiModule = ({ scores, participant }: PapiModuleProps) => {
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
          <Text style={pdfStyles.sectionHeaderTitle}>PAPI KOSTICK</Text>
          <Text style={pdfStyles.sectionHeaderSub}>{fullName}</Text>
        </View>
        <Text style={[pdfStyles.footerText, { color: PDF_COLORS.light }]}>
          Score Range: 1–9
        </Text>
      </View>

      {/* Table header */}
      <View style={pdfStyles.tableHeaderRow}>
        <Text style={[pdfStyles.tableHeaderCell, { flex: 2.5 }]}>Factor</Text>
        <Text style={[pdfStyles.tableHeaderCell, { width: 30 }]}>Score</Text>
        <Text style={[pdfStyles.tableHeaderCell, { flex: 1 }]}>Visual</Text>
      </View>

      {/* Grouped rows */}
      {PAPI_GROUPS.map((group) => (
        <View key={group.group}>
          {/* Group label */}
          <View
            style={{
              backgroundColor: PDF_COLORS.accentLight,
              paddingVertical: 3,
              paddingHorizontal: 8,
            }}
          >
            <Text
              style={{
                fontSize: 7,
                fontFamily: "Helvetica-Bold",
                color: "#065f46",
                letterSpacing: 1,
              }}
            >
              {group.group.toUpperCase()}
            </Text>
          </View>

          {group.factors.map(({ key, label }, idx) => {
            const score = scores[key] ?? 0;
            const barWidth = (score / MAX_SCORE) * 100;
            return (
              <View
                key={key}
                style={[
                  pdfStyles.tableRow,
                  idx % 2 === 1 ? pdfStyles.tableRowAlt : {},
                ]}
              >
                <Text style={[pdfStyles.tableCell, { flex: 2.5 }]}>
                  {label}
                </Text>
                <Text
                  style={[
                    pdfStyles.tableCell,
                    { width: 30, fontFamily: "Helvetica-Bold" },
                  ]}
                >
                  {score}
                </Text>
                <View style={[pdfStyles.barContainer, { flex: 1 }]}>
                  <View
                    style={[pdfStyles.barFill, { width: `${barWidth}%` }]}
                  />
                </View>
              </View>
            );
          })}
        </View>
      ))}

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
