import { Link } from "react-router-dom";
import { getSession } from "./StorageFunctions";
import { UserRequest } from "../Interfaces/UserRequest";

export const Footer = () => {
    const userLocal: UserRequest | null = getSession('user');

    return <footer>
        <div className="w-full p-1">
            <div className="w-full text-white md:bg-white md:shadow-inner md:shadow-neutral-700 md:rounded-md md:px-3 md:py-1">
                <div className="w-full flex flex-row flex-wrap gap-5 justify-center items-center md:text-black">
                    <div>Copyright 2024 - <Link className="transition ease-in-out duration-100 hover:scale-105" to={userLocal === null || !userLocal ? "/" : `/dashboard/${userLocal.username}`}>LocalSeguro</Link></div>
                    <Link className="transition ease-in-out duration-100 hover:scale-105" to={"/terminos"}>Terminos y Condiciones</Link>
                    <Link className="transition ease-in-out duration-100 hover:scale-105" to={"/privacidad"}>Politicas de Privacidad</Link>
                </div>
            </div>
        </div>
    </footer>
}