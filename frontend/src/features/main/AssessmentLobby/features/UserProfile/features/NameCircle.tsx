import { getInitials } from "@/utils/tools";
import type { FC } from "react";

export const NameCircle: FC<{ name: string }> = ({ name }) => {
  const initials = getInitials(name);

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700">
      <span className="text-lg font-semibold">{initials}</span>
    </div>
  );
};
