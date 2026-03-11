import { useState } from "react";
import JSZip from "jszip";
import {
  isModuleAvailable,
  type ReportModuleId,
  type ReportParticipant,
} from "../../../types";
import { BULK_ZIP_THRESHOLD } from "../constants";
import {
  generatePdfBlob,
  triggerDownload,
  captureParticipantWheel,
} from "../utils";
import type { PapiResults } from "@/features/main/PKResult/types";

export const useBulkDownload = (
  selectedParticipants: ReportParticipant[],
  selectedModules: ReportModuleId[],
) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadAll = async () => {
    if (!selectedParticipants.length) return;
    setIsDownloading(true);

    const downloadable = selectedParticipants.filter((p) =>
      selectedModules.some((id) =>
        isModuleAvailable(id, p.expand?.test_results_via_participant ?? []),
      ),
    );

    const results = await Promise.all(
      downloadable.map(async (p) => {
        let wheelImageUrl: string | undefined;
        if (selectedModules.includes("papi")) {
          const papiResult = (
            p.expand?.test_results_via_participant ?? []
          ).find((r) => r.test_type === "papikostick");
          const scores = papiResult?.data?.processed_scores as
            | PapiResults
            | undefined;
          if (scores) {
            wheelImageUrl = await captureParticipantWheel(scores).catch(
              () => undefined,
            );
          }
        }
        return generatePdfBlob(p, selectedModules, wheelImageUrl);
      }),
    );
    const valid = results.filter((r): r is NonNullable<typeof r> => r !== null);

    if (valid.length > BULK_ZIP_THRESHOLD) {
      const dateTag = new Date().toISOString().slice(0, 10);
      const zip = new JSZip();
      for (const { blob, filename } of valid) {
        zip.file(filename, blob);
      }
      const zipBlob = await zip.generateAsync({ type: "blob" });
      triggerDownload(zipBlob, `mnemosyne_reports_${dateTag}.zip`);
    } else {
      for (const { blob, filename } of valid) {
        triggerDownload(blob, filename);
        await new Promise((res) => setTimeout(res, 400));
      }
    }

    setIsDownloading(false);
  };

  return { isDownloading, handleDownloadAll };
};
