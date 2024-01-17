import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import About from "../Components/About";
import Blog from "../Components/Blog";
import LogOut from "../Components/LogOut";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import DashBoard from "../dashboard/DashBoard";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import EditBooks from "../dashboard/EditBooks";
import ManageBook from "../dashboard/ManageBook";
import UploadBook from "../dashboard/UploadBook";
import Home from "../home/Home";
import PrivateRoute from "../privateRouting/PrivateRoute";
import Shop from "../shop/Shop";
import SingleBook from "../shop/SingleBook";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:8000/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashBoardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <PrivateRoute><DashBoard /></PrivateRoute>
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBook />
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBook />
            }, {
                path: "/admin/dashboard/edit-book/:id",
                element: <EditBooks />,
                loader: ({ params }) => fetch(`http://localhost:8000/book/${params.id}`)
            }
        ]
    },
    {
        path: "sign-up",
        element: <Signup />
    }, {
        path: "login",
        element: <Login />
    }
    , {
        path: "logout",
        element: <LogOut />
    }
]);
export default router