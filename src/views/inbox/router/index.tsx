import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Inbox = lazy(() => import("../Inbox"));

const inboxRoutes: RouteObject[] = [
  {
    path: "inbox",
    element: <Inbox />,
  },
];

export default inboxRoutes;
