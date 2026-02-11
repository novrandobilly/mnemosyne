import { useRoutes, type RouteObject } from "react-router-dom";
import HomePage from "../features/HomePage";
import Login from "../features/Login";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
