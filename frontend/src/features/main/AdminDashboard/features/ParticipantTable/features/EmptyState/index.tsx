import type { FC } from "react";

export interface EmptyStateProps {
  colSpan?: number;
  message?: string;
  className?: string;
}

export const EmptyState: FC<EmptyStateProps> = ({
  colSpan = 6,
  message = "Belum ada data peserta.",
  className = "",
}) => (
  <tr className={className}>
    <td
      colSpan={colSpan}
      className="px-5 py-8 text-center text-sm text-neutral-400"
    >
      {message}
    </td>
  </tr>
);

export default EmptyState;
