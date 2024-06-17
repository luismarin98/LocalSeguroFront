import { FC, useContext, MouseEvent } from "react";
import { Modal } from "../../components/Modal";
import { FormFilter, FormLocals, FormMotos } from "./forms";
import ClientContext, { IClient } from "./provider";
import { useAppSelector } from "../../Redux/store";
import { list_localsSelector } from "../../Redux/Local/local.selector";
import { list_motosSelector } from "../../Redux/Moto/moto.selector";
import { cuadrante_1, cuadrante_2, cuadrante_3, cuadrante_4, cuadrante_5, cuadrante_6 } from "../../components/Sectores";
import { butonStyle } from "../../components/Styles";
import moto from '../../imgs/icono_moto.png'
export const ClientFeature: FC = () => {
    const { openAddMoto, setOpeAddMoto, setOpenAddLocal, openAddLocal, seeMotos, setValue, value } = useContext(ClientContext) as IClient;

    const sectores = [
        {
            title: 'Sector 1',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
                setValue(0);
            },
            sec: cuadrante_1,
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 2',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
                setValue(1);
            },
            sec: cuadrante_2,
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 3',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
                setValue(2);
            },
            sec: cuadrante_3,
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 4',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
                setValue(3);
            },
            sec: cuadrante_4,
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 5',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
                setValue(4);
            },
            sec: cuadrante_5,
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
        },
        {
            title: 'Sector 6',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddLocal(!openAddLocal);
                setValue(5);
            },
            sec: cuadrante_6,
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

    const handleNavigateWindow = (event: MouseEvent<HTMLButtonElement>, link: string) => {
        event.preventDefault();
        window.open(link)
    }

    const list_locals = useAppSelector(list_localsSelector);
    const list_motos = useAppSelector(list_motosSelector);

    return (
        <div className="flex flex-col md:flex-row justify-between gap-2 w-full h-full items-center">
            <div className="flex flex-row md:flex-col gap-2 items-center text-black max-w-full overflow-x-auto p-2">
                {
                    sectores.map((data, i) => (
                        <button key={i} onClick={data.onclick} className='flex flex-row gap-2 items-center p-2 bg-green-400 transition-all duration-105 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900'>
                            {data.icon}
                            <p>{data.title}</p>
                        </button>
                    ))
                }
            </div>
            <div className="flex flex-col gap-2 h-full w-full p-3">
                <FormFilter />
                <div className="w-full h-full rounded-md text-white p-2">
                    {
                        seeMotos === true && (
                            list_motos !== null && list_motos !== undefined ? (
                                list_motos!.length > 0 && list_motos!.map((data, i) => (
                                    <div key={i} className="flex flex-col md:flex-row items-center w-full bg-white p-1 rounded-md text-black">
                                        <img src={moto} alt="icono_moto" className="w-7" />
                                        <div className="w-full flex flex-col md:flex-row justify-around items-center" >
                                            <p>Numero de moto: {data.num_moto}</p>
                                            <p>Cooperativa: {data.cooperativa}</p>
                                            <p>Conductor: {data.conductor}</p>
                                            <p>Ubicacion: {data.ubicacion}</p>
                                            <button {...butonStyle} onClick={(e) => {
                                                e.preventDefault();
                                                window.open(data.foto)
                                            }}>Ver foto</button>
                                        </div>
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
                                    <div key={i} className="flex flex-col md:flex-row items-center w-full bg-white p-1 rounded-md text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" /></svg>
                                        <div className="w-full flex flex-col md:flex-row justify-around items-center" >
                                            <p>CI: {data.dniOnwer}</p>
                                            <p>Dueño: {data.nameOwner}</p>
                                            <p>Local: {data.localName}</p>
                                            <p>Telefono: {data.phone}</p>
                                            <p>Localidad: {data.location}</p>
                                            <button {...butonStyle} onClick={(e) => handleNavigateWindow(e, data.linkPhoto)}>Ver foto</button>
                                        </div>
                                    </div>
                                ))
                            ) : (<p>{!list_locals ? 'Aun no hay locales registrados' : 'Actualiza la pagina para cargar los datos'}</p>)
                        )
                    }
                </div>
            </div>
            <Modal title="Añadir local" isOpen={openAddLocal} setIsOpen={setOpenAddLocal}><FormLocals cuadranteValue={sectores[value].sec!.map(data => data)} /></Modal>
            <Modal title="Añadir Moto" isOpen={openAddMoto} setIsOpen={setOpeAddMoto}><FormMotos /></Modal>
        </div >
    )
}