import { createContext, useContext } from "react";
import { FormProvider } from "react-hook-form";
import { useDr } from "../hooks/useDr";

type DrContextValue = ReturnType<typeof useDr>;

const DrContext = createContext<DrContextValue | null>(null);

export function DrProvider({ children }: { children: React.ReactNode }) {
  const value = useDr();
  return (
    <FormProvider {...value.methods}>
      <DrContext.Provider value={value}>{children}</DrContext.Provider>
    </FormProvider>
  );
}

export function useDrContext(): DrContextValue {
  const ctx = useContext(DrContext);
  if (!ctx) throw new Error("useDrContext must be used inside DrProvider");
  return ctx;
}
