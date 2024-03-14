import { useContext, MouseEvent } from "react";
import { ActivityUser } from "../../../Interfaces/ActivityRequest";
import ActivitiesContext, { IActivities } from "../provider";


export const UserContent = (data: ActivityUser) => {
    const { setOpenDrawer } = useContext(ActivitiesContext) as IActivities;

    const handleEdit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenDrawer(true);
    }

    const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //setOpenModal(!openModal);
    }

    return <div className="bg-white p-2 rounded-md w-full flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3 p-2">
            <div className="flex flex-row gap-3 items-center justify-center">
                <div className="rounded-full w-[40px] h-[40px] bg-black" />
                <p className="text-2xl font-bold">Añadido por {data.act.username}</p>
            </div>
            <div className="flex flex-row gap-2 w-full justify-center items-center">
                <p>Email: {data.act.email}</p>
                <p>Telefono: {data.act.phone}</p>
            </div>
        </div>
        <div className="bg-neutral-500 h-[2px] w-full" />
        <div className="flex flex-col gap-2 w-full items-center">
            <div className="bg-black w-[400px] h-[150px] rounded-md" />
            <div className="flex flex-row flex-wrap gap-2 items-center justify-center w-full">
                <p><strong>Nombre de usuario:</strong>{data.obj.username}</p>
                <p><strong>Contraseña:</strong> {data.obj.password}</p>
                <p><strong>Email:</strong> {data.obj.email}</p>
                <p><strong>Estado:</strong> {data.obj.isAdmin ? 'Administrador' : 'Cliente'}</p>
                <p><strong>Telefono:</strong> {data.obj.phone}</p>
            </div>
        </div>
        <div className="bg-neutral-500 h-[2px] w-full" />
        <div className="flex flex-row flex-wrap gap-3">
            <button onClick={handleEdit} className="bg-green-500 hover:bg-green-600 text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-6 py-1">Editar</button>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-6 py-1">Borrar</button>
        </div>
    </div>
}