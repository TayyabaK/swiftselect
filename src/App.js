import * as React from "react";
import * as ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;