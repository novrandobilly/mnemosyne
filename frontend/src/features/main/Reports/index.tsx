import { useNavigate } from "react-router-dom";
import { MainWrapper } from "@/components/MainWrapper";
import BulkReportPanel from "./features/BulkReportPanel";
import IntiDinamisButton from "@/components/IntiDinamisButton";

const Reports = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper pageTitle="Reports">
      <div className="flex justify-end">
        <IntiDinamisButton
          variant="secondary"
          size="sm"
          onClick={() => navigate("/admin/pdf-preview")}
        >
          Preview PDF
        </IntiDinamisButton>
      </div>
      <BulkReportPanel />
    </MainWrapper>
  );
};

export default Reports;
