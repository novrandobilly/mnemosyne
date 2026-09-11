import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC } from "react";
import { NameCircle } from "./features/NameCircle";
import { useTProfile } from "@/api/auth/profile";

export const CandidateProfile: FC = () => {
  const { data: profile } = useTProfile();
  const { first_name, last_name, created, department, company, email, role } =
    profile || {};

  const isAdmin = role === "admin" || role === "super_admin";
  const roleLabel =
    role === "super_admin"
      ? "Super Admin"
      : role === "admin"
        ? "Admin"
        : "Peserta";

  const registeredDate = created
    ? new Date(created).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "—";

  return (
    <div className="flex flex-1 flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:max-w-[50%]">
      <div className="flex items-center justify-between">
        <IntiDinamisText
          size="12"
          className="uppercase tracking-[0.25em] text-neutral-500"
        >
          {isAdmin ? "Profil Admin" : "Profil Peserta"}
        </IntiDinamisText>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider ${
            isAdmin
              ? "border border-neutral-800 bg-neutral-900 text-white"
              : "border border-emerald-200 bg-emerald-50 text-emerald-700"
          }`}
        >
          {roleLabel}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <NameCircle name={`${first_name ?? ""} ${last_name ?? ""}`} />
        <div>
          <IntiDinamisText className="text-base font-semibold text-neutral-900">
            {first_name} {last_name}
          </IntiDinamisText>
          <div className="text-xs text-neutral-500">
            {isAdmin
              ? email || "Akun Administrator"
              : `Terdaftar pada ${registeredDate}`}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs text-neutral-600">
        {isAdmin ? (
          <>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
              <div className="text-neutral-500">Peran</div>
              <div className="mt-2 font-semibold text-neutral-900">
                {role === "super_admin"
                  ? "Super Administrator"
                  : "Administrator"}
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
              <div className="text-neutral-500">Departemen / Divisi</div>
              <div className="mt-2 truncate font-semibold text-neutral-900">
                {department || company || "Manajemen Sistem"}
              </div>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
