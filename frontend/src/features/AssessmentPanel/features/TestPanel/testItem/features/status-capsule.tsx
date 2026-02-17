export const StatusCapsule = ({ enabled }: { enabled: boolean }) => {
  const enabledClass =
    "rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700";
  const disabledClass =
    "rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500";

  return (
    <div className="shrink-0">
      {enabled ? (
        <div className={enabledClass}>Enabled</div>
      ) : (
        <div className={disabledClass}>Disabled</div>
      )}
    </div>
  );
};
