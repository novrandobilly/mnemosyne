import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC } from "react";
import { useGetParticipantDetails } from "./hooks/useGetParticipantDetails";
import { formatDate } from "@/utils/tools";

const InfoCard: FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-2.5">
    <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
      {label}
    </div>
    <div className="mt-1 text-xs font-semibold text-neutral-900">{value}</div>
  </div>
);

const ParticipantBiodata: FC = () => {
  const { data: participantDetails } = useGetParticipantDetails();
  const { first_name, last_name, email, phone_number, company, created } =
    participantDetails || {};
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <IntiDinamisText
            as="h1"
            size="20"
            weight="semibold"
            className="text-neutral-900"
          >
            {first_name && last_name
              ? `${first_name} ${last_name}`
              : "Unknown Participant"}
          </IntiDinamisText>
          <IntiDinamisText size="14" className="mt-1 text-neutral-600">
            Candidate ID: - · Role Track: Analyst
          </IntiDinamisText>
        </div>
        <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-600">
          Active
        </span>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <InfoCard label="Email" value={email || "-"} />
        <InfoCard label="Phone" value={phone_number || "-"} />
        <InfoCard label="Company" value={company || "-"} />
        <InfoCard
          label="Created At"
          value={formatDate({ isoDate: created }) || "-"}
        />
      </div>
    </div>
  );
};

export default ParticipantBiodata;
