import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Error from "../Layout/Error/Error";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";

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
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'selectedclasses',
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: 'enrolledclasses',
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymenthistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;