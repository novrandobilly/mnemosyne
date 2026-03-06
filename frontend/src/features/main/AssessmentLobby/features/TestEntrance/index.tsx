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

      {(!testBank || testBank.every((t) => !t.is_active)) && (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-8 py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-7 w-7 text-neutral-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <IntiDinamisText
              size="14"
              weight="semibold"
              className="text-neutral-700"
            >
              No tests available right now
            </IntiDinamisText>
            <IntiDinamisText size="12" className="max-w-xs text-neutral-400">
              Your administrator hasn't opened any assessments yet. Check back
              soon or contact your coordinator.
            </IntiDinamisText>
          </div>
        </div>
      )}
    </section>
  );
};
