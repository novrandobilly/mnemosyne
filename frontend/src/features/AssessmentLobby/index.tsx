import AdminWrapper from "../../components/MainWrapper/features/admin-wrapper";
import { CandidateProfile } from "./features/CandidateProfile";
import { Instructions } from "./features/Instructions";
import { TestEntrance } from "./features/TestEntrance";

const AssessmentLobby = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <AdminWrapper pageTitle="Assessment Lobby">
        <div className="flex gap-4">
          <Instructions />
          <CandidateProfile />
        </div>

        <TestEntrance />

        {/* <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Support
              </div>
              <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                Need help before starting?
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Reach out to the assessment coordinator for any clarifications.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                View FAQ
              </button>
              <button
                type="button"
                className="rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600"
              >
                Contact Support
              </button>
            </div>
          </div>
        </section> */}
      </AdminWrapper>
    </div>
  );
};

export default AssessmentLobby;
