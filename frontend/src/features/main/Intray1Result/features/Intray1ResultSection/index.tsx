import type { FC } from "react";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import type { Intray1Data } from "../../constants";
import IntrayResultTable from "../IntrayResultTable";

interface Intray1ResultSectionProps {
  data: Intray1Data;
}

const Intray1ResultSection: FC<Intray1ResultSectionProps> = ({ data }) => (
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
        Intray-1
      </IntiDinamisText>
    </div>

    <div className="flex flex-col gap-8">
      {/* KK1 – dynamic worksheet */}
      <div>
        <div className="mb-3 flex items-baseline gap-3">
          <IntiDinamisText
            size="12"
            className="uppercase tracking-[0.3em] text-neutral-500"
          >
            Kertas Kerja 1
          </IntiDinamisText>
          <span className="text-xs text-neutral-400">
            {data.kk1Rows.length} baris
          </span>
        </div>
        <IntrayResultTable rows={data.kk1Rows} />
      </div>

      <div className="border-t border-dashed border-neutral-200" />

      {/* KK2 – fixed 3-row summary */}
      <div>
        <div className="mb-3">
          <IntiDinamisText
            size="12"
            className="uppercase tracking-[0.3em] text-neutral-500"
          >
            Kertas Kerja 2
          </IntiDinamisText>
          <IntiDinamisText size="10" className="mt-1 text-neutral-400">
            Tiga tugas paling kritis yang diidentifikasi
          </IntiDinamisText>
        </div>
        <IntrayResultTable rows={data.kk2Rows} />
      </div>
    </div>
  </section>
);

export default Intray1ResultSection;
