import { MainWrapper } from "@/components/MainWrapper";
import { useAccountGenerator } from "./hooks/useAccountGenerator";
import { GenerationForm } from "./features/GenerationForm";
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
    <MainWrapper>
      <div className="flex flex-col gap-6">
        <GenerationForm
          formMethods={formMethods}
          onSubmit={handleRequestGenerate}
          isPending={isPending}
        />

        <CredentialsTable
          accounts={generatedAccounts}
          copyState={copyState}
          onCopy={handleCopy}
          onExport={handleExport}
        />
      </div>
    </MainWrapper>
  );
};

export default AccountGenerator;
