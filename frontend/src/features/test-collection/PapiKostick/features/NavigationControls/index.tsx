import { cn } from "@/lib/tailwind-merge";
import IntiDinamisButton from "@/components/IntiDinamisButton";

interface NavigationControlsProps {
  currentPage: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isCompleted: boolean;
  onPrev: () => void;
  onNext: () => void;
  onGoToPage: (page: number) => void;
  onSubmit: () => void;
}

export const NavigationControls = ({
  currentPage,
  totalPages,
  isFirstPage,
  isLastPage,
  isCompleted,
  onPrev,
  onNext,
  onGoToPage,
  onSubmit,
}: NavigationControlsProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* Page number buttons */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onGoToPage(i)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer sm:h-9 sm:w-9 sm:text-sm",
              i === currentPage
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Prev / Next / Submit */}
      <div className="flex items-center justify-between">
        <IntiDinamisButton
          variant="secondary"
          disabled={isFirstPage}
          onClick={onPrev}
        >
          Sebelumnya
        </IntiDinamisButton>

        {isLastPage ? (
          <IntiDinamisButton
            variant="primary"
            disabled={!isCompleted}
            onClick={onSubmit}
          >
            Selesai
          </IntiDinamisButton>
        ) : (
          <IntiDinamisButton variant="primary" onClick={onNext}>
            Selanjutnya
          </IntiDinamisButton>
        )}
      </div>
    </div>
  );
};
