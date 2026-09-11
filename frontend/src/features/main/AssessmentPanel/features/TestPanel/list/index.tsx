import { useTGetTestBank } from "@/api/test/useTGetTestBank";
import type { FC } from "react";
import { TestItem } from "../testItem";
import { useToggleTest } from "@/features/main/AssessmentPanel/hooks/useToggleTest";
import { FULLY_DISABLED_SLUGS } from "@/config/disabledTests";

export const TestList: FC = () => {
  const { data: testCollections } = useTGetTestBank();
  const { mutate: toggleTest } = useToggleTest();

  const sortedCollections = testCollections?.slice().sort((a, b) => {
    const aDisabled = FULLY_DISABLED_SLUGS.has(a.slug) ? 1 : 0;
    const bDisabled = FULLY_DISABLED_SLUGS.has(b.slug) ? 1 : 0;
    return aDisabled - bDisabled;
  });

  if (!sortedCollections || sortedCollections.length === 0) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center text-sm text-neutral-400">
        Belum ada tes yang tersedia.
      </div>
    );
  }

  // Split into two balanced columns
  const midpoint = Math.ceil(sortedCollections.length / 2);
  const leftColumn = sortedCollections.slice(0, midpoint);
  const rightColumn = sortedCollections.slice(midpoint);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Column 1 */}
      <div className="flex flex-col divide-y divide-neutral-100 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        {leftColumn.map((collection, index) => {
          const { id, alias, is_active, slug } = collection || {};
          const fullyDisabled = FULLY_DISABLED_SLUGS.has(slug);
          return (
            <TestItem
              key={id}
              number={String(index + 1).padStart(2, "0")}
              title={alias}
              enabled={is_active}
              slug={slug}
              onToggle={() => toggleTest(id)}
              fullyDisabled={fullyDisabled}
            />
          );
        })}
      </div>

      {/* Column 2 */}
      <div className="flex flex-col divide-y divide-neutral-100 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        {rightColumn.map((collection, index) => {
          const { id, alias, is_active, slug } = collection || {};
          const fullyDisabled = FULLY_DISABLED_SLUGS.has(slug);
          return (
            <TestItem
              key={id}
              number={String(midpoint + index + 1).padStart(2, "0")}
              title={alias}
              enabled={is_active}
              slug={slug}
              onToggle={() => toggleTest(id)}
              fullyDisabled={fullyDisabled}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestList;
