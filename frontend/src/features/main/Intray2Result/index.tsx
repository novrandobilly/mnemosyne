import { useNavigate, useParams } from "react-router-dom";
import { MainWrapper } from "@/components/MainWrapper";
import { DUMMY_PARTICIPANTS } from "@/features/main/AdminDashboard/constants/participants";
import ParticipantBiodata from "@/features/global/components/ParticipantBiodata";
import ParticipantEmployment from "@/features/global/components/ParticipantEmployment";
import Intray2ResultSection from "./features/Intray2ResultSection";
import { DUMMY_INTRAY2_DATA } from "./constants";

const Intray2Result = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const participant = DUMMY_PARTICIPANTS.find((p) => p.id === id);

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
          <ParticipantBiodata
            name={participant?.name}
            id={participant?.id ?? id}
          />
          <ParticipantEmployment />
        </section>

        <Intray2ResultSection data={DUMMY_INTRAY2_DATA} />
      </div>
    </MainWrapper>
  );
};

export default Intray2Result;
