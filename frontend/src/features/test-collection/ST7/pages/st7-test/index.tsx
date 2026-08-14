import { MainWrapper } from "@/components/MainWrapper";
import { st7Data } from "@/data/st7";
import { St7Provider } from "../../context/St7Context";
import { St7Header } from "../../features/St7Header";
import { St7TimeUpBanner } from "../../features/St7TimeUpBanner";
import { St7PhaseSection } from "../../features/St7PhaseSection";

export function St7Test() {
  return (
    <MainWrapper pageTitle="ST7">
      <St7Provider>
        <div className="flex flex-col gap-6">
          <St7Header />
          <St7TimeUpBanner />
          {st7Data.map((phase) => (
            <St7PhaseSection key={phase.phase} phase={phase} />
          ))}
        </div>
      </St7Provider>
    </MainWrapper>
  );
}
