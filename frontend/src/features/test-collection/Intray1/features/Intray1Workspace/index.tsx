import { cn } from "@/lib/tailwind-merge";
import { useIntray1Context } from "../../context/Intray1Context";
import { Intray1WorksheetTable } from "../Intray1WorksheetTable";
import { IntiDinamisText } from "@/components/IntiDinamisText";

const TABS = [
  {
    id: "kk1" as const,
    label: "Kertas Kerja 1",
    description: "Analisis seluruh permasalahan",
  },
  {
    id: "kk2" as const,
    label: "Kertas Kerja 2",
    description: "3 prioritas utama",
  },
];

export function Intray1Workspace() {
  const {
    activeTab,
    setActiveTab,
    kk1Rows,
    kk2Rows,
    updateKk1Row,
    updateKk2Row,
    addKk1Row,
    isSubmitted,
  } = useIntray1Context();

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3">
      {/* Tab switcher */}
      <div className="flex gap-1 rounded-xl border border-neutral-200 bg-neutral-50 p-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-1 cursor-pointer flex-col items-start rounded-lg px-4 py-2.5 transition-colors",
              activeTab === tab.id ? "bg-white shadow-sm" : "hover:bg-white/60",
            )}
          >
            <span
              className={cn(
                "text-sm font-semibold",
                activeTab === tab.id ? "text-neutral-800" : "text-neutral-500",
              )}
            >
              {tab.label}
            </span>
            <span className="text-xs text-neutral-400">{tab.description}</span>
          </button>
        ))}
      </div>

      {/* Tab content wrapper */}
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        {/* KK1 */}
        <div className={activeTab !== "kk1" ? "hidden" : undefined}>
          <div className="border-b border-neutral-100 px-5 py-3">
            <IntiDinamisText size="12" className="text-neutral-400">
              Identifikasi semua permasalahan dari memo dan tentukan prioritas
              serta rencana tindakan untuk masing-masing.
            </IntiDinamisText>
          </div>
          <div
            className="overflow-x-auto overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 310px)" }}
          >
            <Intray1WorksheetTable
              rows={kk1Rows}
              onUpdate={updateKk1Row}
              onAddRow={addKk1Row}
              disabled={isSubmitted}
            />
          </div>
        </div>

        {/* KK2 */}
        <div className={activeTab !== "kk2" ? "hidden" : undefined}>
          <div className="border-b border-neutral-100 px-5 py-3">
            <IntiDinamisText size="12" className="text-neutral-400">
              Pilih 3 permasalahan paling kritis dan tulis rencana penanganan
              yang komprehensif beserta pertimbangan strategisnya.
            </IntiDinamisText>
          </div>
          <div
            className="overflow-x-auto overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 310px)" }}
          >
            <Intray1WorksheetTable
              rows={kk2Rows}
              onUpdate={updateKk2Row}
              disabled={isSubmitted}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
