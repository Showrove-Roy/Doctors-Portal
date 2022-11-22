import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Secondary from "../../Layout/Secondary";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Registration/SignIn/SignIn";
import SignUP from "../../Pages/Registration/SignUP/SignUP";
import Err404Page from "../../Pages/Share/ErrorPage/Err404Page";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: "/",
    element: <Secondary></Secondary>,
    children: [
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <SignUP></SignUP>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Err404Page></Err404Page>,
  },
]);

export default router;
