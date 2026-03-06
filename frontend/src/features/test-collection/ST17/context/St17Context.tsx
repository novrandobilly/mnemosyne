import { createContext, useContext } from "react";
import { useSt17, type St17AnswerRecord } from "../hooks/useSt17";
import type { St17Answer } from "@/data/st17";

interface St17ContextValue {
  answers: St17AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (id: number, option: St17Answer) => void;
  formatTime: (seconds: number) => string;
}

const St17Context = createContext<St17ContextValue | null>(null);

export function St17Provider({ children }: { children: React.ReactNode }) {
  const value = useSt17();
  return <St17Context.Provider value={value}>{children}</St17Context.Provider>;
}

export function useSt17Context(): St17ContextValue {
  const ctx = useContext(St17Context);
  if (!ctx) throw new Error("useSt17Context must be used inside St17Provider");
  return ctx;
}
