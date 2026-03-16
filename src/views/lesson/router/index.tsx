import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Lesson = lazy(() => import("../Lesson"));

const lessonRoutes: RouteObject[] = [
  {
    path: "lesson",
    element: <Lesson />,
  },
];

export default lessonRoutes;
