import { A5Provider } from "./context/A5Context";
import { A5Header } from "./features/A5Header";
import { A5TimeUpBanner } from "./features/A5TimeUpBanner";
import { A5List } from "./features/A5List";
import { MainWrapper } from "@/components/MainWrapper";

export function A5Test() {
  return (
    <MainWrapper pageTitle="A5">
      <A5Provider>
        <div className="min-h-screen bg-neutral-50 flex justify-center">
          <div className="flex flex-col max-w-4xl px-4 py-8 gap-6">
            <A5Header />
            <A5TimeUpBanner />
            <A5List />
          </div>
        </div>
      </A5Provider>
    </MainWrapper>
  );
}
