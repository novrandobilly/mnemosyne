import type { FC } from "react";
import { BulkActions } from "./features/BulkActions";
import DisabledCount from "./features/disabled";
import EnabledCount from "./features/enabled";
import TotalTestCount from "./features/totalTest";

export const TestCount: FC = () => {
  return (
    <div className="flex w-full gap-3">
      <TotalTestCount />
      <EnabledCount />
      <DisabledCount />
      <BulkActions />
    </div>
  );
};

export default TestCount;
