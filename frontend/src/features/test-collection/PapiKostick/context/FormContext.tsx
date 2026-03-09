import { createContext, useContext, type FC, type ReactNode } from "react";
import { FormProvider } from "react-hook-form";
import { usePapiKostick } from "./usePapiKostick";

export type { PapiAnswer, PapiFormValues } from "./usePapiKostick";
export { QUESTIONS_PER_PAGE, getPageForQuestion } from "./usePapiKostick";

type PapiKostickContextValue = ReturnType<typeof usePapiKostick>;

const PapiKostickContext = createContext<PapiKostickContextValue | null>(null);

export const PapiKostickProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const papiKostick = usePapiKostick();

  return (
    <PapiKostickContext.Provider value={papiKostick}>
      <FormProvider {...papiKostick.methods}>{children}</FormProvider>
    </PapiKostickContext.Provider>
  );
};

export const usePapiKostickContext = (): PapiKostickContextValue => {
  const ctx = useContext(PapiKostickContext);
  if (!ctx)
    throw new Error(
      "usePapiKostickContext must be used within PapiKostickProvider",
    );
  return ctx;
};
