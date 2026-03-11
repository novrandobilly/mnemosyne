import { Fragment } from "react";
import { Page, View, Text } from "@react-pdf/renderer";
import type { PapiResults } from "@/features/main/PKResult/types";
import { pdfStyles, PDF_COLORS } from "./styles";
import type { ReportParticipant } from "../types";
import { ScoreSummarySection } from "./PapiModule/features/ScoreSummarySection";
import { RoleScoringSection } from "./PapiModule/features/RoleScoringSection";
import { NeedScoringSection } from "./PapiModule/features/NeedScoringSection";
import { PapiWheelSection } from "./PapiModule/features/PapiWheelSection";
import { InterpretationSection } from "./PapiModule/features/InterpretationSection";

interface PapiModuleProps {
  scores: PapiResults;
  participant: ReportParticipant;
  wheelImageUrl?: string;
}

export const PapiModule = ({
  scores,
  participant,
  wheelImageUrl,
}: PapiModuleProps) => {
  const fullName = `${participant.first_name} ${participant.last_name}`;

  const accentBar = (
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
  );

  const footer = (
    <View style={pdfStyles.footer} fixed>
      <Text style={pdfStyles.footerText}>MNEMOSYNE © 2026 — Confidential</Text>
      <Text
        style={pdfStyles.footerText}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} / ${totalPages}`
        }
      />
    </View>
  );

  return (
    <Fragment>
      {/* Page 1: Score summary + grids + Papi Wheel */}
      <Page size="A4" style={pdfStyles.page}>
        {accentBar}
        <View style={pdfStyles.sectionHeader}>
          <View style={pdfStyles.sectionHeaderLeft}>
            <Text style={pdfStyles.sectionHeaderTitle}>PAPI KOSTICK</Text>
            <Text style={pdfStyles.sectionHeaderSub}>{fullName}</Text>
          </View>
          <Text style={[pdfStyles.footerText, { color: PDF_COLORS.light }]}>
            Score Range: 1–9
          </Text>
        </View>
        <ScoreSummarySection scores={scores} />
        <View style={{ flexDirection: "row", gap: 16, marginBottom: 14 }}>
          <RoleScoringSection scores={scores} />
          <NeedScoringSection scores={scores} />
        </View>
        <PapiWheelSection imageUrl={wheelImageUrl} />
        {footer}
      </Page>

      {/* Page 2: Interpretation — Work Direction + Leadership */}
      <Page size="A4" style={pdfStyles.page}>
        {accentBar}
        <InterpretationSection
          scores={scores}
          participant={participant}
          categorySlice={[0, 2]}
          showHeader={true}
        />
        {footer}
      </Page>

      {/* Page 3: Interpretation — Activity + Social Nature + Work Style */}
      <Page size="A4" style={pdfStyles.page}>
        {accentBar}
        <InterpretationSection
          scores={scores}
          participant={participant}
          categorySlice={[2, 5]}
          showHeader={false}
        />
        {footer}
      </Page>

      {/* Page 4: Interpretation — Temperament + Followership */}
      <Page size="A4" style={pdfStyles.page}>
        {accentBar}
        <InterpretationSection
          scores={scores}
          participant={participant}
          categorySlice={[5, 7]}
          showHeader={false}
        />
        {footer}
      </Page>
    </Fragment>
  );
};
