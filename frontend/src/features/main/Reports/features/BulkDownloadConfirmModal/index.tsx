import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { useModal } from "@/context/ModalContext";
import {
  REPORT_MODULES,
  isModuleAvailable,
  type ReportModuleId,
  type ReportParticipant,
} from "../../types";

const BULK_ZIP_THRESHOLD = 5;

interface BulkDownloadConfirmModalProps {
  participants: ReportParticipant[];
  selectedModules: ReportModuleId[];
  onConfirm: () => void;
}

export const BulkDownloadConfirmModal = ({
  participants,
  selectedModules,
  onConfirm,
}: BulkDownloadConfirmModalProps) => {
  const { closeModal } = useModal();

  const downloadable = participants.filter((p) =>
    selectedModules.some((id) =>
      isModuleAvailable(id, p.expand?.test_results_via_participant ?? []),
    ),
  );

  const hasNothing = downloadable.length === 0;
  const willZip = downloadable.length > BULK_ZIP_THRESHOLD;

  return (
    <div className="w-full max-w-lg rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <IntiDinamisText
        size="12"
        className="uppercase tracking-[0.3em] text-neutral-500"
      >
        Bulk Download
      </IntiDinamisText>
      <IntiDinamisText
        as="h2"
        size="20"
        weight="semibold"
        className="mt-2 text-neutral-900"
      >
        Confirm Download
      </IntiDinamisText>

      {hasNothing ? (
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <IntiDinamisText size="14" className="font-medium text-amber-800">
            Nothing to download
          </IntiDinamisText>
          <IntiDinamisText size="12" className="mt-1 text-amber-700">
            {participants.length === 0
              ? "No participants were found for the selected date range."
              : selectedModules.length === 0
                ? "No modules are selected. Please check at least one module before downloading."
                : "None of the participants in this date range have completed any of the selected modules."}
          </IntiDinamisText>
        </div>
      ) : (
        <>
          <IntiDinamisText size="14" className="mt-3 text-neutral-500">
            {downloadable.length} PDF{downloadable.length !== 1 ? "s" : ""} will
            be generated
            {willZip
              ? " and bundled into a single .zip file."
              : " and downloaded individually."}
          </IntiDinamisText>

          {/* Selected modules */}
          <div className="mt-5">
            <IntiDinamisText
              size="12"
              className="mb-2 uppercase tracking-[0.2em] text-neutral-400"
            >
              Modules included
            </IntiDinamisText>
            <div className="flex flex-wrap gap-1.5">
              {selectedModules.map((id) => {
                const mod = REPORT_MODULES.find((m) => m.id === id)!;
                return (
                  <span
                    key={id}
                    className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
                  >
                    {mod.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Participant list */}
          <div className="mt-5 max-h-56 divide-y divide-neutral-100 overflow-y-auto rounded-2xl border border-neutral-100">
            {downloadable.map((p, idx) => {
              const testResults = p.expand?.test_results_via_participant ?? [];
              const includedModules = selectedModules.filter((id) =>
                isModuleAvailable(id, testResults),
              );

              return (
                <div
                  key={p.id}
                  className="flex items-center justify-between px-4 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 text-right text-xs text-neutral-400">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">
                        {p.first_name} {p.last_name}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {p.company || "—"}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-end gap-1">
                    {includedModules.map((id) => {
                      const mod = REPORT_MODULES.find((m) => m.id === id)!;
                      return (
                        <span
                          key={id}
                          className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700"
                        >
                          {mod.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Actions */}
      <div className="mt-6 flex justify-end gap-3">
        <IntiDinamisButton
          type="button"
          variant="secondary"
          onClick={closeModal}
        >
          Cancel
        </IntiDinamisButton>
        {!hasNothing && (
          <IntiDinamisButton
            type="button"
            onClick={() => {
              onConfirm();
              closeModal();
            }}
          >
            Confirm Download
          </IntiDinamisButton>
        )}
      </div>
    </div>
  );
};
