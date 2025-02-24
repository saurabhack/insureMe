import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import AddPolicyPage from "./Pages/AddPolicyPage";
import AddUser from "./Pages/AddUser";
import Claims from "./Pages/Claims";
import Policy from "./Pages/Policy";
import ActivePolicies from "./Pages/ActivePolicies";
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
                path:"/Dashboard",
                element:<Dashboard/>
            },
            {
                path:"/Users",
                element:<Users/>
            },
            {
                path:"/AddPolicy",
                element:<AddPolicyPage/>
            },
            {
                path:"/AddNewUser",
                element:<AddUser/>
            },
            {
                path:"/Claims",
                element:<Claims/>
            },
            {
                path:"/Policy",
                element:<Policy/>
            },
            {
                path:"/ActivePolicies",
                element:<ActivePolicies/>
            }
        ]
    }
])
export default router