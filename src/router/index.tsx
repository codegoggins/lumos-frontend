import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import authRoutes from "../views/auth/router";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" replace />,
      },
      ...authRoutes,
    ],
  },
]);

export default router;
