import { MainWrapper } from "@/components/MainWrapper";
import { Instructions } from "./features/Instructions";
import { TestEntrance } from "./features/TestEntrance";
import { UserProfile } from "./features/UserProfile";

const AssessmentLobby = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <MainWrapper pageTitle="Assessment Lobby">
        <div className="flex flex-col gap-4 md:flex-row">
          <Instructions />
          <UserProfile />
        </div>

        <TestEntrance />
      </MainWrapper>
    </div>
  );
};

export default AssessmentLobby;
