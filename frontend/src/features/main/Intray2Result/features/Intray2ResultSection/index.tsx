import type { FC } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import IntrayResultTable from "@/features/main/Intray1Result/features/IntrayResultTable";
import type { Intray2Data } from "../../constants";

interface Intray2ResultSectionProps {
  data: Intray2Data;
}

const Intray2ResultSection: FC<Intray2ResultSectionProps> = ({ data }) => (
  <section className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
    <div>
      <IntiDinamisText
        size="12"
        className="uppercase tracking-[0.3em] text-neutral-500"
      >
        Test Result
      </IntiDinamisText>
      <IntiDinamisText
        as="h2"
        size="20"
        weight="semibold"
        className="mt-2 text-neutral-900"
      >
        Intray-2
      </IntiDinamisText>
    </div>

    <div>
      <div className="mb-3 flex items-baseline gap-3">
        <IntiDinamisText
          size="12"
          className="uppercase tracking-[0.3em] text-neutral-500"
        >
          Kertas Kerja
        </IntiDinamisText>
        <span className="text-xs text-neutral-400">
          {data.kkRows.length} baris
        </span>
      </div>
      <IntrayResultTable rows={data.kkRows} />
    </div>
  </section>
);

export default Intray2ResultSection;
