import { FC } from "react";
import { Outlet } from "react-router-dom";
import { UserRequest } from "../../Interfaces/UserRequest";
import getItem from "../../components/StorageFunctions";

export const DashboardFeature: FC = () => {
    const userLocal: UserRequest | null = getItem('user');

    return <div className="flex flex-col gap-3 items-center justify-center h-screen">
        {
            userLocal === null ? (
                <div className="bg-neutral-100 shadow-inner shadow-neutral-500 text-black w-5/6 h-full m-2 rounded-md flex flex-col gap-2 items-center justify-center">
                    <p className="text-2xl">Asegurate de iniciar sesion antes</p>
                </div>
            ) : (
                <div className="bg-neutral-100 shadow-inner shadow-neutral-500 m-2 text-black w-5/6 h-full rounded-md flex justify-center items-center">
                    <Outlet />
                </div>
            )
        }
    </div>
}