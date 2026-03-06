import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { FC } from "react";

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  label: string;
  labelStyle?: string;
  valueStyle?: string;
}

export const Counter: FC<CounterProps> = ({
  count,
  label,
  labelStyle,
  valueStyle,
  ...props
}) => {
  return (
    <div
      className="flex flex-1 flex-col rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
      {...props}
    >
      <IntiDinamisText
        className={`text-xs uppercase tracking-[0.25em] text-neutral-500 ${labelStyle}`}
      >
        {label}
      </IntiDinamisText>
      <IntiDinamisText
        className={`mt-1.5 text-2xl font-semibold text-neutral-400 ${valueStyle}`}
      >
        {count}
      </IntiDinamisText>
    </div>
  );
};
