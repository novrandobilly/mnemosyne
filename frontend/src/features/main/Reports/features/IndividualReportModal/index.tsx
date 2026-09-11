import { useEffect, useMemo, useRef, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useModal } from "@/context/ModalContext";
import {
  REPORT_MODULES,
  isModuleAvailable,
  getCompletedCompetenceTests,
  type ReportModuleId,
  type ReportParticipant,
} from "../../types";
import { ReportDocument } from "../../pdf/ReportDocument";
import { usePapiWheelCapture } from "../../hooks/usePapiWheelCapture";
import { useDiscGraphsCapture } from "../../hooks/useDiscGraphsCapture";
import type { PapiResults } from "@/features/main/PKResult/types";
import type { DiscResult, DiscScores } from "@/features/main/DISCResult/types";
import { triggerDownload } from "../BulkReportPanel/utils";
import { scorePapiKostick } from "@/data/papikostick/scoring";
import { scoreDisc } from "@/data/disc/scoring";

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
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const currentBlobRef = useRef<Blob | null>(null);

  const toggle = (id: ReportModuleId) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const papiResult = testResults.find(
    (r) => r.test_type === "papikostick" && r.status === "completed",
  );
  const papiScores = useMemo<PapiResults | undefined>(() => {
    if (!papiResult?.data) return undefined;
    return (
      (papiResult.data.processed_scores as PapiResults) ??
      scorePapiKostick(papiResult.data.raw_answers ?? papiResult.data)
    );
  }, [papiResult?.data]);
  const papiSelected = selected.includes("papi");

  const {
    wheelImageUrl,
    isCapturing: isPapiCapturing,
    portal,
  } = usePapiWheelCapture(papiScores, papiSelected);

  const discResult = testResults.find(
    (r) => r.test_type === "disc" && r.status === "completed",
  );
  const discScores = useMemo<DiscScores | undefined>(() => {
    if (!discResult?.data) return undefined;
    const discData: DiscResult | undefined = discResult.data.processedResults
      ? (discResult.data as DiscResult)
      : scoreDisc(discResult.data.rawAnswers ?? discResult.data);
    return discData?.processedResults
      ? {
          MOST: discData.processedResults.most,
          LEAST: discData.processedResults.least,
          CHANGE: discData.processedResults.change,
        }
      : undefined;
  }, [discResult?.data]);
  const discSelected = selected.includes("disc");

  const {
    graphUrls: discGraphUrls,
    isCapturing: isDiscCapturing,
    portals: discPortals,
  } = useDiscGraphsCapture(discScores, discSelected);

  const isPapiReady = !papiSelected || !isPapiCapturing;
  const isDiscReady = !discSelected || !isDiscCapturing;
  const isReady = isPapiReady && isDiscReady;
  const isCapturing = isPapiCapturing || isDiscCapturing;

  const generatedAt = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [],
  );

  const fileName =
    `${participant.first_name}_${participant.last_name}_mnemosyne_report.pdf`
      .toLowerCase()
      .replace(/\s+/g, "_");

  // Effect to generate live preview whenever selected modules or chart captures change
  useEffect(() => {
    if (selected.length === 0) {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
      currentBlobRef.current = null;
      setIsPreviewLoading(false);
      return;
    }

    if (!isReady) {
      setIsPreviewLoading(true);
      return;
    }

    let isCurrent = true;
    setIsPreviewLoading(true);

    const generatePreview = async () => {
      try {
        const blob = await pdf(
          <ReportDocument
            participant={participant}
            selectedModules={selected}
            generatedAt={generatedAt}
            papiWheelImageUrl={wheelImageUrl}
            discGraphImageUrls={discGraphUrls}
          />,
        ).toBlob();

        if (!isCurrent) return;

        const newUrl = URL.createObjectURL(blob);
        setPreviewUrl((prevUrl) => {
          if (prevUrl) URL.revokeObjectURL(prevUrl);
          return newUrl;
        });
        currentBlobRef.current = blob;
      } catch (err) {
        console.error("Error generating PDF preview:", err);
      } finally {
        if (isCurrent) {
          setIsPreviewLoading(false);
        }
      }
    };

    generatePreview();

    return () => {
      isCurrent = false;
    };
  }, [
    selected,
    isReady,
    wheelImageUrl,
    discGraphUrls.most,
    discGraphUrls.least,
    discGraphUrls.change,
    participant,
    generatedAt,
  ]);

  // Clean up blob url on unmount
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      if (currentBlobRef.current) {
        triggerDownload(currentBlobRef.current, fileName);
      } else {
        const blob = await pdf(
          <ReportDocument
            participant={participant}
            selectedModules={selected}
            generatedAt={generatedAt}
            papiWheelImageUrl={wheelImageUrl}
            discGraphImageUrls={discGraphUrls}
          />,
        ).toBlob();
        triggerDownload(blob, fileName);
      }
    } finally {
      setIsDownloading(false);
      closeModal();
    }
  };

  return (
    <div className="flex h-[88vh] max-h-230 w-full flex-col gap-6 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl lg:flex-row lg:p-8">
      {/* ── Left Column: Config & Actions ── */}
      <div className="flex w-full shrink-0 flex-col justify-between overflow-y-auto pr-1 lg:w-90">
        <div>
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
            className="mt-1 text-neutral-900"
          >
            {fullName}
          </IntiDinamisText>
          <IntiDinamisText size="14" className="mt-0.5 text-neutral-500">
            {participant.company || "—"} · {participant.department || "—"}
          </IntiDinamisText>

          {/* Module checklist */}
          <div className="mt-5 flex flex-col gap-2">
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
                  className={`flex cursor-pointer items-center justify-between rounded-xl border px-3.5 py-2.5 transition ${
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
                    <div>
                      <IntiDinamisText size="14" className="text-neutral-800">
                        {mod.label}
                      </IntiDinamisText>
                      {mod.id === "competence" && available && (
                        <span className="block text-xs text-neutral-500">
                          {getCompletedCompetenceTests(testResults)
                            .map((t) => t.toUpperCase())
                            .join(", ")}
                        </span>
                      )}
                    </div>
                  </div>
                  {!available && (
                    <span className="text-xs text-neutral-400">
                      Not completed
                    </span>
                  )}
                </label>
              );
            })}
          </div>
        </div>

        {/* Action row */}
        <div className="mt-6 flex items-center justify-end gap-3 border-t border-neutral-100 pt-4">
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
            disabled={selected.length === 0 || isDownloading}
            isLoading={isDownloading}
          >
            {isDownloading ? "Downloading…" : "Download PDF"}
          </IntiDinamisButton>
        </div>
      </div>

      {/* ── Right Column: Live PDF Preview ── */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
        {/* Preview Toolbar */}
        <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Live Preview
            </span>
            {isPreviewLoading || isCapturing ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                Updating preview…
              </span>
            ) : selected.length > 0 ? (
              <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
                {selected.length} module{selected.length !== 1 ? "s" : ""}
              </span>
            ) : null}
          </div>

          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-neutral-500 transition hover:text-neutral-900"
            >
              Open in new tab ↗
            </a>
          )}
        </div>

        {/* Preview Frame */}
        <div className="relative flex min-h-0 flex-1 items-center justify-center p-3">
          {selected.length === 0 ? (
            <div className="text-center p-8 text-sm text-neutral-400">
              No modules selected. Select at least one module on the left to
              preview the report.
            </div>
          ) : isCapturing || (isPreviewLoading && !previewUrl) ? (
            <div className="flex flex-col items-center gap-2 text-sm text-neutral-400">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-300 border-t-emerald-600" />
              <span>Generating document preview…</span>
            </div>
          ) : previewUrl ? (
            <iframe
              src={previewUrl}
              title={`${fullName} Report Preview`}
              className="h-full w-full rounded-xl border border-neutral-200 bg-white shadow-sm"
            />
          ) : null}
        </div>
      </div>

      {portal}
      {discPortals}
    </div>
  );
};
