import { ActivityMoto } from "../../../Interfaces/ActivityRequest";
import { MouseEvent, useContext } from "react";
import ActivitiesContext, { IActivities } from "../provider";
import moto from "./icono_moto.png";
import { DownloadExcel } from "../../../components/DownloadExcel";

export const MotoContent = (data: ActivityMoto) => {

    const { setOpenDrawer, deleteActivity } = useContext(ActivitiesContext) as IActivities;

    const handleUbicacion = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.open(data.obj.ubicacion);
    }

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
        window.open(data.obj.foto);
    }

    return <div className="bg-white p-2 rounded-md w-full flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3 p-2">
            <div className="flex flex-row gap-3 items-center justify-center">
                <img src={moto} className="rounded-full w-[40px] h-[40px]" />
                <p className="text-2xl font-bold">Añadido por {data.act.username}</p>
            </div>
            <div className="flex flex-row gap-2 w-full justify-center items-center">
                <p>Email: {data.act.email}</p>
                <p>Telefono: {data.act.phone}</p>
            </div>
        </div>
        <div className="bg-neutral-500 h-[2px] w-full" />
        <div className="flex flex-col gap-2 w-full items-center">
            <div className="flex flex-row flex-wrap gap-2 items-center justify-center w-full">
                <p><strong>Numero moto:</strong>{data.obj.num_moto}</p>
                <p><strong>Conductor:</strong> {data.obj.conductor}</p>
                <p><strong>Cooperativa:</strong> {data.obj.cooperativa}</p>
                <p className="flex items-center justify-center gap-2"><strong>Foto:</strong><button className="bg-black text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-3 py-1" onClick={handleFoto}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-camera"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg></button></p>
                <p className="flex items-center justify-center gap-2"><strong>Ubicacion:</strong><button className="bg-black text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-3 py-1" onClick={handleUbicacion}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-current-location"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" /><path d="M12 2l0 2" /><path d="M12 20l0 2" /><path d="M20 12l2 0" /><path d="M2 12l2 0" /></svg></button></p>
            </div>
        </div>
        <div className="bg-neutral-500 h-[2px] w-full" />
        <div className="flex flex-row flex-wrap gap-3">
            <button onClick={handleEdit} className="bg-green-500 hover:bg-green-600 text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-6 py-1">Editar</button>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-6 py-1">Borrar</button>
        </div>
    </div>
}