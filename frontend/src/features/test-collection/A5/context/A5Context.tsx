import { createContext, useContext } from "react";
import { useA5, type A5AnswerRecord } from "../hooks/useA5";

interface A5ContextValue {
  answers: A5AnswerRecord;
  selectAnswer: (id: number, option: string) => void;
  isTimeUp: boolean;
  timeDisplay: string;
  totalQuestions: number;
  answeredCount: number;
}

const A5Context = createContext<A5ContextValue | null>(null);

export function A5Provider({ children }: { children: React.ReactNode }) {
  const value = useA5();
  return <A5Context.Provider value={value}>{children}</A5Context.Provider>;
}

export function useA5Context(): A5ContextValue {
  const ctx = useContext(A5Context);
  if (!ctx) throw new Error("useA5Context must be used inside A5Provider");
  return ctx;
}
