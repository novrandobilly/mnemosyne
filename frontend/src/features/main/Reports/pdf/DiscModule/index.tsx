import { Fragment } from "react";
import { Page, View, Text } from "@react-pdf/renderer";
import type { DiscScores } from "@/features/main/DISCResult/types";
import { pdfStyles, PDF_COLORS } from "../styles";
import type { ReportParticipant, DiscGraphUrls } from "../../types";
import { ScoreTableSection } from "./features/ScoreTableSection";
import { ScoreGridSection } from "./features/ScoreGridSection";
import { DominantSection } from "./features/DominantSection";
import { GraphsSection } from "./features/GraphsSection";

interface DiscModuleProps {
  scores: DiscScores;
  participant: ReportParticipant;
  graphImageUrls?: DiscGraphUrls;
}

export const DiscModule = ({
  scores,
  participant,
  graphImageUrls,
}: DiscModuleProps) => {
  const fullName = `${participant.first_name} ${participant.last_name}`;
  const hasGraphs =
    !!graphImageUrls?.most &&
    !!graphImageUrls?.least &&
    !!graphImageUrls?.change;

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

  const sectionHeader = (
    <View style={pdfStyles.sectionHeader}>
      <View style={pdfStyles.sectionHeaderLeft}>
        <Text style={pdfStyles.sectionHeaderTitle}>DISC</Text>
        <Text style={pdfStyles.sectionHeaderSub}>{fullName}</Text>
      </View>
    </View>
  );

  return (
    <Fragment>
      {/* ── Page 1: Score Table + Score Grid + Dominant ─────────────────── */}
      <Page size="A4" style={pdfStyles.page}>
        {accentBar}
        {sectionHeader}

        <ScoreTableSection scores={scores} />
        <ScoreGridSection scores={scores} />
        <DominantSection scores={scores} />

        {footer}
      </Page>

      {/* ── Page 2: Score profile graphs (only if images are ready) ──────── */}
      {hasGraphs && (
        <Page size="A4" style={pdfStyles.page}>
          {accentBar}
          {sectionHeader}

          <GraphsSection graphImageUrls={graphImageUrls!} />

          {footer}
        </Page>
      )}
    </Fragment>
  );
};
