import PapiWheel from "@/assets/PapiWheel";
import AdminWrapper from "../../components/MainWrapper/features/admin-wrapper";

type ResultLink = {
  id: string;
  label: string;
  status: "Completed" | "In Progress" | "Not Started";
  date: string;
};

const resultLinks: ResultLink[] = [
  { id: "PK", label: "PK", status: "Completed", date: "Feb 10, 2026" },
  { id: "DISC", label: "DISC", status: "Completed", date: "Feb 10, 2026" },
  { id: "INV3", label: "INV3", status: "Completed", date: "Feb 09, 2026" },
  { id: "INV4", label: "INV4", status: "Completed", date: "Feb 09, 2026" },
];

const scoreItems = [
  { id: "EAS4", label: "EAS4", score: "82", status: "Completed" },
  { id: "EAS5", label: "EAS5", score: "79", status: "Completed" },
  { id: "EAS6", label: "EAS6", score: "-", status: "In Progress" },
  { id: "EAS7", label: "EAS7", score: "-", status: "Not Started" },
  { id: "EAS10", label: "EAS10", score: "-", status: "Not Started" },
  { id: "A5", label: "A5", score: "88", status: "Completed" },
  { id: "DR", label: "DR", score: "91", status: "Completed" },
  { id: "DA5", label: "DA5", score: "-", status: "Not Started" },
  { id: "ST7", label: "ST7", score: "84", status: "Completed" },
];

const dummyPapiData = {
  // WORK DIRECTION
  N: 5, // Need to finish a task
  G: 8, // Role of hard intense worker
  A: 3, // Need for achievement

  // LEADERSHIP
  L: 9, // Leadership role
  P: 7, // Need to control others
  I: 4, // Ease in decision making

  // ACTIVITY
  T: 6, // Pace
  V: 2, // Rigorous type

  // SOCIAL NATURE
  X: 8, // Need to be noticed
  S: 5, // Social extension
  B: 4, // Need to belong to group
  O: 1, // Need for closeness and attention

  // WORK STYLE
  R: 7, // Theoretical type
  D: 9, // Interest in working with detail
  C: 3, // Organized type

  // TEMPERAMENT
  Z: 5, // Need for change
  E: 2, // Emotional restraint
  K: 6, // Need to be forceful

  // FELLOWSHIP
  F: 4, // Need to support authority
  W: 8, // Need for rules and supervision
};

const ParticipantDetails = () => {
  const scoredValues = scoreItems
    .map((item) => Number(item.score))
    .filter((value) => !Number.isNaN(value));
  const averageScore = scoredValues.length
    ? (
        scoredValues.reduce((sum, value) => sum + value, 0) /
        scoredValues.length
      ).toFixed(1)
    : "-";

  return (
    <div className="relative min-h-screen text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-[110px]" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-neutral-200/70 blur-[90px]" />
        <div className="absolute bottom-12 right-1/3 h-40 w-40 rounded-full bg-amber-100/70 blur-[80px]" />
      </div>

      <AdminWrapper>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Participant
                </div>
                <h1 className="mt-2 text-2xl font-semibold text-neutral-900">
                  Alea Thorne
                </h1>
                <p className="mt-2 text-sm text-neutral-600">
                  Candidate ID: P-001 · Role Track: Analyst
                </p>
              </div>
              <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-600">
                Active
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Email
                </div>
                <div className="mt-2 text-sm font-semibold text-neutral-900">
                  alea.thorne@company.com
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Phone
                </div>
                <div className="mt-2 text-sm font-semibold text-neutral-900">
                  +1 (555) 203-1142
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Date of Birth
                </div>
                <div className="mt-2 text-sm font-semibold text-neutral-900">
                  Oct 12, 1998
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Last Login
                </div>
                <div className="mt-2 text-sm font-semibold text-neutral-900">
                  Feb 11, 2026 · 09:42
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Employment
              </div>
              <h2 className="mt-3 text-xl font-semibold text-neutral-900">
                Company details
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <span className="text-neutral-600">Company</span>
                  <span className="font-semibold text-neutral-900">
                    Mnemosyne Labs
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <span className="text-neutral-600">Department</span>
                  <span className="font-semibold text-neutral-900">
                    Analytics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Test Results
              </div>
              <h2 className="mt-2 text-xl font-semibold text-neutral-900">
                Reports and scoring overview
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Detailed reports are available for core tests. Single-score
                assessments are listed in the scoring table.
              </p>
            </div>
            <button
              type="button"
              className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              Export Summary
            </button>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {resultLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-neutral-900">
                      {link.label}
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        link.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : link.status === "In Progress"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      {link.status}
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-neutral-500">
                    Last updated: {link.date}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-neutral-700">
                    View report
                    <span className="text-sm">→</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Scoring List
              </div>
              <div className="mt-3 space-y-2 text-sm">
                {scoreItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3"
                  >
                    <div className="font-semibold text-neutral-900">
                      {item.label}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-neutral-900">
                        {item.score}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          item.status === "Completed"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.status === "In Progress"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-neutral-100 text-neutral-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                    Average Score
                  </div>
                  <div className="text-sm font-semibold text-neutral-900">
                    {averageScore}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PapiWheel data={dummyPapiData} />
      </AdminWrapper>
    </div>
  );
};

export default ParticipantDetails;
