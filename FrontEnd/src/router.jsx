import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Claims from "./Pages/Claims";
import Policies from "./Pages/Policies";
import ContactUs from "./Pages/ContactUs";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import PolicyDetails from "./Pages/PolicyDetails";
import Confirmation from "./Pages/Confirmation";
import ForgotPassword from "./Pages/ForgatePassword";
import ResetPassword from "./Pages/ResetPassword";

const router= createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:'/orders',
                element:<div>Orders</div>
            },
            {
                path:"/aboutUs",
                element:<AboutUs/>
            },
            {
                path:"/Claims",
                element:<Claims/>
            },{
                path:"/Policies",
                element:<Policies/>
            },
            {
                path:"/ContactUs",
                element:<ContactUs/>
            },
            {
                path:"/Login",
                element:<LoginPage/>
            },
            {
                path:"/SignUp",
                element:<SignUp/>
            },
            {
                path:"/PolicyDetails/:id",
                element:<PolicyDetails/>
            },
            {
                path:"/confirmation",
                element:<Confirmation/>
            },
            {
                path:"/forgate",
                element:<ForgotPassword/>
            },
            {
                path:"/reset-password/:email",
                element:<ResetPassword/>
            }
            
        ]
    }
])
export default router