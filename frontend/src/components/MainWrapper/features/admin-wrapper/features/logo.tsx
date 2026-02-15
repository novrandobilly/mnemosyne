import type { FC } from "react";
import { useLogout } from "../../../../../tanstack/auth/logout";

const Logo: FC = () => {
  const logout = useLogout();
  return (
    <div
      onClick={logout}
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-lg font-bold text-white"
    >
      A
    </div>
  );
};

export default Logo;
