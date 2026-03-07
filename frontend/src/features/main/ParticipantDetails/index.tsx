import { MainWrapper } from "@/components/MainWrapper";
import ParticipantBiodata from "../../global/components/ParticipantBiodata";
import ParticipantEmployment from "../../global/components/ParticipantEmployment";
import TestResults from "./features/TestResults";

const ParticipantDetails = () => {
  return (
    <MainWrapper>
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ParticipantBiodata />
        <ParticipantEmployment />
      </section>
      <TestResults />
    </MainWrapper>
  );
};

export default ParticipantDetails;
