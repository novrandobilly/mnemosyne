import { BulkReportProvider } from "./context/BulkReportContext";
import { DateFilterCard } from "./features/DateFilterCard";
import { ParticipantsResultsCard } from "./features/ParticipantsResultsCard";

const BulkReportPanel = () => (
  <BulkReportProvider>
    <div className="flex flex-col gap-6">
      <DateFilterCard />
      <ParticipantsResultsCard />
    </div>
  </BulkReportProvider>
);

export default BulkReportPanel;
