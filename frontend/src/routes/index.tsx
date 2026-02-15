import { useRoutes, type RouteObject } from "react-router-dom";
import HomePage from "../features/HomePage";
import Login from "../features/Login";
import { participantRoutes } from "./participant";
import { adminRoutes } from "./admin";
import { AuthGuard } from "./guard/auth-guard";
import { AdminGuard } from "./guard/admin-guard";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <AuthGuard />,
    children: [
      ...participantRoutes,
      {
        element: <AdminGuard />,
        children: [...adminRoutes],
      },
    ],
  },
];

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
