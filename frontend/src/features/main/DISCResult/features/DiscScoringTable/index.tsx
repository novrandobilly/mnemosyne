import type { FC } from "react";
import type { DiscCategory, DiscScores } from "../../types";

interface DiscScoringTableProps {
  scores: DiscScores;
}

const CATEGORIES: DiscCategory[] = ["D", "I", "S", "C", "Star"];
const ROWS = ["MOST", "LEAST", "CHANGE"] as const;

const rowTotal = (row: Record<DiscCategory, number>) =>
  CATEGORIES.reduce((sum, cat) => sum + row?.[cat], 0);

const DiscScoringTable: FC<DiscScoringTableProps> = ({ scores }) => (
  <div className="overflow-x-auto">
    <table className="border-collapse text-sm w-full max-w-lg">
      <thead>
        <tr>
          <th className="border border-neutral-200 bg-blue-50 px-4 py-2 text-left text-xs font-bold uppercase tracking-wider text-blue-700">
            Metric
          </th>
          {CATEGORIES.map((cat) => (
            <th
              key={cat}
              className="border border-neutral-200 bg-blue-50 px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-blue-700"
            >
              {cat}
            </th>
          ))}
          <th className="border border-neutral-200 bg-blue-50 px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-blue-700">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row, idx) => {
          const data = scores[row];
          const total = rowTotal(data);
          const isEven = idx % 2 === 0;

          return (
            <tr key={row} className={isEven ? "bg-white" : "bg-neutral-50"}>
              <td className="border border-neutral-200 px-4 py-2 text-xs font-bold text-neutral-700">
                {row}
              </td>
              {CATEGORIES.map((cat) => (
                <td
                  key={cat}
                  className="border border-neutral-200 px-4 py-2 text-center text-sm font-semibold text-neutral-800"
                >
                  {data?.[cat]}
                </td>
              ))}
              <td className="border border-neutral-200 px-4 py-2 text-center">
                <span className="block text-sm font-bold text-neutral-900">
                  {total}
                </span>
                {row !== "CHANGE" && (
                  <span className="block text-xxs font-medium text-neutral-400">
                    Must equal 24
                  </span>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default DiscScoringTable;
