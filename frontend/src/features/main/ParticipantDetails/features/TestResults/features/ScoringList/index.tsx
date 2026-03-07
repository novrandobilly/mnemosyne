import type { FC } from "react";
import { ScoringListProvider } from "./context/ScoringListContext";
import ScoringListHeader from "./features/ScoringListHeader";
import ScoreTable from "./features/ScoreTable";

const ScoringList: FC = () => {
  return (
    <ScoringListProvider>
      <div className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
        <ScoringListHeader />
        <ScoreTable />
      </div>
    </ScoringListProvider>
  );
};

export default ScoringList;
