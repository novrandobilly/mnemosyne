import type { ButtonHTMLAttributes, FC } from "react";

interface ReportCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isCompleted: boolean;
  completedAt?: string;
}

const statusClass = ({ isCompleted }: { isCompleted: boolean }) => {
  if (isCompleted) return "bg-emerald-100 text-emerald-700";
  return "bg-neutral-100 text-neutral-500";
};

const ReportCard: FC<ReportCardProps> = ({
  label,
  isCompleted,
  completedAt,
  ...props
}) => {
  const formattedDate = completedAt
    ? new Date(completedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <button
      disabled={!isCompleted}
      type="button"
      className={`group flex w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white px-5 py-3.5 shadow-sm transition ${
        isCompleted
          ? "cursor-pointer hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow"
          : "opacity-40"
      }`}
      {...props}
    >
      <div className="text-sm font-semibold text-neutral-900">{label}</div>
      <div className="flex items-center gap-3">
        {formattedDate && (
          <span className="text-xs text-neutral-400">{formattedDate}</span>
        )}
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass({ isCompleted })}`}
        >
          {isCompleted ? "Completed" : "Not Started"}
        </span>
        <span className="text-xs font-semibold text-neutral-500 group-hover:text-neutral-800">
          →
        </span>
      </div>
    </button>
  );
};

export default ReportCard;
