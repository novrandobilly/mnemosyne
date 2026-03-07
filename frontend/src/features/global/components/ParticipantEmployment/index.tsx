import type { FC } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { useGetParticipantDetails } from "../ParticipantBiodata/hooks/useGetParticipantDetails";

const ParticipantEmployment: FC = () => {
  const { data: participantDetails } = useGetParticipantDetails();
  const { department, company } = participantDetails || {};
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <IntiDinamisText
        size="12"
        className="uppercase tracking-[0.3em] text-neutral-500"
      >
        Employment
      </IntiDinamisText>
      <div className="mt-3 grid gap-2 text-sm">
        <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-2.5">
          <span className="text-neutral-600">Company</span>
          <span className="font-semibold text-neutral-900">
            {company || "-"}
          </span>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-2.5">
          <span className="text-neutral-600">Department</span>
          <span className="font-semibold text-neutral-900">
            {department || "-"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ParticipantEmployment;
