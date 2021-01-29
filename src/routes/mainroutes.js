import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
  },
  {
    path: "/bootcamps",
    name: "BootCamps",
    exact: false,
    component: lazy(() => import("../pages/BootCampsPage")),
  },
];
