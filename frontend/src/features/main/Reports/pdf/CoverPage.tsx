import { Page, View, Text } from "@react-pdf/renderer";
import { pdfStyles, PDF_COLORS } from "./styles";
import {
  REPORT_MODULES,
  type ReportModuleId,
  type ReportParticipant,
} from "../types";

interface CoverPageProps {
  participant: ReportParticipant;
  selectedModules: ReportModuleId[];
  generatedAt: string;
}

export const CoverPage = ({
  participant,
  selectedModules,
  generatedAt,
}: CoverPageProps) => {
  const { first_name, last_name, company, department } = participant;
  const fullName = `${first_name} ${last_name}`;

  return (
    <Page size="A4" style={pdfStyles.page}>
      {/* Accent bar at top */}
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

      {/* Logo */}
      <View style={{ marginTop: 24, marginBottom: 6 }}>
        <Text style={pdfStyles.coverLogoText}>MNEMOSYNE</Text>
        <Text style={pdfStyles.coverSubtitle}>ASSESSMENT REPORT</Text>
      </View>

      <View style={pdfStyles.divider} />

      {/* Participant biodata */}
      <View style={{ marginBottom: 28 }}>
        <Text style={pdfStyles.coverName}>{fullName}</Text>
        <Text style={pdfStyles.coverMeta}>Company: {company || "—"}</Text>
        <Text style={pdfStyles.coverMeta}>Department: {department || "—"}</Text>
        <Text style={pdfStyles.coverMeta}>Generated: {generatedAt}</Text>
      </View>

      {/* Modules included */}
      <View style={pdfStyles.coverModuleBox}>
        <Text style={pdfStyles.coverModuleLabel}>MODULES IN THIS REPORT</Text>
        {selectedModules.map((id) => {
          const mod = REPORT_MODULES.find((m) => m.id === id);
          return (
            <Text key={id} style={pdfStyles.coverModuleItem}>
              • {mod?.label ?? id}
            </Text>
          );
        })}
      </View>

      {/* Footer */}
      <View style={pdfStyles.footer}>
        <Text style={pdfStyles.footerText}>MNEMOSYNE © 2026</Text>
        <Text style={pdfStyles.footerText}>Confidential</Text>
      </View>
    </Page>
  );
};
