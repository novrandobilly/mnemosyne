import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useTBulkGenerateAccounts,
  type GeneratedAccount,
} from "@/tanstack/users/useTBulkGenerateAccounts";
import { useModal } from "@/context/ModalContext";
import { GenerateConfirmModal } from "../features/GenerateConfirmModal";
import type { BulkGenerateFormValues } from "../types";

export const useAccountGenerator = () => {
  const [generatedAccounts, setGeneratedAccounts] = useState<
    GeneratedAccount[]
  >([]);
  const [copyState, setCopyState] = useState<Record<string, boolean>>({});

  const { mutate: bulkGenerate, isPending } = useTBulkGenerateAccounts();
  const { showModal } = useModal();

  const formMethods = useForm<BulkGenerateFormValues>({
    defaultValues: { count: 1, prefix: "MNM" },
  });

  // Called after modal confirmation — runs the actual mutation
  const onSubmit = ({ count, prefix }: BulkGenerateFormValues) => {
    bulkGenerate(
      { count: Number(count), prefix: prefix.trim() || "MNM" },
      {
        onSuccess: (accounts) => {
          setGeneratedAccounts((prev) => [...accounts, ...prev]);
        },
      },
    );
  };

  // Called when the form is submitted — shows the confirmation modal first
  const handleRequestGenerate = (values: BulkGenerateFormValues) => {
    showModal({
      content: (
        <GenerateConfirmModal
          values={values}
          isPending={isPending}
          onConfirm={onSubmit}
        />
      ),
    });
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopyState((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => setCopyState((prev) => ({ ...prev, [key]: false })), 1500);
  };

  const handleExport = () => {
    if (generatedAccounts.length === 0) return;
    const lines = [
      "Username,Password,Created",
      ...generatedAccounts.map((a) => `${a.username},${a.password}`),
    ].join("\n");
    const blob = new Blob([lines], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mnemosyne-accounts.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return {
    formMethods,
    generatedAccounts,
    copyState,
    isPending,
    handleRequestGenerate,
    handleCopy,
    handleExport,
  };
};
