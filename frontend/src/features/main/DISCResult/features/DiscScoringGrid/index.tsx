import type { FC } from "react";
import type { DiscCategory, DiscScores } from "../../types";

interface DiscScoringGridProps {
  scores: DiscScores;
}

const CATEGORIES: DiscCategory[] = ["D", "I", "S", "C", "Star"];
const METRICS = ["MOST", "LEAST", "CHANGE"] as const;

const DiscScoringGrid: FC<DiscScoringGridProps> = ({ scores }) => (
  <div className="overflow-x-auto">
    <table className="border-collapse text-sm w-full max-w-lg">
      <thead>
        <tr>
          <th className="border border-neutral-200 bg-blue-50 px-4 py-2 text-left text-xs font-bold uppercase tracking-wider text-blue-700">
            Category
          </th>
          {METRICS.map((metric) => (
            <th
              key={metric}
              className="border border-neutral-200 bg-blue-50 px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-blue-700"
            >
              {metric}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {CATEGORIES.map((cat, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <tr key={cat} className={isEven ? "bg-white" : "bg-neutral-50"}>
              <td className="border border-neutral-200 px-4 py-2 text-xs font-bold text-neutral-700">
                {cat}
              </td>
              {METRICS.map((metric) => (
                <td
                  key={metric}
                  className="border border-neutral-200 px-4 py-2 text-center text-sm font-semibold text-neutral-800"
                >
                  {scores[metric][cat]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default DiscScoringGrid;
