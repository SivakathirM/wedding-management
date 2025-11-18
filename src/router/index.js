import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home"
import Error from "../pages/Error";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Plans from "../pages/Plans";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"",
                element:<Home />
            },
            {
                path:"*",
                element:<Error />
            },
            {
                path:"signin",
                element:<SignIn />
            },
            {
                path:"signup",
                element:<SignUp />
            },
            {
                path:"plans",
                element:<Plans />
            }
        ]
    }
])

export default router