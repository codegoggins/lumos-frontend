import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import ErrorBoundary from "../components/ErrorBoundary";
import NotFound from "../components/NotFound";
import authRoutes from "../views/auth/router";
import dashboardRoutes from "../views/dashboard/router";
import inboxRoutes from "../views/inbox/router";
import lessonRoutes from "../views/lesson/router";
import coursesRoutes from "../views/courses/router";
import settingsRoutes from "../views/settings/router";
import communityRoutes from "../views/community/router";
import tasksRoutes from "../views/tasks/router";

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
          ...dashboardRoutes,
          ...inboxRoutes,
          ...lessonRoutes,
          ...coursesRoutes,
          ...settingsRoutes,
          ...communityRoutes,
          ...tasksRoutes,
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
