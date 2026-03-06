import type { FC } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";

const ParticipantEmployment: FC = () => (
  <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
    <IntiDinamisText
      size="12"
      className="uppercase tracking-[0.3em] text-neutral-500"
    >
      Employment
    </IntiDinamisText>
    <IntiDinamisText
      as="h2"
      size="20"
      weight="semibold"
      className="mt-3 text-neutral-900"
    >
      Company details
    </IntiDinamisText>
    <div className="mt-4 grid gap-3 text-sm">
      <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
        <span className="text-neutral-600">Company</span>
        <span className="font-semibold text-neutral-900">Mnemosyne Labs</span>
      </div>
      <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
        <span className="text-neutral-600">Department</span>
        <span className="font-semibold text-neutral-900">Analytics</span>
      </div>
    </div>
  </div>
);

export default ParticipantEmployment;
