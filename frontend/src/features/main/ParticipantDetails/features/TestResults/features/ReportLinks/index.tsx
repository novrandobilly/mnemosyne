import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import { RESULT_LINKS } from "@/features/main/ParticipantDetails/constants/resultLinks";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import ReportCard from "./features/ReportCard";

const ReportLinks: FC = () => {
  const navigate = useNavigate();
  const { data: participantDetails } = useGetParticipantDetails();
  const { id, expand } = participantDetails || {};
  const testResults = expand?.test_results_via_participant || [];

  return (
    <div>
      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
        Detailed Reports
      </div>
      <div className="flex flex-wrap gap-3">
        {RESULT_LINKS.map((link) => {
          const { label, slug, value } = link;
          const isCompleted = !!testResults.find(
            (result) => result.test_type === value,
          );

          return (
            <ReportCard
              key={value}
              label={label}
              isCompleted={isCompleted}
              onClick={() =>
                navigate(`/admin/participants/${id}/results/${slug}`)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReportLinks;
