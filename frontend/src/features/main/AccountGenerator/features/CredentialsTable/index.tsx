import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import type { GeneratedAccount } from "@/tanstack/users/useTBulkGenerateAccounts";

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
    <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <IntiDinamisText
            size="12"
            className="uppercase tracking-[0.3em] text-neutral-500"
          >
            Generated credentials
          </IntiDinamisText>
          <IntiDinamisText
            as="h2"
            size="20"
            weight="semibold"
            className="mt-2 text-neutral-900"
          >
            Share securely
          </IntiDinamisText>
          <IntiDinamisText size="14" className="mt-2 text-neutral-600">
            Copy and deliver credentials through approved internal channels.
            Passwords are shown in plain text only here.
          </IntiDinamisText>
        </div>
        <IntiDinamisButton
          type="button"
          variant="secondary"
          className="min-w-0 rounded-full px-4 py-2 text-xs"
          onClick={onExport}
          disabled={accounts.length === 0}
        >
          Export CSV
        </IntiDinamisButton>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200">
        {accounts.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 py-14">
            <IntiDinamisText size="14" className="text-neutral-400">
              No accounts generated yet. Use the form above to get started.
            </IntiDinamisText>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-neutral-50 text-xs uppercase tracking-[0.2em] text-neutral-500">
                <tr>
                  <th className="px-5 py-3">Username</th>
                  <th className="px-5 py-3">Temp Password</th>
                  <th className="px-5 py-3">Role</th>
                  <th className="px-5 py-3 text-right">Copy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {accounts.map((account) => {
                  const userKey = `${account.id}-user`;
                  const passKey = `${account.id}-pass`;
                  return (
                    <tr key={account.id} className="hover:bg-neutral-50">
                      <td className="px-5 py-4">
                        <div className="font-mono text-xs font-semibold text-neutral-900">
                          {account.username}
                        </div>
                        <div className="text-xs text-neutral-400">
                          {account.id}
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-xs font-semibold">
                          {account.password}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-neutral-700">
                        Participant
                      </td>
                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => onCopy(account.username, userKey)}
                            className="rounded-lg border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 transition hover:bg-neutral-100"
                          >
                            {copyState[userKey] ? "Copied!" : "User"}
                          </button>
                          <button
                            type="button"
                            onClick={() => onCopy(account.password, passKey)}
                            className="rounded-lg border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 transition hover:bg-neutral-100"
                          >
                            {copyState[passKey] ? "Copied!" : "Pass"}
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
