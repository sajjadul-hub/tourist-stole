import Main from "../../LayOut/Main";
import Allservices from "../../Pages/Allservices/Allservices";
import Checkout from "../../Pages/Checkout/Checkout";
import Faq from "../../Pages/Faq/Faq";
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
      loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
    },
    {
      path:'/orders',
      element:<PrivateRoute><Orders></Orders></PrivateRoute>
    },
    {
      path:'/reviews',
      element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
    }
    ,
    {
      path:'/services',
      element:<PrivateRoute><Allservices></Allservices></PrivateRoute>
    }
    ,
    {
      path:'/faq',
      element:<Faq></Faq>
    }

  ]
  }
])
export default router;