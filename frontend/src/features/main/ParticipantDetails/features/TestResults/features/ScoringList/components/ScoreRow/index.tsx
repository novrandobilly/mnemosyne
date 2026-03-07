import type { ScoreItem } from "@/features/main/ParticipantDetails/types";
import type { FC } from "react";

interface ScoreRowProps {
  item: ScoreItem;
}

const statusClass = (status: ScoreItem["status"]) => {
  if (status === "Completed") return "bg-emerald-100 text-emerald-700";
  return "bg-neutral-100 text-neutral-500";
};

const ScoreRow: FC<ScoreRowProps> = ({ item }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-2.5">
      <div className="font-semibold text-neutral-900">{item.label}</div>
      <div className="flex items-center gap-3">
        <span className="w-5 text-right text-sm font-semibold text-neutral-900">
          {item.score}
        </span>
        <span
          className={`w-24 rounded-full px-2.5 py-1 text-center text-xs font-semibold ${statusClass(item.status)}`}
        >
          {item.status}
        </span>
      </div>
    </div>
  );
};

export default ScoreRow;
