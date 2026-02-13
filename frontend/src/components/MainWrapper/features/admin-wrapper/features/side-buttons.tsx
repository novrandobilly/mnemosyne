import type { FC } from "react";

const SideButtons: FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600 shadow-sm">
        Feb 11, 2026
      </div>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm transition hover:border-neutral-400 hover:bg-neutral-50"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill="currentColor"
        >
          <path d="M10 3a7 7 0 0 1 6.93 6H19l-3 3-3-3h2.07A5 5 0 1 0 15 13h2a7 7 0 1 1-7-10z" />
        </svg>
        Refresh Page
      </button>
    </div>
  );
};

export default SideButtons;
