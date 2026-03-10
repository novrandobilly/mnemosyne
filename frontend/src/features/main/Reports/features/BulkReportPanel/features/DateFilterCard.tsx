import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { TextInput } from "@/components/TextInput";
import { REPORT_MODULES } from "../../../types";
import { useBulkReport } from "../context/BulkReportContext";

export const DateFilterCard = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    singleDay,
    toggleSingleDay,
    submittedRange,
    isFetching,
    handleFetch,
    selectedModules,
    toggleModule,
  } = useBulkReport();
  return (
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
            onChange={toggleSingleDay}
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
  );
};
