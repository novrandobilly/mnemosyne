import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC, ReactNode } from "react";
import { NameCircle } from "./NameCircle";

export interface UserProfileCardProps {
  title: string;
  badge: ReactNode;
  name: string;
  subtitle: ReactNode;
  children: ReactNode;
}

export const UserProfileCard: FC<UserProfileCardProps> = ({
  title,
  badge,
  name,
  subtitle,
  children,
}) => {
  return (
    <div className="flex flex-1 flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:max-w-[50%]">
      <div className="flex items-center justify-between">
        <IntiDinamisText
          size="12"
          className="uppercase tracking-[0.25em] text-neutral-500"
        >
          {title}
        </IntiDinamisText>
        {badge}
      </div>

      <div className="flex items-center gap-4">
        <NameCircle name={name} />
        <div>
          <IntiDinamisText className="text-base font-semibold text-neutral-900">
            {name}
          </IntiDinamisText>
          <div className="text-xs text-neutral-500">{subtitle}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs text-neutral-600">
        {children}
      </div>
    </div>
  );
};
