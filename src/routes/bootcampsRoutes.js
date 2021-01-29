import { lazy } from "react";

export const bootCampRoutes = [
  {
    path: "/create",
    name: "Create",
    exact: true,
    component: lazy(() =>
      import("../components/bootCamp/bootCampForm/BootCampForm")
    ),
  },
  {
    path: "/preview",
    name: "Preview",
    exact: true,
    component: lazy(() =>
      import("../components/bootCamp/bootCampList/BootCampList")
    ),
  },
];
