import AdminWrapper from "@/components/MainWrapper/features/admin-wrapper";
import { st17Data } from "@/data/st17";
import { St17Provider } from "./context/St17Context";
import { St17Header } from "./features/St17Header";
import { St17TimeUpBanner } from "./features/St17TimeUpBanner";
import { St17PhaseSection } from "./features/St17PhaseSection";

export function St17Test() {
  return (
    <AdminWrapper pageTitle="ST17">
      <St17Provider>
        <div className="flex flex-col gap-6">
          <St17Header />
          <St17TimeUpBanner />
          {st17Data.map((phase) => (
            <St17PhaseSection key={phase.phase} phase={phase} />
          ))}
        </div>
      </St17Provider>
    </AdminWrapper>
  );
}
