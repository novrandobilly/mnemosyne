import type { FC } from "react";
import { NavButton } from "../../../components/nav-button";
import NavigationContainer from "../../../components/nav-container";
import { useLogout } from "@/api/auth/logout";

const ADMIN_NAV_ITEMS = [
  { label: "Dashboard", path: "/admin", end: true },
  { label: "Assessment Lobby", path: "/psikotes" },
  { label: "Panel", path: "/admin/panel" },
  { label: "Account Generator", path: "/admin/id-generator" },
  { label: "Reports", path: "/admin/reports" },
];

const AdminNavbar: FC = () => {
  const logout = useLogout();

  return (
    <NavigationContainer>
      {ADMIN_NAV_ITEMS.map(({ label, path, end }) => (
        <NavButton key={path} to={path} end={end}>
          {label}
        </NavButton>
      ))}
      <NavButton className="text-intidinamis-ff3b30" onClick={logout}>
        Logout
      </NavButton>
    </NavigationContainer>
  );
};
export default AdminNavbar;

