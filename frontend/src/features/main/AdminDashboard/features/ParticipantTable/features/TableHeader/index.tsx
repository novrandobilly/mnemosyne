import type { FC } from "react";

export interface TableHeaderProps {
  className?: string;
}

export const TableHeader: FC<TableHeaderProps> = ({ className = "" }) => (
  <thead
    className={`border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-[0.2em] text-neutral-500 ${className}`}
  >
    <tr>
      <th className="px-5 py-3.5">No</th>
      <th className="w-[15%] px-5 py-3.5">Participant</th>
      <th className="w-[9%] px-5 py-3.5">Test #</th>
      <th className="px-5 py-3.5">Date</th>
      <th className="px-5 py-3.5">Test Flagging</th>
      <th className="px-5 py-3.5 text-right">Actions</th>
    </tr>
  </thead>
);

export default TableHeader;
