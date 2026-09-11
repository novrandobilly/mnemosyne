import type { FC } from "react";
import { cn } from "@/lib/tailwind-merge";

export interface IntiDinamisLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const IntiDinamisLogo: FC<IntiDinamisLogoProps> = ({
  className,
  size = "md",
}) => {
  const scale =
    size === "sm"
      ? "scale-75 origin-left"
      : size === "lg"
        ? "scale-125 origin-left"
        : "";

  return (
    <div
      className={cn(
        "inline-flex flex-col select-none leading-none",
        scale,
        className,
      )}
    >
      <span className="text-[12px] font-bold tracking-wide text-[#7c007d] pl-6">
        inti
      </span>
      <span className="-mt-1 text-2xl font-black italic tracking-tight text-[#fe0100]">
        dinamis
      </span>
    </div>
  );
};

export default IntiDinamisLogo;
