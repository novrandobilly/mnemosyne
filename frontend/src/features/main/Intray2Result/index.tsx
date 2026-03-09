import { MainWrapper } from "@/components/MainWrapper";
import ParticipantBiodata from "@/features/global/components/ParticipantBiodata";
import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import { useGetParticipantTestResult } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantTestResult";
import ParticipantEmployment from "@/features/global/components/ParticipantEmployment";
import { useNavigate } from "react-router-dom";
import type { Intray2Data } from "./constants";
import Intray2ResultSection from "./features/Intray2ResultSection";

const Intray2Result = () => {
  const navigate = useNavigate();
  const { data: participantDetails } = useGetParticipantDetails();
  const { id } = participantDetails || {};
  const { result } = useGetParticipantTestResult("intray2");

  const data: Intray2Data | null = result
    ? { kkRows: result.data?.kk ?? [] }
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
          <ParticipantEmployment />
        </section>

        {data ? (
          <Intray2ResultSection data={data} />
        ) : (
          <p className="text-sm text-neutral-400">
            No Intray-2 result data yet.
          </p>
        )}
      </div>
    </MainWrapper>
  );
};

export default Intray2Result;
