import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useModal } from "@/context/ModalContext";
import {
  REPORT_MODULES,
  isModuleAvailable,
  type ReportModuleId,
  type ReportParticipant,
} from "../../types";
import { ReportDocument } from "../../pdf/ReportDocument";
import { usePapiWheelCapture } from "../../hooks/usePapiWheelCapture";
import type { PapiResults } from "@/features/main/PKResult/types";
import { triggerDownload } from "../BulkReportPanel/utils";

interface IndividualReportModalProps {
  participant: ReportParticipant;
}

export const IndividualReportModal = ({
  participant,
}: IndividualReportModalProps) => {
  const { closeModal } = useModal();
  const testResults = participant.expand?.test_results_via_participant ?? [];
  const fullName = `${participant.first_name} ${participant.last_name}`;

  const availableModules = REPORT_MODULES.filter((m) =>
    isModuleAvailable(m.id, testResults),
  );

  const [selected, setSelected] = useState<ReportModuleId[]>(
    availableModules.map((m) => m.id),
  );
  const [isDownloading, setIsDownloading] = useState(false);

  const toggle = (id: ReportModuleId) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const papiResult = testResults.find((r) => r.test_type === "papikostick");
  const papiScores = papiResult?.data?.processed_scores as
    | PapiResults
    | undefined;
  const papiSelected = selected.includes("papi");

  const { wheelImageUrl, isCapturing, portal } = usePapiWheelCapture(
    papiScores,
    papiSelected,
  );

  const generatedAt = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const fileName =
    `${participant.first_name}_${participant.last_name}_mnemosyne_report.pdf`
      .toLowerCase()
      .replace(/\s+/g, "_");

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const blob = await pdf(
        <ReportDocument
          participant={participant}
          selectedModules={selected}
          generatedAt={generatedAt}
          papiWheelImageUrl={wheelImageUrl}
        />,
      ).toBlob();
      triggerDownload(blob, fileName);
    } finally {
      setIsDownloading(false);
      closeModal();
    }
  };

  const isPapiReady = !papiSelected || !isCapturing;

  return (
    <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <IntiDinamisText
        size="12"
        className="uppercase tracking-[0.3em] text-neutral-500"
      >
        Export Report
      </IntiDinamisText>
      <IntiDinamisText
        as="h2"
        size="20"
        weight="semibold"
        className="mt-2 text-neutral-900"
      >
        {fullName}
      </IntiDinamisText>
      <IntiDinamisText size="14" className="mt-1 text-neutral-500">
        {participant.company || "—"} · {participant.department || "—"}
      </IntiDinamisText>

      {/* Module checklist */}
      <div className="mt-6 flex flex-col gap-2">
        <IntiDinamisText
          size="12"
          className="mb-1 uppercase tracking-[0.2em] text-neutral-400"
        >
          Select modules
        </IntiDinamisText>

        {REPORT_MODULES.map((mod) => {
          const available = isModuleAvailable(mod.id, testResults);
          const isChecked = selected.includes(mod.id);

          return (
            <label
              key={mod.id}
              className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition ${
                !available
                  ? "cursor-not-allowed border-neutral-100 bg-neutral-50 opacity-50"
                  : isChecked
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-neutral-200 bg-white hover:bg-neutral-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => available && toggle(mod.id)}
                  disabled={!available}
                  className="h-4 w-4 accent-emerald-600"
                />
                <IntiDinamisText size="14" className="text-neutral-800">
                  {mod.label}
                </IntiDinamisText>
              </div>
              {!available && (
                <span className="text-xs text-neutral-400">Not completed</span>
              )}
            </label>
          );
        })}
      </div>

      {/* Action row */}
      <div className="mt-6 flex justify-end gap-3">
        <IntiDinamisButton
          type="button"
          variant="secondary"
          onClick={closeModal}
        >
          Cancel
        </IntiDinamisButton>

        <IntiDinamisButton
          type="button"
          onClick={handleDownload}
          disabled={selected.length === 0 || !isPapiReady || isDownloading}
          isLoading={isCapturing || isDownloading}
        >
          {isCapturing
            ? "Preparing wheel…"
            : isDownloading
              ? "Generating PDF…"
              : "Download PDF"}
        </IntiDinamisButton>
      </div>
      {portal}
    </div>
  );
};
