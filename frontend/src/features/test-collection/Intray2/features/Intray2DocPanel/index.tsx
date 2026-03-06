import { intray2Docs, type Intray2DocType } from "@/data/intray2";
import { useIntray2Context } from "../../context/Intray2Context";
import { cn } from "@/lib/tailwind-merge";

const TYPE_BADGE: Record<Intray2DocType, string> = {
  cover: "bg-blue-50 text-blue-600 border-blue-200",
  instructions: "bg-amber-50 text-amber-600 border-amber-200",
  memo: "bg-neutral-100 text-neutral-500 border-neutral-200",
};

const TYPE_LABEL: Record<Intray2DocType, string> = {
  cover: "Surat",
  instructions: "Instruksi",
  memo: "Memo",
};

export function Intray2DocPanel() {
  const { activeDocId, setActiveDocId } = useIntray2Context();

  const activeDoc = intray2Docs.find((d) => d.id === activeDocId);

  return (
    <div
      className="sticky top-21 flex w-90 shrink-0 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
      style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      <div className="border-b border-neutral-200 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
          Referensi Dokumen
        </p>
      </div>

      <div
        className="overflow-y-auto border-b border-neutral-200"
        style={{ maxHeight: "220px" }}
      >
        {intray2Docs.map((doc) => (
          <button
            key={doc.id}
            onClick={() => setActiveDocId(doc.id)}
            className={cn(
              "flex w-full cursor-pointer items-center gap-2.5 border-b border-neutral-100 px-4 py-2.5 text-left transition-colors last:border-none hover:bg-neutral-50",
              activeDocId === doc.id && "bg-neutral-50",
            )}
          >
            <span
              className={cn(
                "shrink-0 rounded border px-1.5 py-0.5 text-xxs font-semibold",
                TYPE_BADGE[doc.type],
              )}
            >
              {TYPE_LABEL[doc.type]}
            </span>
            <span
              className={cn(
                "text-xs",
                activeDocId === doc.id
                  ? "font-semibold text-neutral-800"
                  : "text-neutral-600",
              )}
            >
              {doc.title}
            </span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {activeDoc ? (
          <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-neutral-700">
            {activeDoc.content}
          </pre>
        ) : (
          <p className="text-xs text-neutral-400">
            Pilih dokumen di atas untuk membacanya.
          </p>
        )}
      </div>
    </div>
  );
}
