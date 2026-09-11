import type { FC } from "react";

interface FlagBadgeProps {
  label: string;
  isDone: boolean;
}

const FlagBadge: FC<FlagBadgeProps> = ({ label, isDone }) => (
  <div
    title={`${label}: ${isDone ? "Done" : "Not done"}`}
    className={`inline-flex items-center justify-center px-2 py-0.5 border rounded-md text-[11px] font-semibold transition-colors ${
      isDone
        ? "bg-emerald-50 text-emerald-700 border-emerald-300"
        : "bg-neutral-50 text-neutral-400 border-neutral-200"
    }`}
  >
    {isDone && <span className="mr-1 font-bold text-emerald-600">✓</span>}
    {label}
  </div>
);

export default FlagBadge;
