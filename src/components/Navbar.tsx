import { MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../components/imgs/logoPolicia.png';
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

    const routes = [
        {
            title: 'Inicio',
            icon: 'home',
            path: userLocal !== null ? `/dashboard/${userLocal!.username}` : '/'
        },
        {
            title: 'Nosotros',
            icon: 'login',
            path: '/about'
        },
        {
            title: 'Contactanos',
            icon: 'register',
            path: '/contact'
        },
        {
            title: 'Aceder',
            icon: 'login',
            path: '/login',
            onclick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                handleLoggin(event)
            }
        }
    ]

    const buttons = [
        {
            title: 'Dashboard',
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
            <nav className="p-0.5 rounded-md">
                <div className="flex-row gap-1 items-center justify-between px-2 flex">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="flex flex-row gap-2 items-center justify-center px-3 py-0.5 rounded-md">
                            <img src={logo} alt="logoPNE" width={30} className="rounded-full" />
                            <Link className="text-white text-xl font-bold" to={userLocal !== null ? `/dashboard/${userLocal!.username}` : '/'}>Local Seguro</Link>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        {
                            userLocal === null && (
                                routes.map((data, i) => (<div key={i} className="flex-row gap-5 items-center hidden md:flex">
                                    <Link to={data.path} className="rounded-md bg-neutral-50 text-black hover:bg-orange-400 hover:text-white px-6 py-0.5 hover:scale-105 transition-all ease-in-out duration-100">{data.title}</Link>
                                </div>))
                            )
                        }
                    </div>
                    {
                        userLocal === null && (
                            <div className="md:hidden flex items-center">
                                <button onClick={handleHidden} className="p-1 rounded-md bg-slate-50 flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        )
                    }
                    {
                        userLocal !== null && (
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
                        )
                    }
                </div>
            </nav>
            <Modal isOpen={hidden} setIsOpen={setHidden}>
                <div className="flex flex-col gap-2 full">
                    {userLocal === null && (
                        routes.map((data, i) => (
                            <button key={i} onClick={(e) => {
                                handleHidden(e);
                                navigate(data.path)
                            }} className="bg-slate-50 px-6 py-1 rounded-md" >{data.title}</button>
                        ))
                    )}
                </div>
            </Modal>
        </div>
    );
}