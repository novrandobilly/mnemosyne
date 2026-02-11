import { type RouteObject } from "react-router-dom";
import AssessmentPanel from "../../features/AssessmentPanel";

export const adminRoutes: RouteObject[] = [
  {
    path: "admin",
    children: [
      {
        path: "panel",
        element: <AssessmentPanel />,
      },
    ],
  },
];
