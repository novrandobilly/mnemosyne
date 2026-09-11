import type { FC } from "react";
import { useTGetTestBank } from "@/api/test/useTGetTestBank";
import { useToggleAllTests } from "@/features/main/AssessmentPanel/hooks/useToggleAllTests";

export const TestCount: FC = () => {
  const { data: totalTests } = useTGetTestBank();
  const { mutate: toggleAllTests, isPending: isTogglingAll } = useToggleAllTests();

  const total = totalTests?.length || 0;
  const enabledCount = totalTests?.filter((t) => t.is_active)?.length || 0;
  const disabledCount = totalTests?.filter((t) => !t.is_active)?.length || 0;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-3 shadow-sm">
      {/* Left: Title & Live Count Badges */}
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-base font-bold tracking-tight text-neutral-900 sm:text-lg">
          Panel Akses SubTest
        </h1>

        <span className="hidden text-neutral-200 sm:inline">|</span>

        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 font-semibold text-neutral-600">
            {total} Total
          </span>
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-semibold text-emerald-700">
            {enabledCount} Open
          </span>
          <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 font-semibold text-rose-700">
            {disabledCount} Closed
          </span>
        </div>
      </div>

      {/* Right: Bulk Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => toggleAllTests(true)}
          disabled={isTogglingAll || enabledCount === total}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Enable All</span>
        </button>

        <button
          type="button"
          onClick={() => toggleAllTests(false)}
          disabled={isTogglingAll || disabledCount === total}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-rose-200 bg-white px-3 py-1.5 text-xs font-semibold text-rose-700 shadow-xs transition hover:border-rose-300 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <span>Disable All</span>
        </button>
      </div>
    </div>
  );
};

export default TestCount;
