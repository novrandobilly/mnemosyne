import type { FC } from "react";
import { UserProfileCard } from "./UserProfileCard";
import { useTProfile } from "@/api/auth/profile";

export const AdminProfileCard: FC = () => {
  const { data: profile } = useTProfile();
  const { first_name, last_name, email, role, department, company } =
    profile || {};
  const fullName =
    `${first_name ?? ""} ${last_name ?? ""}`.trim() || "Administrator";
  const roleLabel = role === "super_admin" ? "Super Admin" : "Admin";
  const roleFullName =
    role === "super_admin" ? "Super Administrator" : "Administrator";

  return (
    <UserProfileCard
      title="Profil Admin"
      badge={
        <span className="rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
          {roleLabel}
        </span>
      }
      name={fullName}
      subtitle={email || "Akun Administrator"}
    >
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
        <div className="text-neutral-500">Peran</div>
        <div className="mt-2 font-semibold text-neutral-900">
          {roleFullName}
        </div>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
        <div className="text-neutral-500">Departemen / Divisi</div>
        <div className="mt-2 truncate font-semibold text-neutral-900">
          {department || company || "Manajemen Sistem"}
        </div>
      </div>
    </UserProfileCard>
  );
};
