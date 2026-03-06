import { DUMMY_RESULT_LINKS } from "@/features/ParticipantDetails/constants/resultLinks";
import type { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

const statusClass = (status: string) => {
  if (status === "Completed") return "bg-emerald-100 text-emerald-700";
  if (status === "In Progress") return "bg-amber-100 text-amber-700";
  return "bg-neutral-100 text-neutral-500";
};

const ReportLinks: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
        Detailed Reports
      </div>
      <div className="flex flex-wrap gap-3">
        {DUMMY_RESULT_LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() =>
              navigate(`/admin/participants/${id}/results/${link.slug}`)
            }
            className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-3.5 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow"
          >
            <div className="text-sm font-semibold text-neutral-900">
              {link.label}
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(link.status)}`}
            >
              {link.status}
            </span>
            {link.date !== "—" && (
              <span className="text-xs text-neutral-400">{link.date}</span>
            )}
            <span className="text-xs font-semibold text-neutral-500 group-hover:text-neutral-800">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReportLinks;
