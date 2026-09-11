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
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 ${
        enabled ? "bg-emerald-600" : "bg-neutral-300 hover:bg-neutral-400"
      }`}
      role="switch"
      aria-checked={enabled}
      {...props}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          enabled ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default SwitchButton;
