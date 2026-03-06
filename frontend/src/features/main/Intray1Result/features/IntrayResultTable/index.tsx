import type { FC } from "react";
import type { WorksheetRow } from "@/components/IntrayWorksheetTable";

interface IntrayResultTableProps {
  rows: WorksheetRow[];
}

const IMPORTANCE_COLOR: Record<string, string> = {
  "Sangat Penting": "bg-red-50 text-red-700 border border-red-200",
  Penting: "bg-amber-50 text-amber-700 border border-amber-200",
  "Kurang Penting": "bg-neutral-100 text-neutral-500 border border-neutral-200",
};

const IntrayResultTable: FC<IntrayResultTableProps> = ({ rows }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr>
          <th className="w-8 border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-neutral-500">
            #
          </th>
          <th className="border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Topik Permasalahan
          </th>
          <th className="w-40 border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Tingkat Kepentingan
          </th>
          <th className="border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Tindakan / Solusi / Keputusan yang Diambil
          </th>
          <th className="w-24 border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500">
            No. Memo
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr
            key={row.id}
            className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}
          >
            <td className="border border-neutral-200 px-3 py-3 text-center text-xs font-medium text-neutral-400">
              {idx + 1}
            </td>
            <td className="border border-neutral-200 px-3 py-3 align-top text-sm text-neutral-800">
              {row.topikPermasalahan || (
                <span className="text-neutral-300 italic">—</span>
              )}
            </td>
            <td className="border border-neutral-200 px-3 py-3 align-top">
              {row.tingkatKepentingan ? (
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${IMPORTANCE_COLOR[row.tingkatKepentingan] ?? "bg-neutral-100 text-neutral-500"}`}
                >
                  {row.tingkatKepentingan}
                </span>
              ) : (
                <span className="text-neutral-300 italic text-xs">—</span>
              )}
            </td>
            <td className="border border-neutral-200 px-3 py-3 align-top text-sm leading-relaxed text-neutral-800">
              {row.tindakanSolusi || (
                <span className="text-neutral-300 italic">—</span>
              )}
            </td>
            <td className="border border-neutral-200 px-3 py-3 align-top text-sm font-medium text-neutral-600">
              {row.noMemo || <span className="text-neutral-300 italic">—</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default IntrayResultTable;
