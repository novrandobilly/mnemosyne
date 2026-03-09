import { createContext, useContext, type ReactNode } from "react";
import { FormProvider } from "react-hook-form";
import { useEas10 } from "../hooks/useEas10";

type Eas10ContextValue = ReturnType<typeof useEas10>;

const Eas10Context = createContext<Eas10ContextValue | null>(null);

export const Eas10Provider = ({ children }: { children: ReactNode }) => {
  const value = useEas10();
  return (
    <FormProvider {...value.methods}>
      <Eas10Context.Provider value={value}>{children}</Eas10Context.Provider>
    </FormProvider>
  );
};

export const useEas10Context = (): Eas10ContextValue => {
  const ctx = useContext(Eas10Context);
  if (!ctx)
    throw new Error("useEas10Context must be used within Eas10Provider");
  return ctx;
};
