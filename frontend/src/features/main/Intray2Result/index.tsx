import { useNavigate, useParams } from "react-router-dom";
import { MainWrapper } from "@/components/MainWrapper";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { DUMMY_PARTICIPANTS } from "@/features/main/AdminDashboard/constants/participants";
import ParticipantBiodata from "@/features/global/components/ParticipantBiodata";
import ParticipantEmployment from "@/features/global/components/ParticipantEmployment";

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

        <section className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div>
            <IntiDinamisText
              size="12"
              className="uppercase tracking-[0.3em] text-neutral-500"
            >
              Test Result
            </IntiDinamisText>
            <IntiDinamisText
              as="h2"
              size="20"
              weight="semibold"
              className="mt-2 text-neutral-900"
            >
              Intray-2
            </IntiDinamisText>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 py-16 text-center">
            <IntiDinamisText
              size="14"
              weight="semibold"
              className="text-neutral-500"
            >
              Intray-2 results will appear here
            </IntiDinamisText>
            <IntiDinamisText size="12" className="text-neutral-400">
              Data will be loaded from PocketBase in a future update.
            </IntiDinamisText>
          </div>
        </section>
      </div>
    </MainWrapper>
  );
};

export default Intray2Result;
