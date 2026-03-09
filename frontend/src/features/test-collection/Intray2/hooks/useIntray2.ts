import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { intray2Docs } from "@/data/intray2";
import { pb } from "@/lib/pocketbase";
import type {
  WorksheetRow,
  WorksheetField,
} from "@/components/IntrayWorksheetTable";

export type { WorksheetRow, WorksheetField };

type Intray2FormValues = {
  kk: WorksheetRow[];
};

export const MAX_KK_ROWS = 30;

let _counter = 0;
function makeRow(): WorksheetRow {
  _counter++;
  return {
    id: `row-${_counter}-${Date.now()}`,
    topikPermasalahan: "",
    tingkatKepentingan: "",
    tindakanSolusi: "",
    noMemo: "",
  };
}

function makeRows(count: number): WorksheetRow[] {
  return Array.from({ length: count }, makeRow);
}

function patchRow(
  rows: WorksheetRow[],
  id: string,
  field: WorksheetField,
  value: string,
): WorksheetRow[] {
  return rows.map((r) => (r.id === id ? { ...r, [field]: value } : r));
}

export function useIntray2() {
  const [activeDocId, setActiveDocId] = useState<string>(intray2Docs[0].id);
  const [isDocPanelOpen, setIsDocPanelOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const methods = useForm<Intray2FormValues>({
    defaultValues: (() => {
      try {
        const saved = JSON.parse(
          sessionStorage.getItem("intray2_progress") || "null",
        );
        return { kk: saved?.kk ?? makeRows(5) };
      } catch {
        return { kk: makeRows(5) };
      }
    })(),
  });
  const { watch, getValues, setValue } = methods;

  const kkRows = watch("kk");

  const updateKkRow = (id: string, field: WorksheetField, value: string) => {
    setValue("kk", patchRow(getValues("kk"), id, field, value));
  };

  const addKkRow = () => {
    const rows = getValues("kk");
    if (rows.length >= MAX_KK_ROWS) return;
    setValue("kk", [...rows, makeRow()]);
  };

  const toggleDocPanel = () => setIsDocPanelOpen((p) => !p);

  // Persist rows across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem(
        "intray2_progress",
        JSON.stringify({ kk: value.kk }),
      );
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleSubmit = async () => {
    if (isSubmitted) return;
    const { kk } = getValues();
    const participantId = pb.authStore.model?.id;
    if (!participantId) return;
    try {
      await pb.collection("test_results").create({
        participant: participantId,
        test_type: "intray2",
        status: "completed",
        data: { kk },
      });
      sessionStorage.removeItem("intray2_progress");
      setIsSubmitted(true);
    } catch (err) {
      console.error("Intray-2 submission failed:", err);
    }
  };

  return {
    methods,
    kkRows,
    activeDocId,
    setActiveDocId,
    isDocPanelOpen,
    toggleDocPanel,
    isSubmitted,
    handleSubmit,
    updateKkRow,
    addKkRow,
  };
}
