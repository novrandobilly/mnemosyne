import type { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavButton } from "../../../components/nav-button";
import NavigationContainer from "../../../components/nav-container";

const AdminNavbar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const ADMIN_NAV_ITEMS = [
    { label: "Dashboard", path: "/admin" },
    { label: "Assessment Lobby", path: "/psikotes" },
    { label: "Participants", path: "/admin/participant-details" },
    { label: "Panel", path: "/admin/panel" },
    { label: "Account Generator", path: "/admin/id-generator" },
  ];

  return (
    <NavigationContainer>
      {ADMIN_NAV_ITEMS.map((item) => {
        const { label, path } = item;
        const isActive = pathname === path;
        return (
          <NavButton
            key={path}
            isActive={isActive}
            onClick={() => navigate(path)}
          >
            {label}
          </NavButton>
        );
      })}
    </NavigationContainer>
  );
};
export default AdminNavbar;
