import type { FC } from "react";
import { UserProfileCard } from "./UserProfileCard";
import { useTProfile } from "@/api/auth/profile";

export const ParticipantProfileCard: FC = () => {
  const { data: profile } = useTProfile();
  const { first_name, last_name, created, department, company } = profile || {};
  const fullName =
    `${first_name ?? ""} ${last_name ?? ""}`.trim() || "Kandidat";
  const registeredDate = created
    ? new Date(created).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "—";

  return (
    <UserProfileCard
      title="Profil Kandidat"
      badge={
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Kandidat
        </span>
      }
      name={fullName}
      subtitle={`Terdaftar pada ${registeredDate}`}
    >
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
        <div className="text-neutral-500">Departemen</div>
        <div className="mt-2 font-semibold text-neutral-900">
          {department || "—"}
        </div>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
        <div className="text-neutral-500">Perusahaan</div>
        <div className="mt-2 font-semibold text-neutral-900">
          {company || "—"}
        </div>
      </div>
    </UserProfileCard>
  );
};
