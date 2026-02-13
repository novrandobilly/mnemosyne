import AdminWrapper from "../../components/MainWrapper/features/admin-wrapper";

const tests = [
  {
    id: "reasoning",
    title: "Logical Reasoning",
    desc: "Evaluate pattern recognition, deductions, and argument analysis.",
    status: "Open",
    tag: "Core",
  },
  {
    id: "numerical",
    title: "Numerical Aptitude",
    desc: "Measure numerical literacy, ratios, and data interpretation.",
    status: "Open",
    tag: "Core",
  },
  {
    id: "verbal",
    title: "Verbal Comprehension",
    desc: "Reading comprehension and vocabulary in context.",
    status: "Open",
    tag: "Core",
  },
  {
    id: "spatial",
    title: "Spatial Awareness",
    desc: "3D rotation, mental mapping, and visual logic.",
    status: "Open",
    tag: "Advanced",
  },
  {
    id: "focus",
    title: "Attention & Focus",
    desc: "Sustained attention, signal detection, and speed.",
    status: "Open",
    tag: "Behavioral",
  },
  {
    id: "memory",
    title: "Working Memory",
    desc: "Short-term memory span and rapid recall.",
    status: "Open",
    tag: "Cognitive",
  },
  {
    id: "situational",
    title: "Situational Judgement",
    desc: "Scenario-based decisions aligned to values.",
    status: "Open",
    tag: "Behavioral",
  },
  {
    id: "coding",
    title: "Problem Solving",
    desc: "Structured thinking, constraints, and prioritization.",
    status: "Open",
    tag: "Advanced",
  },
  {
    id: "ethics",
    title: "Ethics & Compliance",
    desc: "Policy awareness and responsible judgment.",
    status: "Open",
    tag: "Compliance",
  },
  {
    id: "personality",
    title: "Work Style",
    desc: "Preferences, collaboration style, and adaptability.",
    status: "Open",
    tag: "Profile",
  },
];

const AssessmentLobby = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-3xl -translate-x-1/2 rounded-full bg-neutral-200/70 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 -right-48 h-80 w-80 rounded-full bg-neutral-100/80 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-64 w-64 rounded-full bg-neutral-200/70 blur-[140px]" />
      </div>

      <AdminWrapper pageTitle="Assessment Lobby">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Instructions
            </div>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-500" />
                Use a quiet environment and stable connection.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-500" />
                You can pause between tests, not during a test.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-500" />
                Each section has unique scoring criteria.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-500" />
                Results will appear in your dashboard.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Candidate Profile
              </div>
              <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600">
                Verified
              </span>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700">
                <span className="text-lg font-semibold">AT</span>
              </div>
              <div>
                <div className="text-base font-semibold text-neutral-900">
                  Alea Thorne
                </div>
                <div className="text-xs text-neutral-500">
                  Applied on Feb 10, 2026
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-neutral-600">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
                <div className="text-neutral-500">Role Track</div>
                <div className="mt-2 font-semibold text-neutral-900">
                  Analyst
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
                <div className="text-neutral-500">Priority</div>
                <div className="mt-2 font-semibold text-neutral-900">High</div>
              </div>
            </div>
          </div>
        </div>

        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Available Tests
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
                Choose a test to enter
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                All assessments are single-attempt unless reopened by an
                administrator.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tests.map((test, index) => (
              <div
                key={test.id}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="absolute right-3 top-3">
                  <div className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                    {test.status}
                  </div>
                </div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-base font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="mb-4">
                  <h3 className="mb-1.5 text-lg font-semibold text-neutral-900">
                    {test.title}
                  </h3>
                  <div className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
                    {test.tag}
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50"
                >
                  Enter Test →
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Support
              </div>
              <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                Need help before starting?
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Reach out to the assessment coordinator for any clarifications.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                View FAQ
              </button>
              <button
                type="button"
                className="rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600"
              >
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </AdminWrapper>
    </div>
  );
};

export default AssessmentLobby;
