import { cn } from "../../lib/tailwind-merge";
import type { IntiDinamisTextProps } from "./interface";

export const IntiDinamisText = (props: IntiDinamisTextProps) => {
  const {
    children,
    as: Component = "p",
    size = "14",
    weight = "regular",
    className = "",
  } = props;

  const fontWeights = {
    light: "font-light",
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const fontSizes = {
    10: "text-xxs",
    12: "text-xs",
    14: "text-sm",
    16: "text-base",
    20: "text-xl",
    24: "text-2xl",
  };

  const combinedStyles = cn(
    `${fontWeights[weight]} ${fontSizes[size]}`,
    className,
  );

  return <Component className={combinedStyles}>{children}</Component>;
};
