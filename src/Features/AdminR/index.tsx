import { Outlet } from "react-router-dom"
import { UserRequest } from "../../Interfaces/UserRequest"
import { getItem } from "../../components/StorageFunctions"

export const AdminR = () => {
    const user: UserRequest | null = getItem('user');

    return <div className="w-full h-full flex justify-center items-center">
        {
            user && user!.isAdmin ? (
                <Outlet />
            ) : (
                <p className="uppercase text-2xl">no tienes acceso</p>
            )
        }
    </div>
}