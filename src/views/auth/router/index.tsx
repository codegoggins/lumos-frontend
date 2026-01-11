import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Login = lazy(() => import("../Login"));
const Signup = lazy(() => import("../Signup"));

const authRoutes: RouteObject[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
];

export default authRoutes;
