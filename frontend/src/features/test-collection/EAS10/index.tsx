import { MainWrapper } from "@/components/MainWrapper";
import { Eas10Provider } from "./context/Eas10Context";
import { EAS10Header } from "./features/EAS10Header";
import { EAS10TimeUpBanner } from "./features/EAS10TimeUpBanner";
import { EAS10List } from "./features/EAS10List";

export const Eas10Test = () => (
  <MainWrapper pageTitle="EAS10">
    <Eas10Provider>
      <div className="w-full flex justify-center">
        <div className="flex max-w-md flex-col gap-6 w-full">
          <EAS10Header />
          <EAS10TimeUpBanner />
          <EAS10List />
        </div>
      </div>
    </Eas10Provider>
  </MainWrapper>
);
