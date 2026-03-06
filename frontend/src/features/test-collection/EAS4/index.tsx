import { MainWrapper } from "@/components/MainWrapper";
import { Eas4Provider } from "./context/Eas4Context";
import { EAS4Header } from "./features/EAS4Header";
import { EAS4ColumnHeaders } from "./features/EAS4ColumnHeaders";
import { EAS4List } from "./features/EAS4List";

export const Eas4Test = () => (
  <MainWrapper pageTitle="EAS4">
    <Eas4Provider>
      <div className="flex justify-center">
        <div className="flex w-full max-w-3xl flex-col items-center">
          <EAS4Header />
          <EAS4ColumnHeaders />
          <EAS4List />
        </div>
      </div>
    </Eas4Provider>
  </MainWrapper>
);
