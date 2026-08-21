export type Da5Answer = "A" | "B" | "C" | "D" | "E";

export interface Da5Item {
  id: number;
  stimulusImageUrl: string;
  optionImageUrls: [string, string, string, string, string];
}

import da5Guide from "@/assets/tests/da5/guide/da5-guide.jpg";

// Question and option image assets (Q1-Q50)
import da5Q1 from "@/assets/tests/da5/questions-options/da5_q1.png";
import da5Q1A from "@/assets/tests/da5/questions-options/da5_q1_a.png";
import da5Q1B from "@/assets/tests/da5/questions-options/da5_q1_b.png";
import da5Q1C from "@/assets/tests/da5/questions-options/da5_q1_c.png";
import da5Q1D from "@/assets/tests/da5/questions-options/da5_q1_d.png";
import da5Q1E from "@/assets/tests/da5/questions-options/da5_q1_e.png";
import da5Q2 from "@/assets/tests/da5/questions-options/da5_q2.png";
import da5Q2A from "@/assets/tests/da5/questions-options/da5_q2_a.png";
import da5Q2B from "@/assets/tests/da5/questions-options/da5_q2_b.png";
import da5Q2C from "@/assets/tests/da5/questions-options/da5_q2_c.png";
import da5Q2D from "@/assets/tests/da5/questions-options/da5_q2_d.png";
import da5Q2E from "@/assets/tests/da5/questions-options/da5_q2_e.png";
import da5Q3 from "@/assets/tests/da5/questions-options/da5_q3.png";
import da5Q3A from "@/assets/tests/da5/questions-options/da5_q3_a.png";
import da5Q3B from "@/assets/tests/da5/questions-options/da5_q3_b.png";
import da5Q3C from "@/assets/tests/da5/questions-options/da5_q3_c.png";
import da5Q3D from "@/assets/tests/da5/questions-options/da5_q3_d.png";
import da5Q3E from "@/assets/tests/da5/questions-options/da5_q3_e.png";
import da5Q4 from "@/assets/tests/da5/questions-options/da5_q4.png";
import da5Q4A from "@/assets/tests/da5/questions-options/da5_q4_a.png";
import da5Q4B from "@/assets/tests/da5/questions-options/da5_q4_b.png";
import da5Q4C from "@/assets/tests/da5/questions-options/da5_q4_c.png";
import da5Q4D from "@/assets/tests/da5/questions-options/da5_q4_d.png";
import da5Q4E from "@/assets/tests/da5/questions-options/da5_q4_e.png";
import da5Q5 from "@/assets/tests/da5/questions-options/da5_q5.png";
import da5Q5A from "@/assets/tests/da5/questions-options/da5_q5_a.png";
import da5Q5B from "@/assets/tests/da5/questions-options/da5_q5_b.png";
import da5Q5C from "@/assets/tests/da5/questions-options/da5_q5_c.png";
import da5Q5D from "@/assets/tests/da5/questions-options/da5_q5_d.png";
import da5Q5E from "@/assets/tests/da5/questions-options/da5_q5_e.png";
import da5Q6 from "@/assets/tests/da5/questions-options/da5_q6.png";
import da5Q6A from "@/assets/tests/da5/questions-options/da5_q6_a.png";
import da5Q6B from "@/assets/tests/da5/questions-options/da5_q6_b.png";
import da5Q6C from "@/assets/tests/da5/questions-options/da5_q6_c.png";
import da5Q6D from "@/assets/tests/da5/questions-options/da5_q6_d.png";
import da5Q6E from "@/assets/tests/da5/questions-options/da5_q6_e.png";
import da5Q7 from "@/assets/tests/da5/questions-options/da5_q7.png";
import da5Q7A from "@/assets/tests/da5/questions-options/da5_q7_a.png";
import da5Q7B from "@/assets/tests/da5/questions-options/da5_q7_b.png";
import da5Q7C from "@/assets/tests/da5/questions-options/da5_q7_c.png";
import da5Q7D from "@/assets/tests/da5/questions-options/da5_q7_d.png";
import da5Q7E from "@/assets/tests/da5/questions-options/da5_q7_e.png";
import da5Q8 from "@/assets/tests/da5/questions-options/da5_q8.png";
import da5Q8A from "@/assets/tests/da5/questions-options/da5_q8_a.png";
import da5Q8B from "@/assets/tests/da5/questions-options/da5_q8_b.png";
import da5Q8C from "@/assets/tests/da5/questions-options/da5_q8_c.png";
import da5Q8D from "@/assets/tests/da5/questions-options/da5_q8_d.png";
import da5Q8E from "@/assets/tests/da5/questions-options/da5_q8_e.png";
import da5Q9 from "@/assets/tests/da5/questions-options/da5_q9.png";
import da5Q9A from "@/assets/tests/da5/questions-options/da5_q9_a.png";
import da5Q9B from "@/assets/tests/da5/questions-options/da5_q9_b.png";
import da5Q9C from "@/assets/tests/da5/questions-options/da5_q9_c.png";
import da5Q9D from "@/assets/tests/da5/questions-options/da5_q9_d.png";
import da5Q9E from "@/assets/tests/da5/questions-options/da5_q9_e.png";
import da5Q10 from "@/assets/tests/da5/questions-options/da5_q10.png";
import da5Q10A from "@/assets/tests/da5/questions-options/da5_q10_a.png";
import da5Q10B from "@/assets/tests/da5/questions-options/da5_q10_b.png";
import da5Q10C from "@/assets/tests/da5/questions-options/da5_q10_c.png";
import da5Q10D from "@/assets/tests/da5/questions-options/da5_q10_d.png";
import da5Q10E from "@/assets/tests/da5/questions-options/da5_q10_e.png";
import da5Q11 from "@/assets/tests/da5/questions-options/da5_q11.png";
import da5Q11A from "@/assets/tests/da5/questions-options/da5_q11_a.png";
import da5Q11B from "@/assets/tests/da5/questions-options/da5_q11_b.png";
import da5Q11C from "@/assets/tests/da5/questions-options/da5_q11_c.png";
import da5Q11D from "@/assets/tests/da5/questions-options/da5_q11_d.png";
import da5Q11E from "@/assets/tests/da5/questions-options/da5_q11_e.png";
import da5Q12 from "@/assets/tests/da5/questions-options/da5_q12.png";
import da5Q12A from "@/assets/tests/da5/questions-options/da5_q12_a.png";
import da5Q12B from "@/assets/tests/da5/questions-options/da5_q12_b.png";
import da5Q12C from "@/assets/tests/da5/questions-options/da5_q12_c.png";
import da5Q12D from "@/assets/tests/da5/questions-options/da5_q12_d.png";
import da5Q12E from "@/assets/tests/da5/questions-options/da5_q12_e.png";
import da5Q13 from "@/assets/tests/da5/questions-options/da5_q13.png";
import da5Q13A from "@/assets/tests/da5/questions-options/da5_q13_a.png";
import da5Q13B from "@/assets/tests/da5/questions-options/da5_q13_b.png";
import da5Q13C from "@/assets/tests/da5/questions-options/da5_q13_c.png";
import da5Q13D from "@/assets/tests/da5/questions-options/da5_q13_d.png";
import da5Q13E from "@/assets/tests/da5/questions-options/da5_q13_e.png";
import da5Q14 from "@/assets/tests/da5/questions-options/da5_q14.png";
import da5Q14A from "@/assets/tests/da5/questions-options/da5_q14_a.png";
import da5Q14B from "@/assets/tests/da5/questions-options/da5_q14_b.png";
import da5Q14C from "@/assets/tests/da5/questions-options/da5_q14_c.png";
import da5Q14D from "@/assets/tests/da5/questions-options/da5_q14_d.png";
import da5Q14E from "@/assets/tests/da5/questions-options/da5_q14_e.png";
import da5Q15 from "@/assets/tests/da5/questions-options/da5_q15.png";
import da5Q15A from "@/assets/tests/da5/questions-options/da5_q15_a.png";
import da5Q15B from "@/assets/tests/da5/questions-options/da5_q15_b.png";
import da5Q15C from "@/assets/tests/da5/questions-options/da5_q15_c.png";
import da5Q15D from "@/assets/tests/da5/questions-options/da5_q15_d.png";
import da5Q15E from "@/assets/tests/da5/questions-options/da5_q15_e.png";
import da5Q16 from "@/assets/tests/da5/questions-options/da5_q16.png";
import da5Q16A from "@/assets/tests/da5/questions-options/da5_q16_a.png";
import da5Q16B from "@/assets/tests/da5/questions-options/da5_q16_b.png";
import da5Q16C from "@/assets/tests/da5/questions-options/da5_q16_c.png";
import da5Q16D from "@/assets/tests/da5/questions-options/da5_q16_d.png";
import da5Q16E from "@/assets/tests/da5/questions-options/da5_q16_e.png";
import da5Q17 from "@/assets/tests/da5/questions-options/da5_q17.png";
import da5Q17A from "@/assets/tests/da5/questions-options/da5_q17_a.png";
import da5Q17B from "@/assets/tests/da5/questions-options/da5_q17_b.png";
import da5Q17C from "@/assets/tests/da5/questions-options/da5_q17_c.png";
import da5Q17D from "@/assets/tests/da5/questions-options/da5_q17_d.png";
import da5Q17E from "@/assets/tests/da5/questions-options/da5_q17_e.png";
import da5Q18 from "@/assets/tests/da5/questions-options/da5_q18.png";
import da5Q18A from "@/assets/tests/da5/questions-options/da5_q18_a.png";
import da5Q18B from "@/assets/tests/da5/questions-options/da5_q18_b.png";
import da5Q18C from "@/assets/tests/da5/questions-options/da5_q18_c.png";
import da5Q18D from "@/assets/tests/da5/questions-options/da5_q18_d.png";
import da5Q18E from "@/assets/tests/da5/questions-options/da5_q18_e.png";
import da5Q19 from "@/assets/tests/da5/questions-options/da5_q19.png";
import da5Q19A from "@/assets/tests/da5/questions-options/da5_q19_a.png";
import da5Q19B from "@/assets/tests/da5/questions-options/da5_q19_b.png";
import da5Q19C from "@/assets/tests/da5/questions-options/da5_q19_c.png";
import da5Q19D from "@/assets/tests/da5/questions-options/da5_q19_d.png";
import da5Q19E from "@/assets/tests/da5/questions-options/da5_q19_e.png";
import da5Q20 from "@/assets/tests/da5/questions-options/da5_q20.png";
import da5Q20A from "@/assets/tests/da5/questions-options/da5_q20_a.png";
import da5Q20B from "@/assets/tests/da5/questions-options/da5_q20_b.png";
import da5Q20C from "@/assets/tests/da5/questions-options/da5_q20_c.png";
import da5Q20D from "@/assets/tests/da5/questions-options/da5_q20_d.png";
import da5Q20E from "@/assets/tests/da5/questions-options/da5_q20_e.png";
import da5Q21 from "@/assets/tests/da5/questions-options/da5_q21.png";
import da5Q21A from "@/assets/tests/da5/questions-options/da5_q21_a.png";
import da5Q21B from "@/assets/tests/da5/questions-options/da5_q21_b.png";
import da5Q21C from "@/assets/tests/da5/questions-options/da5_q21_c.png";
import da5Q21D from "@/assets/tests/da5/questions-options/da5_q21_d.png";
import da5Q21E from "@/assets/tests/da5/questions-options/da5_q21_e.png";
import da5Q22 from "@/assets/tests/da5/questions-options/da5_q22.png";
import da5Q22A from "@/assets/tests/da5/questions-options/da5_q22_a.png";
import da5Q22B from "@/assets/tests/da5/questions-options/da5_q22_b.png";
import da5Q22C from "@/assets/tests/da5/questions-options/da5_q22_c.png";
import da5Q22D from "@/assets/tests/da5/questions-options/da5_q22_d.png";
import da5Q22E from "@/assets/tests/da5/questions-options/da5_q22_e.png";
import da5Q23 from "@/assets/tests/da5/questions-options/da5_q23.png";
import da5Q23A from "@/assets/tests/da5/questions-options/da5_q23_a.png";
import da5Q23B from "@/assets/tests/da5/questions-options/da5_q23_b.png";
import da5Q23C from "@/assets/tests/da5/questions-options/da5_q23_c.png";
import da5Q23D from "@/assets/tests/da5/questions-options/da5_q23_d.png";
import da5Q23E from "@/assets/tests/da5/questions-options/da5_q23_e.png";
import da5Q24 from "@/assets/tests/da5/questions-options/da5_q24.png";
import da5Q24A from "@/assets/tests/da5/questions-options/da5_q24_a.png";
import da5Q24B from "@/assets/tests/da5/questions-options/da5_q24_b.png";
import da5Q24C from "@/assets/tests/da5/questions-options/da5_q24_c.png";
import da5Q24D from "@/assets/tests/da5/questions-options/da5_q24_d.png";
import da5Q24E from "@/assets/tests/da5/questions-options/da5_q24_e.png";
import da5Q25 from "@/assets/tests/da5/questions-options/da5_q25.png";
import da5Q25A from "@/assets/tests/da5/questions-options/da5_q25_a.png";
import da5Q25B from "@/assets/tests/da5/questions-options/da5_q25_b.png";
import da5Q25C from "@/assets/tests/da5/questions-options/da5_q25_c.png";
import da5Q25D from "@/assets/tests/da5/questions-options/da5_q25_d.png";
import da5Q25E from "@/assets/tests/da5/questions-options/da5_q25_e.png";
import da5Q26 from "@/assets/tests/da5/questions-options/da5_q26.png";
import da5Q26A from "@/assets/tests/da5/questions-options/da5_q26_a.png";
import da5Q26B from "@/assets/tests/da5/questions-options/da5_q26_b.png";
import da5Q26C from "@/assets/tests/da5/questions-options/da5_q26_c.png";
import da5Q26D from "@/assets/tests/da5/questions-options/da5_q26_d.png";
import da5Q26E from "@/assets/tests/da5/questions-options/da5_q26_e.png";
import da5Q27 from "@/assets/tests/da5/questions-options/da5_q27.png";
import da5Q27A from "@/assets/tests/da5/questions-options/da5_q27_a.png";
import da5Q27B from "@/assets/tests/da5/questions-options/da5_q27_b.png";
import da5Q27C from "@/assets/tests/da5/questions-options/da5_q27_c.png";
import da5Q27D from "@/assets/tests/da5/questions-options/da5_q27_d.png";
import da5Q27E from "@/assets/tests/da5/questions-options/da5_q27_e.png";
import da5Q28 from "@/assets/tests/da5/questions-options/da5_q28.png";
import da5Q28A from "@/assets/tests/da5/questions-options/da5_q28_a.png";
import da5Q28B from "@/assets/tests/da5/questions-options/da5_q28_b.png";
import da5Q28C from "@/assets/tests/da5/questions-options/da5_q28_c.png";
import da5Q28D from "@/assets/tests/da5/questions-options/da5_q28_d.png";
import da5Q28E from "@/assets/tests/da5/questions-options/da5_q28_e.png";
import da5Q29 from "@/assets/tests/da5/questions-options/da5_q29.png";
import da5Q29A from "@/assets/tests/da5/questions-options/da5_q29_a.png";
import da5Q29B from "@/assets/tests/da5/questions-options/da5_q29_b.png";
import da5Q29C from "@/assets/tests/da5/questions-options/da5_q29_c.png";
import da5Q29D from "@/assets/tests/da5/questions-options/da5_q29_d.png";
import da5Q29E from "@/assets/tests/da5/questions-options/da5_q29_e.png";
import da5Q30 from "@/assets/tests/da5/questions-options/da5_q30.png";
import da5Q30A from "@/assets/tests/da5/questions-options/da5_q30_a.png";
import da5Q30B from "@/assets/tests/da5/questions-options/da5_q30_b.png";
import da5Q30C from "@/assets/tests/da5/questions-options/da5_q30_c.png";
import da5Q30D from "@/assets/tests/da5/questions-options/da5_q30_d.png";
import da5Q30E from "@/assets/tests/da5/questions-options/da5_q30_e.png";
import da5Q31 from "@/assets/tests/da5/questions-options/da5_q31.png";
import da5Q31A from "@/assets/tests/da5/questions-options/da5_q31_a.png";
import da5Q31B from "@/assets/tests/da5/questions-options/da5_q31_b.png";
import da5Q31C from "@/assets/tests/da5/questions-options/da5_q31_c.png";
import da5Q31D from "@/assets/tests/da5/questions-options/da5_q31_d.png";
import da5Q31E from "@/assets/tests/da5/questions-options/da5_q31_e.png";
import da5Q32 from "@/assets/tests/da5/questions-options/da5_q32.png";
import da5Q32A from "@/assets/tests/da5/questions-options/da5_q32_a.png";
import da5Q32B from "@/assets/tests/da5/questions-options/da5_q32_b.png";
import da5Q32C from "@/assets/tests/da5/questions-options/da5_q32_c.png";
import da5Q32D from "@/assets/tests/da5/questions-options/da5_q32_d.png";
import da5Q32E from "@/assets/tests/da5/questions-options/da5_q32_e.png";
import da5Q33 from "@/assets/tests/da5/questions-options/da5_q33.png";
import da5Q33A from "@/assets/tests/da5/questions-options/da5_q33_a.png";
import da5Q33B from "@/assets/tests/da5/questions-options/da5_q33_b.png";
import da5Q33C from "@/assets/tests/da5/questions-options/da5_q33_c.png";
import da5Q33D from "@/assets/tests/da5/questions-options/da5_q33_d.png";
import da5Q33E from "@/assets/tests/da5/questions-options/da5_q33_e.png";
import da5Q34 from "@/assets/tests/da5/questions-options/da5_q34.png";
import da5Q34A from "@/assets/tests/da5/questions-options/da5_q34_a.png";
import da5Q34B from "@/assets/tests/da5/questions-options/da5_q34_b.png";
import da5Q34C from "@/assets/tests/da5/questions-options/da5_q34_c.png";
import da5Q34D from "@/assets/tests/da5/questions-options/da5_q34_d.png";
import da5Q34E from "@/assets/tests/da5/questions-options/da5_q34_e.png";
import da5Q35 from "@/assets/tests/da5/questions-options/da5_q35.png";
import da5Q35A from "@/assets/tests/da5/questions-options/da5_q35_a.png";
import da5Q35B from "@/assets/tests/da5/questions-options/da5_q35_b.png";
import da5Q35C from "@/assets/tests/da5/questions-options/da5_q35_c.png";
import da5Q35D from "@/assets/tests/da5/questions-options/da5_q35_d.png";
import da5Q35E from "@/assets/tests/da5/questions-options/da5_q35_e.png";
import da5Q36 from "@/assets/tests/da5/questions-options/da5_q36.png";
import da5Q36A from "@/assets/tests/da5/questions-options/da5_q36_a.png";
import da5Q36B from "@/assets/tests/da5/questions-options/da5_q36_b.png";
import da5Q36C from "@/assets/tests/da5/questions-options/da5_q36_c.png";
import da5Q36D from "@/assets/tests/da5/questions-options/da5_q36_d.png";
import da5Q36E from "@/assets/tests/da5/questions-options/da5_q36_e.png";
import da5Q37 from "@/assets/tests/da5/questions-options/da5_q37.png";
import da5Q37A from "@/assets/tests/da5/questions-options/da5_q37_a.png";
import da5Q37B from "@/assets/tests/da5/questions-options/da5_q37_b.png";
import da5Q37C from "@/assets/tests/da5/questions-options/da5_q37_c.png";
import da5Q37D from "@/assets/tests/da5/questions-options/da5_q37_d.png";
import da5Q37E from "@/assets/tests/da5/questions-options/da5_q37_e.png";
import da5Q38 from "@/assets/tests/da5/questions-options/da5_q38.png";
import da5Q38A from "@/assets/tests/da5/questions-options/da5_q38_a.png";
import da5Q38B from "@/assets/tests/da5/questions-options/da5_q38_b.png";
import da5Q38C from "@/assets/tests/da5/questions-options/da5_q38_c.png";
import da5Q38D from "@/assets/tests/da5/questions-options/da5_q38_d.png";
import da5Q38E from "@/assets/tests/da5/questions-options/da5_q38_e.png";
import da5Q39 from "@/assets/tests/da5/questions-options/da5_q39.png";
import da5Q39A from "@/assets/tests/da5/questions-options/da5_q39_a.png";
import da5Q39B from "@/assets/tests/da5/questions-options/da5_q39_b.png";
import da5Q39C from "@/assets/tests/da5/questions-options/da5_q39_c.png";
import da5Q39D from "@/assets/tests/da5/questions-options/da5_q39_d.png";
import da5Q39E from "@/assets/tests/da5/questions-options/da5_q39_e.png";
import da5Q40 from "@/assets/tests/da5/questions-options/da5_q40.png";
import da5Q40A from "@/assets/tests/da5/questions-options/da5_q40_a.png";
import da5Q40B from "@/assets/tests/da5/questions-options/da5_q40_b.png";
import da5Q40C from "@/assets/tests/da5/questions-options/da5_q40_c.png";
import da5Q40D from "@/assets/tests/da5/questions-options/da5_q40_d.png";
import da5Q40E from "@/assets/tests/da5/questions-options/da5_q40_e.png";
import da5Q41 from "@/assets/tests/da5/questions-options/da5_q41.png";
import da5Q41A from "@/assets/tests/da5/questions-options/da5_q41_a.png";
import da5Q41B from "@/assets/tests/da5/questions-options/da5_q41_b.png";
import da5Q41C from "@/assets/tests/da5/questions-options/da5_q41_c.png";
import da5Q41D from "@/assets/tests/da5/questions-options/da5_q41_d.png";
import da5Q41E from "@/assets/tests/da5/questions-options/da5_q41_e.png";
import da5Q42 from "@/assets/tests/da5/questions-options/da5_q42.png";
import da5Q42A from "@/assets/tests/da5/questions-options/da5_q42_a.png";
import da5Q42B from "@/assets/tests/da5/questions-options/da5_q42_b.png";
import da5Q42C from "@/assets/tests/da5/questions-options/da5_q42_c.png";
import da5Q42D from "@/assets/tests/da5/questions-options/da5_q42_d.png";
import da5Q42E from "@/assets/tests/da5/questions-options/da5_q42_e.png";
import da5Q43 from "@/assets/tests/da5/questions-options/da5_q43.png";
import da5Q43A from "@/assets/tests/da5/questions-options/da5_q43_a.png";
import da5Q43B from "@/assets/tests/da5/questions-options/da5_q43_b.png";
import da5Q43C from "@/assets/tests/da5/questions-options/da5_q43_c.png";
import da5Q43D from "@/assets/tests/da5/questions-options/da5_q43_d.png";
import da5Q43E from "@/assets/tests/da5/questions-options/da5_q43_e.png";
import da5Q44 from "@/assets/tests/da5/questions-options/da5_q44.png";
import da5Q44A from "@/assets/tests/da5/questions-options/da5_q44_a.png";
import da5Q44B from "@/assets/tests/da5/questions-options/da5_q44_b.png";
import da5Q44C from "@/assets/tests/da5/questions-options/da5_q44_c.png";
import da5Q44D from "@/assets/tests/da5/questions-options/da5_q44_d.png";
import da5Q44E from "@/assets/tests/da5/questions-options/da5_q44_e.png";
import da5Q45 from "@/assets/tests/da5/questions-options/da5_q45.png";
import da5Q45A from "@/assets/tests/da5/questions-options/da5_q45_a.png";
import da5Q45B from "@/assets/tests/da5/questions-options/da5_q45_b.png";
import da5Q45C from "@/assets/tests/da5/questions-options/da5_q45_c.png";
import da5Q45D from "@/assets/tests/da5/questions-options/da5_q45_d.png";
import da5Q45E from "@/assets/tests/da5/questions-options/da5_q45_e.png";
import da5Q46 from "@/assets/tests/da5/questions-options/da5_q46.png";
import da5Q46A from "@/assets/tests/da5/questions-options/da5_q46_a.png";
import da5Q46B from "@/assets/tests/da5/questions-options/da5_q46_b.png";
import da5Q46C from "@/assets/tests/da5/questions-options/da5_q46_c.png";
import da5Q46D from "@/assets/tests/da5/questions-options/da5_q46_d.png";
import da5Q46E from "@/assets/tests/da5/questions-options/da5_q46_e.png";
import da5Q47 from "@/assets/tests/da5/questions-options/da5_q47.png";
import da5Q47A from "@/assets/tests/da5/questions-options/da5_q47_a.png";
import da5Q47B from "@/assets/tests/da5/questions-options/da5_q47_b.png";
import da5Q47C from "@/assets/tests/da5/questions-options/da5_q47_c.png";
import da5Q47D from "@/assets/tests/da5/questions-options/da5_q47_d.png";
import da5Q47E from "@/assets/tests/da5/questions-options/da5_q47_e.png";
import da5Q48 from "@/assets/tests/da5/questions-options/da5_q48.png";
import da5Q48A from "@/assets/tests/da5/questions-options/da5_q48_a.png";
import da5Q48B from "@/assets/tests/da5/questions-options/da5_q48_b.png";
import da5Q48C from "@/assets/tests/da5/questions-options/da5_q48_c.png";
import da5Q48D from "@/assets/tests/da5/questions-options/da5_q48_d.png";
import da5Q48E from "@/assets/tests/da5/questions-options/da5_q48_e.png";
import da5Q49 from "@/assets/tests/da5/questions-options/da5_q49.png";
import da5Q49A from "@/assets/tests/da5/questions-options/da5_q49_a.png";
import da5Q49B from "@/assets/tests/da5/questions-options/da5_q49_b.png";
import da5Q49C from "@/assets/tests/da5/questions-options/da5_q49_c.png";
import da5Q49D from "@/assets/tests/da5/questions-options/da5_q49_d.png";
import da5Q49E from "@/assets/tests/da5/questions-options/da5_q49_e.png";
import da5Q50 from "@/assets/tests/da5/questions-options/da5_q50.png";
import da5Q50A from "@/assets/tests/da5/questions-options/da5_q50_a.png";
import da5Q50B from "@/assets/tests/da5/questions-options/da5_q50_b.png";
import da5Q50C from "@/assets/tests/da5/questions-options/da5_q50_c.png";
import da5Q50D from "@/assets/tests/da5/questions-options/da5_q50_d.png";
import da5Q50E from "@/assets/tests/da5/questions-options/da5_q50_e.png";

export const da5Data: Da5Item[] = [
  {
    id: 1,
    stimulusImageUrl: da5Q1,
    optionImageUrls: [da5Q1A, da5Q1B, da5Q1C, da5Q1D, da5Q1E],
  },
  {
    id: 2,
    stimulusImageUrl: da5Q2,
    optionImageUrls: [da5Q2A, da5Q2B, da5Q2C, da5Q2D, da5Q2E],
  },
  {
    id: 3,
    stimulusImageUrl: da5Q3,
    optionImageUrls: [da5Q3A, da5Q3B, da5Q3C, da5Q3D, da5Q3E],
  },
  {
    id: 4,
    stimulusImageUrl: da5Q4,
    optionImageUrls: [da5Q4A, da5Q4B, da5Q4C, da5Q4D, da5Q4E],
  },
  {
    id: 5,
    stimulusImageUrl: da5Q5,
    optionImageUrls: [da5Q5A, da5Q5B, da5Q5C, da5Q5D, da5Q5E],
  },
  {
    id: 6,
    stimulusImageUrl: da5Q6,
    optionImageUrls: [da5Q6A, da5Q6B, da5Q6C, da5Q6D, da5Q6E],
  },
  {
    id: 7,
    stimulusImageUrl: da5Q7,
    optionImageUrls: [da5Q7A, da5Q7B, da5Q7C, da5Q7D, da5Q7E],
  },
  {
    id: 8,
    stimulusImageUrl: da5Q8,
    optionImageUrls: [da5Q8A, da5Q8B, da5Q8C, da5Q8D, da5Q8E],
  },
  {
    id: 9,
    stimulusImageUrl: da5Q9,
    optionImageUrls: [da5Q9A, da5Q9B, da5Q9C, da5Q9D, da5Q9E],
  },
  {
    id: 10,
    stimulusImageUrl: da5Q10,
    optionImageUrls: [da5Q10A, da5Q10B, da5Q10C, da5Q10D, da5Q10E],
  },
  {
    id: 11,
    stimulusImageUrl: da5Q11,
    optionImageUrls: [da5Q11A, da5Q11B, da5Q11C, da5Q11D, da5Q11E],
  },
  {
    id: 12,
    stimulusImageUrl: da5Q12,
    optionImageUrls: [da5Q12A, da5Q12B, da5Q12C, da5Q12D, da5Q12E],
  },
  {
    id: 13,
    stimulusImageUrl: da5Q13,
    optionImageUrls: [da5Q13A, da5Q13B, da5Q13C, da5Q13D, da5Q13E],
  },
  {
    id: 14,
    stimulusImageUrl: da5Q14,
    optionImageUrls: [da5Q14A, da5Q14B, da5Q14C, da5Q14D, da5Q14E],
  },
  {
    id: 15,
    stimulusImageUrl: da5Q15,
    optionImageUrls: [da5Q15A, da5Q15B, da5Q15C, da5Q15D, da5Q15E],
  },
  {
    id: 16,
    stimulusImageUrl: da5Q16,
    optionImageUrls: [da5Q16A, da5Q16B, da5Q16C, da5Q16D, da5Q16E],
  },
  {
    id: 17,
    stimulusImageUrl: da5Q17,
    optionImageUrls: [da5Q17A, da5Q17B, da5Q17C, da5Q17D, da5Q17E],
  },
  {
    id: 18,
    stimulusImageUrl: da5Q18,
    optionImageUrls: [da5Q18A, da5Q18B, da5Q18C, da5Q18D, da5Q18E],
  },
  {
    id: 19,
    stimulusImageUrl: da5Q19,
    optionImageUrls: [da5Q19A, da5Q19B, da5Q19C, da5Q19D, da5Q19E],
  },
  {
    id: 20,
    stimulusImageUrl: da5Q20,
    optionImageUrls: [da5Q20A, da5Q20B, da5Q20C, da5Q20D, da5Q20E],
  },
  {
    id: 21,
    stimulusImageUrl: da5Q21,
    optionImageUrls: [da5Q21A, da5Q21B, da5Q21C, da5Q21D, da5Q21E],
  },
  {
    id: 22,
    stimulusImageUrl: da5Q22,
    optionImageUrls: [da5Q22A, da5Q22B, da5Q22C, da5Q22D, da5Q22E],
  },
  {
    id: 23,
    stimulusImageUrl: da5Q23,
    optionImageUrls: [da5Q23A, da5Q23B, da5Q23C, da5Q23D, da5Q23E],
  },
  {
    id: 24,
    stimulusImageUrl: da5Q24,
    optionImageUrls: [da5Q24A, da5Q24B, da5Q24C, da5Q24D, da5Q24E],
  },
  {
    id: 25,
    stimulusImageUrl: da5Q25,
    optionImageUrls: [da5Q25A, da5Q25B, da5Q25C, da5Q25D, da5Q25E],
  },
  {
    id: 26,
    stimulusImageUrl: da5Q26,
    optionImageUrls: [da5Q26A, da5Q26B, da5Q26C, da5Q26D, da5Q26E],
  },
  {
    id: 27,
    stimulusImageUrl: da5Q27,
    optionImageUrls: [da5Q27A, da5Q27B, da5Q27C, da5Q27D, da5Q27E],
  },
  {
    id: 28,
    stimulusImageUrl: da5Q28,
    optionImageUrls: [da5Q28A, da5Q28B, da5Q28C, da5Q28D, da5Q28E],
  },
  {
    id: 29,
    stimulusImageUrl: da5Q29,
    optionImageUrls: [da5Q29A, da5Q29B, da5Q29C, da5Q29D, da5Q29E],
  },
  {
    id: 30,
    stimulusImageUrl: da5Q30,
    optionImageUrls: [da5Q30A, da5Q30B, da5Q30C, da5Q30D, da5Q30E],
  },
  {
    id: 31,
    stimulusImageUrl: da5Q31,
    optionImageUrls: [da5Q31A, da5Q31B, da5Q31C, da5Q31D, da5Q31E],
  },
  {
    id: 32,
    stimulusImageUrl: da5Q32,
    optionImageUrls: [da5Q32A, da5Q32B, da5Q32C, da5Q32D, da5Q32E],
  },
  {
    id: 33,
    stimulusImageUrl: da5Q33,
    optionImageUrls: [da5Q33A, da5Q33B, da5Q33C, da5Q33D, da5Q33E],
  },
  {
    id: 34,
    stimulusImageUrl: da5Q34,
    optionImageUrls: [da5Q34A, da5Q34B, da5Q34C, da5Q34D, da5Q34E],
  },
  {
    id: 35,
    stimulusImageUrl: da5Q35,
    optionImageUrls: [da5Q35A, da5Q35B, da5Q35C, da5Q35D, da5Q35E],
  },
  {
    id: 36,
    stimulusImageUrl: da5Q36,
    optionImageUrls: [da5Q36A, da5Q36B, da5Q36C, da5Q36D, da5Q36E],
  },
  {
    id: 37,
    stimulusImageUrl: da5Q37,
    optionImageUrls: [da5Q37A, da5Q37B, da5Q37C, da5Q37D, da5Q37E],
  },
  {
    id: 38,
    stimulusImageUrl: da5Q38,
    optionImageUrls: [da5Q38A, da5Q38B, da5Q38C, da5Q38D, da5Q38E],
  },
  {
    id: 39,
    stimulusImageUrl: da5Q39,
    optionImageUrls: [da5Q39A, da5Q39B, da5Q39C, da5Q39D, da5Q39E],
  },
  {
    id: 40,
    stimulusImageUrl: da5Q40,
    optionImageUrls: [da5Q40A, da5Q40B, da5Q40C, da5Q40D, da5Q40E],
  },
  {
    id: 41,
    stimulusImageUrl: da5Q41,
    optionImageUrls: [da5Q41A, da5Q41B, da5Q41C, da5Q41D, da5Q41E],
  },
  {
    id: 42,
    stimulusImageUrl: da5Q42,
    optionImageUrls: [da5Q42A, da5Q42B, da5Q42C, da5Q42D, da5Q42E],
  },
  {
    id: 43,
    stimulusImageUrl: da5Q43,
    optionImageUrls: [da5Q43A, da5Q43B, da5Q43C, da5Q43D, da5Q43E],
  },
  {
    id: 44,
    stimulusImageUrl: da5Q44,
    optionImageUrls: [da5Q44A, da5Q44B, da5Q44C, da5Q44D, da5Q44E],
  },
  {
    id: 45,
    stimulusImageUrl: da5Q45,
    optionImageUrls: [da5Q45A, da5Q45B, da5Q45C, da5Q45D, da5Q45E],
  },
  {
    id: 46,
    stimulusImageUrl: da5Q46,
    optionImageUrls: [da5Q46A, da5Q46B, da5Q46C, da5Q46D, da5Q46E],
  },
  {
    id: 47,
    stimulusImageUrl: da5Q47,
    optionImageUrls: [da5Q47A, da5Q47B, da5Q47C, da5Q47D, da5Q47E],
  },
  {
    id: 48,
    stimulusImageUrl: da5Q48,
    optionImageUrls: [da5Q48A, da5Q48B, da5Q48C, da5Q48D, da5Q48E],
  },
  {
    id: 49,
    stimulusImageUrl: da5Q49,
    optionImageUrls: [da5Q49A, da5Q49B, da5Q49C, da5Q49D, da5Q49E],
  },
  {
    id: 50,
    stimulusImageUrl: da5Q50,
    optionImageUrls: [da5Q50A, da5Q50B, da5Q50C, da5Q50D, da5Q50E],
  },
];

export const DA5_TOTAL_QUESTIONS = da5Data.length;

export const DA5_REFERENCE_IMAGE_URL = da5Guide;
