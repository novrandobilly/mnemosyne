import { MainWrapper } from "@/components/MainWrapper";
import { EAS4ColumnHeaders } from "../features/EAS4ColumnHeaders";
import { EAS4Header } from "../features/EAS4Header";
import { EAS4List } from "../features/EAS4List";

import { Eas4Provider } from "../context/Eas4Context";

const Eas4TestInner = () => {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center">
      <EAS4Header />
      <EAS4ColumnHeaders />
      <EAS4List />
    </div>
  );
};

export const Eas4Test = () => (
  <MainWrapper pageTitle="EAS4">
    <Eas4Provider>
      <div className="flex justify-center">
        <Eas4TestInner />
      </div>
    </Eas4Provider>
  </MainWrapper>
);
