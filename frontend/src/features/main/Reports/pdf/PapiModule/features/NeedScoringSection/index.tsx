import { View, Text } from "@react-pdf/renderer";
import type { PapiResults, PapiScoreKey } from "@/features/main/PKResult/types";
import { PDF_COLORS } from "../../../styles";

interface NeedScoringProps {
  scores: PapiResults;
}

const NEED_FACTORS: PapiScoreKey[] = [
  "N",
  "A",
  "P",
  "X",
  "B",
  "O",
  "Z",
  "K",
  "F",
  "W",
];

const CELL = 16;

export const NeedScoringSection = ({ scores }: NeedScoringProps) => (
  <View>
    <Text
      style={{
        fontSize: 7,
        fontFamily: "Helvetica-Bold",
        color: PDF_COLORS.muted,
        letterSpacing: 1.5,
        marginBottom: 6,
      }}
    >
      NEED SCORING
    </Text>

    {/* Score row */}
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          width: CELL,
          height: CELL,
          borderWidth: 1,
          borderColor: PDF_COLORS.border,
          backgroundColor: PDF_COLORS.bg,
        }}
      />
      {NEED_FACTORS.map((f) => (
        <View
          key={f}
          style={{
            width: CELL,
            height: CELL,
            borderWidth: 1,
            borderColor: PDF_COLORS.border,
            backgroundColor: PDF_COLORS.accentLight,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 7,
              fontFamily: "Helvetica-Bold",
              color: "#065f46",
            }}
          >
            {scores[f]}
          </Text>
        </View>
      ))}
    </View>

    {/* Header row */}
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          width: CELL,
          height: CELL,
          borderWidth: 1,
          borderColor: PDF_COLORS.border,
          backgroundColor: PDF_COLORS.bg,
        }}
      />
      {NEED_FACTORS.map((f) => (
        <View
          key={f}
          style={{
            width: CELL,
            height: CELL,
            borderWidth: 1,
            borderColor: PDF_COLORS.border,
            backgroundColor: PDF_COLORS.bg,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 7,
              fontFamily: "Helvetica-Bold",
              color: PDF_COLORS.black,
            }}
          >
            {f}
          </Text>
        </View>
      ))}
    </View>

    {/* Grid rows */}
    {NEED_FACTORS.map((rowFactor, rowIdx) => (
      <View key={rowFactor} style={{ flexDirection: "row" }}>
        <View
          style={{
            width: CELL,
            height: CELL,
            borderWidth: 1,
            borderColor: PDF_COLORS.border,
            backgroundColor: PDF_COLORS.bg,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 7,
              fontFamily: "Helvetica-Bold",
              color: PDF_COLORS.black,
            }}
          >
            {rowFactor}
          </Text>
        </View>
        {NEED_FACTORS.map((colFactor, colIdx) => {
          if (colIdx < rowIdx) {
            return (
              <View
                key={colFactor}
                style={{
                  width: CELL,
                  height: CELL,
                  borderWidth: 1,
                  borderColor: PDF_COLORS.border,
                  backgroundColor: PDF_COLORS.bg,
                }}
              />
            );
          }
          const dominant =
            scores[colFactor] >= scores[rowFactor] ? colFactor : rowFactor;
          return (
            <View
              key={colFactor}
              style={{
                width: CELL,
                height: CELL,
                borderWidth: 1,
                borderColor: PDF_COLORS.border,
                backgroundColor: PDF_COLORS.white,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Helvetica-Bold",
                  color: PDF_COLORS.black,
                }}
              >
                {dominant}
              </Text>
            </View>
          );
        })}
      </View>
    ))}
  </View>
);
