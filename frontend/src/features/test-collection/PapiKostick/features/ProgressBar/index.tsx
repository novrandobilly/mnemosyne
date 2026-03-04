interface ProgressBarProps {
  progress: number;
  answeredCount: number;
  totalCount: number;
}

export const ProgressBar = ({
  progress,
  answeredCount,
  totalCount,
}: ProgressBarProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm text-neutral-500">
        <span>Progress</span>
        <span className="font-medium text-neutral-900">
          {answeredCount} / {totalCount} dijawab
        </span>
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
