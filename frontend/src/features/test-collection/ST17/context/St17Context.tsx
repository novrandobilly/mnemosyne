import { createContext, useContext } from "react";
import { FormProvider } from "react-hook-form";
import { useSt17 } from "../hooks/useSt17";

type St17ContextValue = ReturnType<typeof useSt17>;

const St17Context = createContext<St17ContextValue | null>(null);

export function St17Provider({ children }: { children: React.ReactNode }) {
  const value = useSt17();
  return (
    <FormProvider {...value.methods}>
      <St17Context.Provider value={value}>{children}</St17Context.Provider>
    </FormProvider>
  );
}

export function useSt17Context(): St17ContextValue {
  const ctx = useContext(St17Context);
  if (!ctx) throw new Error("useSt17Context must be used inside St17Provider");
  return ctx;
}
