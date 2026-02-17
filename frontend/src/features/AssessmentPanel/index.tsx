import AdminWrapper from "../../components/MainWrapper/features/admin-wrapper";
import TestCount from "./features/TestCount";
import { TestListHeader } from "./features/TestPanel/header";
import { TestList } from "./features/TestPanel/list";

const AssessmentPanel = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <AdminWrapper>
        <TestCount />

        <section className="flex flex-col gap-6">
          <TestListHeader />
          <TestList />
        </section>
      </AdminWrapper>
    </div>
  );
};

export default AssessmentPanel;
