import { MainWrapper } from "@/components/MainWrapper";
import ParticipantBiodata from "../../global/components/ParticipantBiodata";
import TestResults from "./features/TestResults";

const ParticipantDetails = () => {
  return (
    <MainWrapper>
      <section className="grid gap-4 lg:grid-cols-[1.5fr_0.5fr]">
        <ParticipantBiodata />
        {/* <ParticipantEmployment /> */}
      </section>
      <TestResults />
    </MainWrapper>
  );
};

export default ParticipantDetails;
