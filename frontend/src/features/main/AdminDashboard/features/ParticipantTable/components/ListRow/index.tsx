import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import FlagBadge from "../../../FlagBadge";
import { FLAG_LABELS } from "../../../../constants/participants";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { formatDate } from "@/utils/tools";

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
          className="min-w-0 rounded-full px-3 py-1.5 text-xs"
          onClick={(e) => e.stopPropagation()}
        >
          Delete
        </IntiDinamisButton>
      </td>
    </tr>
  );
};

export default ListRow;
