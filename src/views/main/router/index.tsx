import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Dashboard = lazy(() => import("../Dashboard"));
const Inbox = lazy(() => import("../Inbox"));
const Lesson = lazy(() => import("../Lesson"));
const Courses = lazy(() => import("../Courses"));
const Settings = lazy(() => import("../Settings"));
const Groups = lazy(() => import("../Groups"));
const Tasks = lazy(() => import("../Tasks"));

const mainRoutes: RouteObject[] = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "inbox",
    element: <Inbox />,
  },
  {
    path: "lesson",
    element: <Lesson />,
  },
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "groups",
    element: <Groups />,
  },
  {
    path: "tasks",
    element: <Tasks />,
  },
];

export default mainRoutes;
