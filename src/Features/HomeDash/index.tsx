import { FC, useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
import getItem from "../../components/StorageFunctions";
import { UserRequest } from "../../Interfaces/UserDomain";
import HomeDashContext, { IHomeDash } from "./provider";

export const HomeDashFeature: FC = () => {
    const userLocal: UserRequest | null = getItem('user');

    const { getUserData, open, setOpen } = useContext(HomeDashContext) as IHomeDash;

    useEffect(() => {
        getUserData(userLocal!.id);
    }, [])

    const handleAdd = () => { setOpen(!open) }

    return (
        <>
            {
                userLocal!.isAdmin ? (
                    <div className="flex flex-row flex-wrap gap-2">
                        <button onClick={handleAdd} className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg>
                            <p>Añadir usuarios</p>
                        </button>
                        <Link to='/dashboard/admin' className={`flex flex-col items-center p-2 gap-2 bg-blue-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                            <p>Usuarios</p>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-row flex-wrap gap-2">
                        <button className={`flex flex-col items-center p-2 gap-2 bg-green-400 transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-plus" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                            <p>Añadir local</p>
                        </button>
                    </div>
                )
            }
            <Modal title="Hello" isOpen={open} setIsOpen={handleAdd}>Hola mundo</Modal>
        </>
    )
}