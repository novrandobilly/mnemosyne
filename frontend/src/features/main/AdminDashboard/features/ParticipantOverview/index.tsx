import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC } from "react";
import ParticipantTable from "../ParticipantTable";

const ParticipantOverview: FC = () => (
  <section className="flex flex-col gap-4">
    <div>
      <IntiDinamisText
        size="12"
        className="uppercase tracking-[0.3em] text-neutral-500"
      >
        Participant Overview
      </IntiDinamisText>
      <IntiDinamisText
        as="h1"
        size="24"
        weight="semibold"
        className="mt-2 text-neutral-900"
      >
        Test completion status by participant
      </IntiDinamisText>
      <IntiDinamisText size="14" className="mt-2 text-neutral-600">
        Monitor test completion across all participants. Use the flag columns to
        quickly see which tests are done.
      </IntiDinamisText>
    </div>

    <ParticipantTable />
  </section>
);

export default ParticipantOverview;
