import { createContext, useContext, type ReactNode } from "react";
import { FormProvider } from "react-hook-form";
import { useEas6 } from "../hooks/useEas6";

type Eas6ContextValue = ReturnType<typeof useEas6>;

const Eas6Context = createContext<Eas6ContextValue | null>(null);

export const Eas6Provider = ({ children }: { children: ReactNode }) => {
  const value = useEas6();
  return (
    <FormProvider {...value.methods}>
      <Eas6Context.Provider value={value}>{children}</Eas6Context.Provider>
    </FormProvider>
  );
};

export const useEas6Context = (): Eas6ContextValue => {
  const ctx = useContext(Eas6Context);
  if (!ctx) throw new Error("useEas6Context must be used within Eas6Provider");
  return ctx;
};
