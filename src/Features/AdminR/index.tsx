import { Outlet } from "react-router-dom"

export const AdminR = () => {
    return <div className="w-full h-full flex justify-center items-center">
        <Outlet />
    </div>
}