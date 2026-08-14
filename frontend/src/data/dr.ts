export interface DrItem {
  id: number;
  /** Problem image containing the 5-rectangle pattern */
  problemImageUrl: string;
  /** Options image containing the 5 choice rectangles */
  optionsImageUrl: string;
  correctAnswer: "A" | "B" | "C" | "D" | "E";
}

export type DrAnswer = "A" | "B" | "C" | "D" | "E";

// Problem and Option image assets (Q1–Q40)
import drQ1 from "@/assets/tests/dr/questions-options/dr_q1.jpg";
import drOpt1 from "@/assets/tests/dr/questions-options/dr_opt1.jpg";
import drQ2 from "@/assets/tests/dr/questions-options/dr_q2.jpg";
import drOpt2 from "@/assets/tests/dr/questions-options/dr_opt2.jpg";
import drQ3 from "@/assets/tests/dr/questions-options/dr_q3.jpg";
import drOpt3 from "@/assets/tests/dr/questions-options/dr_opt3.jpg";
import drQ4 from "@/assets/tests/dr/questions-options/dr_q4.jpg";
import drOpt4 from "@/assets/tests/dr/questions-options/dr_opt4.jpg";
import drQ5 from "@/assets/tests/dr/questions-options/dr_q5.jpg";
import drOpt5 from "@/assets/tests/dr/questions-options/dr_opt5.jpg";
import drQ6 from "@/assets/tests/dr/questions-options/dr_q6.jpg";
import drOpt6 from "@/assets/tests/dr/questions-options/dr_opt6.jpg";
import drQ7 from "@/assets/tests/dr/questions-options/dr_q7.jpg";
import drOpt7 from "@/assets/tests/dr/questions-options/dr_opt7.jpg";
import drQ8 from "@/assets/tests/dr/questions-options/dr_q8.jpg";
import drOpt8 from "@/assets/tests/dr/questions-options/dr_opt8.jpg";
import drQ9 from "@/assets/tests/dr/questions-options/dr_q9.jpg";
import drOpt9 from "@/assets/tests/dr/questions-options/dr_opt9.jpg";
import drQ10 from "@/assets/tests/dr/questions-options/dr_q10.jpg";
import drOpt10 from "@/assets/tests/dr/questions-options/dr_opt10.jpg";
import drQ11 from "@/assets/tests/dr/questions-options/dr_q11.jpg";
import drOpt11 from "@/assets/tests/dr/questions-options/dr_opt11.jpg";
import drQ12 from "@/assets/tests/dr/questions-options/dr_q12.jpg";
import drOpt12 from "@/assets/tests/dr/questions-options/dr_opt12.jpg";
import drQ13 from "@/assets/tests/dr/questions-options/dr_q13.jpg";
import drOpt13 from "@/assets/tests/dr/questions-options/dr_opt13.jpg";
import drQ14 from "@/assets/tests/dr/questions-options/dr_q14.jpg";
import drOpt14 from "@/assets/tests/dr/questions-options/dr_opt14.jpg";
import drQ15 from "@/assets/tests/dr/questions-options/dr_q15.jpg";
import drOpt15 from "@/assets/tests/dr/questions-options/dr_opt15.jpg";
import drQ16 from "@/assets/tests/dr/questions-options/dr_q16.jpg";
import drOpt16 from "@/assets/tests/dr/questions-options/dr_opt16.jpg";
import drQ17 from "@/assets/tests/dr/questions-options/dr_q17.jpg";
import drOpt17 from "@/assets/tests/dr/questions-options/dr_opt17.jpg";
import drQ18 from "@/assets/tests/dr/questions-options/dr_q18.jpg";
import drOpt18 from "@/assets/tests/dr/questions-options/dr_opt18.jpg";
import drQ19 from "@/assets/tests/dr/questions-options/dr_q19.jpg";
import drOpt19 from "@/assets/tests/dr/questions-options/dr_opt19.jpg";
import drQ20 from "@/assets/tests/dr/questions-options/dr_q20.jpg";
import drOpt20 from "@/assets/tests/dr/questions-options/dr_opt20.jpg";
import drQ21 from "@/assets/tests/dr/questions-options/dr_q21.jpg";
import drOpt21 from "@/assets/tests/dr/questions-options/dr_opt21.jpg";
import drQ22 from "@/assets/tests/dr/questions-options/dr_q22.jpg";
import drOpt22 from "@/assets/tests/dr/questions-options/dr_opt22.jpg";
import drQ23 from "@/assets/tests/dr/questions-options/dr_q23.jpg";
import drOpt23 from "@/assets/tests/dr/questions-options/dr_opt23.jpg";
import drQ24 from "@/assets/tests/dr/questions-options/dr_q24.jpg";
import drOpt24 from "@/assets/tests/dr/questions-options/dr_opt24.jpg";
import drQ25 from "@/assets/tests/dr/questions-options/dr_q25.jpg";
import drOpt25 from "@/assets/tests/dr/questions-options/dr_opt25.jpg";
import drQ26 from "@/assets/tests/dr/questions-options/dr_q26.jpg";
import drOpt26 from "@/assets/tests/dr/questions-options/dr_opt26.jpg";
import drQ27 from "@/assets/tests/dr/questions-options/dr_q27.jpg";
import drOpt27 from "@/assets/tests/dr/questions-options/dr_opt27.jpg";
import drQ28 from "@/assets/tests/dr/questions-options/dr_q28.jpg";
import drOpt28 from "@/assets/tests/dr/questions-options/dr_opt28.jpg";
import drQ29 from "@/assets/tests/dr/questions-options/dr_q29.jpg";
import drOpt29 from "@/assets/tests/dr/questions-options/dr_opt29.jpg";
import drQ30 from "@/assets/tests/dr/questions-options/dr_q30.jpg";
import drOpt30 from "@/assets/tests/dr/questions-options/dr_opt30.jpg";
import drQ31 from "@/assets/tests/dr/questions-options/dr_q31.jpg";
import drOpt31 from "@/assets/tests/dr/questions-options/dr_opt31.jpg";
import drQ32 from "@/assets/tests/dr/questions-options/dr_q32.jpg";
import drOpt32 from "@/assets/tests/dr/questions-options/dr_opt32.jpg";
import drQ33 from "@/assets/tests/dr/questions-options/dr_q33.jpg";
import drOpt33 from "@/assets/tests/dr/questions-options/dr_opt33.jpg";
import drQ34 from "@/assets/tests/dr/questions-options/dr_q34.jpg";
import drOpt34 from "@/assets/tests/dr/questions-options/dr_opt34.jpg";
import drQ35 from "@/assets/tests/dr/questions-options/dr_q35.jpg";
import drOpt35 from "@/assets/tests/dr/questions-options/dr_opt35.jpg";
import drQ36 from "@/assets/tests/dr/questions-options/dr_q36.jpg";
import drOpt36 from "@/assets/tests/dr/questions-options/dr_opt36.jpg";
import drQ37 from "@/assets/tests/dr/questions-options/dr_q37.jpg";
import drOpt37 from "@/assets/tests/dr/questions-options/dr_opt37.jpg";
import drQ38 from "@/assets/tests/dr/questions-options/dr_q38.jpg";
import drOpt38 from "@/assets/tests/dr/questions-options/dr_opt38.jpg";
import drQ39 from "@/assets/tests/dr/questions-options/dr_q39.jpg";
import drOpt39 from "@/assets/tests/dr/questions-options/dr_opt39.jpg";
import drQ40 from "@/assets/tests/dr/questions-options/dr_q40.jpg";
import drOpt40 from "@/assets/tests/dr/questions-options/dr_opt40.jpg";

export const drData: DrItem[] = [
  { id: 1, problemImageUrl: drQ1, optionsImageUrl: drOpt1, correctAnswer: "B" },
  { id: 2, problemImageUrl: drQ2, optionsImageUrl: drOpt2, correctAnswer: "A" },
  { id: 3, problemImageUrl: drQ3, optionsImageUrl: drOpt3, correctAnswer: "C" },
  { id: 4, problemImageUrl: drQ4, optionsImageUrl: drOpt4, correctAnswer: "E" },
  { id: 5, problemImageUrl: drQ5, optionsImageUrl: drOpt5, correctAnswer: "D" },
  { id: 6, problemImageUrl: drQ6, optionsImageUrl: drOpt6, correctAnswer: "A" },
  { id: 7, problemImageUrl: drQ7, optionsImageUrl: drOpt7, correctAnswer: "C" },
  { id: 8, problemImageUrl: drQ8, optionsImageUrl: drOpt8, correctAnswer: "B" },
  { id: 9, problemImageUrl: drQ9, optionsImageUrl: drOpt9, correctAnswer: "E" },
  { id: 10, problemImageUrl: drQ10, optionsImageUrl: drOpt10, correctAnswer: "D" },
  { id: 11, problemImageUrl: drQ11, optionsImageUrl: drOpt11, correctAnswer: "C" },
  { id: 12, problemImageUrl: drQ12, optionsImageUrl: drOpt12, correctAnswer: "A" },
  { id: 13, problemImageUrl: drQ13, optionsImageUrl: drOpt13, correctAnswer: "E" },
  { id: 14, problemImageUrl: drQ14, optionsImageUrl: drOpt14, correctAnswer: "B" },
  { id: 15, problemImageUrl: drQ15, optionsImageUrl: drOpt15, correctAnswer: "D" },
  { id: 16, problemImageUrl: drQ16, optionsImageUrl: drOpt16, correctAnswer: "A" },
  { id: 17, problemImageUrl: drQ17, optionsImageUrl: drOpt17, correctAnswer: "C" },
  { id: 18, problemImageUrl: drQ18, optionsImageUrl: drOpt18, correctAnswer: "B" },
  { id: 19, problemImageUrl: drQ19, optionsImageUrl: drOpt19, correctAnswer: "E" },
  { id: 20, problemImageUrl: drQ20, optionsImageUrl: drOpt20, correctAnswer: "A" },
  { id: 21, problemImageUrl: drQ21, optionsImageUrl: drOpt21, correctAnswer: "D" },
  { id: 22, problemImageUrl: drQ22, optionsImageUrl: drOpt22, correctAnswer: "B" },
  { id: 23, problemImageUrl: drQ23, optionsImageUrl: drOpt23, correctAnswer: "C" },
  { id: 24, problemImageUrl: drQ24, optionsImageUrl: drOpt24, correctAnswer: "A" },
  { id: 25, problemImageUrl: drQ25, optionsImageUrl: drOpt25, correctAnswer: "E" },
  { id: 26, problemImageUrl: drQ26, optionsImageUrl: drOpt26, correctAnswer: "B" },
  { id: 27, problemImageUrl: drQ27, optionsImageUrl: drOpt27, correctAnswer: "D" },
  { id: 28, problemImageUrl: drQ28, optionsImageUrl: drOpt28, correctAnswer: "A" },
  { id: 29, problemImageUrl: drQ29, optionsImageUrl: drOpt29, correctAnswer: "C" },
  { id: 30, problemImageUrl: drQ30, optionsImageUrl: drOpt30, correctAnswer: "E" },
  { id: 31, problemImageUrl: drQ31, optionsImageUrl: drOpt31, correctAnswer: "B" },
  { id: 32, problemImageUrl: drQ32, optionsImageUrl: drOpt32, correctAnswer: "D" },
  { id: 33, problemImageUrl: drQ33, optionsImageUrl: drOpt33, correctAnswer: "A" },
  { id: 34, problemImageUrl: drQ34, optionsImageUrl: drOpt34, correctAnswer: "C" },
  { id: 35, problemImageUrl: drQ35, optionsImageUrl: drOpt35, correctAnswer: "E" },
  { id: 36, problemImageUrl: drQ36, optionsImageUrl: drOpt36, correctAnswer: "A" },
  { id: 37, problemImageUrl: drQ37, optionsImageUrl: drOpt37, correctAnswer: "D" },
  { id: 38, problemImageUrl: drQ38, optionsImageUrl: drOpt38, correctAnswer: "B" },
  { id: 39, problemImageUrl: drQ39, optionsImageUrl: drOpt39, correctAnswer: "E" },
  { id: 40, problemImageUrl: drQ40, optionsImageUrl: drOpt40, correctAnswer: "C" },
];

export const DR_TOTAL_QUESTIONS = drData.length;
