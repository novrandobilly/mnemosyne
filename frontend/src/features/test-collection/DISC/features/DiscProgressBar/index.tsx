import { IntiDinamisText } from "@/components/IntiDinamisText";

interface ProgressBarProps {
  progress: number;
  completedCount: number;
  totalCount: number;
}

export const DiscProgressBar = ({
  progress,
  completedCount,
  totalCount,
}: ProgressBarProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <IntiDinamisText size="14" className="text-neutral-500">
          Progress
        </IntiDinamisText>
        <IntiDinamisText size="14" weight="medium" className="text-neutral-900">
          {completedCount} / {totalCount} selesai
        </IntiDinamisText>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
        <div
          className="h-full rounded-full bg-neutral-900 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
