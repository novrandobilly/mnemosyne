import type { FC } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { DiscScores } from "../../types";
import DiscScoringGrid from "../DiscScoringGrid";
import DiscScoringTable from "../DiscScoringTable";
import DiscMostGraph from "../MostTable";
import DiscLeastGraph from "../LeastTable";
import DiscChangeGraph from "../ChangeTable";

interface DiscResultSectionProps {
  scores: DiscScores;
}

const DiscResultSection: FC<DiscResultSectionProps> = ({ scores }) => {
  return (
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
          DISC
        </IntiDinamisText>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-start gap-6">
          <div className="w-full max-w-lg">
            <IntiDinamisText
              size="12"
              className="mb-3 uppercase tracking-[0.3em] text-neutral-500"
            >
              Scoring Grid
            </IntiDinamisText>
            <DiscScoringGrid scores={scores} />
          </div>
          <div className="w-full max-w-lg">
            <IntiDinamisText
              size="12"
              className="mb-3 uppercase tracking-[0.3em] text-neutral-500"
            >
              Scoring Table
            </IntiDinamisText>
            <DiscScoringTable scores={scores} />
          </div>
        </div>
        <div className="flex">
          <DiscMostGraph
            scores={{
              d: scores?.MOST?.D,
              i: scores?.MOST?.I,
              s: scores?.MOST?.S,
              c: scores?.MOST?.C,
            }}
          />
          <DiscLeastGraph
            scores={{
              d: scores?.LEAST?.D,
              i: scores?.LEAST?.I,
              s: scores?.LEAST?.S,
              c: scores?.LEAST?.C,
            }}
          />
          <DiscChangeGraph
            scores={{
              d: scores?.CHANGE?.D,
              i: scores?.CHANGE?.I,
              s: scores?.CHANGE?.S,
              c: scores?.CHANGE?.C,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DiscResultSection;
