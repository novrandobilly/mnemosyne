import { createContext, useContext } from "react";
import {
  useIntray1,
  type WorksheetRow,
  type WorksheetField,
} from "../hooks/useIntray1";

interface Intray1ContextValue {
  kk1Rows: WorksheetRow[];
  kk2Rows: WorksheetRow[];
  activeTab: "kk1" | "kk2";
  setActiveTab: (tab: "kk1" | "kk2") => void;
  activeDocId: string;
  setActiveDocId: (id: string) => void;
  isDocPanelOpen: boolean;
  toggleDocPanel: () => void;
  isSubmitted: boolean;
  handleSubmit: () => void;
  updateKk1Row: (id: string, field: WorksheetField, value: string) => void;
  updateKk2Row: (id: string, field: WorksheetField, value: string) => void;
  addKk1Row: () => void;
}

const Intray1Context = createContext<Intray1ContextValue | null>(null);

export function Intray1Provider({ children }: { children: React.ReactNode }) {
  const value = useIntray1();
  return (
    <Intray1Context.Provider value={value}>{children}</Intray1Context.Provider>
  );
}

export function useIntray1Context(): Intray1ContextValue {
  const ctx = useContext(Intray1Context);
  if (!ctx)
    throw new Error("useIntray1Context must be used inside Intray1Provider");
  return ctx;
}
