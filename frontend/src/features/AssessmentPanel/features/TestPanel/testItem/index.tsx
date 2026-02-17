import { StatusCapsule } from "./features/status-capsule";
import { SwitchButton } from "./features/switch";

interface TestItemProps {
  number: string;
  title: string;
  tag: string;
  enabled: boolean;
  onToggle: () => void;
}

export const TestItem = ({
  number,
  title,
  tag,
  enabled,
  onToggle,
}: TestItemProps) => {
  return (
    <div className="flex items-center gap-4 px-5 py-4 transition hover:bg-neutral-50">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-semibold text-neutral-700">
        {number}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-neutral-900">{title}</h3>
        <div className="mt-1 text-sm text-neutral-500">{tag}</div>
      </div>
      <StatusCapsule enabled={enabled} />
      <SwitchButton enabled={enabled} onToggle={onToggle} />
    </div>
  );
};
