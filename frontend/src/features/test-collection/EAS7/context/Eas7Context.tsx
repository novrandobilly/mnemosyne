import { createContext, useContext, type ReactNode } from "react";
import { useEas7, type Eas7AnswerRecord } from "../hooks/useEas7";
import { eas7Data, type Eas7Answer } from "@/data/eas7";

interface Eas7ContextValue {
  currentGroupId: number;
  currentGroup: (typeof eas7Data)[number];
  answers: Eas7AnswerRecord;
  answeredCount: number;
  totalQuestions: number;
  secondsLeft: number;
  isTimeUp: boolean;
  selectAnswer: (questionId: number, answer: Eas7Answer) => void;
  goToGroup: (groupId: number) => void;
  formatTime: (seconds: number) => string;
}

const Eas7Context = createContext<Eas7ContextValue | null>(null);

export const Eas7Provider = ({ children }: { children: ReactNode }) => {
  const value = useEas7();
  return <Eas7Context.Provider value={value}>{children}</Eas7Context.Provider>;
};

export const useEas7Context = (): Eas7ContextValue => {
  const ctx = useContext(Eas7Context);
  if (!ctx) throw new Error("useEas7Context must be used within Eas7Provider");
  return ctx;
};
