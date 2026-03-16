import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Lesson = lazy(() => import("../Lesson"));
const Watch = lazy(() => import("../components/Watch"));

const lessonRoutes: RouteObject[] = [
  {
    path: "lesson",
    element: <Lesson />,
  },
  {
    path: "lesson/watch/:lessonId",
    element: <Watch />,
  },
];

export default lessonRoutes;
