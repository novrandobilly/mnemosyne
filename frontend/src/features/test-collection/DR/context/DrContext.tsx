import { createContext, useContext } from "react";
import { useDr, type DrAnswerRecord } from "../hooks/useDr";

interface DrContextValue {
  answers: DrAnswerRecord;
  selectAnswer: (id: number, option: string) => void;
  isTimeUp: boolean;
  timeDisplay: string;
  totalQuestions: number;
  answeredCount: number;
}

const DrContext = createContext<DrContextValue | null>(null);

export function DrProvider({ children }: { children: React.ReactNode }) {
  const value = useDr();
  return <DrContext.Provider value={value}>{children}</DrContext.Provider>;
}

export function useDrContext(): DrContextValue {
  const ctx = useContext(DrContext);
  if (!ctx) throw new Error("useDrContext must be used inside DrProvider");
  return ctx;
}
