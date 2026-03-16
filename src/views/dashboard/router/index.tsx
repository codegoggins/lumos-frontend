import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Dashboard = lazy(() => import("../Dashboard"));

const dashboardRoutes: RouteObject[] = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
];

export default dashboardRoutes;
