import { View, Text, Image } from "@react-pdf/renderer";
import { PDF_COLORS } from "../../../styles";

interface PapiWheelSectionProps {
  imageUrl?: string;
}

export const PapiWheelSection = ({ imageUrl }: PapiWheelSectionProps) => {
  if (!imageUrl) return null;

  return (
    <View style={{ alignItems: "center", marginBottom: 14 }}>
      <Text
        style={{
          fontSize: 7,
          fontFamily: "Helvetica-Bold",
          color: PDF_COLORS.muted,
          letterSpacing: 1.5,
          marginBottom: 6,
          alignSelf: "flex-start",
        }}
      >
        PAPI WHEEL
      </Text>
      <Image src={imageUrl} style={{ width: 320, height: 320 }} />
    </View>
  );
};
