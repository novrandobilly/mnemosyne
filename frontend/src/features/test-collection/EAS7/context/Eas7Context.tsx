import { createContext, useContext, type ReactNode } from "react";
import { FormProvider } from "react-hook-form";
import { useEas7 } from "../hooks/useEas7";

type Eas7ContextValue = ReturnType<typeof useEas7>;

const Eas7Context = createContext<Eas7ContextValue | null>(null);

export const Eas7Provider = ({ children }: { children: ReactNode }) => {
  const value = useEas7();
  return (
    <FormProvider {...value.methods}>
      <Eas7Context.Provider value={value}>{children}</Eas7Context.Provider>
    </FormProvider>
  );
};

export const useEas7Context = (): Eas7ContextValue => {
  const ctx = useContext(Eas7Context);
  if (!ctx) throw new Error("useEas7Context must be used within Eas7Provider");
  return ctx;
};
