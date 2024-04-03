import { MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../imgs/logoPNE.png';
import { UserRequest } from "../Interfaces/UserRequest";
import { MenuModal } from "./MenuModal";
import { Menu } from "@headlessui/react";
import { getSession, endSession } from "./StorageFunctions";
import { Modal } from "./Modal";

export const Navbar = () => {

    const userLocal: UserRequest | null = getSession('user');

    const [hidden, setHidden] = useState<boolean>(false);

    const handleHidden = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setHidden(!hidden);
    }

    const navigate = useNavigate();

    const buttons = [
        {
            title: 'Home',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>,
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                navigate(`/dashboard/${userLocal!.username}`);
            }
        },
        {
            title: 'Perfil',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-address-book" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" /><path d="M10 16h6" /><path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 8h3" /><path d="M4 12h3" /><path d="M4 16h3" /></svg>,
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                navigate(`/dashboard/${userLocal!.username}/profile`);
            }
        },
        {
            title: 'Cerrar sesion',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" /><path d="M15 12h-12l3 -3" /><path d="M6 15l-3 -3" /></svg>,
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                endSession('user');
                navigate('/')
            }
        },
    ];

    const handleLoggin = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate('/login');
    }

    return (
        <div className="w-full p-2">
            <nav className="dark:bg-gray-600 bg-gray-700 p-0.5 rounded-md">
                <div className="flex flex-row gap-1 items-center justify-between px-2">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="flex flex-row gap-2 items-center justify-center p-1">
                            <img src={logo} alt="logoPNE" width={30} className="rounded-full" />
                            <Link className="text-white text-lg font-bold" to={userLocal !== null ? `/dashboard/${userLocal!.username}` : '/'}>Local Seguro</Link>
                        </div>
                    </div>
                    {
                        userLocal === null && (
                            <div className="hidden md:flex md:flex-row md:flex-wrap md:gap-2 items-center">
                                <Link className="dark:text-white text-lg hover:scale-105 transition-all ease-in-out duration-100" to='/'>Inicio</Link>
                            </div>
                        )
                    }
                    {
                        userLocal !== null && (
                            <div className="hidden md:flex md:flex-row md:flex-wrap md:gap-2 items-center dark:text-white">
                                <Link to={userLocal !== null ? `/dashboard/${userLocal!.username}` : '/'}>Dashboard</Link>
                            </div>
                        )
                    }
                    <div className="md:hidden flex items-center">
                        <button onClick={handleHidden} className="p-1 rounded-md bg-slate-50 flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    {
                        userLocal !== null ? (
                            <MenuModal title={userLocal!.username}>
                                {
                                    buttons.map((data, i) => (
                                        <Menu.Item key={i}>
                                            {
                                                ({ active }) => (
                                                    <button className={`${active ? 'hover:bg-violet-500 text-white hover:scale-95' : 'text-gray-900'} transition-all ease-in-out duration-100 bg-slate-100 group flex flex-row gap-1 w-full items-center rounded-md text-sm p-1`} onClick={data.onClick}>{data.icon}{data.title}</button>
                                                )
                                            }
                                        </Menu.Item>
                                    ))
                                }
                            </MenuModal>
                        ) : (
                            <button className="rounded-md bg-neutral-200 text-black px-6 py-0.5 hover:scale-105 transition-all ease-in-out duration-100" onClick={handleLoggin}>Acceder</button>
                        )
                    }
                </div>
            </nav>
            <Modal isOpen={hidden} setIsOpen={setHidden}>
                <div className="flex flex-col gap-2 full">
                    {userLocal === null && (<button onClick={(e) => {
                        handleHidden(e);
                        navigate('/');
                    }} className="bg-slate-50 px-6 py-1 rounded-md" >Inicio</button>)}
                    {userLocal !== null && (<button onClick={(e) => {
                        handleHidden(e);
                        navigate(userLocal !== null ? `/dashboard/${userLocal!.username}` : '/')
                    }} className="bg-slate-50 px-6 py-1 rounded-md" >Dashboard</button>)}
                </div>
            </Modal>
        </div>
    );
}