import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import ErrorBoundary from "../components/ErrorBoundary";
import NotFound from "../components/NotFound";
import authRoutes from "../views/auth/router";
import mainRoutes from "../views/main/router";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" replace />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/auth/login" replace />,
          },
          ...authRoutes,
        ],
      },
      {
        element: <MainLayout />,
        children: [
          ...mainRoutes,
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
