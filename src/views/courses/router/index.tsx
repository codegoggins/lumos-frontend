import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Courses = lazy(() => import("../Courses"));

const coursesRoutes: RouteObject[] = [
  {
    path: "courses",
    element: <Courses />,
  },
];

export default coursesRoutes;
