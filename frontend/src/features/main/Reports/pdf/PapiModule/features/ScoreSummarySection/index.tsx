import { View, Text } from "@react-pdf/renderer";
import type { PapiResults, PapiScoreKey } from "@/features/main/PKResult/types";
import { PDF_COLORS } from "../../../styles";

interface ScoreSummarySectionProps {
  scores: PapiResults;
}

const CATEGORIES: { label: string; factors: PapiScoreKey[] }[] = [
  { label: "Work Direction", factors: ["N", "G", "A"] },
  { label: "Leadership", factors: ["L", "P", "I"] },
  { label: "Activity", factors: ["T", "V"] },
  { label: "Social Nature", factors: ["S", "R", "D"] },
  { label: "Work Style", factors: ["C", "E", "Z"] },
  { label: "Temperament", factors: ["X", "B", "O"] },
  { label: "Followership", factors: ["K", "F", "W"] },
];

export const ScoreSummarySection = ({ scores }: ScoreSummarySectionProps) => (
  <View style={{ marginBottom: 14 }}>
    <Text
      style={{
        fontSize: 7,
        fontFamily: "Helvetica-Bold",
        color: PDF_COLORS.muted,
        letterSpacing: 1.5,
        marginBottom: 6,
      }}
    >
      SCORE SUMMARY
    </Text>
    <View style={{ flexDirection: "row", gap: 5 }}>
      {CATEGORIES.map(({ label, factors }) => (
        <View
          key={label}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: PDF_COLORS.border,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {/* Category label */}
          <View
            style={{
              backgroundColor: PDF_COLORS.accentLight,
              paddingVertical: 3,
              paddingHorizontal: 4,
            }}
          >
            <Text
              style={{
                fontSize: 5.5,
                fontFamily: "Helvetica-Bold",
                color: "#065f46",
                textAlign: "center",
              }}
            >
              {label.toUpperCase()}
            </Text>
          </View>

          {/* Factor scores */}
          <View style={{ flexDirection: "row" }}>
            {factors.map((f, i) => (
              <View
                key={f}
                style={{
                  flex: 1,
                  alignItems: "center",
                  paddingVertical: 5,
                  borderRightWidth: i < factors.length - 1 ? 1 : 0,
                  borderColor: PDF_COLORS.border,
                }}
              >
                <Text
                  style={{
                    fontSize: 7,
                    fontFamily: "Helvetica-Bold",
                    color: PDF_COLORS.muted,
                  }}
                >
                  {f}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Helvetica-Bold",
                    color: PDF_COLORS.black,
                    marginTop: 2,
                  }}
                >
                  {scores[f]}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  </View>
);
