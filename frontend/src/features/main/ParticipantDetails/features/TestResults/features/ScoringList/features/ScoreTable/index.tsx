import type { FC } from "react";
import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import { SCORE_ITEM_CONFIG } from "@/features/main/ParticipantDetails/constants/scoreItems";
import type { ScoreItem } from "@/features/main/ParticipantDetails/types";
import { useScoringList } from "../../context/ScoringListContext";
import ScoreRow from "../../components/ScoreRow";
import { scoreEas4 } from "@/data/eas4/scoring";
import { scoreEas5 } from "@/data/eas5/scoring";
import { scoreEas6 } from "@/data/eas6/scoring";
import { scoreEas7 } from "@/data/eas7/scoring";
import { scoreEas10 } from "@/data/eas10/scoring";

const ScoreTable: FC = () => {
  const { showAll } = useScoringList();
  const { data: participantDetails } = useGetParticipantDetails();
  const testResults =
    participantDetails?.expand?.test_results_via_participant ?? [];

  const scoreItems: ScoreItem[] = SCORE_ITEM_CONFIG.map(({ id, label }) => {
    const result = testResults.find((r) => r.test_type === id);
    const isCompleted = result?.status === "completed";

    let score = "-";
    if (isCompleted) {
      if (result?.data?.score != null) {
        score = String(result.data.score);
      } else if (id === "eas4" && result?.data) {
        const rawAnswers = result.data.raw_answers || result.data;
        const scoring = scoreEas4(rawAnswers);
        score = String(scoring.score);
      } else if (id === "eas5" && result?.data) {
        const rawAnswers = result.data.raw_answers || result.data;
        const scoring = scoreEas5(rawAnswers);
        score = String(scoring.score);
      } else if (id === "eas6" && result?.data) {
        const rawAnswers = result.data.raw_answers || result.data;
        const scoring = scoreEas6(rawAnswers);
        score = String(scoring.score);
      } else if (id === "eas7" && result?.data) {
        const rawAnswers = result.data.raw_answers || result.data;
        const scoring = scoreEas7(rawAnswers);
        score = String(scoring.score);
      } else if (id === "eas10" && result?.data) {
        const rawAnswers = result.data.raw_answers || result.data;
        const scoring = scoreEas10(rawAnswers);
        score = String(scoring.score);
      }
    }

    return {
      id,
      label,
      score,
      status: isCompleted ? "Completed" : "Not Done",
    };
  });

  const scoredValues = scoreItems
    .filter((item) => item.status === "Completed")
    .map((item) => Number(item.score))
    .filter((v) => !Number.isNaN(v));

  const averageScore = scoredValues.length
    ? (
        scoredValues.reduce((sum, v) => sum + v, 0) / scoredValues.length
      ).toFixed(1)
    : "-";

  return (
    <div className="mt-3 flex flex-col text-sm">
      {scoreItems.map((item) => {
        const isHidden = !showAll && item.status === "Not Done";
        return (
          <div
            key={item.id}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isHidden ? "max-h-0 opacity-0" : "max-h-14 pb-1.5 opacity-100"
            }`}
          >
            <ScoreRow item={item} />
          </div>
        );
      })}
      <div className="flex items-center justify-between gap-6 rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-2.5">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
          Average
        </div>
        <div className="text-sm font-semibold text-neutral-900">
          {averageScore}
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;
