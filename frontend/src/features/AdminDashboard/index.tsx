type Participant = {
  id: string;
  name: string;
  testNumber: string;
  date: string;
  flags: boolean[];
};

const flagLabels = [
  "PK",
  "DISC",
  "INV3",
  "INV4",
  "EAS4",
  "EAS5",
  "EAS6",
  "EAS7",
  "EAS10",
  "A5",
  "DR",
  "DA5",
  "ST7",
  "Intray1",
  "Intray2",
];

const participants: Participant[] = [
  {
    id: "P-001",
    name: "Alea Thorne",
    testNumber: "10/13",
    date: "Feb 10, 2026",
    flags: [
      true,
      true,
      false,
      true,
      false,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      false,
    ],
  },
  {
    id: "P-002",
    name: "Noah Patel",
    testNumber: "7/13",
    date: "Feb 09, 2026",
    flags: [
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
    ],
  },
  {
    id: "P-003",
    name: "Lina Watanabe",
    testNumber: "12/13",
    date: "Feb 08, 2026",
    flags: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
    ],
  },
  {
    id: "P-004",
    name: "Marco Silva",
    testNumber: "5/13",
    date: "Feb 07, 2026",
    flags: [
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
    ],
  },
  {
    id: "P-005",
    name: "Evelyn Cole",
    testNumber: "9/13",
    date: "Feb 06, 2026",
    flags: [
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
    ],
  },
  {
    id: "P-006",
    name: "Rafi Idris",
    testNumber: "3/13",
    date: "Feb 05, 2026",
    flags: [
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
    ],
  },
];

const AdminDashboard = () => {
  return (
    <div className="relative min-h-screen bg-[#f8f7f4] text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-[110px]" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-neutral-200/70 blur-[90px]" />
        <div className="absolute bottom-12 right-1/3 h-40 w-40 rounded-full bg-amber-100/70 blur-[80px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 pt-10 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-lg font-bold text-white">
              A
            </div>
            <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-neutral-500" />
              Admin Dashboard
            </div>
          </div>
          <nav className="order-3 flex flex-wrap items-center gap-2 text-xs md:order-0">
            <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
              <a
                href="#"
                className="rounded-full bg-neutral-900 px-3 py-1.5 font-semibold text-white"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="rounded-full px-3 py-1.5 font-semibold text-neutral-600 transition hover:bg-neutral-100"
              >
                Participants
              </a>
              <a
                href="#"
                className="rounded-full px-3 py-1.5 font-semibold text-neutral-600 transition hover:bg-neutral-100"
              >
                Assessments
              </a>
              <a
                href="#"
                className="rounded-full px-3 py-1.5 font-semibold text-neutral-600 transition hover:bg-neutral-100"
              >
                Settings
              </a>
            </div>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600 shadow-sm">
              Feb 11, 2026
            </div>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M10 3a7 7 0 0 1 6.93 6H19l-3 3-3-3h2.07A5 5 0 1 0 15 13h2a7 7 0 1 1-7-10z" />
              </svg>
              Refresh Page
            </button>
          </div>
        </header>

        <section className="flex flex-col gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Participant Overview
            </div>
            <h1 className="mt-2 text-2xl font-semibold text-neutral-900">
              Test completion status by participant
            </h1>
            <p className="mt-2 text-sm text-neutral-600">
              Monitor test completion across all participants. Use the flag
              columns to quickly see which tests are done.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-neutral-50 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  <tr>
                    <th className="px-5 py-3">No</th>
                    <th className="px-5 py-3">Participant</th>
                    <th className="px-5 py-3">Test #</th>
                    <th className="px-5 py-3">Date</th>
                    <th className="px-5 py-3">Flags (13)</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {participants.map((participant, index) => (
                    <tr key={participant.id} className="hover:bg-neutral-50">
                      <td className="px-5 py-4 text-neutral-500">
                        {String(index + 1).padStart(2, "0")}
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-semibold text-neutral-900">
                          {participant.name}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {participant.id}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-neutral-700">
                        {participant.testNumber}
                      </td>
                      <td className="px-5 py-4 text-neutral-700">
                        {participant.date}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex max-w-125 flex-wrap gap-2">
                          {flagLabels.map((label, flagIndex) => {
                            const isDone = participant.flags[flagIndex];
                            return (
                              <div
                                key={`${participant.id}-${label}`}
                                className={`flex items-center justify-center px-2 border rounded-md text-xxs font-semibold ${
                                  isDone
                                    ? "bg-green-100 text-green-700 border-green-300"
                                    : "bg-neutral-100 text-neutral-400 border-neutral-300 "
                                }`}
                                title={`${label}: ${isDone ? "Done" : "Not done"}`}
                              >
                                {label}
                              </div>
                            );
                          })}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
