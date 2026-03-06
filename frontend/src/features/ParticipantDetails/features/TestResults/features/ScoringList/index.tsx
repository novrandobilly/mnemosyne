import type { FC } from "react";
import { DUMMY_SCORE_ITEMS } from "../../../../constants/scoreItems";

const statusClass = (status: string) => {
  if (status === "Completed") return "bg-emerald-100 text-emerald-700";
  if (status === "In Progress") return "bg-amber-100 text-amber-700";
  return "bg-neutral-100 text-neutral-500";
};

const ScoringList: FC = () => {
  const scoredValues = DUMMY_SCORE_ITEMS.map((item) =>
    Number(item.score),
  ).filter((v) => !Number.isNaN(v));
  const averageScore = scoredValues.length
    ? (
        scoredValues.reduce((sum, v) => sum + v, 0) / scoredValues.length
      ).toFixed(1)
    : "-";

  return (
    <div className="min-w-[50%] max-w-fit rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
        Scoring List
      </div>
      <div className="mt-3 space-y-1.5 text-sm">
        {DUMMY_SCORE_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-2.5"
          >
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
        ))}
        <div className="flex items-center justify-between gap-6 rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-2.5">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
            Average
          </div>
          <div className="text-sm font-semibold text-neutral-900">
            {averageScore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoringList;
