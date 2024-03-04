import { FC, useContext, MouseEvent } from "react";
import { Modal } from "../../components/Modal";
import { FormLocals, FormMotos } from "./forms";
import ClientContext, { IClient } from "./provider";
import { Link } from "react-router-dom";
import { LocalsRequest } from "../../Interfaces/LocalRequest";
import getItem from "../../components/StorageFunctions";

export const ClientFeature: FC = () => {
    const { openAddMoto, setOpeAddMoto, setOpenAddLocal, openAddLocal } = useContext(ClientContext) as IClient;

    const handleAddLocal = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenAddLocal(!openAddLocal);
    }

    const handleAddMoto = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpeAddMoto(!openAddMoto);
    }

    const handleRefresh = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //getLocals(userLocal!.id.toString());
    }

    const localsData: LocalsRequest[] = getItem('locals')!;

    return (
        <div className="flex flex-row flex-wrap justify-around gap-2 w-full h-full items-center">
            <div className="grid grid-rows-4 grid-flow-col gap-4 place-items-center">
                <button onClick={handleAddLocal} className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="70" height="70" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                    <p>Sector 1</p>
                </button>
                <button onClick={handleAddLocal} className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="70" height="70" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                    <p>Sector 2</p>
                </button>
                <button onClick={handleAddLocal} className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="70" height="70" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                    <p>Sector 3</p>
                </button>
                <button onClick={handleAddLocal} className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="70" height="70" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                    <p>Sector 4</p>
                </button>
                <button onClick={handleAddLocal} className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="70" height="70" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                    <p>Sector 5</p>
                </button>
                <button onClick={handleAddLocal} className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="70" height="70" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                    <p>Sector 6</p>
                </button>
                <button onClick={handleAddLocal} className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="70" height="70" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                    <p>Sector 7</p>
                </button>
                <button onClick={handleAddMoto} className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-motorbike" width="70" height="70" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" /><path d="M13 6h2l1.5 3l2 4" /></svg>
                    <p>Añadir moto</p>
                </button>
            </div>
            <div className="flex flex-col gap-2 w-3/5 h-5/6">
                <div className="flex flex-row justify-around items-center">
                    <h1>Historial de acciones</h1>
                    <button onClick={handleRefresh} className="p-2 bg-neutral-300 hover:shadow-md hover:shadow-neutral-800 rounded-md hover:scale-105 transition-all duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate-clockwise-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" /><path d="M5.63 7.16l0 .01" /><path d="M4.06 11l0 .01" /><path d="M4.63 15.1l0 .01" /><path d="M7.16 18.37l0 .01" /><path d="M11 19.94l0 .01" /></svg>
                    </button>
                </div>
                <div className="w-full bg-slate-300 h-full rounded-md">
                    <div className="w-full flex flex-row justify-around">
                        <p>DNI </p>
                        <p>Dueño </p>
                        <p>Nombre del local </p>
                        <p>Telefono </p>
                        <p>Ubicacion </p>
                        <p>Link foto</p>
                    </div>
                    {
                        localsData !== null && localsData !== undefined ? (
                            localsData!.length > 0 && localsData!.map((data, i) => (
                                <div className="w-full flex flex-row justify-around" key={i}>
                                    <p>{data.dniOnwer}</p>
                                    <p>{data.nameOwner}</p>
                                    <p>{data.localName}</p>
                                    <p>{data.phone}</p>
                                    <p>{data.location}</p>
                                    <p><Link to={data.linkPhoto}>Ver foto</Link></p>
                                </div>
                            ))
                        ) : (
                            <p>{!localsData ? 'Aun no hay locales registrados' : 'Actualiza la pagina para cargar los datos'}</p>
                        )
                    }
                </div>
            </div>
            <Modal title="Añadir local" isOpen={openAddLocal} setIsOpen={setOpenAddLocal}><FormLocals /></Modal>
            <Modal title="Añadir Moto" isOpen={openAddMoto} setIsOpen={setOpeAddMoto}><FormMotos /></Modal>
        </div >
    )
}