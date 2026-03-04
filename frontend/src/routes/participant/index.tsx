import { type RouteObject } from "react-router-dom";
import AssessmentLobby from "../../features/AssessmentLobby";
import { PapiKostickTest } from "@/features/test-collection/PapiKostick";
import { DiscTest } from "@/features/test-collection/DISC";
import { Eas5Test } from "@/features/test-collection/EAS5";
import { Eas4Test } from "@/features/test-collection/EAS4";
import { Eas6Test } from "@/features/test-collection/EAS6";

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
      {
        path: "eas4",
        element: <Eas4Test />,
      },
      {
        path: "eas5",
        element: <Eas5Test />,
      },
      {
        path: "eas6",
        element: <Eas6Test />,
      },
    ],
  },
];
