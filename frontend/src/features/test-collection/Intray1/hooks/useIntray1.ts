import { useState } from "react";
import { intray1Docs } from "@/data/intray1";

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
  const [kk1Rows, setKk1Rows] = useState<WorksheetRow[]>(() => makeRows(5));
  const [kk2Rows, setKk2Rows] = useState<WorksheetRow[]>(() => makeRows(3));

  const [activeTab, setActiveTab] = useState<"kk1" | "kk2">("kk1");
  const [activeDocId, setActiveDocId] = useState<string>(intray1Docs[0].id);
  const [isDocPanelOpen, setIsDocPanelOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateKk1Row = (id: string, field: WorksheetField, value: string) =>
    setKk1Rows((prev) => patchRow(prev, id, field, value));

  const updateKk2Row = (id: string, field: WorksheetField, value: string) =>
    setKk2Rows((prev) => patchRow(prev, id, field, value));

  const addKk1Row = () => {
    if (kk1Rows.length >= MAX_KK1_ROWS) return;
    setKk1Rows((prev) => [...prev, makeRow()]);
  };

  const toggleDocPanel = () => setIsDocPanelOpen((p) => !p);

  const handleSubmit = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    console.log("Intray-1 submitted:", { kk1: kk1Rows, kk2: kk2Rows });
    // TODO: submit to PocketBase
  };

  return {
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
