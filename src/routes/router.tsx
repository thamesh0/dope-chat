import { ComponentType, lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout.tsx";
import Loader from "../components/Loader.tsx";
import { DEFAULT_PATH } from "../config";

interface LoadableProps {
    [key: string]: object;
}

const Loadable = (Component: ComponentType) => (props: LoadableProps) => {
    return (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
                { path: "app", element: <GeneralApp /> },
                { path: "404", element: <Page404 /> },
                { path: "*", element: <Navigate to="/404" replace /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}

const GeneralApp = Loadable(lazy(() => import("../pages/dashboard/GeneralApp")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
