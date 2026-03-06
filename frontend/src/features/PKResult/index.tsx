import { useNavigate, useParams } from "react-router-dom";
import { MainWrapper } from "@/components/MainWrapper";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { DUMMY_PARTICIPANTS } from "@/features/AdminDashboard/constants/participants";
import ParticipantBiodata from "@/features/ParticipantDetails/features/ParticipantBiodata";
import ParticipantEmployment from "@/features/ParticipantDetails/features/ParticipantEmployment";
import ScoreSummaryCards from "./features/ScoreSummaryCards";
import RoleScoringGrid from "./features/RoleScoringGrid";
import NeedScoringGrid from "./features/NeedScoringGrid";
import InterpretationReport from "./features/InterpretationReport";
import type { PapiResults } from "./types";

const DUMMY_PAPI_RESULTS: PapiResults = {
  N: 7,
  A: 9,
  G: 8,
  L: 6,
  P: 5,
  I: 7,
  T: 8,
  V: 6,
  S: 5,
  R: 4,
  D: 7,
  C: 9,
  E: 6,
  X: 3,
  B: 8,
  O: 6,
  Z: 4,
  K: 7,
  F: 5,
  W: 3,
};

const PKResult = () => {
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

        <section className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
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
              PAPI Kostick
            </IntiDinamisText>
          </div>

          <ScoreSummaryCards results={DUMMY_PAPI_RESULTS} />

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <IntiDinamisText
                size="12"
                className="mb-3 uppercase tracking-[0.3em] text-neutral-500"
              >
                Role Scoring
              </IntiDinamisText>
              <RoleScoringGrid results={DUMMY_PAPI_RESULTS} />
            </div>
            <div>
              <IntiDinamisText
                size="12"
                className="mb-3 uppercase tracking-[0.3em] text-neutral-500"
              >
                Need Scoring
              </IntiDinamisText>
              <NeedScoringGrid results={DUMMY_PAPI_RESULTS} />
            </div>
          </div>
        </section>

        <InterpretationReport
          results={DUMMY_PAPI_RESULTS}
          participant={{
            name: participant?.name ?? "—",
            date: "10 Februari 2026",
            company: "PT. Mnemosyne Indonesia",
          }}
        />
      </div>
    </MainWrapper>
  );
};

export default PKResult;
