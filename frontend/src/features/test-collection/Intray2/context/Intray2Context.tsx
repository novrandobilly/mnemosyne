import { createContext, useContext } from "react";
import { FormProvider } from "react-hook-form";
import { useIntray2 } from "../hooks/useIntray2";

type Intray2ContextValue = ReturnType<typeof useIntray2>;

const Intray2Context = createContext<Intray2ContextValue | null>(null);

export function Intray2Provider({ children }: { children: React.ReactNode }) {
  const value = useIntray2();
  return (
    <FormProvider {...value.methods}>
      <Intray2Context.Provider value={value}>
        {children}
      </Intray2Context.Provider>
    </FormProvider>
  );
}

export function useIntray2Context(): Intray2ContextValue {
  const ctx = useContext(Intray2Context);
  if (!ctx)
    throw new Error("useIntray2Context must be used inside Intray2Provider");
  return ctx;
}
