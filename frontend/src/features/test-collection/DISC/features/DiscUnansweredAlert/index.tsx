import { getPageForDiscQuestion } from "../../hooks/useDisc";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";

interface DiscUnansweredAlertProps {
  incompleteIds: number[];
  onJumpToPage: (page: number) => void;
}

export const DiscUnansweredAlert = ({
  incompleteIds,
  onJumpToPage,
}: DiscUnansweredAlertProps) => {
  if (incompleteIds.length === 0) return null;

  const byPage = incompleteIds.reduce<Record<number, number[]>>((acc, id) => {
    const page = getPageForDiscQuestion(id);
    if (!acc[page]) acc[page] = [];
    acc[page].push(id);
    return acc;
  }, {});

  return (
    <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-lg">⚠️</span>
        <div className="flex flex-col gap-3">
          <IntiDinamisText
            size="14"
            weight="semibold"
            className="text-amber-900"
          >
            {incompleteIds.length} pertanyaan belum lengkap
          </IntiDinamisText>
          <IntiDinamisText size="12" className="text-amber-700">
            Setiap pertanyaan harus dipilih satu <strong>Paling</strong> dan
            satu <strong>Kurang</strong>.
          </IntiDinamisText>
          <div className="flex flex-col gap-2">
            {Object.entries(byPage)
              .sort(([a], [b]) => Number(a) - Number(b))
              .map(([page, ids]) => (
                <div key={page} className="flex flex-wrap items-center gap-2">
                  <IntiDinamisButton
                    variant="secondary"
                    onClick={() => onJumpToPage(Number(page))}
                    className="min-w-0 rounded-lg border-amber-300 bg-amber-200 px-3 py-1 text-xs text-amber-900 hover:bg-amber-300"
                  >
                    Halaman {Number(page) + 1}
                  </IntiDinamisButton>
                  <IntiDinamisText
                    as="span"
                    size="12"
                    className="text-amber-800"
                  >
                    No. {ids.join(", ")}
                  </IntiDinamisText>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
