import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { cn } from "../../../../lib/tailwind-merge";

type CommonProps = {
  isActive?: boolean;
  children: ReactNode;
  className?: string;
};

type NavButtonAsLink = CommonProps &
  Omit<NavLinkProps, "children" | "className"> & {
    to: string;
  };

type NavButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
  };

export type NavButtonProps = NavButtonAsLink | NavButtonAsButton;

export const NavButton: FC<NavButtonProps> = (props) => {
  const baseStyles =
    "cursor-pointer rounded-full px-3 py-1.5 font-semibold transition inline-flex items-center justify-center";
  const inactiveStyles = "text-neutral-600 hover:bg-neutral-100";
  const activeStyles = "bg-neutral-900 text-white";

  if ("to" in props && props.to !== undefined) {
    const { to, isActive, children, className, end, ...rest } = props;
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
        {...rest}
      >
        {children}
      </NavLink>
    );
  }

  const { isActive, children, className, type = "button", ...rest } = props;
  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        isActive ? activeStyles : inactiveStyles,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

