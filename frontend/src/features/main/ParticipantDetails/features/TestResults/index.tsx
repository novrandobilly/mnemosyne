import type { FC } from "react";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import ReportLinks from "./features/ReportLinks";
import ScoringList from "./features/ScoringList";
import { useModal } from "@/context/ModalContext";
import { useGetParticipantDetails } from "@/features/global/components/ParticipantBiodata/hooks/useGetParticipantDetails";
import { IndividualReportModal } from "@/features/main/Reports/features/IndividualReportModal";

const TestResults: FC = () => {
  const { showModal } = useModal();
  const { data: participant } = useGetParticipantDetails();

  const handleExport = () => {
    if (!participant) return;
    showModal({
      content: (
        <IndividualReportModal
          participant={
            participant as Parameters<
              typeof IndividualReportModal
            >[0]["participant"]
          }
        />
      ),
    });
  };
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <IntiDinamisText
            size="12"
            className="uppercase tracking-[0.3em] text-neutral-500"
          >
            Test Results
          </IntiDinamisText>
          <IntiDinamisText
            as="h2"
            size="20"
            weight="semibold"
            className="mt-2 text-neutral-900"
          >
            Reports and scoring overview
          </IntiDinamisText>
          <IntiDinamisText size="14" className="mt-2 text-neutral-600">
            Detailed reports are available for core tests. Single-score
            assessments are listed in the scoring table.
          </IntiDinamisText>
        </div>
        <IntiDinamisButton
          type="button"
          variant="secondary"
          className="min-w-0 rounded-full px-4 py-2 text-xs"
          onClick={handleExport}
          disabled={!participant}
        >
          Export Report
        </IntiDinamisButton>
      </div>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-1/2">
          <ReportLinks />
        </div>
        <div className="lg:w-1/2">
          <ScoringList />
        </div>
      </div>
    </section>
  );
};

export default TestResults;
