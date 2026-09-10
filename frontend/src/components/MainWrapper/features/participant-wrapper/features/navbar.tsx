import type { FC } from "react";
import { NavButton } from "../../../components/nav-button";
import NavigationContainer from "../../../components/nav-container";
import { useLogout } from "@/api/auth/logout";

const PARTICIPANT_NAV_ITEMS = [{ label: "Assessment", path: "/psikotes" }];

const ParticipantNavbar: FC = () => {
  const logout = useLogout();

  return (
    <NavigationContainer>
      {PARTICIPANT_NAV_ITEMS.map(({ label, path }) => (
        <NavButton key={path} to={path}>
          {label}
        </NavButton>
      ))}
      <button
        type="button"
        onClick={logout}
        className="cursor-pointer rounded-full px-3 py-1.5 font-semibold text-intidinamis-ff3b30 transition hover:bg-neutral-100"
      >
        Logout
      </button>
    </NavigationContainer>
  );
};

export default ParticipantNavbar;

