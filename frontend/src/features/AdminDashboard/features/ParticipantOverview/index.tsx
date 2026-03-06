import type { FC } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import ParticipantTable from "../ParticipantTable";
import { DUMMY_PARTICIPANTS } from "../../constants/participants";

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

    <ParticipantTable participants={DUMMY_PARTICIPANTS} />
  </section>
);

export default ParticipantOverview;
