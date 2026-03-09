import { cn } from "@/lib/tailwind-merge";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { usePapiKostickContext } from "../../context/FormContext";

export const NavigationControls = () => {
  const {
    currentPage,
    totalPages,
    isFirstPage,
    isLastPage,
    isCompleted,
    goPrev,
    goNext,
    goToPage,
    handleSubmit,
  } = usePapiKostickContext();

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* Page number buttons */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <IntiDinamisButton
            key={i}
            onClick={() => goToPage(i)}
            variant="secondary"
            size="icon"
            className={cn(
              "rounded-lg transition-all duration-150",
              i === currentPage
                ? "bg-neutral-900 text-white"
                : "border-transparent bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
            )}
          >
            {i + 1}
          </IntiDinamisButton>
        ))}
      </div>

      {/* Prev / Next / Submit */}
      <div className="flex items-center justify-between">
        <IntiDinamisButton
          variant="secondary"
          disabled={isFirstPage}
          onClick={goPrev}
        >
          Sebelumnya
        </IntiDinamisButton>

        {isLastPage ? (
          <IntiDinamisButton
            variant="primary"
            disabled={!isCompleted}
            onClick={handleSubmit}
          >
            Selesai
          </IntiDinamisButton>
        ) : (
          <IntiDinamisButton variant="primary" onClick={goNext}>
            Selanjutnya
          </IntiDinamisButton>
        )}
      </div>
    </div>
  );
};
