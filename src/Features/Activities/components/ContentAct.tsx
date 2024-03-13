import { MouseEvent, useContext } from "react";
import ActivitiesContext, { IActivities } from "../provider";

export const ActivityContent = () => {

    const { setOpenDrawer, setOpenModal, openModal } = useContext(ActivitiesContext) as IActivities;

    const handleUbicacion = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.open('https://maps.app.goo.gl/Z75iZuYLTXYawp2h9');
    }

    const handleEdit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenDrawer(true);
    }

    const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenModal(!openModal);
    }

    return <div className="bg-white p-2 rounded-md w-full flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3 p-2">
            <div className="flex flex-row gap-3 items-center justify-center">
                <div className="rounded-full w-[40px] h-[40px] bg-black" />
                <p className="text-2xl font-bold">Añadido por LuisM</p>
            </div>
            <div className="flex flex-row gap-2 w-full justify-center items-center">
                <p>Email: email-text</p>
                <p>Telefono: telefono</p>
            </div>
        </div>
        <div className="bg-neutral-500 h-[2px] w-full" />
        <div className="flex flex-col gap-2 w-full items-center">
            <div className="bg-black w-[400px] h-[150px] rounded-md" />
            <div className="flex flex-row flex-wrap gap-2 items-center justify-center w-full">
                <p><strong>Numero moto:</strong> gsfsfarf</p>
                <p><strong>Conductor:</strong> aergaefsdfsa</p>
                <p><strong>Cooperativa:</strong> dnsrthshfg</p>
                <p className="flex items-center justify-center gap-2"><strong>Ubicacion:</strong> <button className="bg-black text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-3 py-1" onClick={handleUbicacion}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-current-location"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" /><path d="M12 2l0 2" /><path d="M12 20l0 2" /><path d="M20 12l2 0" /><path d="M2 12l2 0" /></svg></button></p>
            </div>
        </div>
        <div className="bg-neutral-500 h-[2px] w-full" />
        <div className="flex flex-row flex-wrap gap-3">
            <button onClick={handleEdit} className="bg-green-500 hover:bg-green-600 text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-6 py-1">Editar</button>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white rounded-md hover:scale-105 shadow-md hover:shadow-neutral-800 transition-all ease-in-out duration-100 px-6 py-1">Borrar</button>
        </div>
    </div>
}