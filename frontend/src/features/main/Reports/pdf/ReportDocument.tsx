import { Document } from "@react-pdf/renderer";
import type { PapiResults } from "@/features/main/PKResult/types";
import type { DiscScores } from "@/features/main/DISCResult/types";
import type { WorksheetRow } from "@/components/IntrayWorksheetTable";
import { CoverPage } from "./CoverPage";
import { PapiModule } from "./PapiModule";
import { DiscModule } from "./DiscModule";
import { IntrayModule } from "./IntrayModule";
import { CompetenceModule } from "./CompetenceModule";
import type { ReportModuleId, ReportParticipant } from "../types";

interface ReportDocumentProps {
  participant: ReportParticipant;
  selectedModules: ReportModuleId[];
  generatedAt: string;
}

export const ReportDocument = ({
  participant,
  selectedModules,
  generatedAt,
}: ReportDocumentProps) => {
  const testResults = participant.expand?.test_results_via_participant ?? [];

  const findResult = (type: string) =>
    testResults.find((r) => r.test_type === type) ?? null;

  const papiResult = findResult("papikostick");
  const discResult = findResult("disc");
  const intray1Result = findResult("intray1");
  const intray2Result = findResult("intray2");

  const papiScores = papiResult?.data?.processed_scores as
    | PapiResults
    | undefined;
  const discScores = discResult?.data as DiscScores | undefined;
  const intray1Rows1: WorksheetRow[] = intray1Result?.data?.kk1 ?? [];
  const intray1Rows2: WorksheetRow[] = intray1Result?.data?.kk2 ?? [];
  const intray2Rows: WorksheetRow[] = intray2Result?.data?.kk ?? [];

  return (
    <Document
      title={`${participant.first_name} ${participant.last_name} — Mnemosyne Report`}
      author="Mnemosyne"
      subject="Assessment Report"
    >
      <CoverPage
        participant={participant}
        selectedModules={selectedModules}
        generatedAt={generatedAt}
      />

      {selectedModules.includes("papi") && papiScores && (
        <PapiModule scores={papiScores} participant={participant} />
      )}

      {selectedModules.includes("disc") && discScores && (
        <DiscModule scores={discScores} participant={participant} />
      )}

      {selectedModules.includes("intray1") && (
        <IntrayModule
          title="Intray-1"
          sections={[
            { title: "KK-1 (Kertas Kerja 1)", rows: intray1Rows1 },
            { title: "KK-2 (Kertas Kerja 2)", rows: intray1Rows2 },
          ]}
          participant={participant}
        />
      )}

      {selectedModules.includes("intray2") && (
        <IntrayModule
          title="Intray-2"
          sections={[{ title: "Kertas Kerja", rows: intray2Rows }]}
          participant={participant}
        />
      )}

      {selectedModules.includes("competence") && (
        <CompetenceModule testResults={testResults} participant={participant} />
      )}
    </Document>
  );
};
