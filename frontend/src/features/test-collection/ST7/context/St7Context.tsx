import { createContext, useContext } from "react";
import { FormProvider } from "react-hook-form";
import { useSt7 } from "../hooks/useSt7";

type St7ContextValue = ReturnType<typeof useSt7>;

const St7Context = createContext<St7ContextValue | null>(null);

export function St7Provider({ children }: { children: React.ReactNode }) {
  const value = useSt7();
  return (
    <FormProvider {...value.methods}>
      <St7Context.Provider value={value}>{children}</St7Context.Provider>
    </FormProvider>
  );
}

export function useSt7Context(): St7ContextValue {
  const ctx = useContext(St7Context);
  if (!ctx) throw new Error("useSt7Context must be used inside St7Provider");
  return ctx;
}
