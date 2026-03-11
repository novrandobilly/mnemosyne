import { View, Text } from "@react-pdf/renderer";
import type { PapiResults, PapiScoreKey } from "@/features/main/PKResult/types";
import { PDF_COLORS } from "../../../styles";

interface RoleScoringProps {
  scores: PapiResults;
}

const ROLE_FACTORS: PapiScoreKey[] = [
  "G",
  "L",
  "I",
  "T",
  "V",
  "S",
  "R",
  "D",
  "C",
  "E",
];

const CELL = 16;

export const RoleScoringSection = ({ scores }: RoleScoringProps) => (
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
      ROLE SCORING
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
      {ROLE_FACTORS.map((f) => (
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
      {ROLE_FACTORS.map((f) => (
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
    {ROLE_FACTORS.map((rowFactor, rowIdx) => (
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
        {ROLE_FACTORS.map((colFactor, colIdx) => {
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
