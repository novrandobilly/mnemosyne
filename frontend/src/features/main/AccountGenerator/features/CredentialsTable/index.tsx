import type { GeneratedAccount } from "@/api/users/useTBulkGenerateAccounts";

interface CredentialsTableProps {
  accounts: GeneratedAccount[];
  copyState: Record<string, boolean>;
  onCopy: (text: string, key: string) => void;
  onExport: () => void;
}

export const CredentialsTable = ({
  accounts,
  copyState,
  onCopy,
  onExport,
}: CredentialsTableProps) => {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      {/* Header with Title and Export Action */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold tracking-tight text-neutral-900">
              Generated Credentials
            </h2>
            {accounts.length > 0 && (
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
                {accounts.length} account{accounts.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
          <p className="mt-0.5 text-xs text-neutral-500">
            Credentials generated in this session. Passwords are shown in plain text only here.
          </p>
        </div>

        <button
          type="button"
          onClick={onExport}
          disabled={accounts.length === 0}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-700 shadow-xs transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
          title="Export credentials as CSV"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Export CSV</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
        {accounts.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-1 py-12 text-center">
            <p className="text-sm font-medium text-neutral-500">
              Belum ada akun yang di-generate pada sesi ini.
            </p>
            <p className="text-xs text-neutral-400">
              Gunakan form di atas untuk men-generate akun peserta baru.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-[0.2em] text-neutral-500">
                <tr>
                  <th className="px-5 py-3">No</th>
                  <th className="px-5 py-3">Username</th>
                  <th className="px-5 py-3">Temp Password</th>
                  <th className="px-5 py-3">Role</th>
                  <th className="px-5 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {accounts.map((account, idx) => {
                  const userKey = `${account.id}-user`;
                  const passKey = `${account.id}-pass`;
                  return (
                    <tr
                      key={account.id}
                      className="transition-colors hover:bg-emerald-50/20"
                    >
                      <td className="px-5 py-3 text-xs font-medium text-neutral-500">
                        {String(idx + 1).padStart(2, "0")}
                      </td>
                      <td className="px-5 py-3">
                        <span className="font-mono text-xs font-semibold text-neutral-900">
                          {account.username}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <span className="inline-flex rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-neutral-800">
                          {account.password}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-xs text-neutral-600">
                        Participant
                      </td>
                      <td className="px-5 py-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => onCopy(account.username, userKey)}
                            className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                            title="Copy username"
                          >
                            {copyState[userKey] ? (
                              <span className="font-semibold text-emerald-700">
                                Copied!
                              </span>
                            ) : (
                              <span>Copy User</span>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => onCopy(account.password, passKey)}
                            className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                            title="Copy password"
                          >
                            {copyState[passKey] ? (
                              <span className="font-semibold text-emerald-700">
                                Copied!
                              </span>
                            ) : (
                              <span>Copy Pass</span>
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default CredentialsTable;
