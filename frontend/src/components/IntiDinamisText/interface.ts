import React, { type PropsWithChildren } from "react";

export interface IntiDinamisTextProps extends PropsWithChildren {
  size?: "10" | "12" | "14" | "16" | "20" | "24";
  weight?: "light" | "regular" | "medium" | "semibold" | "bold";
  as?: "p" | "h1" | "h2" | "h3" | "span";
  className?: React.HTMLAttributes<"p">["className"];
}
