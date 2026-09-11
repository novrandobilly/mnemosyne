import type { FC } from "react";
import { Link } from "react-router-dom";
import { IntiDinamisLogo } from "@/components/IntiDinamisLogo";

const Logo: FC = () => {
  return (
    <Link
      to="/"
      className="flex cursor-pointer items-center"
      aria-label="Inti Dinamis Home"
    >
      <IntiDinamisLogo size="md" />
    </Link>
  );
};

export default Logo;

