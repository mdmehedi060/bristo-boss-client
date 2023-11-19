
import {createBrowserRouter} from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../Pages/Home/Home/Home";
import Menu from './../Pages/Menu/Menu/Menu';
import Order from './../Pages/Order/Order/Order';
import Login from './../Pages/Login/Login';
import SignUp from './../Pages/SignUp/SignUp';
import PrivateRout from "./PrivateRout";
import Secrate from "../Pages/Shared/Secrate/Secrate";
import Dashboard from "../Layout/DashBoard/Dashboard";
import Cart from './../Pages/Dashboard/Cart/Cart';
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from './AdminRoute';
import ManageItems from './../Pages/Dashboard/ManageItems/ManageItems';
import UpdateItem from './../Pages/Dashboard/UpdateItem/UpdateItem';






export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'menu',
        element:<Menu></Menu>
       },
       {
        path:'order/:category',
        element:<Order></Order>
       },
       {
        path:'login',
        element:<Login></Login>
       },
       {
        path:'signup',
        element:<SignUp></SignUp>
       },
{
  path:'secrate',
  element:<PrivateRout><Secrate></Secrate></PrivateRout>
}

      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRout><Dashboard></Dashboard></PrivateRout>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        // admin
        {
          path:'additems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageitems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader:({params})=>fetch(`http://localhost:5000/${params.id}`),
        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        
      ]
    },
  ]);