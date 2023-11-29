import { createBrowserRouter, useRouteError, Navigate } from "react-router-dom";
import { Routepath } from "./routepath";
import Home from "../pages/home";
import Login from "../pages/login";
import WrongPage from "../pages/wrongpage";

export const Router = createBrowserRouter([
  {
    element: <Home />,
    ErrorBoundary: () => {
      console.log("the error is " + useRouteError().status);
      switch (useRouteError().status) {
        case 401:
          return <Navigate to={Routepath.login} />;
        case 404:
          return <Navigate to={Routepath.wrong} />;
        default:
          return <Navigate to={Routepath.wrong} />;
      }
    },
    loader: async () => {
      const user = localStorage.getItem("username");
      if (user == null) {
        const error = { status: 401, message: "Not found the user" };
        throw error;
      }
      console.log("the log is " + user);
      return <Navigate to={Routepath.home} />;
    },
    children: [
      {
        path: Routepath.home,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: Routepath.wrong,
    element: <WrongPage />,
  },
]);
