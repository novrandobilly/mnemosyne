import { useEffect, useRef } from "react";
import { useDa5Context } from "../../context/Da5Context";
import { DA5_REFERENCE_IMAGE_URL } from "@/data/da5";

export function Da5RulesDrawer() {
  const { isRulesOpen, toggleRules } = useDa5Context();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isRulesOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") toggleRules();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isRulesOpen, toggleRules]);

  return (
    <>
      {/* Backdrop */}
      {isRulesOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={toggleRules}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-neutral-200 bg-white shadow-2xl transition-transform duration-300 ${
          isRulesOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <span className="text-sm font-semibold text-neutral-700">
            Aturan Referensi
          </span>
          <button
            onClick={toggleRules}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
          >
            ✕
          </button>
        </div>

        {/* Drawer body */}
        <div className="flex-1 overflow-y-auto p-5">
          <img
            src={DA5_REFERENCE_IMAGE_URL}
            alt="Aturan referensi DA5"
            className="w-full rounded-xl border border-neutral-200"
          />
        </div>
      </div>
    </>
  );
}
