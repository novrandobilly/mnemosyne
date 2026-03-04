import { type RouteObject } from "react-router-dom";
import AssessmentLobby from "../../features/AssessmentLobby";
import { PapiKostickTest } from "@/features/test-collection/PapiKostick";
import { DiscTest } from "@/features/test-collection/DISC";

export const participantRoutes: RouteObject[] = [
  {
    path: "psikotes",
    children: [
      {
        index: true,
        element: <AssessmentLobby />,
      },
      {
        path: "papikostick",
        element: <PapiKostickTest />,
      },
      {
        path: "disc",
        element: <DiscTest />,
      },
    ],
  },
];
