import { useParams } from "react-router-dom";
import { MainWrapper } from "@/components/MainWrapper";
import { DUMMY_PARTICIPANTS } from "../AdminDashboard/constants/participants";
import ParticipantBiodata from "../../global/components/ParticipantBiodata";
import ParticipantEmployment from "../../global/components/ParticipantEmployment";
import TestResults from "./features/TestResults";

const ParticipantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const participant = DUMMY_PARTICIPANTS.find((p) => p.id === id);

  return (
    <MainWrapper>
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ParticipantBiodata
          name={participant?.name}
          id={participant?.id ?? id}
        />
        <ParticipantEmployment />
      </section>
      <TestResults />
    </MainWrapper>
  );
};

export default ParticipantDetails;
