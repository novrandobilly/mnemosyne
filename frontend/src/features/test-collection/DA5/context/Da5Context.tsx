import { createContext, useContext } from "react";
import { useDa5, type Da5AnswerRecord } from "../hooks/useDa5";

interface Da5ContextValue {
  answers: Da5AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  currentIndex: number;
  isRulesOpen: boolean;
  selectAnswer: (id: number, option: string) => void;
  goToIndex: (idx: number) => void;
  goNext: () => void;
  goPrev: () => void;
  toggleRules: () => void;
  formatTime: (seconds: number) => string;
}

const Da5Context = createContext<Da5ContextValue | null>(null);

export function Da5Provider({ children }: { children: React.ReactNode }) {
  const value = useDa5();
  return <Da5Context.Provider value={value}>{children}</Da5Context.Provider>;
}

export function useDa5Context(): Da5ContextValue {
  const ctx = useContext(Da5Context);
  if (!ctx) throw new Error("useDa5Context must be used inside Da5Provider");
  return ctx;
}
