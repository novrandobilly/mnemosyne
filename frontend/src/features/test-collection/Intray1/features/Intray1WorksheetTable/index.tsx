import {
  type WorksheetRow,
  type WorksheetField,
  MAX_KK1_ROWS,
} from "../../hooks/useIntray1";
import { cn } from "@/lib/tailwind-merge";
import { IntiDinamisSelection } from "@/components/IntiDinamisSelection";

const IMPORTANCE_OPTIONS = [
  "Sangat Penting",
  "Penting",
  "Kurang Penting",
] as const;

interface Props {
  rows: WorksheetRow[];
  onUpdate: (id: string, field: WorksheetField, value: string) => void;
  onAddRow?: () => void;
  disabled?: boolean;
}

const cellBase = "bg-white px-2 py-2";
const headCell =
  "bg-neutral-50 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500";
const inputBase =
  "w-full rounded border border-neutral-200 bg-white px-2 py-1.5 text-sm text-neutral-800 placeholder:text-neutral-300 focus:border-neutral-400 focus:outline-none disabled:bg-neutral-50 disabled:text-neutral-400";

export function Intray1WorksheetTable({
  rows,
  onUpdate,
  onAddRow,
  disabled,
}: Props) {
  return (
    <div className="flex flex-col">
      {/* Table */}
      <div className="min-w-205">
        {/* Header */}
        <div className="grid grid-cols-[36px_1fr_170px_1fr_90px] gap-px bg-neutral-200">
          <div className={cn(headCell, "text-center")}>#</div>
          <div className={headCell}>Topik Permasalahan</div>
          <div className={headCell}>Tingkat Kepentingan</div>
          <div className={headCell}>Tindakan / Solusi</div>
          <div className={headCell}>No. Memo</div>
        </div>

        {/* Rows */}
        {rows.map((row, idx) => (
          <div
            key={row.id}
            className="grid grid-cols-[36px_1fr_170px_1fr_90px] gap-px bg-neutral-200"
          >
            {/* # */}
            <div
              className={cn(cellBase, "flex items-start justify-center pt-3")}
            >
              <span className="text-xs font-medium text-neutral-400">
                {idx + 1}
              </span>
            </div>

            {/* Topik */}
            <div className={cellBase}>
              <textarea
                value={row.topikPermasalahan}
                onChange={(e) =>
                  onUpdate(row.id, "topikPermasalahan", e.target.value)
                }
                placeholder="Ringkasan isu utama..."
                rows={3}
                disabled={disabled}
                className={cn(inputBase, "resize-y")}
              />
            </div>

            {/* Tingkat Kepentingan */}
            <div className={cellBase}>
              <IntiDinamisSelection
                options={IMPORTANCE_OPTIONS}
                value={row.tingkatKepentingan}
                onChange={(val) => onUpdate(row.id, "tingkatKepentingan", val)}
                disabled={disabled}
              />
            </div>

            {/* Tindakan */}
            <div className={cellBase}>
              <textarea
                value={row.tindakanSolusi}
                onChange={(e) =>
                  onUpdate(row.id, "tindakanSolusi", e.target.value)
                }
                placeholder="Langkah konkret yang akan diambil..."
                rows={3}
                disabled={disabled}
                className={cn(inputBase, "resize-y")}
              />
            </div>

            {/* No. Memo */}
            <div className={cellBase}>
              <textarea
                value={row.noMemo}
                onChange={(e) => onUpdate(row.id, "noMemo", e.target.value)}
                placeholder="M-..."
                rows={2}
                disabled={disabled}
                className={cn(inputBase, "resize-y")}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add row button */}
      {onAddRow && (
        <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-3">
          <button
            onClick={onAddRow}
            disabled={disabled || rows.length >= MAX_KK1_ROWS}
            className={cn(
              "rounded-lg border px-4 py-1.5 text-xs font-medium transition-colors",
              rows.length >= MAX_KK1_ROWS || disabled
                ? "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-300"
                : "cursor-pointer border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50",
            )}
          >
            + Tambah Baris{" "}
            <span className="text-neutral-400">
              ({rows.length}/{MAX_KK1_ROWS})
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
