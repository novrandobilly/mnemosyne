import type { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavButton } from "../../../components/nav-button";
import NavigationContainer from "../../../components/nav-container";

const PUBLIC_NAV_ITEMS = [{ label: "Home", path: "/" }];

const PublicNavbar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <NavigationContainer>
      {PUBLIC_NAV_ITEMS.map(({ label, path }) => (
        <NavButton
          key={path}
          isActive={pathname === path}
          onClick={() => navigate(path)}
        >
          {label}
        </NavButton>
      ))}
      <NavButton
        isActive={pathname === "/login"}
        onClick={() => navigate("/login")}
      >
        Login
      </NavButton>
    </NavigationContainer>
  );
};

export default PublicNavbar;
