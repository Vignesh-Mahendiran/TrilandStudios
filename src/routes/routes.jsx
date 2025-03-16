/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { ROUTE_PATHS } from "./routePath";

const Home = lazy(() => import("../components/pages/home/Home"));

// const Carries = lazy(() => import("../components/pages/carriers/Carriers"));

// const OurServices = lazy(() =>
//   import("../components/pages/ourServices/OurServices")
// );
export const RoutePage = [
  { path: ROUTE_PATHS.home, Component: Home },
  // { path: ROUTE_PATHS.carriers, Component: Carries },
  // { path: ROUTE_PATHS.services, Component: OurServices },
];
