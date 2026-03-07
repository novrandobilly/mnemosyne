import { MainWrapper } from "@/components/MainWrapper";
import ParticipantBiodata from "@/features/global/components/ParticipantBiodata";
import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import ParticipantEmployment from "@/features/global/components/ParticipantEmployment";
import { useNavigate } from "react-router-dom";
import { DUMMY_DISC_SCORES } from "./constants";
import DiscResultSection from "./features/DiscResultSection";

const DISCResult = () => {
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

        <DiscResultSection scores={DUMMY_DISC_SCORES} />
      </div>
    </MainWrapper>
  );
};

export default DISCResult;
