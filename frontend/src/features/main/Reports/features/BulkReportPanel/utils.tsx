import { pdf } from "@react-pdf/renderer";
import {
  isModuleAvailable,
  type ReportModuleId,
  type ReportParticipant,
} from "../../types";
import { ReportDocument } from "../../pdf/ReportDocument";

export const generatePdfBlob = async (
  participant: ReportParticipant,
  moduleFilter: ReportModuleId[],
) => {
  const testResults = participant.expand?.test_results_via_participant ?? [];
  const modules = moduleFilter.filter((id) =>
    isModuleAvailable(id, testResults),
  );

  if (!modules.length) return null;

  const generatedAt = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const blob = await pdf(
    <ReportDocument
      participant={participant}
      selectedModules={modules}
      generatedAt={generatedAt}
    />,
  ).toBlob();

  const filename =
    `${participant.first_name}_${participant.last_name}_mnemosyne_report.pdf`
      .toLowerCase()
      .replace(/\s+/g, "_");

  return { blob, filename };
};

export const triggerDownload = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.toLowerCase().replace(/\s+/g, "_");
  a.click();
  URL.revokeObjectURL(url);
};
