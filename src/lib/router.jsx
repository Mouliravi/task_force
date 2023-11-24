import { createBrowserRouter } from "react-router-dom";
import { Routepath } from "./routepath";
import Home from "../pages/home";
import Login from "../pages/login";

export const Router = createBrowserRouter([
  {
    path: Routepath.login,
    element: <Login />,
  },
  {
    path: Routepath.home,
    element: <Home />,
  },
]);
