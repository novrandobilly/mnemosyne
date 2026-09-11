import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC, ReactNode } from "react";

const INSTRUCTIONS: ReactNode[] = [
  "Pahami petunjuk pengerjaan pada setiap tes dengan saksama.",
  <>
    Kerjakan di lingkungan yang{" "}
    <strong className="font-semibold text-neutral-900">tenang & kondusif</strong>.
  </>,
  <>
    Gunakan koneksi internet yang{" "}
    <strong className="font-semibold text-neutral-900">stabil</strong> dan perangkat memadai.
  </>,
];

export const Instructions: FC = () => {
  return (
    <div className="flex flex-1 flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:max-w-[50%]">
      <IntiDinamisText
        size="12"
        className="uppercase tracking-[0.25em] text-neutral-500"
      >
        Petunjuk Pengerjaan
      </IntiDinamisText>
      <ul className="mt-4 space-y-3 text-sm text-neutral-600">
        {INSTRUCTIONS.map((instruction, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-neutral-500" />
            <IntiDinamisText size="14" className="leading-relaxed text-neutral-700">
              {instruction}
            </IntiDinamisText>
          </li>
        ))}
      </ul>
    </div>
  );
};
