import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { intray1Docs } from "@/data/intray1";
import { pb } from "@/lib/pocketbase";

export type WorksheetField =
  | "topikPermasalahan"
  | "tingkatKepentingan"
  | "tindakanSolusi"
  | "noMemo";

export interface WorksheetRow {
  id: string;
  topikPermasalahan: string;
  tingkatKepentingan: string;
  tindakanSolusi: string;
  noMemo: string;
}

type Intray1FormValues = {
  kk1: WorksheetRow[];
  kk2: WorksheetRow[];
};

export const MAX_KK1_ROWS = 30;

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

export function useIntray1() {
  const [activeTab, setActiveTab] = useState<"kk1" | "kk2">("kk1");
  const [activeDocId, setActiveDocId] = useState<string>(intray1Docs[0].id);
  const [isDocPanelOpen, setIsDocPanelOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const methods = useForm<Intray1FormValues>({
    defaultValues: (() => {
      try {
        const saved = JSON.parse(
          sessionStorage.getItem("intray1_progress") || "null",
        );
        return {
          kk1: saved?.kk1 ?? makeRows(5),
          kk2: saved?.kk2 ?? makeRows(3),
        };
      } catch {
        return { kk1: makeRows(5), kk2: makeRows(3) };
      }
    })(),
  });
  const { watch, getValues, setValue } = methods;

  const kk1Rows = watch("kk1");
  const kk2Rows = watch("kk2");

  const updateKk1Row = (id: string, field: WorksheetField, value: string) => {
    setValue("kk1", patchRow(getValues("kk1"), id, field, value));
  };

  const updateKk2Row = (id: string, field: WorksheetField, value: string) => {
    setValue("kk2", patchRow(getValues("kk2"), id, field, value));
  };

  const addKk1Row = () => {
    const rows = getValues("kk1");
    if (rows.length >= MAX_KK1_ROWS) return;
    setValue("kk1", [...rows, makeRow()]);
  };

  const toggleDocPanel = () => setIsDocPanelOpen((p) => !p);

  // Persist rows across page refresh
  useEffect(() => {
    const subscription = watch((value) => {
      sessionStorage.setItem(
        "intray1_progress",
        JSON.stringify({ kk1: value.kk1, kk2: value.kk2 }),
      );
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleSubmit = async () => {
    if (isSubmitted) return;
    const { kk1, kk2 } = getValues();
    const participantId = pb.authStore.model?.id;
    if (!participantId) return;
    try {
      await pb.collection("test_results").create({
        participant: participantId,
        test_type: "intray1",
        status: "completed",
        data: { kk1, kk2 },
      });
      sessionStorage.removeItem("intray1_progress");
      setIsSubmitted(true);
    } catch (err) {
      console.error("Intray-1 submission failed:", err);
    }
  };

  return {
    methods,
    kk1Rows,
    kk2Rows,
    activeTab,
    setActiveTab,
    activeDocId,
    setActiveDocId,
    isDocPanelOpen,
    toggleDocPanel,
    isSubmitted,
    handleSubmit,
    updateKk1Row,
    updateKk2Row,
    addKk1Row,
  };
}
