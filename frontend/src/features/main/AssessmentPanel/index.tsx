import { MainWrapper } from "@/components/MainWrapper";
import TestCount from "./features/TestCount";
import { TestList } from "./features/TestPanel/list";

const AssessmentPanel = () => {
  return (
    <MainWrapper>
      <section className="flex flex-col gap-4">
        <TestCount />
        <TestList />
      </section>
    </MainWrapper>
  );
};

export default AssessmentPanel;
