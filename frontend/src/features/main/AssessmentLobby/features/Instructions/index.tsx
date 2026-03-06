import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC } from "react";

const INSTRUCTIONS = [
  "Use a quiet environment and stable connection.",
  "You can pause between tests, not during a test.",
  "Each section has unique scoring criteria.",
  "Results will appear in your dashboard.",
];

export const Instructions: FC = () => {
  return (
    <div className="flex flex-col flex-1 max-w-[50%] rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <IntiDinamisText
        size="12"
        className="uppercase tracking-[0.25em] text-neutral-500"
      >
        Instructions
      </IntiDinamisText>
      <ul className="mt-4 space-y-3 text-sm text-neutral-600">
        {INSTRUCTIONS.map((instruction, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className=" h-2 w-2 rounded-full bg-neutral-500" />
            <IntiDinamisText>{instruction}</IntiDinamisText>
          </li>
        ))}
      </ul>
    </div>
  );
};
