import { createContext, useContext } from "react";
import { FormProvider } from "react-hook-form";
import { useDa5 } from "../hooks/useDa5";

type Da5ContextValue = ReturnType<typeof useDa5>;

const Da5Context = createContext<Da5ContextValue | null>(null);

export function Da5Provider({ children }: { children: React.ReactNode }) {
  const value = useDa5();
  return (
    <FormProvider {...value.methods}>
      <Da5Context.Provider value={value}>{children}</Da5Context.Provider>
    </FormProvider>
  );
}

export function useDa5Context(): Da5ContextValue {
  const ctx = useContext(Da5Context);
  if (!ctx) throw new Error("useDa5Context must be used inside Da5Provider");
  return ctx;
}
