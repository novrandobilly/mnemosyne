import { View, Text, Image } from "@react-pdf/renderer";
import type { DiscGraphUrls } from "@/features/main/Reports/types";
import { PDF_COLORS } from "../../../styles";

interface GraphsSectionProps {
  graphImageUrls: DiscGraphUrls;
}

const GRAPH_LABELS: Array<{ key: keyof DiscGraphUrls; label: string }> = [
  { key: "most", label: "MOST\n(Natural)" },
  { key: "least", label: "LEAST\n(Adapted)" },
  { key: "change", label: "CHANGE\n(Stress)" },
];

export const GraphsSection = ({ graphImageUrls }: GraphsSectionProps) => (
  <View>
    <Text
      style={{
        fontSize: 7,
        fontFamily: "Helvetica-Bold",
        color: PDF_COLORS.muted,
        letterSpacing: 1.5,
        marginBottom: 12,
      }}
    >
      SCORE PROFILES
    </Text>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      {GRAPH_LABELS.map(({ key, label }) =>
        graphImageUrls[key] ? (
          <View key={key} style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 7,
                fontFamily: "Helvetica-Bold",
                color: PDF_COLORS.muted,
                textAlign: "center",
                marginBottom: 4,
              }}
            >
              {label}
            </Text>
            <Image
              src={graphImageUrls[key]!}
              style={{ width: 161, height: 302 }}
            />
          </View>
        ) : null,
      )}
    </View>
  </View>
);
