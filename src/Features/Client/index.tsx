import { FC, useContext, MouseEvent, ChangeEvent } from "react";
import { Modal } from "../../components/Modal";
import { FormLocals, FormMotos } from "./forms";
import ClientContext, { IClient } from "./provider";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../Redux/store";
import { list_localsSelector } from "../../Redux/Local/local.selector";
import { list_motosSelector } from "../../Redux/Moto/moto.selector";

export const ClientFeature: FC = () => {
    const {
        openAddMoto,
        setOpeAddMoto,
        setOpenAddLocal,
        openAddLocal,
        getLocals,
        getMotos,
        setSeeMotos,
        seeMotos,
        valueOption,
        setValueOption
    } = useContext(ClientContext) as IClient;

    const handleRefresh = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (valueOption === 'moto') { getMotos() } else if (valueOption === 'local') { getLocals() }
    }

    const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'moto') { setSeeMotos(true) } else if (event.target.value === 'local') { setSeeMotos(false) }
        setValueOption(event.target.value);
    }

    const sectores = [
        {
            title: 'Sector 1',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 2',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 3',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 4',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 5',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 6',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 7',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Anadir Moto',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpeAddMoto(!openAddMoto);
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-motorbike" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" /><path d="M13 6h2l1.5 3l2 4" /></svg>
        }
    ]

    const sectoresOptions = [
        {
            title: 'Sector 1',
            value: 'sector1',
        },
        {
            title: 'Sector 2',
            value: 'sector2',
        },
        {
            title: 'Sector 3',
            value: 'sector3',
        },
        {
            title: 'Sector 4',
            value: 'sector4',
        },
        {
            title: 'Sector 5',
            value: 'sector5',
        },
        {
            title: 'Sector 6',
            value: 'sector5',
        },
        {
            title: 'Sector 7',
            value: 'sector6',
        },
    ]

    const list_locals = useAppSelector(list_localsSelector);
    const list_motos = useAppSelector(list_motosSelector);

    return (
        <div className="flex flex-row flex-wrap justify-around gap-2 w-full h-full items-center">
            <div className="flex flex-col gap-2 items-center text-black">
                {
                    sectores.map((data, i) => (
                        <button key={i} onClick={data.onclick} className='flex flex-row gap-2 items-center p-2 bg-green-400 transition-all duration-105 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900'>
                            {data.icon}
                            <p>{data.title}</p>
                        </button>
                    ))
                }
            </div>
            <div className="flex flex-col gap-2 w-3/5 h-5/6">
                <div className="flex flex-row flex-wrap gap-2 justify-around items-center">
                    <h1>Historial de acciones</h1>
                    <button onClick={handleRefresh} className="p-2 text-black bg-neutral-300 hover:shadow-md hover:shadow-neutral-800 rounded-md hover:scale-105 transition-all duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate-clockwise-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" /><path d="M5.63 7.16l0 .01" /><path d="M4.06 11l0 .01" /><path d="M4.63 15.1l0 .01" /><path d="M7.16 18.37l0 .01" /><path d="M11 19.94l0 .01" /></svg>
                    </button>
                    <select className="ring-1 ring-black text-black rounded-md p-1 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800 cursor-pointer" value={valueOption} onChange={handleChangeOption}>
                        <option value=''>Filtrar por:</option>
                        <option value='moto'>Motos</option>
                        <option value='local'>Locales</option>
                        <option value='sector'>Sector</option>
                    </select>
                    {
                        valueOption === 'sector' && (
                            <select className="ring-1 ring-black text-black rounded-md p-1 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800 cursor-pointer" >
                                {
                                    sectoresOptions.map((data, i) => (
                                        <option key={i} value={data.value}>{data.title}</option>
                                    ))
                                }
                            </select>
                        )
                    }
                </div>
                <div className="w-full bg-slate-300 h-full rounded-md text-black p-2">
                    {
                        seeMotos === true && (
                            list_motos !== null && list_motos !== undefined ? (
                                list_motos!.length > 0 && list_motos!.map((data, i) => (
                                    <div key={i} className="w-full flex flex-row justify-around items-center">
                                        <p>{data.num_moto}</p>
                                        <p>{data.cooperativa}</p>
                                        <p>{data.conductor}</p>
                                        <p>{data.ubicacion}</p>
                                        <button className="px-6 py-1 bg-neutral-800 rounded-md hover:scale-105 hover:shadow-md hover:shadow-neutral-800 transition-all ease-in-out" onClick={(e) => {
                                            e.preventDefault();
                                            window.open(data.foto)
                                        }}>Ver foto</button>
                                        <Link className="bg-blue-400 text-black dark:bg-neutral-800 rounded-md px-6 py-1 dark:text-white transition-all duration-100 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-neutral-600" to={data.foto}>ver foto</Link>
                                    </div>
                                ))
                            ) : (
                                <p>{!list_locals ? 'Aun no hay motos registrados' : 'Actualiza la pagina para cargar los datos'}</p>
                            )
                        )
                    }
                    {
                        seeMotos === false && (
                            list_locals !== null && list_locals !== undefined ? (
                                list_locals!.length > 0 && list_locals!.map((data, i) => (
                                    <div className="w-full flex flex-row justify-around items-center" key={i}>
                                        <p>{data.dniOnwer}</p>
                                        <p>{data.nameOwner}</p>
                                        <p>{data.localName}</p>
                                        <p>{data.phone}</p>
                                        <p>{data.location}</p>
                                        <button className="px-6 py-1 bg-neutral-800 rounded-md hover:scale-105 hover:shadow-md hover:shadow-neutral-800 transition-all ease-in-out" onClick={(e) => {
                                            e.preventDefault();
                                            window.open(data.linkPhoto)
                                        }}>Ver foto</button>
                                        <Link className="bg-blue-400 text-black dark:bg-neutral-800 rounded-md px-6 py-1 dark:text-white transition-all duration-100 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-neutral-600" to={data.linkPhoto}>Ver foto</Link>
                                    </div>
                                ))
                            ) : (<p>{!list_locals ? 'Aun no hay locales registrados' : 'Actualiza la pagina para cargar los datos'}</p>)
                        )
                    }
                </div>
            </div>
            <Modal title="Añadir local" isOpen={openAddLocal} setIsOpen={setOpenAddLocal}><FormLocals /></Modal>
            <Modal title="Añadir Moto" isOpen={openAddMoto} setIsOpen={setOpeAddMoto}><FormMotos /></Modal>
        </div >
    )
}