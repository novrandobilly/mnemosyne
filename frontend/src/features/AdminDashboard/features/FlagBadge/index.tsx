import type { FC } from "react";

interface FlagBadgeProps {
  label: string;
  isDone: boolean;
}

const FlagBadge: FC<FlagBadgeProps> = ({ label, isDone }) => (
  <div
    title={`${label}: ${isDone ? "Done" : "Not done"}`}
    className={`flex items-center justify-center px-2 border rounded-md text-xxs font-semibold ${
      isDone
        ? "bg-green-100 text-green-700 border-green-300"
        : "bg-neutral-100 text-neutral-400 border-neutral-300"
    }`}
  >
    {label}
  </div>
);

export default FlagBadge;
