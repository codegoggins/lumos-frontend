import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Settings = lazy(() => import("../Settings"));

const settingsRoutes: RouteObject[] = [
  {
    path: "settings",
    element: <Settings />,
  },
];

export default settingsRoutes;
