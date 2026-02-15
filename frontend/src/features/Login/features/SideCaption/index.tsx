import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC } from "react";

const SideCaption: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <IntiDinamisText
        as="h1"
        className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl"
      >
        Welcome to
        <span className="block text-neutral-500">Inti Dinamis</span>
        <span className="block text-neutral-500">Assessment Platform</span>
      </IntiDinamisText>
      <IntiDinamisText className="max-w-xl text-base text-neutral-600">
        Access your test environment with a secure, single-login flow. Your
        progress and results remain private and protected.
      </IntiDinamisText>
      <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
        <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          <IntiDinamisText>Secure session</IntiDinamisText>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-neutral-400" />
          <IntiDinamisText>Private and protected</IntiDinamisText>
        </div>
      </div>
    </div>
  );
};

export default SideCaption;
