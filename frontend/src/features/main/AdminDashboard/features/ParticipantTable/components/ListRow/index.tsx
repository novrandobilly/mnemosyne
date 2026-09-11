import type { FC } from "react";
import { Link } from "react-router-dom";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import FlagBadge from "../../../FlagBadge";
import { formatDate } from "@/utils/tools";
import { useModal } from "@/context/ModalContext";
import { useDeleteParticipant } from "../../hooks/useDeleteParticipant";
import { DeleteConfirmModal } from "../DeleteConfirmModal";
import { FLAG_LABELS } from "../../constants/test-flag";

interface ListRowProps {
  id: string;
  name: string;
  testNumber: number;
  date: string;
  flags: string[];
  index: number;
}

const ListRow: FC<ListRowProps> = ({
  id,
  name,
  testNumber,
  date,
  flags,
  index,
}) => {
  const { showModal } = useModal();
  const { mutate: deleteParticipant, isPending: isDeleting } =
    useDeleteParticipant();

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    showModal({
      content: (
        <DeleteConfirmModal
          name={name}
          isPending={isDeleting}
          onConfirm={() => deleteParticipant(id)}
        />
      ),
    });
  };

  const participantUrl = `/admin/participants/${id}`;

  return (
    <tr className="transition-colors hover:bg-emerald-50/20">
      <td className="p-0">
        <Link
          to={participantUrl}
          className="block cursor-pointer px-5 py-4 font-medium text-neutral-500"
        >
          {String(index + 1).padStart(2, "0")}
        </Link>
      </td>

      <td className="p-0">
        <Link
          to={participantUrl}
          className="block cursor-pointer px-5 py-4 font-semibold text-neutral-900 transition-colors hover:text-emerald-700"
        >
          {name}
        </Link>
      </td>

      <td className="p-0">
        <Link
          to={participantUrl}
          className="block cursor-pointer px-5 py-4 text-neutral-700"
        >
          {testNumber}
        </Link>
      </td>

      <td className="p-0">
        <Link
          to={participantUrl}
          className="block cursor-pointer px-5 py-4 text-neutral-700"
        >
          {formatDate({ isoDate: date })}
        </Link>
      </td>

      <td className="p-0">
        <Link
          to={participantUrl}
          className="block cursor-pointer px-5 py-4"
        >
          <div className="flex max-w-125 flex-wrap gap-2">
            {FLAG_LABELS.map(({ label, value }) => {
              const isDone = flags.includes(value);
              return (
                <FlagBadge
                  key={`${id}-${label}`}
                  label={label}
                  isDone={isDone}
                />
              );
            })}
          </div>
        </Link>
      </td>

      <td className="px-5 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
          <IntiDinamisButton
            type="button"
            variant="secondary"
            size="icon"
            wrapChildrenWithText={false}
            className="h-8 w-8 min-w-0 cursor-pointer rounded-lg border border-neutral-200 text-neutral-400 transition-colors hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
            onClick={handleDeleteClick}
            disabled={isDeleting}
            title="Delete participant"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
          </IntiDinamisButton>

          <Link
            to={participantUrl}
            className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-emerald-700"
            title="View details"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ListRow;

