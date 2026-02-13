import type { FC } from "react";
import { IntiDinamisText } from "../../../IntiDinamisText";

const PageTitle: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-600 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-neutral-500" />
      <IntiDinamisText size="12">{text}</IntiDinamisText>
    </div>
  );
};

export default PageTitle;
