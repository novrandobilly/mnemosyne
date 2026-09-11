import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC, ReactNode } from "react";
import { useGetParticipantDetails } from "./hooks/useGetParticipantDetails";
import { formatDate } from "@/utils/tools";

interface ParticipantBiodataProps {
  rightAction?: ReactNode;
}

const ParticipantBiodata: FC<ParticipantBiodataProps> = ({ rightAction }) => {
  const { data: participantDetails } = useGetParticipantDetails();
  const {
    first_name,
    last_name,
    contact_email,
    phone_number,
    company,
    created,
    department,
  } = participantDetails || {};

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <IntiDinamisText
          as="h1"
          className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl"
        >
          {first_name && last_name
            ? `${first_name} ${last_name}`
            : "Unknown Participant"}
        </IntiDinamisText>

        {rightAction && <div>{rightAction}</div>}
      </div>

      <div className="mt-3.5 grid grid-cols-2 gap-x-6 gap-y-2.5 border-t border-neutral-100 pt-3.5 sm:grid-cols-3 lg:grid-cols-5">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
            Email
          </span>
          <p
            className="text-xs font-semibold text-neutral-800 truncate"
            title={contact_email || "-"}
          >
            {contact_email || "-"}
          </p>
        </div>
        <div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
            Nomor Kontak
          </span>
          <p className="text-xs font-semibold text-neutral-800">
            {phone_number || "-"}
          </p>
        </div>
        <div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
            Perusahaan
          </span>
          <p
            className="text-xs font-semibold text-neutral-800 truncate"
            title={company || "-"}
          >
            {company || "-"}
          </p>
        </div>
        <div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
            Departemen
          </span>
          <p
            className="text-xs font-semibold text-neutral-800 truncate"
            title={department || "-"}
          >
            {department || "-"}
          </p>
        </div>
        <div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
            Tanggal terdaftar
          </span>
          <p className="text-xs font-semibold text-neutral-800">
            {formatDate({ isoDate: created }) || "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParticipantBiodata;
