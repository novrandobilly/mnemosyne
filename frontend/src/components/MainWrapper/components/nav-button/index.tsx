import type { FC, ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { cn } from "../../../../lib/tailwind-merge";

export interface NavButtonProps
  extends Omit<NavLinkProps, "children" | "className"> {
  to: string;
  isActive?: boolean;
  children: ReactNode;
  className?: string;
}

export const NavButton: FC<NavButtonProps> = ({
  to,
  isActive,
  children,
  className,
  end,
  ...props
}) => {
  const baseStyles =
    "cursor-pointer rounded-full px-3 py-1.5 font-semibold transition inline-flex items-center justify-center";
  const inactiveStyles = "text-neutral-600 hover:bg-neutral-100";
  const activeStyles = "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700";

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive: isNavLinkActive }) =>
        cn(
          baseStyles,
          (isActive !== undefined ? isActive : isNavLinkActive)
            ? activeStyles
            : inactiveStyles,
          className,
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};


