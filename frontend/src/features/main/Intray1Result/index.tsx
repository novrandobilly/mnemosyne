import { MainWrapper } from "@/components/MainWrapper";
import ParticipantBiodata from "@/features/global/components/ParticipantBiodata";
import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import { useGetParticipantTestResult } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantTestResult";
import { useNavigate } from "react-router-dom";
import type { Intray1Data } from "./constants";
import Intray1ResultSection from "./features/Intray1ResultSection";

const Intray1Result = () => {
  const navigate = useNavigate();
  const { data: participantDetails } = useGetParticipantDetails();
  const { id } = participantDetails || {};
  const { result } = useGetParticipantTestResult("intray1");

  const data: Intray1Data | null = result
    ? { kk1Rows: result.data?.kk1 ?? [], kk2Rows: result.data?.kk2 ?? [] }
    : null;

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

        {data ? (
          <Intray1ResultSection data={data} />
        ) : (
          <p className="text-sm text-neutral-400">
            No Intray-1 result data yet.
          </p>
        )}
      </div>
    </MainWrapper>
  );
};

export default Intray1Result;
