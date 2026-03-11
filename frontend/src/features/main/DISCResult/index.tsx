import { MainWrapper } from "@/components/MainWrapper";
import ParticipantBiodata from "@/features/global/components/ParticipantBiodata";
import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import { useGetParticipantTestResult } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantTestResult";
import { useNavigate } from "react-router-dom";
import DiscResultSection from "./features/DiscResultSection";
import type { DiscResult, DiscScores } from "./types";

const DISCResult = () => {
  const navigate = useNavigate();
  const { data: participantDetails } = useGetParticipantDetails();
  const { id } = participantDetails || {};
  const { result: discResult } = useGetParticipantTestResult("disc");

  const discData = discResult?.data as DiscResult | undefined;
  const scores: DiscScores | undefined = discData?.processedResults
    ? {
        MOST: discData.processedResults.most,
        LEAST: discData.processedResults.least,
        CHANGE: discData.processedResults.change,
      }
    : undefined;

  return (
    <MainWrapper>
      <div className="flex flex-col gap-6">
        <button
          type="button"
          onClick={() => navigate(`/admin/participants/${id}`)}
          className="flex w-fit cursor-pointer items-center gap-2 text-sm font-semibold text-neutral-500 transition hover:text-neutral-900"
        >
          ← Back to participant
        </button>

        <section className="grid gap-4 lg:grid-cols-[1.5fr_0.5fr]">
          <ParticipantBiodata />
          {/* <ParticipantEmployment /> */}
        </section>

        {scores ? (
          <DiscResultSection scores={scores} />
        ) : (
          <p className="text-sm text-neutral-400">No DISC result data yet.</p>
        )}
      </div>
    </MainWrapper>
  );
};

export default DISCResult;
