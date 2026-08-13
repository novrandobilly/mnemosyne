export type St7Answer = "A" | "B" | "C" | "D" | "E";

export interface St7Question {
  id: number;
  optionImageUrls: [string, string, string, string];
}

export interface St7Phase {
  phase: number;
  referenceImageUrl: string;
  questions: St7Question[];
}

// Reference images
import st7_ref_1 from "@/assets/tests/st7/references/st7_phase_1.jpg";
import st7_ref_2 from "@/assets/tests/st7/references/st7_phase_2.jpg";
import st7_ref_3 from "@/assets/tests/st7/references/st7_phase_3.jpg";

// Phase 1 options (Q1–Q14)
import st7_q1_a from "@/assets/tests/st7/options/st7_q1_a.jpg";
import st7_q1_b from "@/assets/tests/st7/options/st7_q1_b.jpg";
import st7_q1_c from "@/assets/tests/st7/options/st7_q1_c.jpg";
import st7_q1_d from "@/assets/tests/st7/options/st7_q1_d.jpg";
import st7_q2_a from "@/assets/tests/st7/options/st7_q2_a.jpg";
import st7_q2_b from "@/assets/tests/st7/options/st7_q2_b.jpg";
import st7_q2_c from "@/assets/tests/st7/options/st7_q2_c.jpg";
import st7_q2_d from "@/assets/tests/st7/options/st7_q2_d.jpg";
import st7_q3_a from "@/assets/tests/st7/options/st7_q3_a.jpg";
import st7_q3_b from "@/assets/tests/st7/options/st7_q3_b.jpg";
import st7_q3_c from "@/assets/tests/st7/options/st7_q3_c.jpg";
import st7_q3_d from "@/assets/tests/st7/options/st7_q3_d.jpg";
import st7_q4_a from "@/assets/tests/st7/options/st7_q4_a.jpg";
import st7_q4_b from "@/assets/tests/st7/options/st7_q4_b.jpg";
import st7_q4_c from "@/assets/tests/st7/options/st7_q4_c.jpg";
import st7_q4_d from "@/assets/tests/st7/options/st7_q4_d.jpg";
import st7_q5_a from "@/assets/tests/st7/options/st7_q5_a.jpg";
import st7_q5_b from "@/assets/tests/st7/options/st7_q5_b.jpg";
import st7_q5_c from "@/assets/tests/st7/options/st7_q5_c.jpg";
import st7_q5_d from "@/assets/tests/st7/options/st7_q5_d.jpg";
import st7_q6_a from "@/assets/tests/st7/options/st7_q6_a.jpg";
import st7_q6_b from "@/assets/tests/st7/options/st7_q6_b.jpg";
import st7_q6_c from "@/assets/tests/st7/options/st7_q6_c.jpg";
import st7_q6_d from "@/assets/tests/st7/options/st7_q6_d.jpg";
import st7_q7_a from "@/assets/tests/st7/options/st7_q7_a.jpg";
import st7_q7_b from "@/assets/tests/st7/options/st7_q7_b.jpg";
import st7_q7_c from "@/assets/tests/st7/options/st7_q7_c.jpg";
import st7_q7_d from "@/assets/tests/st7/options/st7_q7_d.jpg";
import st7_q8_a from "@/assets/tests/st7/options/st7_q8_a.jpg";
import st7_q8_b from "@/assets/tests/st7/options/st7_q8_b.jpg";
import st7_q8_c from "@/assets/tests/st7/options/st7_q8_c.jpg";
import st7_q8_d from "@/assets/tests/st7/options/st7_q8_d.jpg";
import st7_q9_a from "@/assets/tests/st7/options/st7_q9_a.jpg";
import st7_q9_b from "@/assets/tests/st7/options/st7_q9_b.jpg";
import st7_q9_c from "@/assets/tests/st7/options/st7_q9_c.jpg";
import st7_q9_d from "@/assets/tests/st7/options/st7_q9_d.jpg";
import st7_q10_a from "@/assets/tests/st7/options/st7_q10_a.jpg";
import st7_q10_b from "@/assets/tests/st7/options/st7_q10_b.jpg";
import st7_q10_c from "@/assets/tests/st7/options/st7_q10_c.jpg";
import st7_q10_d from "@/assets/tests/st7/options/st7_q10_d.jpg";
import st7_q11_a from "@/assets/tests/st7/options/st7_q11_a.jpg";
import st7_q11_b from "@/assets/tests/st7/options/st7_q11_b.jpg";
import st7_q11_c from "@/assets/tests/st7/options/st7_q11_c.jpg";
import st7_q11_d from "@/assets/tests/st7/options/st7_q11_d.jpg";
import st7_q12_a from "@/assets/tests/st7/options/st7_q12_a.jpg";
import st7_q12_b from "@/assets/tests/st7/options/st7_q12_b.jpg";
import st7_q12_c from "@/assets/tests/st7/options/st7_q12_c.jpg";
import st7_q12_d from "@/assets/tests/st7/options/st7_q12_d.jpg";
import st7_q13_a from "@/assets/tests/st7/options/st7_q13_a.jpg";
import st7_q13_b from "@/assets/tests/st7/options/st7_q13_b.jpg";
import st7_q13_c from "@/assets/tests/st7/options/st7_q13_c.jpg";
import st7_q13_d from "@/assets/tests/st7/options/st7_q13_d.jpg";
import st7_q14_a from "@/assets/tests/st7/options/st7_q14_a.jpg";
import st7_q14_b from "@/assets/tests/st7/options/st7_q14_b.jpg";
import st7_q14_c from "@/assets/tests/st7/options/st7_q14_c.jpg";
import st7_q14_d from "@/assets/tests/st7/options/st7_q14_d.jpg";

// Phase 2 options (Q15–Q28)
import st7_q15_a from "@/assets/tests/st7/options/st7_q15_a.jpg";
import st7_q15_b from "@/assets/tests/st7/options/st7_q15_b.jpg";
import st7_q15_c from "@/assets/tests/st7/options/st7_q15_c.jpg";
import st7_q15_d from "@/assets/tests/st7/options/st7_q15_d.jpg";
import st7_q16_a from "@/assets/tests/st7/options/st7_q16_a.jpg";
import st7_q16_b from "@/assets/tests/st7/options/st7_q16_b.jpg";
import st7_q16_c from "@/assets/tests/st7/options/st7_q16_c.jpg";
import st7_q16_d from "@/assets/tests/st7/options/st7_q16_d.jpg";
import st7_q17_a from "@/assets/tests/st7/options/st7_q17_a.jpg";
import st7_q17_b from "@/assets/tests/st7/options/st7_q17_b.jpg";
import st7_q17_c from "@/assets/tests/st7/options/st7_q17_c.jpg";
import st7_q17_d from "@/assets/tests/st7/options/st7_q17_d.jpg";
import st7_q18_a from "@/assets/tests/st7/options/st7_q18_a.jpg";
import st7_q18_b from "@/assets/tests/st7/options/st7_q18_b.jpg";
import st7_q18_c from "@/assets/tests/st7/options/st7_q18_c.jpg";
import st7_q18_d from "@/assets/tests/st7/options/st7_q18_d.jpg";
import st7_q19_a from "@/assets/tests/st7/options/st7_q19_a.jpg";
import st7_q19_b from "@/assets/tests/st7/options/st7_q19_b.jpg";
import st7_q19_c from "@/assets/tests/st7/options/st7_q19_c.jpg";
import st7_q19_d from "@/assets/tests/st7/options/st7_q19_d.jpg";
import st7_q20_a from "@/assets/tests/st7/options/st7_q20_a.jpg";
import st7_q20_b from "@/assets/tests/st7/options/st7_q20_b.jpg";
import st7_q20_c from "@/assets/tests/st7/options/st7_q20_c.jpg";
import st7_q20_d from "@/assets/tests/st7/options/st7_q20_d.jpg";
import st7_q21_a from "@/assets/tests/st7/options/st7_q21_a.jpg";
import st7_q21_b from "@/assets/tests/st7/options/st7_q21_b.jpg";
import st7_q21_c from "@/assets/tests/st7/options/st7_q21_c.jpg";
import st7_q21_d from "@/assets/tests/st7/options/st7_q21_d.jpg";
import st7_q22_a from "@/assets/tests/st7/options/st7_q22_a.jpg";
import st7_q22_b from "@/assets/tests/st7/options/st7_q22_b.jpg";
import st7_q22_c from "@/assets/tests/st7/options/st7_q22_c.jpg";
import st7_q22_d from "@/assets/tests/st7/options/st7_q22_d.jpg";
import st7_q23_a from "@/assets/tests/st7/options/st7_q23_a.jpg";
import st7_q23_b from "@/assets/tests/st7/options/st7_q23_b.jpg";
import st7_q23_c from "@/assets/tests/st7/options/st7_q23_c.jpg";
import st7_q23_d from "@/assets/tests/st7/options/st7_q23_d.jpg";
import st7_q24_a from "@/assets/tests/st7/options/st7_q24_a.jpg";
import st7_q24_b from "@/assets/tests/st7/options/st7_q24_b.jpg";
import st7_q24_c from "@/assets/tests/st7/options/st7_q24_c.jpg";
import st7_q24_d from "@/assets/tests/st7/options/st7_q24_d.jpg";
import st7_q25_a from "@/assets/tests/st7/options/st7_q25_a.jpg";
import st7_q25_b from "@/assets/tests/st7/options/st7_q25_b.jpg";
import st7_q25_c from "@/assets/tests/st7/options/st7_q25_c.jpg";
import st7_q25_d from "@/assets/tests/st7/options/st7_q25_d.jpg";
import st7_q26_a from "@/assets/tests/st7/options/st7_q26_a.jpg";
import st7_q26_b from "@/assets/tests/st7/options/st7_q26_b.jpg";
import st7_q26_c from "@/assets/tests/st7/options/st7_q26_c.jpg";
import st7_q26_d from "@/assets/tests/st7/options/st7_q26_d.jpg";
import st7_q27_a from "@/assets/tests/st7/options/st7_q27_a.jpg";
import st7_q27_b from "@/assets/tests/st7/options/st7_q27_b.jpg";
import st7_q27_c from "@/assets/tests/st7/options/st7_q27_c.jpg";
import st7_q27_d from "@/assets/tests/st7/options/st7_q27_d.jpg";
import st7_q28_a from "@/assets/tests/st7/options/st7_q28_a.jpg";
import st7_q28_b from "@/assets/tests/st7/options/st7_q28_b.jpg";
import st7_q28_c from "@/assets/tests/st7/options/st7_q28_c.jpg";
import st7_q28_d from "@/assets/tests/st7/options/st7_q28_d.jpg";

// Phase 3 options (Q29–Q40)
import st7_q29_a from "@/assets/tests/st7/options/st7_q29_a.jpg";
import st7_q29_b from "@/assets/tests/st7/options/st7_q29_b.jpg";
import st7_q29_c from "@/assets/tests/st7/options/st7_q29_c.jpg";
import st7_q29_d from "@/assets/tests/st7/options/st7_q29_d.jpg";
import st7_q30_a from "@/assets/tests/st7/options/st7_q30_a.jpg";
import st7_q30_b from "@/assets/tests/st7/options/st7_q30_b.jpg";
import st7_q30_c from "@/assets/tests/st7/options/st7_q30_c.jpg";
import st7_q30_d from "@/assets/tests/st7/options/st7_q30_d.jpg";
import st7_q31_a from "@/assets/tests/st7/options/st7_q31_a.jpg";
import st7_q31_b from "@/assets/tests/st7/options/st7_q31_b.jpg";
import st7_q31_c from "@/assets/tests/st7/options/st7_q31_c.jpg";
import st7_q31_d from "@/assets/tests/st7/options/st7_q31_d.jpg";
import st7_q32_a from "@/assets/tests/st7/options/st7_q32_a.jpg";
import st7_q32_b from "@/assets/tests/st7/options/st7_q32_b.jpg";
import st7_q32_c from "@/assets/tests/st7/options/st7_q32_c.jpg";
import st7_q32_d from "@/assets/tests/st7/options/st7_q32_d.jpg";
import st7_q33_a from "@/assets/tests/st7/options/st7_q33_a.jpg";
import st7_q33_b from "@/assets/tests/st7/options/st7_q33_b.jpg";
import st7_q33_c from "@/assets/tests/st7/options/st7_q33_c.jpg";
import st7_q33_d from "@/assets/tests/st7/options/st7_q33_d.jpg";
import st7_q34_a from "@/assets/tests/st7/options/st7_q34_a.jpg";
import st7_q34_b from "@/assets/tests/st7/options/st7_q34_b.jpg";
import st7_q34_c from "@/assets/tests/st7/options/st7_q34_c.jpg";
import st7_q34_d from "@/assets/tests/st7/options/st7_q34_d.jpg";
import st7_q35_a from "@/assets/tests/st7/options/st7_q35_a.jpg";
import st7_q35_b from "@/assets/tests/st7/options/st7_q35_b.jpg";
import st7_q35_c from "@/assets/tests/st7/options/st7_q35_c.jpg";
import st7_q35_d from "@/assets/tests/st7/options/st7_q35_d.jpg";
import st7_q36_a from "@/assets/tests/st7/options/st7_q36_a.jpg";
import st7_q36_b from "@/assets/tests/st7/options/st7_q36_b.jpg";
import st7_q36_c from "@/assets/tests/st7/options/st7_q36_c.jpg";
import st7_q36_d from "@/assets/tests/st7/options/st7_q36_d.jpg";
import st7_q37_a from "@/assets/tests/st7/options/st7_q37_a.jpg";
import st7_q37_b from "@/assets/tests/st7/options/st7_q37_b.jpg";
import st7_q37_c from "@/assets/tests/st7/options/st7_q37_c.jpg";
import st7_q37_d from "@/assets/tests/st7/options/st7_q37_d.jpg";
import st7_q38_a from "@/assets/tests/st7/options/st7_q38_a.jpg";
import st7_q38_b from "@/assets/tests/st7/options/st7_q38_b.jpg";
import st7_q38_c from "@/assets/tests/st7/options/st7_q38_c.jpg";
import st7_q38_d from "@/assets/tests/st7/options/st7_q38_d.jpg";
import st7_q39_a from "@/assets/tests/st7/options/st7_q39_a.jpg";
import st7_q39_b from "@/assets/tests/st7/options/st7_q39_b.jpg";
import st7_q39_c from "@/assets/tests/st7/options/st7_q39_c.jpg";
import st7_q39_d from "@/assets/tests/st7/options/st7_q39_d.jpg";
import st7_q40_a from "@/assets/tests/st7/options/st7_q40_a.jpg";
import st7_q40_b from "@/assets/tests/st7/options/st7_q40_b.jpg";
import st7_q40_c from "@/assets/tests/st7/options/st7_q40_c.jpg";
import st7_q40_d from "@/assets/tests/st7/options/st7_q40_d.jpg";

export const ST7_NONE_OPTION_LABEL = "E";
export const ST7_NONE_OPTION_TEXT =
  "Tidak ada kubus yang terbuat dari pola di samping.";

export const st7Data: St7Phase[] = [
  {
    phase: 1,
    referenceImageUrl: st7_ref_1,
    questions: [
      { id: 1,  optionImageUrls: [st7_q1_a,  st7_q1_b,  st7_q1_c,  st7_q1_d]  },
      { id: 2,  optionImageUrls: [st7_q2_a,  st7_q2_b,  st7_q2_c,  st7_q2_d]  },
      { id: 3,  optionImageUrls: [st7_q3_a,  st7_q3_b,  st7_q3_c,  st7_q3_d]  },
      { id: 4,  optionImageUrls: [st7_q4_a,  st7_q4_b,  st7_q4_c,  st7_q4_d]  },
      { id: 5,  optionImageUrls: [st7_q5_a,  st7_q5_b,  st7_q5_c,  st7_q5_d]  },
      { id: 6,  optionImageUrls: [st7_q6_a,  st7_q6_b,  st7_q6_c,  st7_q6_d]  },
      { id: 7,  optionImageUrls: [st7_q7_a,  st7_q7_b,  st7_q7_c,  st7_q7_d]  },
      { id: 8,  optionImageUrls: [st7_q8_a,  st7_q8_b,  st7_q8_c,  st7_q8_d]  },
      { id: 9,  optionImageUrls: [st7_q9_a,  st7_q9_b,  st7_q9_c,  st7_q9_d]  },
      { id: 10, optionImageUrls: [st7_q10_a, st7_q10_b, st7_q10_c, st7_q10_d] },
      { id: 11, optionImageUrls: [st7_q11_a, st7_q11_b, st7_q11_c, st7_q11_d] },
      { id: 12, optionImageUrls: [st7_q12_a, st7_q12_b, st7_q12_c, st7_q12_d] },
      { id: 13, optionImageUrls: [st7_q13_a, st7_q13_b, st7_q13_c, st7_q13_d] },
      { id: 14, optionImageUrls: [st7_q14_a, st7_q14_b, st7_q14_c, st7_q14_d] },
    ],
  },
  {
    phase: 2,
    referenceImageUrl: st7_ref_2,
    questions: [
      { id: 15, optionImageUrls: [st7_q15_a, st7_q15_b, st7_q15_c, st7_q15_d] },
      { id: 16, optionImageUrls: [st7_q16_a, st7_q16_b, st7_q16_c, st7_q16_d] },
      { id: 17, optionImageUrls: [st7_q17_a, st7_q17_b, st7_q17_c, st7_q17_d] },
      { id: 18, optionImageUrls: [st7_q18_a, st7_q18_b, st7_q18_c, st7_q18_d] },
      { id: 19, optionImageUrls: [st7_q19_a, st7_q19_b, st7_q19_c, st7_q19_d] },
      { id: 20, optionImageUrls: [st7_q20_a, st7_q20_b, st7_q20_c, st7_q20_d] },
      { id: 21, optionImageUrls: [st7_q21_a, st7_q21_b, st7_q21_c, st7_q21_d] },
      { id: 22, optionImageUrls: [st7_q22_a, st7_q22_b, st7_q22_c, st7_q22_d] },
      { id: 23, optionImageUrls: [st7_q23_a, st7_q23_b, st7_q23_c, st7_q23_d] },
      { id: 24, optionImageUrls: [st7_q24_a, st7_q24_b, st7_q24_c, st7_q24_d] },
      { id: 25, optionImageUrls: [st7_q25_a, st7_q25_b, st7_q25_c, st7_q25_d] },
      { id: 26, optionImageUrls: [st7_q26_a, st7_q26_b, st7_q26_c, st7_q26_d] },
      { id: 27, optionImageUrls: [st7_q27_a, st7_q27_b, st7_q27_c, st7_q27_d] },
      { id: 28, optionImageUrls: [st7_q28_a, st7_q28_b, st7_q28_c, st7_q28_d] },
    ],
  },
  {
    phase: 3,
    referenceImageUrl: st7_ref_3,
    questions: [
      { id: 29, optionImageUrls: [st7_q29_a, st7_q29_b, st7_q29_c, st7_q29_d] },
      { id: 30, optionImageUrls: [st7_q30_a, st7_q30_b, st7_q30_c, st7_q30_d] },
      { id: 31, optionImageUrls: [st7_q31_a, st7_q31_b, st7_q31_c, st7_q31_d] },
      { id: 32, optionImageUrls: [st7_q32_a, st7_q32_b, st7_q32_c, st7_q32_d] },
      { id: 33, optionImageUrls: [st7_q33_a, st7_q33_b, st7_q33_c, st7_q33_d] },
      { id: 34, optionImageUrls: [st7_q34_a, st7_q34_b, st7_q34_c, st7_q34_d] },
      { id: 35, optionImageUrls: [st7_q35_a, st7_q35_b, st7_q35_c, st7_q35_d] },
      { id: 36, optionImageUrls: [st7_q36_a, st7_q36_b, st7_q36_c, st7_q36_d] },
      { id: 37, optionImageUrls: [st7_q37_a, st7_q37_b, st7_q37_c, st7_q37_d] },
      { id: 38, optionImageUrls: [st7_q38_a, st7_q38_b, st7_q38_c, st7_q38_d] },
      { id: 39, optionImageUrls: [st7_q39_a, st7_q39_b, st7_q39_c, st7_q39_d] },
      { id: 40, optionImageUrls: [st7_q40_a, st7_q40_b, st7_q40_c, st7_q40_d] },
    ],
  },
];

export const ST7_TOTAL_QUESTIONS = st7Data.reduce(
  (acc, p) => acc + p.questions.length,
  0,
);
