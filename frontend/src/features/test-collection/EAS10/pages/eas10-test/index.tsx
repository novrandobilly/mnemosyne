import { MainWrapper } from "@/components/MainWrapper";
import { Eas10Provider } from "../../context/Eas10Context";
import { EAS10Header } from "./features/EAS10Header";
import { EAS10TimeUpBanner } from "./features/EAS10TimeUpBanner";
import { EAS10List } from "./features/EAS10List";

const Eas10TestInner = () => {
  return (
    <MainWrapper pageTitle="EAS10">
      <div className="w-full flex justify-center">
        <div className="flex max-w-xl flex-col gap-6 w-full">
          <EAS10Header />
          <EAS10TimeUpBanner />
          <EAS10List />
        </div>
      </div>
    </MainWrapper>
  );
};

export const Eas10Test = () => (
  <Eas10Provider>
    <Eas10TestInner />
  </Eas10Provider>
);
