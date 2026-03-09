import { createContext, useContext, type ReactNode } from "react";
import { FormProvider } from "react-hook-form";
import { useEas4 } from "../hooks/useEas4";

type Eas4ContextValue = ReturnType<typeof useEas4>;

const Eas4Context = createContext<Eas4ContextValue | null>(null);

export const Eas4Provider = ({ children }: { children: ReactNode }) => {
  const value = useEas4();
  return (
    <FormProvider {...value.methods}>
      <Eas4Context.Provider value={value}>{children}</Eas4Context.Provider>
    </FormProvider>
  );
};

export const useEas4Context = (): Eas4ContextValue => {
  const ctx = useContext(Eas4Context);
  if (!ctx) throw new Error("useEas4Context must be used within Eas4Provider");
  return ctx;
};
