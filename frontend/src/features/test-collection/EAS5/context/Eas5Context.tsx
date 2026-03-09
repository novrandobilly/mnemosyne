import { createContext, useContext, type ReactNode } from "react";
import { FormProvider } from "react-hook-form";
import { useEas5 } from "../hooks/useEas5";

type Eas5ContextValue = ReturnType<typeof useEas5>;

const Eas5Context = createContext<Eas5ContextValue | null>(null);

export const Eas5Provider = ({ children }: { children: ReactNode }) => {
  const value = useEas5();
  return (
    <FormProvider {...value.methods}>
      <Eas5Context.Provider value={value}>{children}</Eas5Context.Provider>
    </FormProvider>
  );
};

export const useEas5Context = (): Eas5ContextValue => {
  const ctx = useContext(Eas5Context);
  if (!ctx) throw new Error("useEas5Context must be used within Eas5Provider");
  return ctx;
};
