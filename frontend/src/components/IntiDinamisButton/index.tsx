import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/tailwind-merge";
import { IntiDinamisText } from "../IntiDinamisText";
import { Spinner } from "./spinner";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "md" | "sm" | "xs" | "icon";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  wrapChildrenWithText?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const IntiDinamisButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      iconLeft,
      iconRight,
      isLoading = false,
      wrapChildrenWithText = true,
      disabled,
      onClick,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none active:scale-[0.98] cursor-pointer";

    const sizeStyles = {
      md: "min-w-[100px] rounded-[8px] px-4 py-2.5",
      sm: "min-w-[88px] rounded-[8px] px-3 py-2",
      xs: "min-w-0 rounded-md px-2 py-1 text-xs",
      icon: "h-8 w-8 min-w-0 rounded-lg p-0 text-xs sm:h-9 sm:w-9 sm:text-sm",
    };

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

    const contentWidth = size === "md" || size === "sm" ? "w-full" : "w-auto";
    const textSize = size === "md" || size === "sm" ? "14" : "12";

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          baseStyles,
          sizeStyles[size],
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
            "flex items-center gap-2",
            contentWidth,
            isLoading ? "invisible opacity-0" : "visible opacity-100",
          )}
        >
          {iconLeft && <span>{iconLeft}</span>}
          {wrapChildrenWithText ? (
            <IntiDinamisText
              size={textSize}
              weight="semibold"
              className={cn(size === "md" || size === "sm" ? "w-full" : "")}
            >
              {children}
            </IntiDinamisText>
          ) : (
            children
          )}
          {iconRight && <span>{iconRight}</span>}
        </span>
      </button>
    );
  },
);

export default IntiDinamisButton;
