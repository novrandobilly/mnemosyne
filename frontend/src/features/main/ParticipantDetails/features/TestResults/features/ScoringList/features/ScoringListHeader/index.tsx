import type { FC } from "react";
import { useScoringList } from "../../context/ScoringListContext";

const ScoringListHeader: FC = () => {
  const { showAll, setShowAll } = useScoringList();

  return (
    <div className="flex items-center justify-between">
      <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
        Scoring List
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={showAll}
        onClick={() => setShowAll(!showAll)}
        className="flex cursor-pointer items-center gap-2"
      >
        <span
          className={`text-xs font-semibold transition-colors duration-200 ${
            showAll ? "text-neutral-700" : "text-neutral-400"
          }`}
        >
          Show All
        </span>
        <div
          className={`relative h-5 w-9 rounded-full transition-colors duration-300 ${
            showAll ? "bg-neutral-700" : "bg-neutral-300"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${
              showAll ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </div>
      </button>
    </div>
  );
};

export default ScoringListHeader;
