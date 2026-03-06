import { type FC } from "react";
import type { PapiResults, PapiScoreKey } from "../../types";
import { FACTOR_INFO, CATEGORIES } from "./data";

interface InterpretationReportProps {
  results: PapiResults;
  participant: {
    name: string;
    date: string;
    company: string;
  };
}

const SCORE_ORDER: PapiScoreKey[] = [
  "N",
  "G",
  "A",
  "L",
  "P",
  "I",
  "T",
  "V",
  "S",
  "R",
  "D",
  "C",
  "E",
  "X",
  "B",
  "O",
  "Z",
  "K",
  "F",
  "W",
];

function getLevel(score: number): { label: string; cls: string } | null {
  if (score >= 7)
    return {
      label: "TINGGI",
      cls: "border-green-200 bg-green-50 text-green-700",
    };
  if (score <= 3)
    return { label: "RENDAH", cls: "border-red-200 bg-red-50 text-red-600" };
  return null;
}

const InterpretationReport: FC<InterpretationReportProps> = ({
  results,
  participant,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="mb-3 flex justify-end print:hidden">
        <button
          type="button"
          onClick={handlePrint}
          className="cursor-pointer rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm transition hover:bg-neutral-50"
        >
          Cetak Laporan
        </button>
      </div>

      <div className="papi-interp-report rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        {/* ── Report Header ── */}
        <div className="border-b border-neutral-200 pb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Laporan Interpretasi
          </p>
          <h1 className="mt-1 text-2xl font-bold text-neutral-900">
            PAPI Kostick
          </h1>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-sm text-neutral-600">
            <span>
              <span className="font-semibold text-neutral-800">Nama:</span>{" "}
              {participant.name}
            </span>
            <span>
              <span className="font-semibold text-neutral-800">Tanggal:</span>{" "}
              {participant.date}
            </span>
            <span>
              <span className="font-semibold text-neutral-800">
                Perusahaan:
              </span>{" "}
              {participant.company}
            </span>
          </div>
        </div>

        {/* ── Factor Score Reference Row ── */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {SCORE_ORDER.map((f) => (
            <div
              key={f}
              className="flex flex-col items-center rounded border border-neutral-200 bg-neutral-50 px-2.5 py-1.5"
            >
              <span className="text-sm font-bold text-neutral-400">{f}</span>
              <span className="text-base font-semibold text-neutral-900">
                {results[f]}
              </span>
            </div>
          ))}
        </div>

        {/* ── Category Sections ── */}
        <div className="mt-7 flex flex-col gap-8">
          {CATEGORIES.map((cat) => (
            <section key={cat.en}>
              {/* Category heading */}
              <div className="mb-3 flex items-baseline gap-2 border-b border-green-100 pb-1.5">
                <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
                  {cat.id}
                </h2>
                <span className="text-sm text-neutral-400">({cat.en})</span>
              </div>

              <div className="flex flex-col gap-4">
                {/* Factor rows */}
                {cat.factors.map((fKey) => {
                  const info = FACTOR_INFO[fKey];
                  const score = results[fKey];
                  const level = getLevel(score);

                  return (
                    <div key={fKey} className="flex gap-3">
                      {/* Score box */}
                      <div className="flex w-10 shrink-0 flex-col items-center pt-0.5">
                        <span className="text-sm font-bold text-neutral-500">
                          {fKey}
                        </span>
                        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded border border-neutral-300 bg-neutral-50 text-base font-semibold text-neutral-900">
                          {score}
                        </div>
                      </div>

                      {/* Interpretation */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-neutral-800">
                            {info.name}
                          </span>
                          <span className="text-sm text-neutral-400">
                            ({info.shortName})
                          </span>
                          {level && (
                            <span
                              className={`rounded border px-2 py-0.5 text-sm font-bold uppercase tracking-wider ${level.cls}`}
                            >
                              {level.label}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                          {info.interpret(score)}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* VS Comparison Blocks */}
                {cat.vsBlocks.map(({ left, right, interpret }) => (
                  <div
                    key={`${left}-${right}`}
                    className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                        Perbandingan
                      </span>
                      <div className="flex items-center gap-1.5 text-sm font-bold text-neutral-700">
                        <span>{left}</span>
                        <span className="font-normal text-neutral-400">vs</span>
                        <span>{right}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="rounded border border-neutral-200 bg-white px-2 py-0.5 font-semibold text-neutral-800">
                          {results[left]}
                        </span>
                        <span className="text-neutral-400">:</span>
                        <span className="rounded border border-neutral-200 bg-white px-2 py-0.5 font-semibold text-neutral-800">
                          {results[right]}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {interpret(results[left], results[right])}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default InterpretationReport;
