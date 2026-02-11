import { useRoutes, type RouteObject } from "react-router-dom";
import HomePage from "../features/HomePage";
import Login from "../features/Login";
import { participantRoutes } from "./participant";
import { adminRoutes } from "./admin";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  ...participantRoutes,
  ...adminRoutes,
];

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
