import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import JSZip from "jszip";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { TextInput } from "@/components/TextInput";
import { useModal } from "@/context/ModalContext";
import { useParticipantsByDateRange } from "../../hooks/useParticipantsByDateRange";
import {
  REPORT_MODULES,
  isModuleAvailable,
  type ReportModuleId,
  type ReportParticipant,
} from "../../types";
import { ReportDocument } from "../../pdf/ReportDocument";
import { IndividualReportModal } from "../IndividualReportModal";
import { BulkDownloadConfirmModal } from "../BulkDownloadConfirmModal";

const BULK_ZIP_THRESHOLD = 5;

const generatePdfBlob = async (
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

const triggerDownload = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.toLowerCase().replace(/\s+/g, "_");
  a.click();
  URL.revokeObjectURL(url);
};

const BulkReportPanel = () => {
  const { showModal } = useModal();
  const today = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [singleDay, setSingleDay] = useState(true);
  const [submittedRange, setSubmittedRange] = useState<{
    start: string | null;
    end: string | null;
  }>({ start: today, end: today });
  const [selectedModules, setSelectedModules] = useState<ReportModuleId[]>(
    REPORT_MODULES.map((m) => m.id),
  );
  const [isDownloading, setIsDownloading] = useState(false);

  const toggleModule = (id: ReportModuleId) =>
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const {
    data: participants,
    isLoading,
    isFetching,
  } = useParticipantsByDateRange(submittedRange);

  const handleFetch = () => {
    if (!startDate) return;
    setSubmittedRange({
      start: startDate,
      end: singleDay ? startDate : endDate || startDate,
    });
  };

  const handleDownloadAll = async () => {
    if (!participants?.length) return;
    setIsDownloading(true);

    const downloadable = participants.filter((p) =>
      selectedModules.some((id) =>
        isModuleAvailable(id, p.expand?.test_results_via_participant ?? []),
      ),
    );

    const results = await Promise.all(
      downloadable.map((p) => generatePdfBlob(p, selectedModules)),
    );
    const valid = results.filter((r): r is NonNullable<typeof r> => r !== null);

    if (valid.length > BULK_ZIP_THRESHOLD) {
      // Bundle into a single zip
      const dateTag = new Date().toISOString().slice(0, 10);
      const zip = new JSZip();
      for (const { blob, filename } of valid) {
        zip.file(filename, blob);
      }
      const zipBlob = await zip.generateAsync({ type: "blob" });
      triggerDownload(zipBlob, `mnemosyne_reports_${dateTag}.zip`);
    } else {
      // ≤5: trigger individual downloads
      for (const { blob, filename } of valid) {
        triggerDownload(blob, filename);
        await new Promise((res) => setTimeout(res, 400));
      }
    }

    setIsDownloading(false);
  };

  const handleDownloadAllClick = () => {
    showModal({
      content: (
        <BulkDownloadConfirmModal
          participants={participants ?? []}
          selectedModules={selectedModules}
          onConfirm={handleDownloadAll}
        />
      ),
    });
  };

  const handleIndividualReport = (participant: ReportParticipant) => {
    showModal({ content: <IndividualReportModal participant={participant} /> });
  };

  const downloadableCount =
    participants?.filter((p) =>
      selectedModules.some((id) =>
        isModuleAvailable(id, p.expand?.test_results_via_participant ?? []),
      ),
    ).length ?? 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Filter card */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <IntiDinamisText
          size="12"
          className="uppercase tracking-[0.3em] text-neutral-500"
        >
          Date Range Filter
        </IntiDinamisText>
        <IntiDinamisText
          as="h2"
          size="20"
          weight="semibold"
          className="mt-2 text-neutral-900"
        >
          Select participants by registration date
        </IntiDinamisText>

        <div className="mt-5 flex flex-wrap items-end gap-4">
          <div className="min-w-45 flex-1">
            <TextInput
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          {!singleDay && (
            <div className="min-w-45 flex-1">
              <TextInput
                label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate}
              />
            </div>
          )}

          <label className="flex cursor-pointer items-center gap-2 pb-3 text-sm text-neutral-600">
            <input
              type="checkbox"
              checked={singleDay}
              onChange={() => setSingleDay((v) => !v)}
              className="h-4 w-4 accent-emerald-600"
            />
            Single Day
          </label>

          <IntiDinamisButton
            type="button"
            onClick={handleFetch}
            disabled={!startDate || isFetching}
            isLoading={isFetching}
            className="mb-0.5"
          >
            Fetch Participants
          </IntiDinamisButton>
        </div>

        {submittedRange.start && (
          <IntiDinamisText size="12" className="mt-3 text-neutral-400">
            Filter:{" "}
            <span className="font-mono text-neutral-600">
              {submittedRange.start === submittedRange.end
                ? submittedRange.start
                : `${submittedRange.start} → ${submittedRange.end}`}
            </span>
          </IntiDinamisText>
        )}

        {/* Module selector */}
        <div className="mt-6 border-t border-neutral-100 pt-5">
          <IntiDinamisText
            size="12"
            className="mb-3 uppercase tracking-[0.2em] text-neutral-500"
          >
            Include Modules
          </IntiDinamisText>
          <div className="flex flex-wrap gap-3">
            {REPORT_MODULES.map((mod) => (
              <label
                key={mod.id}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm transition-colors hover:border-emerald-400 has-checked:border-emerald-500 has-checked:bg-emerald-50"
              >
                <input
                  type="checkbox"
                  checked={selectedModules.includes(mod.id)}
                  onChange={() => toggleModule(mod.id)}
                  className="h-3.5 w-3.5 accent-emerald-600"
                />
                <span className="text-neutral-700">{mod.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {isLoading && (
        <div className="py-8 text-center text-sm text-neutral-400">
          Loading participants…
        </div>
      )}

      {participants && !isLoading && (
        <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <IntiDinamisText weight="semibold" className="text-neutral-900">
                {participants.length} participant
                {participants.length !== 1 ? "s" : ""} found
              </IntiDinamisText>
              <IntiDinamisText size="12" className="text-neutral-400">
                {downloadableCount} with at least one completed module
              </IntiDinamisText>
            </div>

            <IntiDinamisButton
              type="button"
              onClick={handleDownloadAllClick}
              isLoading={isDownloading}
              disabled={isDownloading}
            >
              {isDownloading
                ? "Downloading…"
                : `Download All (${downloadableCount})`}
            </IntiDinamisButton>
          </div>

          {participants.length === 0 ? (
            <div className="py-12 text-center text-sm text-neutral-400">
              No participants found for the selected date range.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-neutral-50 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  <tr>
                    <th className="px-5 py-3">No</th>
                    <th className="px-5 py-3">Participant</th>
                    <th className="px-5 py-3">Company</th>
                    <th className="px-5 py-3">Modules</th>
                    <th className="px-5 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {participants.map((p, idx) => {
                    const testResults =
                      p.expand?.test_results_via_participant ?? [];
                    const completedModules = REPORT_MODULES.filter((m) =>
                      isModuleAvailable(m.id, testResults),
                    );

                    return (
                      <tr key={p.id} className="hover:bg-neutral-50">
                        <td className="px-5 py-4 text-neutral-500">
                          {String(idx + 1).padStart(2, "0")}
                        </td>
                        <td className="px-5 py-4">
                          <div className="font-semibold text-neutral-900">
                            {p.first_name} {p.last_name}
                          </div>
                          <div className="text-xs text-neutral-400">
                            {p.department || "—"}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-neutral-600">
                          {p.company || "—"}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex flex-wrap gap-1">
                            {completedModules.length === 0 ? (
                              <span className="text-xs text-neutral-400">
                                None
                              </span>
                            ) : (
                              completedModules.map((m) => (
                                <span
                                  key={m.id}
                                  className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700"
                                >
                                  {m.label}
                                </span>
                              ))
                            )}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <IntiDinamisButton
                            type="button"
                            variant="secondary"
                            className="min-w-0 rounded-full px-3 py-1.5 text-xs"
                            onClick={() => handleIndividualReport(p)}
                            disabled={completedModules.length === 0}
                          >
                            Export
                          </IntiDinamisButton>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BulkReportPanel;
