import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC } from "react";
import ParticipantTable from "../ParticipantTable";

const ParticipantOverview: FC = () => (
  <section className="flex flex-col gap-5">
    <div>
      <IntiDinamisText
        as="h1"
        className="text-2xl font-bold tracking-tight text-neutral-900"
      >
        Participant Overview
      </IntiDinamisText>
    </div>

    <ParticipantTable />
  </section>
);

export default ParticipantOverview;
