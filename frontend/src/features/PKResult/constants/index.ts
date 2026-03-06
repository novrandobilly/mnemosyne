import type { PapiResults } from "../types";

/**
 * Dummy data shape that mirrors the single PocketBase record that will be
 * fetched when wiring up the real data layer.
 *
 * All three consumers (ScoreSummaryCards / RoleScoringGrid / NeedScoringGrid,
 * PapiWheel, and InterpretationReport) derive their input from this one object.
 */
export interface PKData {
  participant: {
    name: string;
    /** Display date string, e.g. "10 Februari 2026" */
    date: string;
    company: string;
  };
  results: PapiResults;
}

export const DUMMY_PK_DATA: PKData = {
  participant: {
    name: "Budi Santoso",
    date: "10 Februari 2026",
    company: "PT. Mnemosyne Indonesia",
  },
  results: {
    N: 7,
    G: 8,
    A: 9,
    L: 6,
    P: 5,
    I: 7,
    T: 8,
    V: 6,
    S: 5,
    R: 4,
    D: 7,
    C: 9,
    E: 6,
    X: 3,
    B: 8,
    O: 6,
    Z: 4,
    K: 7,
    F: 5,
    W: 3,
  },
};
