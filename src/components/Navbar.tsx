import { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../imgs/logoPNE.png';
import { UserRequest } from "../Interfaces/UserRequest";
import { MenuModal } from "./MenuModal";
import { Menu } from "@headlessui/react";
import getItem, { removeItem } from "./StorageFunctions";

export const Navbar = () => {

    const userLocal: UserRequest | null = getItem('user');

    const navigate = useNavigate();

    const buttons = [
        {
            title: 'Home',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>,
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                navigate('/dashboard');
            }
        },
        {
            title: 'Perfil',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-address-book" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" /><path d="M10 16h6" /><path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 8h3" /><path d="M4 12h3" /><path d="M4 16h3" /></svg>,
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                navigate('/dashboard/profile');
            }
        },
        {
            title: 'Cerrar sesion',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" /><path d="M15 12h-12l3 -3" /><path d="M6 15l-3 -3" /></svg>,
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                removeItem('locals');
                removeItem('user');
                removeItem('moto');
                removeItem('users');
                navigate('/')
            }
        },
    ];

    const handleLoggin = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate('/login');
    }

    return (
        <nav className="bg-gray-700 p-2 m-1 rounded-md">
            <div className="container flex justify-around items-center">

                <div className="flex flex-row gap-2 items-center justify-center">
                    <img src={logo} alt="logoPNE" width={30} className="rounded-full" />
                    <Link className="text-white text-lg font-semibold" to='/'>Local Seguro</Link>
                </div>

                <div className="flex flex-row flex-wrap gap-2 text-white">
                    <Link to='/'>Inicio</Link>
                </div>
                {
                    userLocal !== null ? (
                        <MenuModal title={userLocal!.username}>
                            {
                                buttons.map((data, i) => (
                                    <Menu.Item key={i}>
                                        {
                                            ({ active }) => (
                                                <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex flex-row gap-1 w-full items-center rounded-md px-2 py-2 text-sm`} onClick={data.onClick}>{data.icon}{data.title}</button>
                                            )
                                        }
                                    </Menu.Item>
                                ))
                            }
                        </MenuModal>
                    ) : (
                        <button className="px-4 py-1 rounded-md bg-neutral-200 text-black" onClick={handleLoggin}>Acceder</button>
                    )
                }
            </div>
        </nav>
    );
}