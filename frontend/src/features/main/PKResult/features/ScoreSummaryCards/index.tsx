import type { FC } from "react";
import type { PapiResults, PapiScoreKey } from "../../types";
import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";

const CATEGORIES: { label: string; factors: PapiScoreKey[] }[] = [
  { label: "Work Direction", factors: ["N", "G", "A"] },
  { label: "Leadership", factors: ["L", "P", "I"] },
  { label: "Activity", factors: ["T", "V"] },
  { label: "Social Nature", factors: ["S", "R", "D"] },
  { label: "Work Style", factors: ["C", "E", "Z"] },
  { label: "Temperament", factors: ["X", "B", "O"] },
  { label: "Followership", factors: ["K", "F", "W"] },
];

const ScoreSummaryCards: FC = () => {
  const { data: participantDetails } = useGetParticipantDetails();
  const results = participantDetails?.expand?.test_results_via_participant;

  const papiResults = (function () {
    if (!results) return null;
    const foundResults: PapiResults = results.find(
      (r) => r.test_type === "papikostick",
    )?.data?.processed_scores;
    if (!foundResults) return null;
    return foundResults;
  })();

  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map(({ label, factors }) => (
        <div
          key={label}
          className="min-w-25 flex-1 overflow-hidden rounded-xl border border-neutral-200"
        >
          <div className="border-b border-green-100 bg-green-50 px-3 py-1.5 text-center">
            <span className="text-xxs font-semibold uppercase tracking-widest text-green-700">
              {label}
            </span>
          </div>
          <div className="flex divide-x divide-neutral-200">
            {factors.map((factor) => (
              <div
                key={factor}
                className="flex flex-1 flex-col items-center gap-1 py-2.5"
              >
                <span className="text-xs font-bold text-neutral-600">
                  {factor}
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded border border-neutral-300 bg-white text-sm font-semibold text-neutral-900">
                  {papiResults ? papiResults[factor] : "-"}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ScoreSummaryCards;
