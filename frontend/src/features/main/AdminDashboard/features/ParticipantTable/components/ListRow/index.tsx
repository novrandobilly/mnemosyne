import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import FlagBadge from "../../../FlagBadge";
import { IntiDinamisText } from "@/components/IntiDinamisText";
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
  const navigate = useNavigate();
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

  return (
    <tr
      className="cursor-pointer hover:bg-neutral-50"
      onClick={() => navigate(`/admin/participants/${id}`)}
    >
      <td className="px-5 py-4 text-neutral-500">
        {String(index + 1).padStart(2, "0")}
      </td>

      <td className="px-5 py-4">
        <IntiDinamisText className="font-semibold text-neutral-900">
          {name}
        </IntiDinamisText>
        {/* <div className="text-xs text-neutral-500">{id}</div> */}
      </td>

      <td className="px-5 py-4 text-neutral-700">{testNumber}</td>

      <td className="px-5 py-4 text-neutral-700">
        {formatDate({ isoDate: date })}
      </td>

      <td className="px-5 py-4">
        <div className="flex max-w-125 flex-wrap gap-2">
          {FLAG_LABELS.map(({ label, value }) => {
            const isDone = flags.includes(value);
            return (
              <FlagBadge key={`${id}-${label}`} label={label} isDone={isDone} />
            );
          })}
        </div>
      </td>
      <td className="px-5 py-4 text-right">
        <IntiDinamisButton
          type="button"
          variant="secondary"
          size="icon"
          wrapChildrenWithText={false}
          className="h-8 w-8 min-w-0 rounded-lg border border-neutral-200 text-neutral-400 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-200 transition-colors"
          onClick={handleDeleteClick}
          disabled={isDeleting}
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
      </td>
    </tr>
  );
};

export default ListRow;
