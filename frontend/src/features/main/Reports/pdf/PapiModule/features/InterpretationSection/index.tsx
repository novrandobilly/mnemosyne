import { View, Text } from "@react-pdf/renderer";
import type { PapiResults, PapiScoreKey } from "@/features/main/PKResult/types";
import {
  FACTOR_INFO,
  CATEGORIES,
} from "@/features/main/PKResult/features/InterpretationReport/data";
import { PDF_COLORS } from "../../../styles";
import type { ReportParticipant } from "../../../../types";

interface InterpretationSectionProps {
  scores: PapiResults;
  participant: ReportParticipant;
  /** Which CATEGORIES indices to render. Defaults to all. */
  categorySlice?: [number, number];
  /** Whether to show the "LAPORAN INTERPRETASI" sub-header and score reference row. */
  showHeader?: boolean;
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

function getLevel(score: number): { label: string; color: string } | null {
  if (score >= 7) return { label: "TINGGI", color: "#059669" };
  if (score <= 3) return { label: "RENDAH", color: "#dc2626" };
  return null;
}

export const InterpretationSection = ({
  scores,
  participant,
  categorySlice,
  showHeader = true,
}: InterpretationSectionProps) => {
  const fullName = `${participant.first_name} ${participant.last_name}`;
  const visibleCategories = categorySlice
    ? CATEGORIES.slice(categorySlice[0], categorySlice[1])
    : CATEGORIES;

  return (
    <View>
      {/* Sub-header */}
      {showHeader && (
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: PDF_COLORS.border,
            paddingBottom: 8,
            marginBottom: 12,
            marginTop: 18,
          }}
        >
          <Text
            style={{
              fontSize: 7,
              fontFamily: "Helvetica-Bold",
              color: PDF_COLORS.muted,
              letterSpacing: 1.5,
              marginBottom: 3,
            }}
          >
            LAPORAN INTERPRETASI
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Helvetica-Bold",
              color: PDF_COLORS.black,
            }}
          >
            PAPI Kostick
          </Text>
          <View style={{ flexDirection: "row", gap: 20, marginTop: 4 }}>
            <Text style={{ fontSize: 8, color: PDF_COLORS.muted }}>
              <Text
                style={{
                  color: PDF_COLORS.black,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Nama:{" "}
              </Text>
              {fullName}
            </Text>
            <Text style={{ fontSize: 8, color: PDF_COLORS.muted }}>
              <Text
                style={{
                  color: PDF_COLORS.black,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Perusahaan:{" "}
              </Text>
              {participant.company || "—"}
            </Text>
          </View>
        </View>
      )}

      {/* Score reference row */}
      {showHeader && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 4,
            marginBottom: 16,
          }}
        >
          {SCORE_ORDER.map((f) => (
            <View
              key={f}
              style={{
                alignItems: "center",
                borderWidth: 1,
                borderColor: PDF_COLORS.border,
                borderRadius: 3,
                paddingHorizontal: 5,
                paddingVertical: 3,
                backgroundColor: PDF_COLORS.bg,
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
                  fontSize: 9,
                  fontFamily: "Helvetica-Bold",
                  color: PDF_COLORS.black,
                  marginTop: 1,
                }}
              >
                {scores[f]}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Category sections */}
      {visibleCategories.map((cat) => (
        <View key={cat.en} style={{ marginBottom: 16 }}>
          {/* Category heading */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              gap: 6,
              borderBottomWidth: 1,
              borderColor: PDF_COLORS.accentLight,
              paddingBottom: 4,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: "#059669",
                letterSpacing: 1,
              }}
            >
              {cat.id.toUpperCase()}
            </Text>
            <Text style={{ fontSize: 8, color: PDF_COLORS.muted }}>
              ({cat.en})
            </Text>
          </View>

          {/* Factor rows */}
          {cat.factors.map((fKey) => {
            const info = FACTOR_INFO[fKey];
            const score = scores[fKey];
            const level = getLevel(score);
            return (
              <View
                key={fKey}
                style={{ flexDirection: "row", gap: 8, marginBottom: 8 }}
              >
                {/* Score box */}
                <View
                  style={{ alignItems: "center", width: 24, flexShrink: 0 }}
                >
                  <Text
                    style={{
                      fontSize: 7,
                      fontFamily: "Helvetica-Bold",
                      color: PDF_COLORS.muted,
                    }}
                  >
                    {fKey}
                  </Text>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 1,
                      borderColor: PDF_COLORS.border,
                      borderRadius: 3,
                      backgroundColor: PDF_COLORS.bg,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 9,
                        fontFamily: "Helvetica-Bold",
                        color: PDF_COLORS.black,
                      }}
                    >
                      {score}
                    </Text>
                  </View>
                </View>

                {/* Interpretation text */}
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                      flexWrap: "wrap",
                      marginBottom: 3,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 8,
                        fontFamily: "Helvetica-Bold",
                        color: PDF_COLORS.black,
                      }}
                    >
                      {info.name}
                    </Text>
                    <Text style={{ fontSize: 8, color: PDF_COLORS.muted }}>
                      ({info.shortName})
                    </Text>
                    {level && (
                      <Text
                        style={{
                          fontSize: 7,
                          fontFamily: "Helvetica-Bold",
                          color: level.color,
                          borderWidth: 1,
                          borderColor: level.color,
                          paddingHorizontal: 4,
                          paddingVertical: 1,
                          borderRadius: 2,
                        }}
                      >
                        {level.label}
                      </Text>
                    )}
                  </View>
                  <Text
                    style={{
                      fontSize: 8,
                      color: PDF_COLORS.muted,
                      lineHeight: 1.5,
                    }}
                  >
                    {info.interpret(score)}
                  </Text>
                </View>
              </View>
            );
          })}

          {/* VS comparison blocks */}
          {cat.vsBlocks.map(({ left, right, interpret }) => (
            <View
              key={`${left}-${right}`}
              style={{
                borderWidth: 1,
                borderColor: PDF_COLORS.border,
                borderRadius: 4,
                padding: 8,
                marginBottom: 8,
                backgroundColor: PDF_COLORS.bg,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 7,
                    fontFamily: "Helvetica-Bold",
                    color: PDF_COLORS.muted,
                    letterSpacing: 1,
                  }}
                >
                  PERBANDINGAN
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 8,
                      fontFamily: "Helvetica-Bold",
                      color: PDF_COLORS.black,
                    }}
                  >
                    {left}
                  </Text>
                  <Text style={{ fontSize: 8, color: PDF_COLORS.muted }}>
                    vs
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                      fontFamily: "Helvetica-Bold",
                      color: PDF_COLORS.black,
                    }}
                  >
                    {right}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  {[left, right].map((key, i) => (
                    <View
                      key={key}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      {i === 1 && (
                        <Text style={{ fontSize: 8, color: PDF_COLORS.muted }}>
                          :
                        </Text>
                      )}
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: PDF_COLORS.border,
                          borderRadius: 2,
                          paddingHorizontal: 4,
                          paddingVertical: 1,
                          backgroundColor: PDF_COLORS.white,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 8,
                            fontFamily: "Helvetica-Bold",
                            color: PDF_COLORS.black,
                          }}
                        >
                          {scores[key]}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
              <Text
                style={{
                  fontSize: 8,
                  color: PDF_COLORS.muted,
                  lineHeight: 1.5,
                }}
              >
                {interpret(scores[left], scores[right])}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};
