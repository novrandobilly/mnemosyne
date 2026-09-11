import type { FC } from "react";
import { usePaginationContext } from "./hooks/usePaginationContext";

export interface PaginationProps {
  className?: string;
}

export const Pagination: FC<PaginationProps> = ({ className = "" }) => {
  const {
    pageSize,
    pageSizeOptions,
    setPageSize,
    totalItems,
    totalPages,
    safeCurrentPage,
    startIndex,
    endIndex,
    itemLabel,
    firstPage,
    prevPage,
    nextPage,
    lastPage,
    canPrevPage,
    canNextPage,
  } = usePaginationContext();

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 bg-white px-5 py-3 text-xs text-neutral-600 ${className}`}
    >
      {/* Left: Page Size Selector & Count Info */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-neutral-500">Show:</span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="cursor-pointer rounded-lg border border-neutral-200 bg-white px-2 py-1 text-xs font-semibold text-neutral-700 transition hover:border-neutral-300 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            {pageSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="text-neutral-500">per page</span>
        </div>

        <span className="hidden text-neutral-300 sm:inline">|</span>

        <div>
          Showing{" "}
          <span className="font-semibold text-neutral-900">
            {totalItems === 0 ? 0 : startIndex + 1}–{endIndex}
          </span>{" "}
          of <span className="font-semibold text-neutral-900">{totalItems}</span>{" "}
          {itemLabel}
        </div>
      </div>

      {/* Right: First, Prev, Page Indicator, Next, Last */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={firstPage}
          disabled={!canPrevPage}
          className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
          title="First Page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="11 17 6 12 11 7" />
            <polyline points="18 17 13 12 18 7" />
          </svg>
          <span>First</span>
        </button>

        <button
          type="button"
          onClick={prevPage}
          disabled={!canPrevPage}
          className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
          title="Previous Page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Prev</span>
        </button>

        <span className="px-2 font-medium text-neutral-600">
          Page{" "}
          <span className="font-bold text-neutral-900">{safeCurrentPage}</span>{" "}
          of <span className="font-bold text-neutral-900">{totalPages}</span>
        </span>

        <button
          type="button"
          onClick={nextPage}
          disabled={!canNextPage}
          className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
          title="Next Page"
        >
          <span>Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={lastPage}
          disabled={!canNextPage}
          className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
          title="Last Page"
        >
          <span>Last</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
