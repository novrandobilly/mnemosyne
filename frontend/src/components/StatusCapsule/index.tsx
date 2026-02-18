import { cn } from "@/lib/tailwind-merge";
import type { FC, HTMLAttributes, ReactNode } from "react";

interface StatusCapsuleProps extends HTMLAttributes<HTMLDivElement> {
  enabled: boolean;
  children?: ReactNode;
}

export const StatusCapsule: FC<StatusCapsuleProps> = ({
  enabled,
  children,
  className,
  ...props
}) => {
  const baseStyle =
    "shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold";

  const enabledClass = "bg-green-100 text-green-700";
  const disabledClass = "bg-neutral-100 text-neutral-500";

  const componentClass = (function () {
    if (enabled) return enabledClass;
    return disabledClass;
  })();

  return (
    <div className={cn(baseStyle, componentClass, className)} {...props}>
      {children}
    </div>
  );
};
