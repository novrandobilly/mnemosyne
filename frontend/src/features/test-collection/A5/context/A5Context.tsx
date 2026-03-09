import { createContext, useContext } from "react";
import { FormProvider } from "react-hook-form";
import { useA5 } from "../hooks/useA5";

type A5ContextValue = ReturnType<typeof useA5>;

const A5Context = createContext<A5ContextValue | null>(null);

export function A5Provider({ children }: { children: React.ReactNode }) {
  const value = useA5();
  return (
    <FormProvider {...value.methods}>
      <A5Context.Provider value={value}>{children}</A5Context.Provider>
    </FormProvider>
  );
}

export function useA5Context(): A5ContextValue {
  const ctx = useContext(A5Context);
  if (!ctx) throw new Error("useA5Context must be used inside A5Provider");
  return ctx;
}
