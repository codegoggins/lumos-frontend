import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Checkout = lazy(() => import("../Checkout"));

const checkoutRoutes: RouteObject[] = [
  {
    path: "checkout",
    element: <Checkout />,
  },
];

export default checkoutRoutes;
