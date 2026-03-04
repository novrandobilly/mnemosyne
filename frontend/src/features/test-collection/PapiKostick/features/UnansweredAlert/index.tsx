import { getPageForQuestion } from "../../hooks/usePapiKostick";

interface UnansweredAlertProps {
  unansweredIds: number[];
  onJumpToPage: (page: number) => void;
}

export const UnansweredAlert = ({
  unansweredIds,
  onJumpToPage,
}: UnansweredAlertProps) => {
  if (unansweredIds.length === 0) return null;

  // Group unanswered IDs by page number
  const byPage = unansweredIds.reduce<Record<number, number[]>>((acc, id) => {
    const page = getPageForQuestion(id);
    if (!acc[page]) acc[page] = [];
    acc[page].push(id);
    return acc;
  }, {});

  return (
    <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-lg">⚠️</span>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-amber-900">
            {unansweredIds.length} pertanyaan belum dijawab
          </p>

          <div className="flex flex-col gap-2">
            {Object.entries(byPage)
              .sort(([a], [b]) => Number(a) - Number(b))
              .map(([page, ids]) => (
                <div key={page} className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => onJumpToPage(Number(page))}
                    className="rounded-lg bg-amber-200 px-3 py-1 text-xs font-semibold text-amber-900 transition hover:bg-amber-300 cursor-pointer"
                  >
                    Halaman {Number(page) + 1}
                  </button>
                  <span className="text-xs text-amber-800">
                    No. {ids.join(", ")}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
