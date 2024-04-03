import { Outlet } from "react-router-dom"
import { UserRequest } from "../../Interfaces/UserRequest"
import { getSession } from "../../components/StorageFunctions"

export const AdminR = () => {
    const user: UserRequest | null = getSession('user');

    return <div className="w-full h-full flex justify-center items-center">
        {
            user && user!.isAdmin ? (
                <Outlet />
            ) : (
                <p className="dark:text-white text-2xl">No tienes acceso</p>
            )
        }
    </div>
}