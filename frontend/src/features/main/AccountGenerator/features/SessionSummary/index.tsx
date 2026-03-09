import { IntiDinamisText } from "@/components/IntiDinamisText";

interface SessionSummaryProps {
  accountCount: number;
}

export const SessionSummary = ({ accountCount }: SessionSummaryProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <IntiDinamisText
          size="12"
          className="uppercase tracking-[0.3em] text-neutral-500"
        >
          Session summary
        </IntiDinamisText>
        <IntiDinamisText
          as="h2"
          size="20"
          weight="semibold"
          className="mt-3 text-neutral-900"
        >
          Accounts generated
        </IntiDinamisText>
        <IntiDinamisText size="14" className="mt-2 text-neutral-600">
          Only accounts created this session are shown. Export before leaving
          this page.
        </IntiDinamisText>
        <div className="mt-5 flex flex-col gap-3">
          <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
            <div>
              <div className="font-semibold text-neutral-900">
                {accountCount} account{accountCount !== 1 ? "s" : ""}
              </div>
              <div className="text-xs text-neutral-500">This session</div>
            </div>
            <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Live
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <IntiDinamisText
          size="12"
          className="uppercase tracking-[0.3em] text-neutral-500"
        >
          Info
        </IntiDinamisText>
        <IntiDinamisText
          as="h2"
          size="20"
          weight="semibold"
          className="mt-3 text-neutral-900"
        >
          First-time login flow
        </IntiDinamisText>
        <IntiDinamisText size="14" className="mt-2 text-neutral-600">
          After logging in, participants are guided through an onboarding form
          to fill in their biodata. The account becomes fully active once
          onboarding is complete.
        </IntiDinamisText>
      </div>
    </div>
  );
};
