import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import router from "./router";
import antdTheme from "./config/antdTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  </StrictMode>,
);
