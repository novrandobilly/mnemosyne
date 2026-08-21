import { useTGetTestBank } from "@/api/test/useTGetTestBank";
import type { FC } from "react";
import { TestItem } from "../testItem";
import { capitalizeFirstLetter } from "@/utils/tools";
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

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm divide-y divide-neutral-100">
      {sortedCollections?.map((collection, index) => {
        const { id, alias, is_active, type, slug } = collection || {};
        const fullyDisabled = FULLY_DISABLED_SLUGS.has(slug);
        return (
          <TestItem
            key={id}
            number={String(index + 1)}
            title={alias}
            tag={capitalizeFirstLetter(type)}
            enabled={is_active}
            onToggle={() => toggleTest(id)}
            fullyDisabled={fullyDisabled}
          />
        );
      })}
    </div>
  );
};
