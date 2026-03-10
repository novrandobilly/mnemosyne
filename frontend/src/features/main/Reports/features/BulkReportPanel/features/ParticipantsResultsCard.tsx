import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { REPORT_MODULES, isModuleAvailable } from "../../../types";
import { useBulkReport } from "../context/BulkReportContext";

export const ParticipantsResultsCard = () => {
  const {
    participants,
    isLoading,
    selectedParticipants,
    isSelected,
    toggleParticipant,
    allSelected,
    someSelected,
    toggleAllParticipants,
    downloadableCount,
    handleDownloadAllClick,
    isDownloading,
    handleIndividualReport,
  } = useBulkReport();

  if (isLoading) {
    return (
      <div className="py-8 text-center text-sm text-neutral-400">
        Loading participants…
      </div>
    );
  }

  if (!participants) return null;

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <IntiDinamisText weight="semibold" className="text-neutral-900">
            {participants.length} participant
            {participants.length !== 1 ? "s" : ""} found
          </IntiDinamisText>
          <IntiDinamisText size="12" className="text-neutral-400">
            {selectedParticipants.length} of {participants.length} selected
            {" · "}
            {downloadableCount} downloadable
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
            : `${allSelected ? "Download All" : "Download Selected"} (${downloadableCount})`}
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
                <th className="py-3 pl-5 pr-2">
                  <input
                    ref={(el) => {
                      if (el) el.indeterminate = someSelected && !allSelected;
                    }}
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAllParticipants}
                    className="h-4 w-4 accent-emerald-600"
                  />
                </th>
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
                  <tr
                    key={p.id}
                    className={`transition-colors hover:bg-neutral-50 ${
                      isSelected(p.id) ? "" : "opacity-50"
                    }`}
                  >
                    <td className="py-4 pl-5 pr-2">
                      <input
                        type="checkbox"
                        checked={isSelected(p.id)}
                        onChange={() => toggleParticipant(p.id)}
                        className="h-4 w-4 accent-emerald-600"
                      />
                    </td>
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
                          <span className="text-xs text-neutral-400">None</span>
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
  );
};
