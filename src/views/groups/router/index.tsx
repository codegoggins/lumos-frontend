import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Groups = lazy(() => import("../Groups"));

const groupsRoutes: RouteObject[] = [
  {
    path: "groups",
    element: <Groups />,
  },
];

export default groupsRoutes;
