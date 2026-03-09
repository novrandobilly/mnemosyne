import PapiWheel from "@/assets/PapiWheel";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { MainWrapper } from "@/components/MainWrapper";
import ParticipantBiodata from "@/features/global/components/ParticipantBiodata";
import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import { useGetParticipantTestResult } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantTestResult";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InterpretationReport from "./features/InterpretationReport";
import NeedScoringGrid from "./features/NeedScoringGrid";
import RoleScoringGrid from "./features/RoleScoringGrid";
import ScoreSummaryCards from "./features/ScoreSummaryCards";
import type { PapiResults } from "./types";

type Tab = "result" | "interpretation";

const TABS: { key: Tab; label: string }[] = [
  { key: "result", label: "Hasil Test" },
  { key: "interpretation", label: "Interpretasi" },
];

const PKResult = () => {
  const navigate = useNavigate();
  const { data: participantDetails } = useGetParticipantDetails();
  const { id, first_name, last_name } = participantDetails || {};
  const { result: pkResult } = useGetParticipantTestResult("papikostick");

  const results: PapiResults | null =
    (pkResult?.data?.processed_scores as PapiResults) ?? null;

  const [activeTab, setActiveTab] = useState<Tab>("result");

  const participantDate = pkResult
    ? new Date(pkResult.updated).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "-";
  const participantCompany = participantDetails?.company ?? "-";

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

        <section className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          {/* ── Header + Tabs ── */}
          <div className="flex flex-wrap items-end justify-between gap-4">
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

            <div className="flex gap-1 rounded-xl bg-neutral-100 p-1">
              {TABS.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`rounded-lg px-4 py-1.5 text-sm font-semibold transition ${
                    activeTab === key
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-500 hover:text-neutral-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Tab: Hasil Test ── */}
          {activeTab === "result" && (
            <>
              <ScoreSummaryCards />

              <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                {/* Scoring grids */}
                <div className="flex flex-1 flex-col gap-6">
                  <div>
                    <IntiDinamisText
                      size="12"
                      className="mb-3 uppercase tracking-[0.3em] text-neutral-500"
                    >
                      Role Scoring
                    </IntiDinamisText>
                    {results ? (
                      <RoleScoringGrid results={results} />
                    ) : (
                      <p className="text-sm text-neutral-400">No data yet.</p>
                    )}
                  </div>
                  <div>
                    <IntiDinamisText
                      size="12"
                      className="mb-3 uppercase tracking-[0.3em] text-neutral-500"
                    >
                      Need Scoring
                    </IntiDinamisText>
                    {results ? (
                      <NeedScoringGrid results={results} />
                    ) : (
                      <p className="text-sm text-neutral-400">No data yet.</p>
                    )}
                  </div>
                </div>

                {/* PapiWheel diagram */}
                {results && <PapiWheel data={results} />}
              </div>
            </>
          )}

          {/* ── Tab: Interpretasi ── */}
          {activeTab === "interpretation" && results && (
            <InterpretationReport
              results={results}
              participant={{
                name: `${first_name} ${last_name}`.trim() || "-",
                date: participantDate,
                company: participantCompany,
              }}
            />
          )}
        </section>
      </div>
    </MainWrapper>
  );
};

export default PKResult;
