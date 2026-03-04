import IntiDinamisButton from "@/components/IntiDinamisButton";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { cn } from "@/lib/tailwind-merge";
import { eas7Data } from "@/data/eas7";
import { useEas7Context } from "../../context/Eas7Context";

export const EAS7GroupNav = () => {
  const { currentGroupId, answers, goToGroup } = useEas7Context();

  return (
    <div className="flex flex-wrap items-center gap-2">
      {eas7Data.map((group) => {
        const groupAnswered = group.questions.filter(
          (q) => answers[q.id] !== undefined,
        ).length;
        const isActive = currentGroupId === group.groupId;
        const isComplete = groupAnswered === group.questions.length;

        return (
          <IntiDinamisButton
            key={group.groupId}
            variant="secondary"
            onClick={() => goToGroup(group.groupId)}
            className={cn(
              "flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-medium transition-all",
              isActive
                ? "bg-neutral-900 text-white"
                : isComplete
                  ? "border-neutral-300 bg-neutral-100 text-neutral-600"
                  : "border-transparent bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
            )}
          >
            <span>Kasus {group.groupId}</span>
            <IntiDinamisText
              size="10"
              className={cn(
                "rounded-full px-1.5 py-0.5 font-semibold tabular-nums",
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-neutral-200 text-neutral-500",
              )}
            >
              {groupAnswered}/{group.questions.length}
            </IntiDinamisText>
          </IntiDinamisButton>
        );
      })}
    </div>
  );
};
