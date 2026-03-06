import { useState } from "react";
import { intray2Docs } from "@/data/intray2";
import type {
  WorksheetRow,
  WorksheetField,
} from "@/components/IntrayWorksheetTable";

export type { WorksheetRow, WorksheetField };

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
  const [kkRows, setKkRows] = useState<WorksheetRow[]>(() => makeRows(5));

  const [activeDocId, setActiveDocId] = useState<string>(intray2Docs[0].id);
  const [isDocPanelOpen, setIsDocPanelOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateKkRow = (id: string, field: WorksheetField, value: string) =>
    setKkRows((prev) => patchRow(prev, id, field, value));

  const addKkRow = () => {
    if (kkRows.length >= MAX_KK_ROWS) return;
    setKkRows((prev) => [...prev, makeRow()]);
  };

  const toggleDocPanel = () => setIsDocPanelOpen((p) => !p);

  const handleSubmit = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    console.log("Intray-2 submitted:", { kk: kkRows });
    // TODO: submit to PocketBase
  };

  return {
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
