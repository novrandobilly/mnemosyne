import { createContext, useContext } from "react";
import { FormProvider } from "react-hook-form";
import { useIntray1 } from "../hooks/useIntray1";

type Intray1ContextValue = ReturnType<typeof useIntray1>;

const Intray1Context = createContext<Intray1ContextValue | null>(null);

export function Intray1Provider({ children }: { children: React.ReactNode }) {
  const value = useIntray1();
  return (
    <FormProvider {...value.methods}>
      <Intray1Context.Provider value={value}>
        {children}
      </Intray1Context.Provider>
    </FormProvider>
  );
}

export function useIntray1Context(): Intray1ContextValue {
  const ctx = useContext(Intray1Context);
  if (!ctx)
    throw new Error("useIntray1Context must be used inside Intray1Provider");
  return ctx;
}
