import { Outlet } from "react-router";

const Main = () => {

    return (
        <main className="flex-grow-1 h-100">
            <Outlet />
        </main>
    )

}

export default Main