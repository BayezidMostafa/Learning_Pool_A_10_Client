import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../components/CheckOut/CheckOut";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/courses',
                element: <Courses />,
                loader: () => fetch('https://learning-pool-server-site.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`https://learning-pool-server-site.vercel.app/courses/${params.id}`)
            },
            {
                path: '/course/checkout/:id',
                element: <PrivateRoute><CheckOut /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-pool-server-site.vercel.app/courses/${params.id}`)  
            },
            {
                path: '/faq',
                element: <FAQ/>
            }
        ]
    }
])

export default routes;