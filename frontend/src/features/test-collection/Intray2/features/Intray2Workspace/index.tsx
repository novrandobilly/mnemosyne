import { useIntray2Context } from "../../context/Intray2Context";
import { IntrayWorksheetTable } from "@/components/IntrayWorksheetTable";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { MAX_KK_ROWS } from "../../hooks/useIntray2";

export function Intray2Workspace() {
  const { kkRows, updateKkRow, addKkRow, isSubmitted } = useIntray2Context();

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="border-b border-neutral-100 px-5 py-3">
          <IntiDinamisText size="12" className="text-neutral-400">
            Identifikasi semua permasalahan dari memo dan tentukan prioritas
            serta rencana tindakan untuk masing-masing.
          </IntiDinamisText>
        </div>
        <div
          className="overflow-x-auto overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 260px)" }}
        >
          <IntrayWorksheetTable
            rows={kkRows}
            onUpdate={updateKkRow}
            onAddRow={addKkRow}
            maxRows={MAX_KK_ROWS}
            disabled={isSubmitted}
          />
        </div>
      </div>
    </div>
  );
}
