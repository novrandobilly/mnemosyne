import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const Logo: FC = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-neutral-900 text-lg font-bold text-white"
    >
      A
    </div>
  );
};

export default Logo;
