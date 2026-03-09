import { type RouteObject } from "react-router-dom";
import AdminDashboard from "../../features/main/AdminDashboard";
import AssessmentPanel from "../../features/main/AssessmentPanel";
import ParticipantDetails from "../../features/main/ParticipantDetails";
import PKResult from "../../features/main/PKResult";
import DISCResult from "../../features/main/DISCResult";
import Intray1Result from "../../features/main/Intray1Result";
import Intray2Result from "../../features/main/Intray2Result";
import AccountGenerator from "../../features/main/AccountGenerator";

export const adminRoutes: RouteObject[] = [
  {
    path: "admin",
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "participants/:id",
        element: <ParticipantDetails />,
      },
      {
        path: "participants/:id/results/pk",
        element: <PKResult />,
      },
      {
        path: "participants/:id/results/disc",
        element: <DISCResult />,
      },
      {
        path: "participants/:id/results/intray1",
        element: <Intray1Result />,
      },
      {
        path: "participants/:id/results/intray2",
        element: <Intray2Result />,
      },
      {
        path: "panel",
        element: <AssessmentPanel />,
      },
      {
        path: "id-generator",
        element: <AccountGenerator />,
      },
    ],
  },
];
