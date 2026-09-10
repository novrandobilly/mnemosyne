import type { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link
      to="/"
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-neutral-900 text-lg font-bold text-white"
    >
      A
    </Link>
  );
};

export default Logo;

