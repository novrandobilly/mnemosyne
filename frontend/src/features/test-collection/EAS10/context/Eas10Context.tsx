import { createContext, useContext, type ReactNode } from "react";
import { useEas10, type Eas10AnswerRecord } from "../hooks/useEas10";
import type { Eas10Answer } from "@/data/eas10";

interface Eas10ContextValue {
  answers: Eas10AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (id: number, answer: Eas10Answer) => void;
  formatTime: (seconds: number) => string;
}

const Eas10Context = createContext<Eas10ContextValue | null>(null);

export const Eas10Provider = ({ children }: { children: ReactNode }) => {
  const value = useEas10();
  return (
    <Eas10Context.Provider value={value}>{children}</Eas10Context.Provider>
  );
};

export const useEas10Context = (): Eas10ContextValue => {
  const ctx = useContext(Eas10Context);
  if (!ctx)
    throw new Error("useEas10Context must be used within Eas10Provider");
  return ctx;
};
