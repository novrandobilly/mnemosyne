import type { FC } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";

interface ParticipantBiodataProps {
  name: string | undefined;
  id: string | undefined;
}

const InfoCard: FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-2.5">
    <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
      {label}
    </div>
    <div className="mt-1 text-xs font-semibold text-neutral-900">{value}</div>
  </div>
);

const ParticipantBiodata: FC<ParticipantBiodataProps> = ({ name, id }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
    <div className="flex items-center justify-between gap-4">
      <div>
        <IntiDinamisText
          as="h1"
          size="20"
          weight="semibold"
          className="text-neutral-900"
        >
          {name ?? "Unknown Participant"}
        </IntiDinamisText>
        <IntiDinamisText size="14" className="mt-1 text-neutral-600">
          Candidate ID: {id ?? "—"} · Role Track: Analyst
        </IntiDinamisText>
      </div>
      <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-600">
        Active
      </span>
    </div>

    <div className="mt-3 grid gap-2 sm:grid-cols-2">
      <InfoCard label="Email" value="alea.thorne@company.com" />
      <InfoCard label="Phone" value="+1 (555) 203-1142" />
      <InfoCard label="Date of Birth" value="Oct 12, 1998" />
      <InfoCard label="Last Login" value="Feb 11, 2026 · 09:42" />
    </div>
  </div>
);

export default ParticipantBiodata;
