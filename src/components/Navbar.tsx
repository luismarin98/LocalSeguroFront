import { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../imgs/logoPNE.png';
import { UserRequest } from "../Interfaces/UserDomain";
import { MenuModal } from "./MenuModal";
import { Menu } from "@headlessui/react";

export const Navbar = () => {

    const navigate = useNavigate();

    const handLogout = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        localStorage.removeItem('user');
        navigate('/')
    }

    const handleLoggin = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate('/login');
    }

    function getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) as T : null;
    }

    const userLocal: UserRequest | null = getItem('user');

    return (
        <nav className="bg-gray-700 p-2">
            <div className="container flex justify-around items-center">

                <div className="flex flex-row gap-2 items-center justify-center">
                    <img src={logo} alt="logoPNE" width={30} className="rounded-full" />
                    <Link className="text-white text-lg font-semibold" to='/'>Local Seguro</Link>
                </div>

                <div className="flex flex-row flex-wrap gap-2">
                    <Link to='/'>Inicio</Link>
                    {
                        userLocal && userLocal!.isAdmin && <Link to='/dashboard'>Dashboard</Link>
                    }
                </div>

                {
                    userLocal !== null ? (
                        <MenuModal title={userLocal!.username}>
                            <Menu.Item>
                                {
                                    ({ active }) => (
                                        <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`} onClick={handLogout}>Cerrar session</button>
                                    )
                                }
                            </Menu.Item>
                        </MenuModal>
                    ) : (
                        <button className="px-4 py-1 rounded-md bg-neutral-200 text-black" onClick={handleLoggin}>Acceder</button>
                    )
                }

            </div>
        </nav>
    );
}