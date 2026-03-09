import { createContext, useContext } from "react";
import { FormProvider } from "react-hook-form";
import {
  useDisc,
  DISC_QUESTIONS_PER_PAGE,
  getPageForDiscQuestion,
} from "../hooks/useDisc";
import type { ReactNode } from "react";

type DiscContextValue = ReturnType<typeof useDisc>;

const DiscContext = createContext<DiscContextValue | null>(null);

export { DISC_QUESTIONS_PER_PAGE, getPageForDiscQuestion };

export const DiscProvider = ({ children }: { children: ReactNode }) => {
  const disc = useDisc();
  return (
    <DiscContext.Provider value={disc}>
      <FormProvider {...disc.methods}>{children}</FormProvider>
    </DiscContext.Provider>
  );
};

export const useDiscContext = (): DiscContextValue => {
  const ctx = useContext(DiscContext);
  if (!ctx) {
    throw new Error("useDiscContext must be used within a DiscProvider");
  }
  return ctx;
};
