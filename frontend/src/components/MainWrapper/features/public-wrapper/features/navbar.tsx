import type { FC } from "react";
import { NavButton } from "../../../components/nav-button";
import NavigationContainer from "../../../components/nav-container";

const PUBLIC_NAV_ITEMS = [{ label: "Home", path: "/", end: true }];

const PublicNavbar: FC = () => {
  return (
    <NavigationContainer>
      {PUBLIC_NAV_ITEMS.map(({ label, path, end }) => (
        <NavButton key={path} to={path} end={end}>
          {label}
        </NavButton>
      ))}
      <NavButton to="/login">Login</NavButton>
    </NavigationContainer>
  );
};

export default PublicNavbar;

