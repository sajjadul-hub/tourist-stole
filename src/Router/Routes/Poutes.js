import Main from "../../LayOut/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signUp',
      element:<SignUp></SignUp>
    },
    {
      path:'/checkout/:id',
      element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
      loader:({params})=>fetch(`https://genius-car-server-silk.vercel.app/services/${params.id}`)
    },
    {
      path:'/orders',
      element:<PrivateRoute><Orders></Orders></PrivateRoute>
    },
    {
      path:'/reviews',
      element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
    }
  ]
  }
])
export default router;