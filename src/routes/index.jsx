import { createBrowserRouter } from "react-router-dom";
import Template from "../Template";
import App from "../App";
import MakeReport from "../pages/MakeReport";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardAdmin from "../pages/DashboardAdmin";
import AdminReports from "../pages/AdminReports";
import AdminMiddleware from "../components/AdminMiddleware";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/makereport",
                element: <MakeReport />,
            },
            {
                path: "/detail",
                element: <Detail />,
            },
            {
                path: "/admin-dashboard",
                element: (
                    <AdminMiddleware>
                        <DashboardAdmin />
                    </AdminMiddleware>
                ),
            },
            {
                path: "/admin-reports",
                element: (
                    <AdminMiddleware>
                        <AdminReports />
                    </AdminMiddleware>
                ),
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);
