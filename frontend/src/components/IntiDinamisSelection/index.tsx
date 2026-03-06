import { useState, useRef, useEffect, type FC } from "react";
import { cn } from "@/lib/tailwind-merge";
import type { IntiDinamisSelectionProps } from "./interface";

export const IntiDinamisSelection: FC<IntiDinamisSelectionProps> = ({
  options,
  value,
  onChange,
  placeholder = "— Pilih —",
  disabled = false,
  label,
  containerClassName,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div
      className={cn("relative flex flex-col gap-1", containerClassName)}
      ref={ref}
    >
      {label && <label className="text-sm text-neutral-400">{label}</label>}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
        className={cn(
          "flex w-full items-center justify-between rounded border px-2 py-1.5 text-sm transition-colors focus:outline-none",
          open
            ? "border-neutral-400 ring-1 ring-neutral-200"
            : "border-neutral-200",
          disabled
            ? "cursor-not-allowed bg-neutral-50 text-neutral-400"
            : "cursor-pointer bg-white hover:border-neutral-300",
          !value && "text-neutral-300",
          value && "text-neutral-800",
        )}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          className={cn(
            "ml-2 h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-150",
            open && "rotate-180",
          )}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && !disabled && (
        <div className="absolute left-0 right-0 top-[calc(100%+4px)] z-50 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
          {options.map((opt) => {
            const isSelected = opt === value;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors",
                  isSelected
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-700 hover:bg-neutral-50",
                )}
              >
                {/* checkmark placeholder to keep alignment */}
                <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                  {isSelected && (
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M2 7l4 4 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
