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
            title: 'Inicio',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                navigate('/dashboard');
            }
        },
        {
            title: 'Perfil',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                navigate('/dashboard/profile');
            }
        },/* 
        userLocal!.isAdmin ? (
            {
                title: 'Dashboard',
                onClick: 
            }
        ) : ({}), */
        {
            title: 'Cerrar sesion',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                removeItem('locals');
                removeItem('user');
                removeItem('moto');
                navigate('/')
            }
        },
    ];

    const handleLoggin = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate('/login');
    }

    const handleDash = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate('/dashboard/admin')
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
                                                <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`} onClick={data.onClick}>{data.title}</button>
                                            )
                                        }
                                    </Menu.Item>
                                ))
                            }
                            {
                                userLocal!.isAdmin ? (
                                    <Menu.Item>
                                        {
                                            ({ active }) => (
                                                <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`} onClick={handleDash}>Dashboard</button>
                                            )
                                        }
                                    </Menu.Item>
                                ) : ''
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