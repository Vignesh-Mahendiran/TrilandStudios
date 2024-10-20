import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePage } from "./routes/routes";

const Root = () => {
  const routeMapping = (routes = []) => {
    return (
      <>
        {routes?.map(({ path, Component, nestedRoutes }, index) => (
          <Route path={path} element={<Component />} key={index}>
            {!!nestedRoutes?.length && routeMapping(nestedRoutes)}
          </Route>
        ))}
      </>
    );
  };
  return (
    <Suspense fallback={<></>}>
      <Routes>{routeMapping(RoutePage)}</Routes>
    </Suspense>
  );
};

export default Root;
