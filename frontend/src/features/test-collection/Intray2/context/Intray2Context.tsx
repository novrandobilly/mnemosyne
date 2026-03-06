import { createContext, useContext } from "react";
import {
  useIntray2,
  type WorksheetRow,
  type WorksheetField,
} from "../hooks/useIntray2";

interface Intray2ContextValue {
  kkRows: WorksheetRow[];
  activeDocId: string;
  setActiveDocId: (id: string) => void;
  isDocPanelOpen: boolean;
  toggleDocPanel: () => void;
  isSubmitted: boolean;
  handleSubmit: () => void;
  updateKkRow: (id: string, field: WorksheetField, value: string) => void;
  addKkRow: () => void;
}

const Intray2Context = createContext<Intray2ContextValue | null>(null);

export function Intray2Provider({ children }: { children: React.ReactNode }) {
  const value = useIntray2();
  return (
    <Intray2Context.Provider value={value}>{children}</Intray2Context.Provider>
  );
}

export function useIntray2Context(): Intray2ContextValue {
  const ctx = useContext(Intray2Context);
  if (!ctx)
    throw new Error("useIntray2Context must be used inside Intray2Provider");
  return ctx;
}
