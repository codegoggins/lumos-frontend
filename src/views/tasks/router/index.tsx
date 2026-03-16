import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Tasks = lazy(() => import("../Tasks"));

const tasksRoutes: RouteObject[] = [
  {
    path: "tasks",
    element: <Tasks />,
  },
];

export default tasksRoutes;
