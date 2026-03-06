import type { FC } from "react";
import type { PapiResults, PapiScoreKey } from "../../types";

interface NeedScoringGridProps {
  results: PapiResults;
}

const NEED_FACTORS: PapiScoreKey[] = [
  "N",
  "A",
  "P",
  "X",
  "B",
  "O",
  "Z",
  "K",
  "F",
  "W",
];

const NeedScoringGrid: FC<NeedScoringGridProps> = ({ results }) => (
  <div className="overflow-x-auto">
    <table className="border-collapse text-sm">
      <thead>
        <tr>
          <td className="h-7 w-8 border border-neutral-200 bg-neutral-50" />
          {NEED_FACTORS.map((factor) => (
            <td
              key={factor}
              className="h-7 w-8 border border-neutral-200 bg-green-50 text-center text-xs font-semibold text-green-700"
            >
              {results[factor]}
            </td>
          ))}
        </tr>
        <tr>
          <th className="h-8 w-8 border border-neutral-200 bg-neutral-50" />
          {NEED_FACTORS.map((factor) => (
            <th
              key={factor}
              className="h-8 w-8 border border-neutral-200 bg-neutral-50 text-center text-xs font-bold text-neutral-700"
            >
              {factor}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {NEED_FACTORS.map((rowFactor, rowIdx) => (
          <tr key={rowFactor}>
            <td className="h-8 w-8 border border-neutral-200 bg-neutral-50 text-center text-xs font-bold text-neutral-700">
              {rowFactor}
            </td>
            {NEED_FACTORS.map((colFactor, colIdx) => {
              if (colIdx < rowIdx) {
                return (
                  <td
                    key={colFactor}
                    className="h-8 w-8 border border-neutral-100 bg-neutral-50"
                  />
                );
              }
              const dominant =
                results[colFactor] >= results[rowFactor]
                  ? colFactor
                  : rowFactor;
              return (
                <td
                  key={colFactor}
                  className="h-8 w-8 border border-neutral-200 bg-white text-center text-xs font-semibold text-neutral-800"
                >
                  {dominant}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default NeedScoringGrid;
