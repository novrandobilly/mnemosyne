import { createContext, useContext, type ReactNode } from "react";
import { useModal } from "@/context/ModalContext";
import {
  isModuleAvailable,
  type ReportModuleId,
  type ReportParticipant,
} from "../../../types";
import { useParticipantsByDateRange } from "../../../hooks/useParticipantsByDateRange";
import { IndividualReportModal } from "../../IndividualReportModal";
import { BulkDownloadConfirmModal } from "../../BulkDownloadConfirmModal";
import { useDateFilter } from "../hooks/useDateFilter";
import { useModuleFilter } from "../hooks/useModuleFilter";
import { useParticipantSelection } from "../hooks/useParticipantSelection";
import { useBulkDownload } from "../hooks/useBulkDownload";

interface BulkReportContextValue {
  // date filter
  startDate: string;
  setStartDate: (v: string) => void;
  endDate: string;
  setEndDate: (v: string) => void;
  singleDay: boolean;
  toggleSingleDay: () => void;
  submittedRange: { start: string | null; end: string | null };
  isFetching: boolean;
  handleFetch: () => void;
  // module filter
  selectedModules: ReportModuleId[];
  toggleModule: (id: ReportModuleId) => void;
  // participants query
  participants: ReportParticipant[] | undefined;
  isLoading: boolean;
  // participant selection
  selectedParticipants: ReportParticipant[];
  isSelected: (id: string) => boolean;
  allSelected: boolean;
  someSelected: boolean;
  toggleParticipant: (id: string) => void;
  toggleAllParticipants: () => void;
  // download
  isDownloading: boolean;
  downloadableCount: number;
  handleDownloadAllClick: () => void;
  handleIndividualReport: (participant: ReportParticipant) => void;
}

const BulkReportContext = createContext<BulkReportContextValue | null>(null);

export const useBulkReport = () => {
  const ctx = useContext(BulkReportContext);
  if (!ctx)
    throw new Error("useBulkReport must be used within BulkReportProvider");
  return ctx;
};

export const BulkReportProvider = ({ children }: { children: ReactNode }) => {
  const { showModal } = useModal();

  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    singleDay,
    toggleSingleDay,
    submittedRange,
    handleFetch,
  } = useDateFilter();

  const { selectedModules, toggleModule } = useModuleFilter();

  const {
    data: participants,
    isLoading,
    isFetching,
  } = useParticipantsByDateRange(submittedRange);

  const {
    selectedParticipants,
    isSelected,
    allSelected,
    someSelected,
    toggleParticipant,
    toggleAllParticipants,
  } = useParticipantSelection(participants);

  const { isDownloading, handleDownloadAll } = useBulkDownload(
    selectedParticipants,
    selectedModules,
  );

  const downloadableCount = selectedParticipants.filter((p) =>
    selectedModules.some((id) =>
      isModuleAvailable(id, p.expand?.test_results_via_participant ?? []),
    ),
  ).length;

  const handleDownloadAllClick = () => {
    showModal({
      content: (
        <BulkDownloadConfirmModal
          participants={selectedParticipants}
          selectedModules={selectedModules}
          onConfirm={handleDownloadAll}
        />
      ),
    });
  };

  const handleIndividualReport = (participant: ReportParticipant) => {
    showModal({ content: <IndividualReportModal participant={participant} /> });
  };

  return (
    <BulkReportContext.Provider
      value={{
        // date filter
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        singleDay,
        toggleSingleDay,
        submittedRange,
        isFetching,
        handleFetch,
        // module filter
        selectedModules,
        toggleModule,
        // participants query
        participants,
        isLoading,
        // participant selection
        selectedParticipants,
        isSelected,
        allSelected,
        someSelected,
        toggleParticipant,
        toggleAllParticipants,
        // download
        isDownloading,
        downloadableCount,
        handleDownloadAllClick,
        handleIndividualReport,
      }}
    >
      {children}
    </BulkReportContext.Provider>
  );
};
