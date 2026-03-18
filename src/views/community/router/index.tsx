import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const CommunityLayout = lazy(() => import("../CommunityLayout"));
const Home = lazy(() => import("../Home"));
const CreatePost = lazy(() => import("../CreatePost"));
const Groups = lazy(() => import("../Groups"));
const Profile = lazy(() => import("../Profile"));
const Trending = lazy(() => import("../Trending"));
const Saved = lazy(() => import("../Saved"));

const communityRoutes: RouteObject[] = [
  {
    path: "community",
    element: <CommunityLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "create-post",
        element: <CreatePost />
      },
      {
        path: "groups",
        element: <Groups />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "trending",
        element: <Trending />
      },
      {
        path: "saved",
        element: <Saved />
      }
    ]
  },
];

export default communityRoutes;
