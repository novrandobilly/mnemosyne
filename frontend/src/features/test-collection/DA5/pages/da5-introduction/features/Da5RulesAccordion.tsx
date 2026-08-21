import { useState } from "react";
import { DA5_REFERENCE_IMAGE_URL } from "@/data/da5/index";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";

export function Da5RulesAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden transition-all duration-200">
      {/* Collapsible Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-neutral-50 cursor-pointer transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 text-neutral-500 text-xs font-bold">
            ℹ
          </span>
          <IntiDinamisText size="14" weight="semibold" className="text-neutral-800">
            Panduan & Aturan Referensi DA5
          </IntiDinamisText>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-400 font-medium">
            {isOpen ? "Tutup Panduan" : "Buka Panduan"}
          </span>
          <span
            className={cn(
              "text-xs text-neutral-400 transition-transform duration-200",
              isOpen ? "rotate-180" : "rotate-0",
            )}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Expandable Image Body */}
      {isOpen && (
        <div className="border-t border-neutral-100 p-6 bg-neutral-50/50 flex justify-center">
          <img
            src={DA5_REFERENCE_IMAGE_URL}
            alt="Aturan referensi DA5"
            className="w-full max-w-2xl h-auto rounded-xl border border-neutral-200 shadow-sm block"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </div>
  );
}
