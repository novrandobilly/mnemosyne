import { type RouteObject } from "react-router-dom";
import AdminDashboard from "../../features/AdminDashboard";
import AssessmentPanel from "../../features/AssessmentPanel";
import ParticipantDetails from "../../features/ParticipantDetails";
import ParticipantGenerator from "../../features/ParticipantGenerator";

export const adminRoutes: RouteObject[] = [
  {
    path: "admin",
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "participant-details",
        element: <ParticipantDetails />,
      },
      {
        path: "panel",
        element: <AssessmentPanel />,
      },
      {
        path: "id-generator",
        element: <ParticipantGenerator />,
      },
    ],
  },
];
