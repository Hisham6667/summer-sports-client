import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Error from "../Layout/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;