import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { cn } from "../../../../lib/utils";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: ReactNode;
}

export const NavButton: FC<NavButtonProps> = ({
  isActive,
  children,
  className,
  ...props
}) => {
  const baseStyles = "rounded-full px-3 py-1.5 font-semibold";
  const inactiveStyles = "text-neutral-600 transition hover:bg-neutral-100";
  const activeStyles = "bg-neutral-900 text-white";

  return (
    <button
      className={cn(
        baseStyles,
        isActive ? activeStyles : inactiveStyles,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
