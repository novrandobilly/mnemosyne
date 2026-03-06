import type { FC } from "react";
import type { PapiResults, PapiScoreKey } from "../../types";

interface RoleScoringGridProps {
  results: PapiResults;
}

const ROLE_FACTORS: PapiScoreKey[] = [
  "G",
  "L",
  "I",
  "T",
  "V",
  "S",
  "R",
  "D",
  "C",
  "E",
];

const RoleScoringGrid: FC<RoleScoringGridProps> = ({ results }) => (
  <div className="overflow-x-auto">
    <table className="border-collapse text-sm">
      <thead>
        <tr>
          <td className="h-7 w-8 border border-neutral-200 bg-neutral-50" />
          {ROLE_FACTORS.map((factor) => (
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
          {ROLE_FACTORS.map((factor) => (
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
        {ROLE_FACTORS.map((rowFactor, rowIdx) => (
          <tr key={rowFactor}>
            <td className="h-8 w-8 border border-neutral-200 bg-neutral-50 text-center text-xs font-bold text-neutral-700">
              {rowFactor}
            </td>
            {ROLE_FACTORS.map((colFactor, colIdx) => {
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

export default RoleScoringGrid;
