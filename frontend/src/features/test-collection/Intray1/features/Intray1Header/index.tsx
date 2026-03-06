import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import { useIntray1Context } from "../../context/Intray1Context";

export function Intray1Header() {
  const {
    kk1Rows,
    kk2Rows,
    isDocPanelOpen,
    toggleDocPanel,
    isSubmitted,
    handleSubmit,
  } = useIntray1Context();

  const kk1Filled = kk1Rows.filter((r) => r.topikPermasalahan.trim()).length;
  const kk2Filled = kk2Rows.filter((r) => r.topikPermasalahan.trim()).length;

  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white/90 px-6 py-4 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col gap-0.5">
        <IntiDinamisText
          size="12"
          className="uppercase tracking-[0.2em] text-neutral-400"
        >
          In-Tray Exercise
        </IntiDinamisText>
        <IntiDinamisText
          size="16"
          weight="semibold"
          className="text-neutral-800"
        >
          Intray-1 — Studi Kasus
        </IntiDinamisText>
      </div>

      <div className="flex items-center gap-2 text-xs text-neutral-500">
        <span className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1">
          KK1: {kk1Filled}/{kk1Rows.length} baris diisi
        </span>
        <span className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1">
          KK2: {kk2Filled}/3 baris diisi
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleDocPanel}
          className={cn(
            "cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
            isDocPanelOpen
              ? "border-neutral-900 bg-neutral-900 text-white"
              : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50",
          )}
        >
          {isDocPanelOpen ? "Tutup Referensi" : "Buka Referensi"}
        </button>

        <button
          onClick={handleSubmit}
          disabled={isSubmitted}
          className={cn(
            "cursor-pointer rounded-lg border px-5 py-2 text-sm font-semibold transition-colors",
            isSubmitted
              ? "cursor-default border-emerald-300 bg-emerald-50 text-emerald-700"
              : "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800",
          )}
        >
          {isSubmitted ? "✓ Sudah Disubmit" : "Submit Tes"}
        </button>
      </div>
    </div>
  );
}
