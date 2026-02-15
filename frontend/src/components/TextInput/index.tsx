import type { FC } from "react";
import { cn } from "../../lib/utils";
import type { TextInputProps } from "./types";

export const TextInput: FC<TextInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-1", containerClassName)}>
      {label && <label className="text-sm text-neutral-400">{label}</label>}
      <div className="flex items-center justify-start px-4 py-3 gap-4 rounded-xl border border-neutral-300 focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-200">
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
