import { MainWrapper } from "@/components/MainWrapper";
import ParticipantBiodata from "../../global/components/ParticipantBiodata";
import TestResults from "./features/TestResults";
import ParticipantNavigation from "./features/ParticipantNavigation";

const ParticipantDetails = () => {
  return (
    <MainWrapper>
      <div className="flex flex-col gap-6">
        <ParticipantBiodata rightAction={<ParticipantNavigation />} />
        <TestResults />
      </div>
    </MainWrapper>
  );
};

export default ParticipantDetails;
