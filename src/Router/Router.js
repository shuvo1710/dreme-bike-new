import { createBrowserRouter } from "react-router-dom";
import BMWbike from "../Component/BMWbike/BMWbike";
import AddProducts from "../Component/Dashboard/AddProducts/AddProducts";
import AllBuyer from "../Component/Dashboard/AllBuyer";

import AllSeller from "../Component/Dashboard/AllSeller";
import MyOrder from "../Component/Dashboard/MyOrder";
import MyProducts from "../Component/Dashboard/MyProducts";
import ReportProduct from "../Component/Dashboard/ReportProduct";
import ReportProductCard from "../Component/Dashboard/ReportProductCard";

import DucatiBike from "../Component/DucatiBike/DucatiBike";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Harleydavidson from "../Component/Harleydavidson/Harleydavidson";
import HiroBike from "../Component/HiroBike/HiroBike";
import Blog from "../Component/Home/Blog/Blog";
import Home from "../Component/Home/Home/Home";
import KawasakiBike from "../Component/KawasakiBike/KawasakiBike";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import YamahaBike from "../Component/YamahaBike/YamahaBike";
import DashboardMain from "../LayOut/DashboardMain";
import Main from "../LayOut/Main";
import PrivateRouter from "./PrivateRouter";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/hero',
                element:<PrivateRouter><HiroBike></HiroBike></PrivateRouter>
            },
            {
                path:"/bmwBike",
                element:<PrivateRouter><BMWbike></BMWbike></PrivateRouter>
            },
            {
                path:"/ducati",
                element:<PrivateRouter><DucatiBike></DucatiBike></PrivateRouter>
            },
            {
                path:"/harleyDavidson",
                element:<PrivateRouter><Harleydavidson></Harleydavidson></PrivateRouter>
            },
            {
                path:"/kawasaki",
                element:<PrivateRouter><KawasakiBike></KawasakiBike></PrivateRouter>
            },
            {
                path:"/yamaha",
                element:<PrivateRouter><YamahaBike></YamahaBike></PrivateRouter>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]

    },
    {
        path:'/dashboardLayOut',
        element:<PrivateRouter><DashboardMain></DashboardMain></PrivateRouter>,
        children:[
            {
                path:'/dashboardLayOut/allSeller',
                element:<AllSeller></AllSeller>
            },
            {
                path:"/dashboardLayOut/allBuyer",
                element:<AllBuyer></AllBuyer>
            },
            {
                path:'/dashboardLayOut/addProduct',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/dashboardLayOut/myProducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboardLayOut/myOrders',
                element:<MyOrder></MyOrder>
            },
            {
                path:'/dashboardLayOut/Report',
                element:<ReportProduct></ReportProduct>
            }
            
            
        ]
    }
])