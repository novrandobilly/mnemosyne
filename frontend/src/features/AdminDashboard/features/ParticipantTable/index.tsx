import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import FlagBadge from "../FlagBadge";
import { FLAG_LABELS } from "../../constants/participants";
import type { Participant } from "../../types";

interface ParticipantTableProps {
  participants: Participant[];
}

const ParticipantTable: FC<ParticipantTableProps> = ({ participants }) => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-neutral-50 text-xs uppercase tracking-[0.2em] text-neutral-500">
            <tr>
              <th className="px-5 py-3">No</th>
              <th className="px-5 py-3">Participant</th>
              <th className="px-5 py-3">Test #</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Flags ({FLAG_LABELS.length})</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {participants.map((participant, index) => (
              <tr
                key={participant.id}
                className="cursor-pointer hover:bg-neutral-50"
                onClick={() =>
                  navigate(`/admin/participants/${participant.id}`)
                }
              >
                <td className="px-5 py-4 text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="px-5 py-4">
                  <div className="font-semibold text-neutral-900">
                    {participant.name}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {participant.id}
                  </div>
                </td>
                <td className="px-5 py-4 text-neutral-700">
                  {participant.testNumber}
                </td>
                <td className="px-5 py-4 text-neutral-700">
                  {participant.date}
                </td>
                <td className="px-5 py-4">
                  <div className="flex max-w-125 flex-wrap gap-2">
                    {FLAG_LABELS.map((label, flagIndex) => (
                      <FlagBadge
                        key={`${participant.id}-${label}`}
                        label={label}
                        isDone={participant.flags[flagIndex] ?? false}
                      />
                    ))}
                  </div>
                </td>
                <td className="px-5 py-4 text-right">
                  <IntiDinamisButton
                    type="button"
                    variant="secondary"
                    className="min-w-0 rounded-full px-3 py-1.5 text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Delete
                  </IntiDinamisButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantTable;
