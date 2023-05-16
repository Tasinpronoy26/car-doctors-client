import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home/Home";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";
import Checkout from "../Component/Checkout/Checkout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
           path: "/",
           element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/checkout/:id",
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
        }
      ]
    },
  ]);


export default router;