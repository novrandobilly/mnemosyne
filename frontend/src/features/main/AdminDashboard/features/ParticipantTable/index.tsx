import { useMemo, type FC } from "react";
import { useGetParticipant } from "./hooks/useGetParticipant";
import Pagination from "./features/Pagination";
import PaginationProvider from "./features/Pagination/context/PaginationProvider";
import TableHeader from "./features/TableHeader";
import ParticipantList from "./features/ParticipantList";
import type { ParticipantItem } from "./types";

const ParticipantTable: FC = () => {
  const { data: participantsData } = useGetParticipant();

  // Sort by newest created date
  const sortedParticipants = useMemo(() => {
    if (!participantsData) return [];
    return [...participantsData].sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
    );
  }, [participantsData]);

  return (
    <PaginationProvider<ParticipantItem>
      items={sortedParticipants as ParticipantItem[]}
      initialPageSize={10}
    >
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <TableHeader />
            <tbody className="divide-y divide-neutral-100">
              <ParticipantList />
            </tbody>
          </table>
        </div>

        <Pagination />
      </div>
    </PaginationProvider>
  );
};

export default ParticipantTable;
