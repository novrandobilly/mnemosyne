import { Page, View, Text } from "@react-pdf/renderer";
import type { WorksheetRow } from "@/components/IntrayWorksheetTable";
import { pdfStyles, PDF_COLORS } from "./styles";
import type { ReportParticipant } from "../types";

interface IntraySection {
  title: string;
  rows: WorksheetRow[];
}

interface IntrayModuleProps {
  title: "Intray-1" | "Intray-2";
  sections: IntraySection[];
  participant: ReportParticipant;
}

const IMPORTANCE_COLOR: Record<string, string> = {
  "Sangat Penting": "#dc2626",
  Penting: "#d97706",
  "Kurang Penting": "#737373",
};

export const IntrayModule = ({
  title,
  sections,
  participant,
}: IntrayModuleProps) => {
  const fullName = `${participant.first_name} ${participant.last_name}`;

  return (
    <Page size="A4" style={[pdfStyles.page, { paddingBottom: 60 }]}>
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
            {title.toUpperCase()}
          </Text>
          <Text style={pdfStyles.sectionHeaderSub}>{fullName}</Text>
        </View>
      </View>

      {sections.map((section) => (
        <View key={section.title} style={{ marginBottom: 16 }}>
          {/* Sub-section label */}
          <View
            style={{
              backgroundColor: PDF_COLORS.accentLight,
              paddingVertical: 4,
              paddingHorizontal: 8,
              marginBottom: 6,
            }}
          >
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: "#065f46",
                letterSpacing: 1,
              }}
            >
              {section.title.toUpperCase()}
            </Text>
          </View>

          {/* Column headers */}
          <View style={pdfStyles.tableHeaderRow}>
            <Text style={[pdfStyles.tableHeaderCell, { width: 30 }]}>No</Text>
            <Text style={[pdfStyles.tableHeaderCell, { flex: 1.5 }]}>
              Topic / Issue
            </Text>
            <Text style={[pdfStyles.tableHeaderCell, { width: 70 }]}>
              Priority
            </Text>
            <Text style={[pdfStyles.tableHeaderCell, { flex: 2 }]}>
              Action / Solution
            </Text>
            <Text style={[pdfStyles.tableHeaderCell, { width: 36 }]}>Memo</Text>
          </View>

          {section.rows.length === 0 ? (
            <View style={pdfStyles.tableRow}>
              <Text style={[pdfStyles.tableCellMuted, { flex: 1 }]}>
                No entries
              </Text>
            </View>
          ) : (
            section.rows.map((row, idx) => (
              <View
                key={row.id}
                style={[
                  pdfStyles.tableRow,
                  idx % 2 === 1 ? pdfStyles.tableRowAlt : {},
                  { alignItems: "flex-start" },
                ]}
                wrap={false}
              >
                <Text style={[pdfStyles.tableCellMuted, { width: 30 }]}>
                  {idx + 1}
                </Text>
                <Text style={[pdfStyles.tableCell, { flex: 1.5 }]}>
                  {row.topikPermasalahan}
                </Text>
                <Text
                  style={[
                    pdfStyles.tableCell,
                    {
                      width: 70,
                      color:
                        IMPORTANCE_COLOR[row.tingkatKepentingan] ??
                        PDF_COLORS.black,
                      fontFamily: "Helvetica-Bold",
                      fontSize: 8,
                    },
                  ]}
                >
                  {row.tingkatKepentingan}
                </Text>
                <Text style={[pdfStyles.tableCell, { flex: 2 }]}>
                  {row.tindakanSolusi}
                </Text>
                <Text style={[pdfStyles.tableCellMuted, { width: 36 }]}>
                  {row.noMemo}
                </Text>
              </View>
            ))
          )}
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
