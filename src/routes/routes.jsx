import { lazy } from "react";
import { ROUTE_PATHS } from "./routePath";

const Home = lazy(() => import("../components/pages/home/Home"));

export const RoutePage = [{ path: ROUTE_PATHS.home, Component: Home }];
