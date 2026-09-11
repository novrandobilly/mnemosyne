import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC } from "react";

const SideCaption: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Psikotes & Asesmen Online
      </div>
      <IntiDinamisText
        as="h1"
        className="text-3xl font-bold leading-tight text-neutral-900"
      >
        Selamat datang di
        <span className="block mt-1">Inti Dinamis - Assessment Portal</span>
      </IntiDinamisText>
    </div>
  );
};

export default SideCaption;
