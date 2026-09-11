import type { FC } from "react";
import { useNavigateParticipant } from "../../hooks/useNavigateParticipant";

export const ParticipantNavigation: FC = () => {
  const { currentIndex, total, hasPrev, hasNext, goToPrev, goToNext } =
    useNavigateParticipant();

  if (total <= 1) return null;

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={goToPrev}
        disabled={!hasPrev}
        className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 shadow-xs transition hover:bg-neutral-50 hover:border-neutral-300 disabled:cursor-not-allowed disabled:opacity-35"
        title="Peserta Sebelumnya"
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
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span>Previous</span>
      </button>

      <span className="text-xs font-medium text-neutral-500 select-none">
        {currentIndex} / {total}
      </span>

      <button
        type="button"
        onClick={goToNext}
        disabled={!hasNext}
        className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-35"
        title="Peserta Selanjutnya"
      >
        <span>Next</span>
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
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default ParticipantNavigation;
