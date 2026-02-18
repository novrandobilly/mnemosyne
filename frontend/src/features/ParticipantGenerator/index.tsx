import AdminWrapper from "../../components/MainWrapper/features/admin-wrapper";

type GeneratedAccount = {
  id: string;
  name: string;
  username: string;
  password: string;
  role: string;
  createdAt: string;
  status: "Active" | "Pending";
};

const generatedAccounts: GeneratedAccount[] = [
  {
    id: "ACC-001",
    name: "Alea Thorne",
    username: "alea.thorne",
    password: "TEMP-94K2",
    role: "Participant",
    createdAt: "Feb 11, 2026",
    status: "Active",
  },
  {
    id: "ACC-002",
    name: "Noah Patel",
    username: "noah.patel",
    password: "TEMP-3QX9",
    role: "Participant",
    createdAt: "Feb 11, 2026",
    status: "Pending",
  },
  {
    id: "ACC-003",
    name: "Lina Watanabe",
    username: "lina.watanabe",
    password: "TEMP-7C1D",
    role: "Participant",
    createdAt: "Feb 10, 2026",
    status: "Active",
  },
  {
    id: "ACC-004",
    name: "Marco Silva",
    username: "marco.silva",
    password: "TEMP-5N8M",
    role: "Participant",
    createdAt: "Feb 10, 2026",
    status: "Pending",
  },
];

const ParticipantGenerator = () => {
  return (
    <div className="relative min-h-screen text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-[110px]" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-neutral-200/70 blur-[90px]" />
        <div className="absolute bottom-12 right-1/3 h-40 w-40 rounded-full bg-amber-100/70 blur-[80px]" />
      </div>

      <AdminWrapper>
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Generate Accounts
            </div>
            <h1 className="mt-3 text-2xl font-semibold text-neutral-900">
              Create participant credentials
            </h1>
            <p className="mt-2 text-sm text-neutral-600">
              Generate usernames and temporary passwords. Share credentials with
              participants through your internal channel.
            </p>

            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Participant name"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">
                    Role
                  </label>
                  <select className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200">
                    <option>Participant</option>
                    <option>Observer</option>
                    <option>Reviewer</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">
                    Username Prefix
                  </label>
                  <input
                    type="text"
                    placeholder="first.last"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">
                    Temporary Password
                  </label>
                  <input
                    type="text"
                    placeholder="Auto-generate"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">
                    Cohort / Batch
                  </label>
                  <input
                    type="text"
                    placeholder="Feb-2026"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">
                    Notes
                  </label>
                  <input
                    type="text"
                    placeholder="Optional"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm transition hover:border-neutral-400 hover:bg-neutral-50"
                >
                  Generate Password
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-neutral-900 px-5 py-2 text-xs font-semibold text-white transition hover:bg-neutral-800"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Quick Actions
              </div>
              <h2 className="mt-3 text-xl font-semibold text-neutral-900">
                Bulk generation
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Enter how many participant accounts to create in this batch.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">
                    Number of accounts
                  </label>
                  <input
                    type="number"
                    min={1}
                    placeholder="e.g. 25"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-xl bg-neutral-900 px-4 py-3 text-xs font-semibold text-white transition hover:bg-neutral-800"
                >
                  Generate Accounts
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Activity
              </div>
              <h2 className="mt-3 text-xl font-semibold text-neutral-900">
                Latest generated accounts
              </h2>
              <div className="mt-4 space-y-3 text-sm text-neutral-600">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <div>
                    <div className="font-semibold text-neutral-900">
                      4 accounts
                    </div>
                    <div className="text-xs text-neutral-500">
                      Generated today
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <div>
                    <div className="font-semibold text-neutral-900">
                      12 accounts
                    </div>
                    <div className="text-xs text-neutral-500">
                      Generated this week
                    </div>
                  </div>
                  <div className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-600">
                    Summary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Generated Accounts
              </div>
              <h2 className="mt-2 text-xl font-semibold text-neutral-900">
                Share credentials securely
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Copy and deliver credentials through approved internal channels.
              </p>
            </div>
            <button
              type="button"
              className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              Export List
            </button>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-neutral-50 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  <tr>
                    <th className="px-5 py-3">Name</th>
                    <th className="px-5 py-3">Username</th>
                    <th className="px-5 py-3">Temp Password</th>
                    <th className="px-5 py-3">Role</th>
                    <th className="px-5 py-3">Created</th>
                    <th className="px-5 py-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {generatedAccounts.map((account) => (
                    <tr key={account.id} className="hover:bg-neutral-50">
                      <td className="px-5 py-4">
                        <div className="font-semibold text-neutral-900">
                          {account.name}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {account.id}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-neutral-700">
                        {account.username}
                      </td>
                      <td className="px-5 py-4 text-neutral-700">
                        <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold">
                          {account.password}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-neutral-700">
                        {account.role}
                      </td>
                      <td className="px-5 py-4 text-neutral-600">
                        {account.createdAt}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            account.status === "Active"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {account.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </AdminWrapper>
    </div>
  );
};

export default ParticipantGenerator;
