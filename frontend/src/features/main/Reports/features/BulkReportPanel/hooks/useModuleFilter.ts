import { useState } from "react";
import { REPORT_MODULES, type ReportModuleId } from "../../../types";

export const useModuleFilter = () => {
  const [selectedModules, setSelectedModules] = useState<ReportModuleId[]>(
    REPORT_MODULES.map((m) => m.id),
  );

  const toggleModule = (id: ReportModuleId) =>
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  return { selectedModules, toggleModule };
};
