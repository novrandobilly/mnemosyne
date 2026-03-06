import type { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavButton } from "../../../components/nav-button";
import NavigationContainer from "../../../components/nav-container";
import { useLogout } from "@/tanstack/auth/logout";

const PARTICIPANT_NAV_ITEMS = [{ label: "Assessment", path: "/psikotes" }];

const ParticipantNavbar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const logout = useLogout();

  return (
    <NavigationContainer>
      {PARTICIPANT_NAV_ITEMS.map(({ label, path }) => (
        <NavButton
          key={path}
          isActive={pathname.startsWith(path)}
          onClick={() => navigate(path)}
        >
          {label}
        </NavButton>
      ))}
      <NavButton className="text-intidinamis-ff3b30" onClick={logout}>
        Logout
      </NavButton>
    </NavigationContainer>
  );
};

export default ParticipantNavbar;
