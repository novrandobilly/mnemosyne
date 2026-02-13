import { useState } from "react";
import AdminWrapper from "../../components/MainWrapper/features/admin-wrapper";

interface Test {
  id: string;
  title: string;
  tag: string;
  enabled: boolean;
}

const initialTests: Test[] = [
  {
    id: "reasoning",
    title: "Logical Reasoning",
    tag: "Core",
    enabled: true,
  },
  {
    id: "numerical",
    title: "Numerical Aptitude",
    tag: "Core",
    enabled: true,
  },
  {
    id: "verbal",
    title: "Verbal Comprehension",
    tag: "Core",
    enabled: true,
  },
  {
    id: "spatial",
    title: "Spatial Awareness",
    tag: "Advanced",
    enabled: false,
  },
  {
    id: "focus",
    title: "Attention & Focus",
    tag: "Behavioral",
    enabled: true,
  },
  {
    id: "memory",
    title: "Working Memory",
    tag: "Cognitive",
    enabled: true,
  },
  {
    id: "situational",
    title: "Situational Judgement",
    tag: "Behavioral",
    enabled: false,
  },
  {
    id: "coding",
    title: "Problem Solving",
    tag: "Advanced",
    enabled: true,
  },
  {
    id: "ethics",
    title: "Ethics & Compliance",
    tag: "Compliance",
    enabled: false,
  },
  {
    id: "personality",
    title: "Work Style",
    tag: "Profile",
    enabled: true,
  },
];

const AssessmentPanel = () => {
  const [tests, setTests] = useState<Test[]>(initialTests);

  const toggleTest = (id: string) => {
    setTests((prev) =>
      prev.map((test) =>
        test.id === id ? { ...test, enabled: !test.enabled } : test,
      ),
    );
  };

  const enabledCount = tests.filter((t) => t.enabled).length;
  const disabledCount = tests.length - enabledCount;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-3xl -translate-x-1/2 rounded-full bg-neutral-200/70 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 -right-48 h-80 w-80 rounded-full bg-neutral-100/80 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-64 w-64 rounded-full bg-neutral-200/70 blur-[140px]" />
      </div>

      <AdminWrapper>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Total Tests
            </div>
            <div className="mt-1.5 text-2xl font-semibold text-neutral-900">
              {tests.length}
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Enabled
            </div>
            <div className="mt-1.5 text-2xl font-semibold text-green-700">
              {enabledCount}
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Disabled
            </div>
            <div className="mt-1.5 text-2xl font-semibold text-neutral-400">
              {disabledCount}
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Bulk Actions
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() =>
                  setTests((prev) =>
                    prev.map((test) => ({ ...test, enabled: true })),
                  )
                }
                className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                Enable All
              </button>
              <button
                type="button"
                onClick={() =>
                  setTests((prev) =>
                    prev.map((test) => ({ ...test, enabled: false })),
                  )
                }
                className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                Disable All
              </button>
            </div>
          </div>
        </div>

        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Test Visibility Control
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
                Manage participant access
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Toggle tests on or off to control which assessments are visible
                to participants in the lobby.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="divide-y divide-neutral-100">
              {tests.map((test, index) => (
                <div
                  key={test.id}
                  className="flex items-center gap-4 px-5 py-4 transition hover:bg-neutral-50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-semibold text-neutral-700">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-neutral-900">
                      {test.title}
                    </h3>
                    <div className="mt-1 text-sm text-neutral-500">
                      {test.tag}
                    </div>
                  </div>
                  <div className="shrink-0">
                    {test.enabled ? (
                      <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        Enabled
                      </div>
                    ) : (
                      <div className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500">
                        Disabled
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleTest(test.id)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 ${
                      test.enabled ? "bg-green-600" : "bg-neutral-300"
                    }`}
                    role="switch"
                    aria-checked={test.enabled}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        test.enabled ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AdminWrapper>
    </div>
  );
};

export default AssessmentPanel;
