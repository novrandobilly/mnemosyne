import type { FC } from "react";
import { TestItem } from "./features/TestItem";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { useTGetTestBank } from "@/tanstack/test/useTGetTestBank";
import { useNavigate } from "react-router-dom";

export const TestEntrance: FC = () => {
  const { data: testBank } = useTGetTestBank();
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col">
        <IntiDinamisText
          size="12"
          as="h3"
          className="uppercase tracking-[0.3em] text-neutral-500"
        >
          Available Tests
        </IntiDinamisText>
        <IntiDinamisText
          as="h2"
          size="24"
          className="mt-2  font-semibold text-neutral-900"
        >
          Choose a test to enter
        </IntiDinamisText>
        <IntiDinamisText size="14" className="mt-2 text-neutral-600">
          All assessments are single-attempt unless reopened by an
          administrator.
        </IntiDinamisText>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2">
        {testBank?.map((test, index) => {
          if (!test?.is_active) return null; // Only show active tests
          const { alias, is_active, type, slug } = test;
          return (
            <TestItem
              key={test.id}
              title={alias}
              tag={type}
              status={is_active ? "Open" : "Closed"}
              orderNum={index + 1}
              onEnter={() => navigate(`/psikotes/${slug}`)}
            />
          );
        })}
      </div>
    </section>
  );
};
