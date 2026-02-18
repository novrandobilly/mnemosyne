import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/tailwind-merge";
import { IntiDinamisText } from "../IntiDinamisText";
import { Spinner } from "./spinner";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
}

const IntiDinamisButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      iconLeft,
      iconRight,
      isLoading = false,
      disabled,
      onClick,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "relative inline-flex py-2.5 px-4 min-w-[100px] items-center justify-center px-[10px] rounded-[8px] text-sm font-medium transition-all duration-200 focus:outline-none active:scale-[0.98] cursor-pointer";

    const disabledStyles =
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#E6E6E8] disabled:text-[#BBBBC0] disabled:ring-0 disabled:ring-[#E6E6E8] disabled:border-transparent";

    const loadingStyles = {
      primary:
        "disabled:bg-neutral-900 disabled:border-neutral-900 disabled:opacity-100 cursor-wait",
      secondary:
        "disabled:bg-[#FFFFFF] disabled:border-neutral-900 disabled:opacity-100 cursor-wait hover:bg-[#FFFFF]",
    };

    const variants = {
      primary:
        "bg-neutral-900 border border-neutral-900 text-white hover:bg-neutral-700",
      secondary:
        "bg-white border border-neutral-900 text-neutral-900 hover:bg-neutral-900/10",
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          baseStyles,
          variants[variant],
          disabledStyles,
          isLoading && loadingStyles[variant],
          className,
        )}
        {...props}
        onClick={onClick}
      >
        {isLoading && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Spinner
              className={cn(
                variant == "primary" ? "text-white" : "text-[#DA649F]",
              )}
            />
          </div>
        )}

        <span
          className={cn(
            "flex items-center gap-2 w-full",
            isLoading ? "invisible opacity-0" : "visible opacity-100",
          )}
        >
          {iconLeft && <span>{iconLeft}</span>}
          <IntiDinamisText weight="semibold" className="w-full">
            {children}
          </IntiDinamisText>
          {iconRight && <span>{iconRight}</span>}
        </span>
      </button>
    );
  },
);

IntiDinamisButton.displayName = "IntiDinamisButton";

export default IntiDinamisButton;
