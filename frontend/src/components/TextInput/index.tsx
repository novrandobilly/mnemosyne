import type { FC } from "react";
import { cn } from "../../lib/tailwind-merge";
import type { TextInputProps } from "./types";

export const TextInput: FC<TextInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-1.5", containerClassName)}>
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
          {label}
        </label>
      )}
      <div className="flex items-center justify-start gap-4 rounded-xl border border-neutral-300 bg-white px-4 py-3 transition-colors focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100">
        {leftIcon && leftIcon}
        <input
          className="flex flex-1 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none autofill:shadow-[inset_0_0_0_1000px_white]"
          {...props}
        />
        {rightIcon && rightIcon}
      </div>
    </div>
  );
};
