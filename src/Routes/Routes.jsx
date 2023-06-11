import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Error from "../Layout/Error/Error";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/instructors',
        element: <PrivateRoute><Instructors></Instructors></PrivateRoute>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;