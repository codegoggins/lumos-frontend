import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Login = lazy(() => import("../Login"));
const Signup = lazy(() => import("../Signup"));
const ForgotPassword = lazy(() => import("../ForgotPassword"));
const VerifyOtp = lazy(() => import("../VerifyOtp"));
const ResetPassword = lazy(() => import("../ResetPassword"));

const authRoutes: RouteObject[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
];

export default authRoutes;
