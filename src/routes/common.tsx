import { Navigate } from "react-router-dom";
import { lazyImport } from "@/utils/lazyImport";
import { App } from "./App";

const { Homepage } = lazyImport(
  () => import("@/features/homepage"),
  "Homepage"
);

export const commonRoutes = [
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
