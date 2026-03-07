import { MainWrapper } from "@/components/MainWrapper";
import ParticipantBiodata from "@/features/global/components/ParticipantBiodata";
import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import ParticipantEmployment from "@/features/global/components/ParticipantEmployment";
import { useNavigate } from "react-router-dom";
import { DUMMY_INTRAY1_DATA } from "./constants";
import Intray1ResultSection from "./features/Intray1ResultSection";

const Intray1Result = () => {
  const navigate = useNavigate();
  const { data: participantDetails } = useGetParticipantDetails();
  const { id } = participantDetails || {};

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

        <Intray1ResultSection data={DUMMY_INTRAY1_DATA} />
      </div>
    </MainWrapper>
  );
};

export default Intray1Result;
