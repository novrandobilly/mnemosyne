import { createContext, useContext, type ReactNode } from "react";
import { useEas6, type Eas6AnswerRecord } from "../hooks/useEas6";

interface Eas6ContextValue {
  answers: Eas6AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (id: number, option: string) => void;
  formatTime: (seconds: number) => string;
}

const Eas6Context = createContext<Eas6ContextValue | null>(null);

export const Eas6Provider = ({ children }: { children: ReactNode }) => {
  const value = useEas6();
  return <Eas6Context.Provider value={value}>{children}</Eas6Context.Provider>;
};

export const useEas6Context = (): Eas6ContextValue => {
  const ctx = useContext(Eas6Context);
  if (!ctx) throw new Error("useEas6Context must be used within Eas6Provider");
  return ctx;
};
