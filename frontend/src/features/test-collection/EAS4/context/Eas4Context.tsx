import { createContext, useContext, type ReactNode } from "react";
import { useEas4, type Eas4AnswerRecord } from "../hooks/useEas4";

interface Eas4ContextValue {
  answers: Eas4AnswerRecord;
  focusedId: number;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (id: number, isSame: boolean) => void;
  setFocusedId: (id: number) => void;
  formatTime: (seconds: number) => string;
}

const Eas4Context = createContext<Eas4ContextValue | null>(null);

export const Eas4Provider = ({ children }: { children: ReactNode }) => {
  const value = useEas4();
  return <Eas4Context.Provider value={value}>{children}</Eas4Context.Provider>;
};

export const useEas4Context = (): Eas4ContextValue => {
  const ctx = useContext(Eas4Context);
  if (!ctx) throw new Error("useEas4Context must be used within Eas4Provider");
  return ctx;
};
