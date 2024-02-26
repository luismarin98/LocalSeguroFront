import { FC, MouseEvent, useContext/* , useEffect */ } from "react"
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
import getItem from "../../components/StorageFunctions";
import { UserRequest } from "../../Interfaces/UserRequest";
import HomeDashContext, { IHomeDash } from "./provider";
import { FormLocal } from "./forms/formLocal";
import { FormUser } from "./forms/formUser";
import { LocalsRequest } from "../../Interfaces/LocalRequest";

export const HomeDashFeature: FC = () => {
    const userLocal: UserRequest | null = getItem('user');
    const localsData: LocalsRequest[] = getItem('locals')!;

    const { /* getUserData, */openAddLocal, openAddMoto, openAddUser, setOpeAddMoto, setOpenAddLocal, setOpenAddUser, getLocals } = useContext(HomeDashContext) as IHomeDash;

    /* useEffect(() => {
        getUserData();
    }, []) */

    const handleAddLocal = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenAddLocal(!openAddLocal);
    }

    const handleAddUser = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenAddUser(!openAddUser);
    }

    const handleAddMoto = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpeAddMoto(!openAddMoto);
    }

    const handleRefresh = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        getLocals(userLocal!.id.toString());
    }

    if (userLocal!.isAdmin) return (
        <div className="flex flex-row flex-wrap gap-2">
            <button onClick={handleAddUser} className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg>
                <p>Añadir usuarios</p>
            </button>
            <Link to='/dashboard/admin' className={`flex flex-col items-center p-2 gap-2 bg-blue-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                <p>Usuarios</p>
            </Link>
            <Modal title="Anadir usuario" isOpen={openAddUser} setIsOpen={setOpenAddUser}><FormUser /></Modal>
        </div>
    )

    return (
        <>
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
                <Modal title="Anadir local" isOpen={openAddLocal} setIsOpen={setOpenAddLocal}><FormLocal /></Modal>
                <Modal title="Anadir local" isOpen={openAddMoto} setIsOpen={setOpeAddMoto}>Form Local</Modal>
            </div >
        </>

    )
}