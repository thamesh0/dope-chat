import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <div>Main Layout</div>
            <Outlet />
        </>
    );
};

export default MainLayout;
