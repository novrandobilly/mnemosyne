import type { FC } from "react";
import { cn } from "@/lib/tailwind-merge";

export interface IntiDinamisLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const SIZES: Record<NonNullable<IntiDinamisLogoProps["size"]>, string> = {
  sm: "h-6",
  md: "h-8",
  lg: "h-10",
  xl: "h-12",
};

export const IntiDinamisLogo: FC<IntiDinamisLogoProps> = ({
  className,
  size = "md",
}) => {
  return (
    <img
      src="/logo-intidinamis.svg"
      alt="Inti Dinamis"
      className={cn("w-auto select-none object-contain", SIZES[size], className)}
    />
  );
};

export default IntiDinamisLogo;
