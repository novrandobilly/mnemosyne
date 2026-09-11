import type { FC } from "react";
import ListRow from "../../components/ListRow";
import usePaginationContext from "../Pagination/hooks/usePaginationContext";
import EmptyState from "../EmptyState";
import type { ParticipantItem } from "../../types";

export interface ParticipantListProps {
  items?: ParticipantItem[];
  startIndex?: number;
}

export const ParticipantList: FC<ParticipantListProps> = ({
  items,
  startIndex: customStartIndex,
}) => {
  const pagination = usePaginationContext<ParticipantItem>();
  const paginatedItems = items ?? pagination.paginatedItems;
  const startIndex = customStartIndex ?? pagination.startIndex;

  if (paginatedItems.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      {paginatedItems.map((participant, idx) => {
        const globalIndex = startIndex + idx;
        const { id, first_name, last_name, expand, created } =
          participant || {};
        const testResultViaParticipant =
          expand?.test_results_via_participant || [];

        // flagging
        const flags =
          testResultViaParticipant?.map(
            (testResult) => testResult?.test_type || "",
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
            index={globalIndex}
          />
        );
      })}
    </>
  );
};

export default ParticipantList;
