import { useTGetTestBank } from "@/tanstack/test/useTGetTestBank";
import type { FC } from "react";
import { TestItem } from "../testItem";
import { capitalizeFirstLetter } from "@/utils/tools";
import { useToggleTest } from "@/features/AssessmentPanel/hooks/useToggleTest";

export const TestList: FC = () => {
  const { data: testCollections } = useTGetTestBank();
  const { mutate: toggleTest } = useToggleTest();

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm divide-y divide-neutral-100">
      {testCollections?.map((collection, index) => {
        const { id, alias, is_active, type } = collection || {};
        return (
          <TestItem
            key={id}
            number={String(index + 1)}
            title={alias}
            tag={capitalizeFirstLetter(type)}
            enabled={is_active}
            onToggle={() => toggleTest(id)}
          />
        );
      })}
    </div>
  );
};
