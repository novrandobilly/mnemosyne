import { MainWrapper } from "@/components/MainWrapper";
import { useAccountGenerator } from "./hooks/useAccountGenerator";
import { GenerationForm } from "./features/GenerationForm";
import { SessionSummary } from "./features/SessionSummary";
import { CredentialsTable } from "./features/CredentialsTable";

const AccountGenerator = () => {
  const {
    formMethods,
    generatedAccounts,
    copyState,
    isPending,
    handleRequestGenerate,
    handleCopy,
    handleExport,
  } = useAccountGenerator();

  return (
    <div className="relative min-h-screen text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-[110px]" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-neutral-200/70 blur-[90px]" />
        <div className="absolute bottom-12 right-1/3 h-40 w-40 rounded-full bg-amber-100/70 blur-[80px]" />
      </div>

      <MainWrapper>
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <GenerationForm
            formMethods={formMethods}
            onSubmit={handleRequestGenerate}
            isPending={isPending}
          />
          <SessionSummary accountCount={generatedAccounts.length} />
        </section>

        <CredentialsTable
          accounts={generatedAccounts}
          copyState={copyState}
          onCopy={handleCopy}
          onExport={handleExport}
        />
      </MainWrapper>
    </div>
  );
};

export default AccountGenerator;
