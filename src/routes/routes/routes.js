import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Main from "../../Layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

export default routes;