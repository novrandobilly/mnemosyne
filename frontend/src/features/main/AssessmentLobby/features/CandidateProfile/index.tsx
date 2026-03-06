import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC } from "react";
import { NameCircle } from "./features/NameCircle";
import { useTProfile } from "@/tanstack/auth/profile";
import { formatDate } from "@/utils/tools";

export const CandidateProfile: FC = () => {
  const { data: profile } = useTProfile();
  const { first_name, last_name, created, department, company } = profile || {};

  return (
    <div className="flex flex-col flex-1 gap-5 max-w-[50%] rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <IntiDinamisText
        size="12"
        className=" uppercase tracking-[0.25em] text-neutral-500"
      >
        Candidate Profile
      </IntiDinamisText>

      <div className="flex items-center gap-4">
        <NameCircle name={`${first_name} ${last_name}`} />
        <div>
          <IntiDinamisText className="text-base font-semibold text-neutral-900">
            {first_name} {last_name}
          </IntiDinamisText>
          <div className="text-xs text-neutral-500">
            Registered on {created ? formatDate({ isoDate: created }) : "N/A"}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-xs text-neutral-600">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
          <div className="text-neutral-500">Department</div>
          <div className="mt-2 font-semibold text-neutral-900">
            {department}
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
          <div className="text-neutral-500">Company</div>
          <div className="mt-2 font-semibold text-neutral-900">{company}</div>
        </div>
      </div>
    </div>
  );
};
