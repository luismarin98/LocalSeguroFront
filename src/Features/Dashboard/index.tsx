import { FC } from "react";
import { Outlet } from "react-router-dom";
import { UserRequest } from "../../Interfaces/UserRequest";
import { getSession } from "../../components/StorageFunctions";

export const DashboardFeature: FC = () => {
    const userLocal: UserRequest | null = getSession('user');

    return <div className="flex flex-col gap-3 items-center justify-center h-full w-full">
        {
            userLocal === null ? (
                <div className="text-black m-2 rounded-md flex flex-col gap-2 items-center justify-center">
                    <p className="text-2xl">Asegurate de iniciar sesion antes</p>
                </div>
            ) : (
                <div className="flex justify-center items-center w-full h-full">
                    <Outlet />
                </div>
            )
        }
    </div>
}