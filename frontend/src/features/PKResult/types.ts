export type PapiScoreKey =
  | "N"
  | "A"
  | "G"
  | "L"
  | "P"
  | "I"
  | "T"
  | "V"
  | "S"
  | "R"
  | "D"
  | "C"
  | "E"
  | "X"
  | "B"
  | "O"
  | "Z"
  | "K"
  | "F"
  | "W";

export type PapiResults = Record<PapiScoreKey, number>;
