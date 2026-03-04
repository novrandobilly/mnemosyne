import type { FC } from "react";

interface SwitchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  enabled: boolean;
  onToggle: () => void;
}

export const SwitchButton: FC<SwitchButtonProps> = ({
  enabled,
  onToggle,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 ${
        enabled ? "bg-green-600" : "bg-neutral-300"
      }`}
      role="switch"
      aria-checked={enabled}
      {...props}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
};
