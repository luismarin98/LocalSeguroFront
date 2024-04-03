import { useContext, MouseEvent, ChangeEvent } from "react";
import ClientContext, { IClient } from "../../provider";
import { UserRequest } from "../../../../Interfaces/UserRequest";
import { getSession } from "../../../../components/StorageFunctions";
import { useNavigate } from "react-router-dom";

export const FormFilter = () => {

    const user: UserRequest | null = getSession('user');

    const navigate = useNavigate();

    const { valueOption, getMotos, getLocals, setValueOption, setSeeMotos } = useContext(ClientContext) as IClient

    const handleRefresh = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (valueOption === 'moto') { getMotos() } else if (valueOption === 'local') { getLocals() }
    }

    const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'moto') { setSeeMotos(true) } else if (event.target.value === 'local') { setSeeMotos(false) }
        setValueOption(event.target.value);
    }

    const handleBack = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate(`/dashboard/${user!.username}`);
    }

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

    return (
        <div className="flex flex-row flex-wrap gap-2 justify-around items-center">
            <h1 className="dark:text-white">Historial de acciones</h1>
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
            <button className="px-6 py-1 text-black bg-neutral-300 hover:shadow-md hover:shadow-neutral-800 rounded-md hover:scale-105 transition-all duration-100 flex flex-row gap-2 items-center justify-center" onClick={handleBack} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-caret-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 6l-6 6l6 6v-12" /></svg>
                Regresar
            </button>
        </div>
    )
}