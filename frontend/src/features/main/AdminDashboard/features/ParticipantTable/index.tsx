import type { FC } from "react";
import ListRow from "./components/ListRow";
import { useGetParticipant } from "./hooks/useGetParticipant";

const ParticipantTable: FC = () => {
  const { data: participantsData } = useGetParticipant();

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-neutral-50 text-xs uppercase tracking-[0.2em] text-neutral-500">
            <tr>
              <th className="px-5 py-3">No</th>
              <th className="px-5 py-3 w-[15%]">Participant</th>
              <th className="px-5 py-3 w-[9%]">Test #</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Test Flagging</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {participantsData?.map((participant, index) => {
              const { id, first_name, last_name, expand, created } =
                participant || {};
              const testResultViaParticipant =
                expand?.test_results_via_participant || [];

              //flagging
              const flags =
                testResultViaParticipant?.map(
                  (testResult: { [key: string]: any }) => testResult?.test_type,
                ) || [];

              const name = `${first_name} ${last_name}`;
              const testNumber = testResultViaParticipant.length;

              return (
                <ListRow
                  key={id}
                  id={id}
                  name={name}
                  testNumber={testNumber}
                  date={created}
                  flags={flags}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantTable;
