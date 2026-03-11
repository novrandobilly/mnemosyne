import { pdf } from "@react-pdf/renderer";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import {
  isModuleAvailable,
  type ReportModuleId,
  type ReportParticipant,
  type DiscGraphUrls,
} from "../../types";
import { ReportDocument } from "../../pdf/ReportDocument";
import { captureSvgAsJpeg } from "../../utils/captureSvgAsJpeg";
import PapiWheel from "@/assets/PapiWheel";
import type { PapiResults } from "@/features/main/PKResult/types";
import DiscMostGraph from "@/features/main/DISCResult/features/MostTable";
import DiscLeastGraph from "@/features/main/DISCResult/features/LeastTable";
import DiscChangeGraph from "@/features/main/DISCResult/features/ChangeTable";
import type { DiscScores } from "@/features/main/DISCResult/types";

/**
 * Captures the PapiWheel SVG for a participant as a JPEG data URL.
 * Mounts the wheel invisibly on document.body, waits for a paint, captures,
 * then removes the container.
 */
export const captureParticipantWheel = (
  scores: PapiResults,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const container = document.createElement("div");
    container.style.cssText =
      "position:fixed;left:0;top:0;width:512px;height:512px;opacity:0;pointer-events:none;z-index:-1;";
    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(createElement(PapiWheel, { data: scores }));

    setTimeout(() => {
      captureSvgAsJpeg(container)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          root.unmount();
          document.body.removeChild(container);
        });
    }, 300);
  });
};

export const captureParticipantDiscGraphs = (
  scores: DiscScores,
): Promise<DiscGraphUrls> => {
  type GraphScores = { d: number; i: number; s: number; c: number };
  const toGraphScores = (row: DiscScores["MOST"]): GraphScores => ({
    d: row.D,
    i: row.I,
    s: row.S,
    c: row.C,
  });

  const captureGraph = (
    Component: React.ComponentType<{ scores: GraphScores }>,
    graphScores: GraphScores,
  ): Promise<string> =>
    new Promise((resolve, reject) => {
      const container = document.createElement("div");
      container.style.cssText =
        "position:fixed;left:0;top:0;width:400px;height:750px;opacity:0;pointer-events:none;z-index:-1;";
      document.body.appendChild(container);
      const root = createRoot(container);
      root.render(createElement(Component, { scores: graphScores }));
      setTimeout(() => {
        captureSvgAsJpeg(container)
          .then(resolve)
          .catch(reject)
          .finally(() => {
            root.unmount();
            document.body.removeChild(container);
          });
      }, 300);
    });

  return Promise.all([
    captureGraph(DiscMostGraph, toGraphScores(scores.MOST)),
    captureGraph(DiscLeastGraph, toGraphScores(scores.LEAST)),
    captureGraph(DiscChangeGraph, toGraphScores(scores.CHANGE)),
  ]).then(([most, least, change]) => ({ most, least, change }));
};

export const generatePdfBlob = async (
  participant: ReportParticipant,
  moduleFilter: ReportModuleId[],
  papiWheelImageUrl?: string,
  discGraphImageUrls?: DiscGraphUrls,
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
      papiWheelImageUrl={papiWheelImageUrl}
      discGraphImageUrls={discGraphImageUrls}
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
