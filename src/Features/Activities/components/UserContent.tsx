import { useContext, MouseEvent } from "react";
import { ActivityUser } from "../../../Interfaces/ActivityRequest";
import ActivitiesContext, { IActivities } from "../provider";
import { DownloadExcel } from "../../../components/DownloadExcel";


export const UserContent = (data: ActivityUser) => {
    const { setOpenDrawer, deleteActivity } = useContext(ActivitiesContext) as IActivities;

    const handleEdit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenDrawer(true);
    }

    const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        deleteActivity(data.act.id)
    }

    const handleFoto = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.open(data.obj.photo);
    }

    return <div className="bg-white p-2 rounded-md w-full flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3 p-2">
            <div className="flex flex-row gap-3 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
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
                <p className="flex items-center justify-center gap-2"><strong>Foto:</strong><button className="bg-black text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-3 py-1" onClick={handleFoto}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-camera"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg></button></p>
            </div>
        </div>
        <div className="bg-neutral-500 h-[2px] w-full" />
        <div className="flex flex-row flex-wrap gap-3">
            <button onClick={handleEdit} className="bg-green-500 hover:bg-green-600 text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-6 py-1">Editar</button>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-6 py-1">Borrar</button>
        </div>
    </div>
}